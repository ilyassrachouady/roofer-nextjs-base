'use client';
import React,{useEffect} from 'react';
import Home from './Home';
import {roofingCompanies,RooferCompany} from '../lib/previewCompanies';

const headlines:Record<string,string>={
 'roof-by-roof-exteriors':'Roofing & Exteriors\nin Calgary.',
 'bhinder-exteriors':'Quality Exteriors\nin Calgary.',
 'ebenezer-roofing':'Trusted Roofing\nin Calgary.',
 'friends-roofing':'Roofing for Homes\nin Calgary.',
 'action-roofing':'Roofing & Siding\nDone Right.',
 'hj-roofing':'Roofing & Exteriors\nin Calgary.',
 'ae-roofing':'Quality Roofing\nin Calgary.',
 'focus-roofing':'Focused on\nQuality Roofing.',
 'bricor-roofing':'Calgary Roofing\nSince 1983.',
 'marchuk-roofing':'Reliable Roofing\nin Calgary.'
};
const navTargets:Record<string,string>={HOME:'home',ABOUT:'about',SERVICES:'services',APPOINTMENT:'appointment',CONTACT:'contact',BLOG:'blog'};
function BrandCustomizer({company}:{company:RooferCompany}){
 useEffect(()=>{
  document.title=company.name+' | Roofing Service — Unofficial Website Concept';
  const html=document.documentElement;
  const values:Record<string,string>={
   '--accent':company.accent,'--dark':company.ink,'--warm':company.soft,
   '--brand-accent':company.accent,'--brand-ink':company.ink,'--brand-soft':company.soft,
   '--brand-tint':company.tint,'--brand-footer':company.footer
  };
  for(const [k,v] of Object.entries(values))html.style.setProperty(k,v);
  let robots=document.querySelector<HTMLMetaElement>('meta[name="robots"]');let ownsMeta=false;
  if(!robots){robots=document.createElement('meta');robots.name='robots';document.head.appendChild(robots);ownsMeta=true;}
  robots.content='noindex,nofollow';
  const root=document.querySelector<HTMLElement>('.roofer-preview-original');
  if(!root)return;
  const h1=root.querySelector<HTMLElement>('.hero-content h1');
  if(h1){const parts=(headlines[company.slug]||company.headline).split('\n');const spans=Array.from(h1.querySelectorAll('span'));spans.forEach((span,i)=>{const first=span.firstChild;if(first&&first.nodeType===Node.TEXT_NODE)first.nodeValue=parts[i]||'';});}
  const intro=root.querySelector<HTMLElement>('.hero-content > p');
  if(intro)intro.textContent=company.description;
  const customers=root.querySelector<HTMLElement>('.happy-customers');
  if(customers){const counter=customers.querySelector('strong,h3');if(counter)counter.textContent='Calgary';const label=customers.querySelector('span:not(.avatars span)');if(label)label.textContent='Roofing & Exteriors';customers.classList.add('rp-concept-trust');}
  const sections=Array.from(root.querySelectorAll<HTMLElement>('section'));
  const findHeading=(prefix:string)=>Array.from(root.querySelectorAll<HTMLElement>('h2')).find(h=>h.textContent?.toLowerCase().includes(prefix.toLowerCase()));
  const about=findHeading('Reasons to choose');
  const services=findHeading('Professional and quality');
  const care=findHeading('Taking care');
  const appointment=findHeading('Are you ready');
  const testimonials=findHeading('See what our clients say');
  const news=findHeading('Our latest news');
  const faq=findHeading('Frequently asked');
  root.querySelector('.hero')?.setAttribute('id','home');
  if(about){about.id='about';const area=about.closest('section');area?.classList.add('rp-branded-warm');const text=Array.from(about.parentElement?.querySelectorAll('p')||[]).find(x=>x.textContent&&x.textContent.length>30);if(text)text.textContent=company.about;}
  if(services){services.id='services';services.closest('section')?.classList.add('rp-branded-warm');}
  if(care){const p=Array.from(care.parentElement?.querySelectorAll('p')||[]).find(x=>x.textContent&&x.textContent.length>30);if(p)p.textContent='Roofing and exterior services designed around your property, local conditions and the long-term protection you need.';}
  if(appointment){appointment.id='appointment';const s=appointment.closest('section') as HTMLElement|null;if(s){s.classList.add('rp-appointment');}}
  if(testimonials){testimonials.closest('section')?.classList.add('rp-branded-warm','rp-example-section');const note=document.createElement('small');note.className='rp-example-note';note.textContent='Sample testimonial layout — not verified customer reviews';testimonials.insertAdjacentElement('afterend',note);}
  if(news){news.id='blog';news.closest('section')?.classList.add('rp-news-section');const boxes=Array.from(news.closest('section')?.querySelectorAll('h3,h4')||[]).filter(el=>el!==news);const titles=['When should you repair or replace your roof?','Preparing your roof for Calgary winters','Roof inspections after severe storms'];boxes.slice(0,3).forEach((x,i)=>x.textContent=titles[i]);}
  if(faq){faq.closest('section')?.classList.add('rp-faq-section');}
  const labels=['Roof Inspection','Commercial Roofing','Roof Replacement','Roof Repairs','Damage Repairs','Roof Maintenance'];
  root.querySelectorAll('h3,h4').forEach(el=>{
   const txt=(el.textContent||'').trim();
   const matches=['Free Inspection','Commercial Roofing','Roof Replacement','Solar Panels','Damage Repairs','Roof Renovation'];
   const index=matches.indexOf(txt);
   if(index>=0)el.textContent=company.services[index]||labels[index];
  });
  const updatePhoto=(img:HTMLImageElement,src:string,fallback:string)=>{
   const before=img.currentSrc||img.src;
   img.onerror=()=>{img.onerror=null;img.removeAttribute('srcset');img.src=fallback||before;};
   img.removeAttribute('srcset');img.removeAttribute('sizes');img.src=src;
  };
  const heroComposition:Record<string,string>={"roof-by-roof-exteriors":"https://images.unsplash.com/photo-1750107413833-69526c7e6f2b?auto=format&fit=crop&w=1800&q=85","bhinder-exteriors":"https://images.pexels.com/photos/30583771/pexels-photo-30583771.jpeg?auto=compress&cs=tinysrgb&w=1800","ebenezer-roofing":"https://images.unsplash.com/photo-1759329935140-86037c3beaa5?auto=format&fit=crop&w=1800&q=85","friends-roofing":"https://images.pexels.com/photos/4786538/pexels-photo-4786538.jpeg?auto=compress&cs=tinysrgb&w=1800","action-roofing":"/images/img-20.avif","hj-roofing":"https://images.unsplash.com/photo-1722423572704-9c18fdcd326f?auto=format&fit=crop&w=1800&q=85","ae-roofing":"https://images.pexels.com/photos/17764691/pexels-photo-17764691.jpeg?auto=compress&cs=tinysrgb&w=1800","focus-roofing":"/images/img-05.avif","bricor-roofing":"https://images.pexels.com/photos/35073947/pexels-photo-35073947.jpeg?auto=compress&cs=tinysrgb&w=1800","marchuk-roofing":"https://images.unsplash.com/photo-1712417068630-3f03b2f94b4b?auto=format&fit=crop&w=1800&q=85"};
  const hero=root.querySelector<HTMLImageElement>('.hero-roof');
  if(hero)updatePhoto(hero,heroComposition[company.slug]||company.hero,'/images/img-05.avif');
  root.querySelectorAll<HTMLImageElement>('main img').forEach(img=>{img.loading='eager';img.setAttribute('loading','eager')});const others=Array.from(root.querySelectorAll<HTMLImageElement>('main img')).filter(img=>img!==hero&&!img.closest('.avatars,.logo,.happy-customers'));
  const imagePool=[company.aboutImage,...company.gallery,company.gallery[2],company.gallery[0]];if(company.slug==='focus-roofing')imagePool[4]=company.hero;
  others.slice(0,9).forEach((img,i)=>updatePhoto(img,imagePool[i%imagePool.length],'/images/img-16.avif'));
  // Keep the Framer banner layout while changing only its picture.
  const cta=appointment?.closest('section') as HTMLElement|null;
  if(cta){cta.style.backgroundImage='linear-gradient(90deg,rgba(0,0,0,.24),rgba(0,0,0,.07)),url("'+company.gallery[2]+'")';cta.style.backgroundSize='cover';cta.style.backgroundPosition='center';}
  const logos=Array.from(document.querySelectorAll<HTMLElement>('.header .logo,.footer .footer-brand a'));
  logos.forEach(el=>{
   const old=el.querySelector('.rp-company-logo');old?.remove();
   el.setAttribute('aria-label',company.name);
   const logo=document.createElement('span');logo.className='rp-company-logo';
   if(company.logo&&company.slug!=='focus-roofing'){
    const img=document.createElement('img');
    img.src=company.logo;img.alt=company.name+' logo';img.className='rp-official-logo';
    img.onerror=()=>{img.remove();logo.textContent=company.short;logo.classList.add('rp-text-logo')};
    logo.appendChild(img);
   }else{logo.classList.add('rp-text-logo');logo.textContent=company.short;}
   el.appendChild(logo);
  });
  const footer=document.querySelector<HTMLElement>('.footer');
  if(footer){footer.id='contact';footer.classList.add('rp-custom-footer');}
  const footerP=footer?.querySelector<HTMLElement>('.footer-top > p');if(footerP)footerP.textContent=company.description;
  // Replace original generic placeholder contact details in the footer.
  if(footer){
   const walker=document.createTreeWalker(footer,NodeFilter.SHOW_TEXT);let node:Node|null;
   while(node=walker.nextNode()){
    if((node.parentElement as HTMLElement|null)?.closest('.rp-company-logo'))continue;
    const value=node.nodeValue||'';
    if(value.includes('123-456-7890'))node.nodeValue=value.replaceAll('123-456-7890',company.phone||'Contact via website');
    if(value.includes('framerbite@gmail.com'))node.nodeValue=value.replaceAll('framerbite@gmail.com',company.email);
    if(value.includes('Nashville'))node.nodeValue=company.address;
    if(value.includes('Amedee 4401 Waldeck Street'))node.nodeValue=company.address;
   }
  }
  document.querySelectorAll<HTMLAnchorElement>('.header a,.footer a').forEach(a=>{
   if(a.href.startsWith('tel:'))a.href=company.phone?'tel:'+company.phone.replace(/[^+\d]/g,''):company.website;
   if(a.href.startsWith('mailto:'))a.href='mailto:'+company.email;
  });
  const nav=document.querySelectorAll<HTMLAnchorElement>('.header .nav a,.footer a');
  nav.forEach(a=>{
   const label=(a.textContent||'').trim().toUpperCase();
   if(navTargets[label])a.href='#'+navTargets[label];
  });
  const click=(event:MouseEvent)=>{
   const link=(event.target as Element|null)?.closest<HTMLAnchorElement>('a');
   if(!link)return;
   const href=link.getAttribute('href')||'';
   const label=(link.textContent||'').trim().toUpperCase();
   let target=href.startsWith('#')?href.slice(1):navTargets[label];
   if(!target&&link.classList.contains('btn')){
    target=/service/i.test(label)?'services':'appointment';
   }
   if(target&&document.getElementById(target)){event.preventDefault();event.stopPropagation();document.getElementById(target)?.scrollIntoView({behavior:'smooth',block:'start'});return;}
   // Keep demo navigation within the same company site rather than using generic Roofer pages.
   if(href.startsWith('/')&&!href.startsWith('/preview/')&&link.closest('.header,.footer,.roofer-preview-original')){
    event.preventDefault();event.stopPropagation();
    if(/blog/.test(href))document.getElementById('blog')?.scrollIntoView({behavior:'smooth'});
    else if(/services|service/.test(href))document.getElementById('services')?.scrollIntoView({behavior:'smooth'});
    else if(/contact|appointment/.test(href))document.getElementById('appointment')?.scrollIntoView({behavior:'smooth'});
    else window.scrollTo({top:0,behavior:'smooth'});
   }
  };
  document.addEventListener('click',click,true);
  // Keep motion subtle and avoid hiding content when reduced motion is preferred.
  let observer:IntersectionObserver|null=null;
  if(!window.matchMedia('(prefers-reduced-motion:reduce)').matches){
   observer=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('rp-shown');observer?.unobserve(e.target)}}),{threshold:.07});
   Array.from(root.querySelectorAll('section h2,section .btn,section img')).forEach(el=>{el.classList.add('rp-reveal');observer?.observe(el)});
   root.classList.remove('rp-motion-ready');
  }
  const label=document.createElement('a');label.href=company.website;label.target='_blank';label.rel='noopener noreferrer';label.className='rp-demo-disclaimer';label.textContent='Unofficial website concept · Visit current site ↗';document.body.appendChild(label);
  return()=>{
   document.removeEventListener('click',click,true);observer?.disconnect();label.remove();
   root.classList.remove('rp-motion-ready');
   for(const k of Object.keys(values))html.style.removeProperty(k);
   if(ownsMeta)robots?.remove();
  };
 },[company]);
 return null;
}
export default function RooferClassic({slug}:{slug:string}){
 const company=roofingCompanies[slug];
 if(!company)return <div style={{padding:90,textAlign:'center'}}>Website preview not found.</div>;
 return <div className="roofer-preview-original" data-company={company.slug}><Home/><BrandCustomizer company={company}/></div>;
}