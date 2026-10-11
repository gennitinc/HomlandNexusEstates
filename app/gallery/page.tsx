import type { Metadata } from 'next';
import { ArrowUpRight } from 'lucide-react';
import { Footer, Header, PageHero, whatsappUrl } from '@/components/site-chrome';

export const metadata: Metadata = {
  title: 'Gallery | Homland Nexus Estates',
  description: 'See Homland Nexus properties, site inspections, client milestones, and team activities.',
};

const gallery = [
  ['/media/nexus-residence.jpeg', 'Nexus Residence', 'Property'],
  ['/media/site-inspection.jpeg', 'Guided site inspection', 'Inspection'],
  ['/media/happy-clients.jpeg', 'Ownership milestones', 'Clients'],
  ['/media/runyis-residence.jpeg', 'Runyis Residence', 'Property'],
  ['/media/homland-team.jpeg', 'Learning together', 'Team'],
  ['/media/empower-centre.jpeg', 'Professional growth', 'Team'],
];

export default function GalleryPage() {
  return (
    <main>
      <Header />
      <PageHero label="Our gallery" title="Places, people, and progress." copy="Explore the properties, site visits, client moments, and team experiences behind our work." />
      <section className="section gallery-section">
        <div className="shell gallery-grid">
          {gallery.map(([src, title, category], index) => (
            <figure className={index === 0 || index === 3 ? 'gallery-wide' : ''} key={src}>
              <img src={src} alt={title} />
              <figcaption><span>{category}</span><strong>{title}</strong></figcaption>
            </figure>
          ))}
        </div>
      </section>
      <section className="gallery-cta"><div className="shell"><div><span>See a property you like?</span><h2>Book a guided inspection.</h2></div><a className="button cta-button" href={whatsappUrl} target="_blank" rel="noreferrer">Chat on WhatsApp <ArrowUpRight /></a></div></section>
      <Footer />
    </main>
  );
}
