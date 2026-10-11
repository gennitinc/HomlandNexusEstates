import type { Metadata } from 'next';
import { ArrowUpRight, BadgeCheck, Building2, FileCheck2, MapPin, TrendingUp, UsersRound } from 'lucide-react';
import { Footer, Header, PageHero, whatsappUrl } from '@/components/site-chrome';

export const metadata: Metadata = { title: 'Services | Homland Nexus Estates', description: 'Property sales, investment guidance, site inspections, allocation support, documentation, and realtor development.' };

const services = [
  [MapPin, 'Land sales & marketing', 'Verified property options in strategic locations across Rivers State.'],
  [TrendingUp, 'Property investment', 'Guidance to help you identify value-driven opportunities for long-term growth.'],
  [Building2, 'Inspections & site visits', 'See the location, ask questions, and make your decision with clarity.'],
  [BadgeCheck, 'Plot allocation & support', 'Structured assistance from initial enquiry through plot allocation.'],
  [UsersRound, 'Realtor development', 'Practical business development for people building a career in real estate.'],
  [FileCheck2, 'Ownership documentation', 'Assistance with applicable property paperwork for the services we provide.'],
];

export default function ServicesPage() {
  return (
    <main>
      <Header />
      <PageHero label="What we do" title="From enquiry to ownership." copy="Real estate solutions designed to give you confidence, clarity, and dependable support." />
      <section className="section services"><div className="shell service-grid service-grid-page">{services.map(([Icon, title, text], index) => <article className="service-card" key={title as string}><span className="service-number">0{index + 1}</span><Icon aria-hidden="true" /><h2>{title as string}</h2><p>{text as string}</p></article>)}</div></section>
      <section className="process-section"><div className="shell process-grid"><div><p className="eyebrow"><span /> A simple path</p><h2>Four steps. One confident decision.</h2><a className="button button-primary" href={whatsappUrl} target="_blank" rel="noreferrer">Start on WhatsApp <ArrowUpRight /></a></div><ol className="process-list"><li><b>01</b><span><strong>Tell us your goal</strong>Share your preferred location, budget, and timeline.</span></li><li><b>02</b><span><strong>Review your options</strong>Receive clear property information and available terms.</span></li><li><b>03</b><span><strong>Visit the site</strong>Book an inspection and experience the location.</span></li><li><b>04</b><span><strong>Secure your plot</strong>Complete the applicable documentation and allocation steps.</span></li></ol></div></section>
      <Footer />
    </main>
  );
}
