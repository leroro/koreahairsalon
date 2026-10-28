'use client';
import {useEffect} from 'react';
const channelLabels: Record<string,string[]>={ko:['예약·문의 채널','닫기','전화 예약','네이버 예약·지도','인스타그램 DM','WhatsApp 문의','LINE 문의','틱톡 채널','구글 지도·리뷰','위챗 QR'],en:['Booking & Contact','Close','Call to book','Naver Booking & Map','Instagram DM','WhatsApp','LINE','TikTok','Google Maps & Reviews','WeChat QR'],ja:['予約・お問い合わせ','閉じる','電話予約','Naver 予約・地図','Instagram DM','WhatsApp','LINE','TikTok','Google マップ・口コミ','WeChat QR'],zh:['預約與諮詢','關閉','電話預約','Naver 預約・地圖','Instagram 私訊','WhatsApp','LINE','TikTok','Google 地圖・評價','微信 QR']};
const channels=['tel:+82-2-537-0605','https://naver.me/5tJdPB8H','https://www.instagram.com/juno_gangnam_woosung4way/','https://wa.me/821022503826','https://line.me/ti/p/gr8V2e7JRJ','https://www.tiktok.com/@juno_gangnam_woosung','https://share.google/UDbXMUwgeFZ0HNc3x','/koreahairsalon/source-assets/media/wechat-qr.png'];
export default function Interactions({locale}:{locale:string}){useEffect(()=>{
 const root=document.getElementById('source-page');if(!root)return;
 let panel:HTMLElement|null=null,trigger:HTMLElement|null=null;
 const close=()=>{panel?.remove();panel=null;trigger?.setAttribute('aria-expanded','false');trigger?.focus();};
 const show=(button:HTMLElement,mobile=false)=>{if(panel){close();return;}trigger=button;button.setAttribute('aria-expanded','true');const words=channelLabels[locale]||channelLabels.en;panel=document.createElement('div');panel.className='replica-menu'+(mobile?' replica-mobile':'');panel.setAttribute('role','dialog');panel.setAttribute('aria-label',words[0]);const dismiss=document.createElement('button');dismiss.textContent=words[1];dismiss.onclick=close;panel.append(dismiss);const title=document.createElement('h2');title.textContent=words[0];panel.append(title);
 if(mobile){root.querySelectorAll('nav[aria-label="Primary"] ul a, header nav ul a').forEach(a=>{panel!.append(a.cloneNode(true));});if(panel.querySelectorAll('a').length===0){root.querySelectorAll('header a').forEach(a=>panel!.append(a.cloneNode(true)));}}
 channels.forEach((href,i)=>{const a=document.createElement('a');a.href=href;a.textContent=words[i+2];if(href.startsWith('https:')){a.target='_blank';a.rel='noopener noreferrer';}panel!.append(a);});document.body.append(panel);dismiss.focus();};
 const click=(event:MouseEvent)=>{const el=event.target as HTMLElement;const b=el.closest('button');if(!b)return;
 if(b.hasAttribute('aria-haspopup')){show(b);return;}
 const label=b.getAttribute('aria-label');if(label==='Unmute'||label==='Mute'){const v=b.parentElement?.querySelector('video');if(v){v.muted=!v.muted;b.setAttribute('aria-label',v.muted?'Unmute':'Mute');if(v.paused)void v.play().catch(()=>{});}return;}
 if(label==='Next'||label==='Previous'){const section=b.closest('section');const track=section?.querySelector<HTMLElement>('[class*="overflow-x-auto"]');track?.scrollBy({left:(label==='Next'?1:-1)*320,behavior:'smooth'});return;}
 if(b.className.includes('lg:hidden'))show(b,true);
 };
 const escape=(e:KeyboardEvent)=>{if(e.key==='Escape')close();if(e.key==='Tab'&&panel){const focus=Array.from(panel.querySelectorAll<HTMLElement>('button,a'));const first=focus[0],last=focus[focus.length-1];if(e.shiftKey&&document.activeElement===first){e.preventDefault();last.focus();}else if(!e.shiftKey&&document.activeElement===last){e.preventDefault();first.focus();}}};
 root.addEventListener('click',click);document.addEventListener('keydown',escape);
 const groups=new Map<Element,HTMLImageElement[]>();root.querySelectorAll<HTMLImageElement>('img[style*="transition:opacity"],img[style*="transition: opacity"]').forEach(img=>{const p=img.parentElement!;groups.set(p,[...(groups.get(p)||[]),img]);});
 const timer=window.matchMedia('(prefers-reduced-motion: reduce)').matches?null:window.setInterval(()=>groups.forEach(imgs=>{const i=imgs.findIndex(im=>im.style.opacity==='1');imgs.forEach((im,j)=>im.style.opacity=j===(i+1)%imgs.length?'1':'0');}),5000);
 return()=>{panel?.remove();root.removeEventListener('click',click);document.removeEventListener('keydown',escape);if(timer)clearInterval(timer);};
 },[locale]);return null;}
