import '../globals.css';
export default async function LocaleLayout({children,params}:{children:React.ReactNode;params:Promise<{locale:string}>}) {const {locale}=await params;return <html lang={({ko:'ko-KR',en:'en',ja:'ja',zh:'zh-Hant'} as Record<string,string>)[locale]||locale}><body>{children}</body></html>;}
