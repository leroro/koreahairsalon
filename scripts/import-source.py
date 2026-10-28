from bs4 import BeautifulSoup
from pathlib import Path
from urllib.parse import urlsplit,parse_qs,urljoin
from concurrent.futures import ThreadPoolExecutor
import subprocess,re,json,hashlib
ROOT=Path(__file__).resolve().parents[1];BASE='https://www.koreahairsalon.kr';PREFIX='/koreahairsalon';assets={}
def asset(u):
 if not u or u.startswith('data:'):return u
 if u.startswith('/_next/image?'):u=parse_qs(urlsplit(u).query)['url'][0]
 if not u.startswith('/') and not u.startswith(BASE):return u
 original=urljoin(BASE,u);p=urlsplit(original).path
 if p.startswith('/_next/'):p='/source-assets/'+Path(p).name
 else:p='/source-assets'+p
 assets[original]=p
 return PREFIX+p
pages={}
for f in sorted((ROOT/'source-pages').glob('*.html')):
 raw=f.read_text();s=BeautifulSoup(raw,'html.parser');path='/'+f.stem.replace('__','/')
 if not s.body:continue
 head={'title':s.title.get_text() if s.title else '', 'description': '', 'lang':s.html.get('lang',''), 'jsonld':[]}
 for m in s.select('meta'):
  key=m.get('name',m.get('property',''))
  if key:head[key]=m.get('content','')
 head['alternates']=[dict(l.attrs) for l in s.select('link[rel=alternate]')]
 head['canonical']=next((l.get('href') for l in s.select('link[rel=canonical]')),None)
 for script in s.select('script[type="application/ld+json"]'):
  try:head['jsonld'].append(json.loads(script.get_text()))
  except ValueError:pass
 css=[asset(l['href']) for l in s.select('link[rel=stylesheet]')]
 for t in s.body.select('script, noscript, link, meta'):t.decompose()
 for el in s.body.select('[style]'):
  st=el['style']
  if el.name!='img' and 'opacity:0' in st:el['style']=re.sub(r'opacity:0;?|transform:translateY\([^)]*\);?','',st)
 for el in s.body.find_all(True):
  for att in list(el.attrs):
   if att.lower().startswith('on'):del el[att]
  if el.name=='a':
   h=el.get('href','');u=urlsplit(h)
   if h.startswith('/') and not h.startswith('//') or u.netloc in ['www.koreahairsalon.kr','koreahairsalon.kr']:
    if re.match(r'^/(ko|en|ja|zh)(/|$)',u.path):el['href']=PREFIX+u.path.rstrip('/')+'/'+('?' + u.query if u.query else '')+('#'+u.fragment if u.fragment else '')
    elif u.path.startswith('/media/'):el['href']=asset(h)
  if el.name in ['img','source','video']:
   for att in ['src','poster']:
    if el.get(att):el[att]=asset(el[att])
   if el.get('srcset'):del el['srcset']
  if el.name=='video':
   poster=el.get('poster','');m=re.search(r'/media/video/(\d+)-poster',poster)
   if m:
    media='/media/video/'+m[1]+'.mp4'
    if media in raw:el['src']=asset(media)
   el['controls']='';el['preload']='none'
 body=''.join(str(c) for c in s.body.contents)
 pages[path]={'head':head,'css':css,'body':body}
asset('/media/wechat-qr.png')
def download(item):
 url,p=item;dest=ROOT/'public'/p.lstrip('/');dest.parent.mkdir(parents=True,exist_ok=True)
 if dest.exists() and dest.stat().st_size>0:return
 r=subprocess.run(['curl','-fsSL','--retry','2','--max-time','120',url,'-o',str(dest)],capture_output=True)
 if r.returncode:raise RuntimeError(url+' '+r.stderr.decode())
 print('asset',p,dest.stat().st_size,flush=True)
with ThreadPoolExecutor(max_workers=8) as ex:list(ex.map(download,list(assets.items())))
# Resolve CSS-relative fonts and other assets.
for p in list(assets.values()):
 if p.endswith('.css'):
  dest=ROOT/'public'/p.lstrip('/');css=dest.read_text();url=next(u for u,v in assets.items() if v==p)
  for ref in re.findall(r'url\(([^)]+)\)',css):
   clean=ref.strip('\"\'');target=urljoin(url,clean)
   if target.startswith(BASE):css=css.replace(ref,asset(target))
  dest.write_text(css)
with ThreadPoolExecutor(max_workers=8) as ex:list(ex.map(download,list(assets.items())))
(ROOT/'lib/source-pages.json').write_text(json.dumps(pages,ensure_ascii=False))
(ROOT/'docs/source/assets.json').write_text(json.dumps([{'url':u,'local':p,'bytes':(ROOT/'public'/p.lstrip('/')).stat().st_size,'sha256':hashlib.sha256((ROOT/'public'/p.lstrip('/')).read_bytes()).hexdigest()} for u,p in assets.items()],indent=2))
print('IMPORTED',len(pages),'ASSETS',len(assets))
