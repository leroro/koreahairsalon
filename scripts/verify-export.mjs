import fs from 'node:fs';
import path from 'node:path';
import assert from 'node:assert/strict';
const pages=JSON.parse(fs.readFileSync('lib/source-pages.json','utf8'));
const locales=(process.env.BUILD_LOCALES||'ko,en,ja,zh').split(',');
let checked=0;
for(const [route,page] of Object.entries(pages)){
 if(!locales.includes(route.split('/')[1]))continue;
 const file=path.join('out',route,'index.html');assert(fs.existsSync(file),`missing ${file}`);
 const html=fs.readFileSync(file,'utf8');assert(html.includes('<h1'),`missing h1 ${route}`);assert(html.includes('name="description"'),`missing description ${route}`);
 assert(html.includes('<html lang="'+({ko:'ko-KR',en:'en',ja:'ja',zh:'zh-Hant'}[route.split('/')[1]])+'"'),`wrong html language ${route}`);
 assert(!html.includes('/_next/image?'),`dynamic image endpoint ${route}`);
 assert(!/href="\/(ko|en|ja|zh)(\/|")/.test(html),`unprefixed route ${route}`);
 for(const match of html.matchAll(/(?:src|poster|href)="(\/koreahairsalon\/source-assets\/[^"?#]+)[^"]*"/g))assert(fs.existsSync('out'+match[1].replace('/koreahairsalon','')),`missing asset ${match[1]}`);
 for(const match of html.matchAll(/href="\/koreahairsalon(\/(ko|en|ja|zh)(?:\/[^"?#]*)?)[^" ]*"/g)){if(locales.includes(match[2]))assert(fs.existsSync(path.join('out',match[1],'index.html')),`missing link ${match[1]}`);}
 assert(html.includes('noindex'),`preview indexing ${route}`);checked++;
}
assert.equal(checked,21*locales.length);
console.log(JSON.stringify({locales,pages:checked,checks:['html','language','metadata','local-assets','internal-links','no-dynamic-images','noindex'],result:'passed'},null,2));
