import Link from 'next/link';
export default function Home(){return <main style={{padding:'20vh 5vw',textAlign:'center'}}><h1>JUNO HAIR · GANGNAM WOOSUNG</h1><p>Choose your language</p><p><Link href="/ko/">한국어</Link>　<Link href="/en/">English</Link>　<Link href="/ja/">日本語</Link>　<Link href="/zh/">中文</Link></p></main>}
