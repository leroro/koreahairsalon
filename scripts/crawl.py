import concurrent.futures, subprocess, pathlib, re, json
from html.parser import HTMLParser
from urllib.parse import urljoin, urlsplit
ROOT=pathlib.Path(__file__).resolve().parents[1]
OUT=ROOT/'docs/source'
CACHE=ROOT/'source-pages'; CACHE.mkdir(exist_ok=True)
BASE='https://www.koreahairsalon.kr'
class Parser(HTMLParser):
 def __init__(self): super().__init__(); self.tags=[];self.text=[];self.skip=0
 def handle_starttag(self,t,a):
  self.tags.append((t,dict(a)))
  if t in ['script','style']:self.skip+=1
 def handle_endtag(self,t):
  if t in ['script','style']:self.skip=max(0,self.skip-1)
 def handle_data(self,d):
  if not self.skip and d.strip():self.text.append(d.strip())
def fetch(url):
 path=urlsplit(url).path; f=CACHE/(path.strip('/').replace('/','__')+'.html')
 r=subprocess.run(['curl','-sSL','--retry','2','--max-time','60','-w','%{http_code}','-o',str(f),url],capture_output=True,text=True)
 code=r.stdout; html=f.read_text() if f.exists() else '';p=Parser();p.feed(html)
 rec={'url':url,'path':path,'status':code,'title':re.findall(r'<title>(.*?)</title>',html),'meta':[a for t,a in p.tags if t=='meta'],'links':[a for t,a in p.tags if t in ['a','link']],'images':[a for t,a in p.tags if t=='img'],'media':[a for t,a in p.tags if t in ['video','source','iframe']],'buttons':[a for t,a in p.tags if t=='button'],'headings':re.findall(r'<h([1-6])[^>]*>(.*?)</h\1>',html,re.S),'text':p.text}
 print(code,path,flush=True);return rec
urls=re.findall(r'<loc>(.*?)</loc>',(OUT/'sitemap.xml').read_text())
allrec=[];seen=set()
while urls:
 with concurrent.futures.ThreadPoolExecutor(max_workers=8) as ex: recs=list(ex.map(fetch,urls))
 allrec+=recs;seen.update(urls);new=set()
 for rec in recs:
  for a in rec['links']:
   u=urlsplit(urljoin(rec['url'],a.get('href','')))
   if u.netloc=='www.koreahairsalon.kr' and re.match(r'^/(ko|en|ja|zh)(/|$)',u.path):new.add(BASE+u.path.rstrip('/'))
 urls=sorted(new-seen)
(OUT/'inventory.json').write_text(json.dumps(allrec,ensure_ascii=False,indent=2))
subprocess.run(['curl','-sSL','--max-time','40',BASE+'/robots.txt','-o',str(OUT/'robots.txt')])
print('TOTAL',len(allrec),flush=True)
