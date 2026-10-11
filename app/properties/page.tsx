import type { Metadata } from 'next';
import { ArrowRight } from 'lucide-react';
import { Footer, Header, PageHero, whatsappUrl } from '@/components/site-chrome';

export const metadata: Metadata = {
  title: 'Properties | Homland Nexus Estates',
  description: 'Explore verified land opportunities in Choba, Eneka, and growing communities around Port Harcourt.',
};

export default function PropertiesPage() {
  return (
    <main>
      <Header />
      <PageHero label="Available properties" title="Land worth building on." copy="Explore verified property opportunities in strategic locations across Rivers State." />
      <section className="section properties">
        <div className="shell">
          <div className="property-grid property-grid-page">
            <article className="property-card property-card-large">
              <div className="property-image"><img src="/media/nexus-residence.jpeg" alt="Entrance concept for Nexus Residence, Choba" /><span className="property-status">Now selling</span></div>
              <div className="property-body">
                <div><p className="card-kicker">Choba, Aluu</p><h2>Nexus Residence</h2></div><p className="price"><small>From</small> ₦20M</p>
                <div className="property-meta"><span>465 SQM</span><span>50FT × 100FT</span><span>Registered survey</span></div>
                <p>Close to the University of Port Harcourt, major markets, healthcare, and the international airport.</p>
                <a href={whatsappUrl} target="_blank" rel="noreferrer">Request inspection <ArrowRight /></a>
              </div>
            </article>
            <article className="property-card">
              <div className="property-image"><img src="/media/runyis-residence.jpeg" alt="Entrance concept for Runyis Residence, Eneka" /><span className="property-status">Featured</span></div>
              <div className="property-body">
                <div><p className="card-kicker">Eneka, Igbo–Etche</p><h2>Runyis Residence</h2></div><p className="price"><small>From</small> ₦10M</p>
                <div className="property-meta"><span>Sales agreement</span><span>Deed of conveyance</span><span>Registered survey</span></div>
                <p>Positioned near Eneka Flyover, schools, hospitality, and everyday services.</p>
                <a href={whatsappUrl} target="_blank" rel="noreferrer">Request inspection <ArrowRight /></a>
              </div>
            </article>
          </div>
          <p className="price-note">Property availability, pricing, and terms may change. Confirm current details with a Homland Nexus adviser.</p>
        </div>
      </section>
      <Footer />
    </main>
  );
}
