import type { Metadata } from 'next';
import './globals.css';
import './classic.css';
import './rooftheme-fix.css';
import { Header, Footer } from '../components/SiteChrome';
export const metadata: Metadata = {title:'Roofer – Roofing Service',description:'Roofing and solar services. A reusable Next.js website template.'};
export default function RootLayout({children}:{children:React.ReactNode}) {return <html lang="en"><body><Header/>{children}<Footer/></body></html>}
