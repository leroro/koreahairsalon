import fs from 'node:fs';
const source=JSON.parse(fs.readFileSync('lib/source-pages.json','utf8'));
const locales=(process.env.BUILD_LOCALES||'ko,en,ja,zh').split(',');
const paths=Object.keys(source).filter(p=>locales.includes(p.split('/')[1]));
const base='https://leroro.github.io/koreahairsalon';
fs.writeFileSync('out/.nojekyll','');
fs.writeFileSync('out/sitemap.xml','<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">'+paths.map(p=>`<url><loc>${base}${p}/</loc></url>`).join('')+'</urlset>');
