import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import source from '../../../lib/source-pages.json';
import Interactions from '../../../lib/Interactions';
const pages = source as Record<string, { head: Record<string, any>; css: string[]; body: string }>;
type Props = { params: Promise<{ locale: string; slug?: string[] }> };
export const dynamicParams = false;
export function generateStaticParams() {
 const locales = (process.env.BUILD_LOCALES || 'ko,en,ja,zh').split(',');
 return Object.keys(pages).filter(p => locales.includes(p.split('/')[1])).map(p => { const [locale, ...slug] = p.slice(1).split('/'); return {locale, slug}; });
}
async function getPage(params: Props['params']) { const {locale, slug=[]}=await params; const path='/'+[locale,...slug].join('/'); const page=pages[path]; if(!page) notFound(); return {page,path,locale}; }
export async function generateMetadata({params}: Props): Promise<Metadata> {
 const {page,path}=await getPage(params); const h=page.head; const root='https://leroro.github.io/koreahairsalon';
 return {title:h.title,description:h.description,keywords:h.keywords,robots:{index:false,follow:false},alternates:{canonical:root+path+'/',languages:Object.fromEntries(['ko','en','ja','zh'].map(l=>[l,root+path.replace(/^\/[a-z]{2}/,'/'+l)+'/']))},openGraph:{title:h['og:title']||h.title,description:h['og:description']||h.description,url:root+path+'/',type:'website',locale:h['og:locale'],siteName:h['og:site_name'],images:[{url:root+'/source-assets/media/store/store-1.jpg',alt:h['og:image:alt']||h.title}]},twitter:{card:'summary_large_image',images:[root+'/source-assets/media/store/store-1.jpg'],title:h['twitter:title']||h.title,description:h['twitter:description']||h.description}};
}
export default async function Page({params}: Props) {
 const {page,locale}=await getPage(params);
 return <>{page.css.map(href=><link key={href} rel="stylesheet" href={href}/>)}<div lang={page.head.lang||locale} id="source-page" dangerouslySetInnerHTML={{__html:page.body}}/>{page.head.jsonld.map((data:any,i:number)=><script key={i} type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(data).replace(/</g,'\\u003c')}}/>)}<Interactions locale={locale}/></>;
}
