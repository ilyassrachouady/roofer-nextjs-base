import {roofingCompanies} from '../../lib/previewCompanies';
import RooferClassic from '../../components/RooferClassic';
import Image from 'next/image';
import Link from 'next/link';
import {notFound} from 'next/navigation';
import {services,articles,site} from '../../lib/site';
import ContactForm from '../../components/ContactForm';
import Home from '../../components/Home';
type Params={slug?:string[]};
export default async function NestedPage({params}:{params:Promise<Params>}){const seg=(await params).slug||[];if(seg[0]==='preview'&&seg[1])return <RooferClassic slug={seg[1]}/>;const page=seg[0];
 if(!page)return <Home/>;
 let heading='',desc='',content:React.ReactNode=null;
 if(page==='about'){heading='About our roofing company.';desc='Taking care of the roof of your house.';content=<div className="container inner-split"><Image src="/images/img-06.avif" alt="Roofing installation" width={620} height={430}/><div><h2>Reasons to choose our roofing services.</h2><p>We have a team of skilled and qualified members ready to protect what matters most. We focus on durable materials, expert service and dependable results.</p><Link href="/contact" className="btn btn-gold">Book A Free Consultation</Link></div></div>}
 else if(page==='services'){heading='Professional and quality roofing services.';desc='Roofing expertise for your property.';content=<div className="container inner-card-grid">{services.map(s=><Link href={'/service/'+s.slug} className="inner-card" key={s.slug}><h2>{s.title}</h2><p>{s.description}</p><span>Learn more →</span></Link>)}</div>}
 else if(page==='service'&&seg[1]){const s=services.find(x=>x.slug===seg[1]);if(!s)notFound();heading=s.title;desc=s.description;content=<div className="container inner-split"><Image src="/images/img-16.avif" alt={s.title} width={620} height={430}/><div><h2>Professional roofing services.</h2><p>We provide dependable residential and commercial roofing solutions tailored to the needs of your building.</p><p>Our experienced team can inspect your roof, explain your options and provide a transparent estimate.</p><Link className="btn btn-gold" href="/appointment">Request an Inspection</Link></div></div>}
 else if(page==='contact'||page==='appointment'){heading=page==='appointment'?'Book a free consultation.':'Get in touch with us.';desc='Tell us about your project and we’ll help with the next step.';content=<div className="container inner-split contact-inner"><div><h2>We'd love to hear from you.</h2><p>Call us: <a href={'tel:'+site.phone.replace(/[^+\d]/g,'')}>{site.phone}</a></p><p>Email: <a href={'mailto:'+site.email}>{site.email}</a></p><p>{site.address.join(' ')}</p><Image src="/images/img-16.avif" alt="Roof of a house" width={500} height={280}/></div><ContactForm/></div>}
 else if(page==='blog'&&seg.length===1){heading='Our latest news';desc='Tips, updates and inspiration from the roofing world.';content=<div className="container blog-grid inner-blog">{articles.map(a=><Link href={'/blog/'+a.slug} className="article-card" key={a.slug}><div className="article-image"><Image src={a.image} alt={a.title} fill/></div><small>{a.category}</small><h3>{a.title}</h3><time>{a.date}</time></Link>)}</div>}
 else if(page==='blog'&&seg[1]){const a=articles.find(x=>x.slug===seg[1]);if(!a)notFound();heading=a.title;desc=a.date;content=<div className="container article-detail"><Image src={a.image} alt={a.title} width={1100} height={600}/><p>This article is a placeholder in the original template. Replace it with relevant roofing news and tips when customizing the website for a customer.</p><Link className="btn btn-gold" href="/blog">View All Articles</Link></div>}
 else notFound();
 return <main><section className="page-hero"><div className="container"><span className="eyebrow">ROOFER ROOFING SERVICE</span><h1>{heading}</h1><p>{desc}</p></div></section><section className="inner-section">{content}</section></main>}

export async function generateMetadata({params}:{params:Promise<{slug?:string[]}>}){const segments=(await params).slug||[];const company=segments[0]==='preview'?roofingCompanies[segments[1]||'']:null;if(company)return {title:company.name+' | Roofing Website Concept',description:'Unofficial website redesign concept for '+company.name+' in Calgary, Alberta.',robots:{index:false,follow:false}};return {}; }
