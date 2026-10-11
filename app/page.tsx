import { ArrowRight, ArrowUpRight, Building2, CheckCircle2, FileCheck2, MapPin, ShieldCheck, UsersRound } from 'lucide-react';
import { Footer, Header, SectionIntro, whatsappUrl } from '@/components/site-chrome';

const properties = [
  {
    name: 'Nexus Residence', location: 'Choba, Aluu', price: '₦20M', image: '/media/nexus-residence.jpeg',
    details: ['465 SQM', '50FT × 100FT', 'Registered survey'],
    copy: 'Close to the University of Port Harcourt, major markets, healthcare, and the international airport.',
  },
  {
    name: 'Runyis Residence', location: 'Eneka, Igbo–Etche', price: '₦10M', image: '/media/runyis-residence.jpeg',
    details: ['Sales agreement', 'Deed of conveyance', 'Registered survey'],
    copy: 'Positioned near Eneka Flyover, schools, hospitality, and everyday services.',
  },
];

export default function Home() {
  return (
    <main>
      <Header />
      <section className="hero" aria-labelledby="hero-title">
        <div className="shell hero-grid">
          <div className="hero-copy">
            <p className="eyebrow">Port Harcourt property specialists</p>
            <h1 id="hero-title">Land you can understand. Ownership you can trust.</h1>
            <p className="hero-lede">We help buyers find verified property in growth areas across Rivers State, inspect the location, understand the documents, and complete allocation with clarity.</p>
            <div className="hero-actions">
              <a className="button button-primary" href="/properties">See available properties <ArrowRight /></a>
              <a className="button button-secondary" href={whatsappUrl} target="_blank" rel="noreferrer">Chat on WhatsApp</a>
            </div>
            <div className="hero-proof" aria-label="Property assurance"><span><CheckCircle2 /> Registered survey options</span><span><CheckCircle2 /> Guided site visits</span></div>
          </div>
          <div className="hero-visual">
            <div className="hero-image-wrap"><img src="/media/nexus-residence.jpeg" alt="Nexus Residence in Choba, Port Harcourt" /></div>
            <div className="hero-listing"><div><span>Available in Choba</span><strong>Nexus Residence</strong></div><div><span>Starting from</span><strong>₦20M</strong></div></div>
          </div>
        </div>
      </section>

      <section className="trust-strip" aria-label="How Homland Nexus helps">
        <div className="shell trust-grid"><p><b>01</b><span><strong>Inspect before you decide</strong>Walk the location with our team</span></p><p><b>02</b><span><strong>Understand the paperwork</strong>Know the applicable documents</span></p><p><b>03</b><span><strong>Get allocation support</strong>Stay guided after payment</span></p></div>
      </section>

      <section className="section home-properties">
        <div className="shell">
          <SectionIntro label="Available now" title="Two places to start your search." copy="Current opportunities in Choba and Eneka, with location details and documentation made clear before you commit." />
          <div className="home-property-grid">
            {properties.map((property) => (
              <article className="home-property-card" key={property.name}>
                <a className="home-property-image" href="/properties"><img src={property.image} alt={`${property.name}, ${property.location}`} /><span>Now selling</span></a>
                <div className="home-property-body">
                  <div className="home-property-title"><div><p><MapPin /> {property.location}</p><h2>{property.name}</h2></div><div><small>From</small><strong>{property.price}</strong></div></div>
                  <p>{property.copy}</p>
                  <div className="home-property-meta">{property.details.map((detail) => <span key={detail}>{detail}</span>)}</div>
                  <a className="text-link" href={whatsappUrl} target="_blank" rel="noreferrer">Ask about this property <ArrowUpRight /></a>
                </div>
              </article>
            ))}
          </div>
          <div className="section-footer"><p>Availability and prices can change. Confirm current terms with an adviser.</p><a href="/properties">Compare all properties <ArrowRight /></a></div>
        </div>
      </section>

      <section className="section home-services">
        <div className="shell home-services-layout">
          <div><p className="eyebrow">What we handle</p><h2>Practical support from enquiry to allocation.</h2><p>Tell us where you want to buy, what you can spend, and your timeline. We&apos;ll help you review the available options and plan a site visit.</p><a className="text-link" href="/services">See all services <ArrowRight /></a></div>
          <div className="home-service-list">
            <article><MapPin /><div><h3>Land sales and marketing</h3><p>Verified options in strategic areas across Rivers State.</p></div></article>
            <article><Building2 /><div><h3>Inspections and site visits</h3><p>See the land and surrounding neighbourhood before you decide.</p></div></article>
            <article><FileCheck2 /><div><h3>Documentation and allocation</h3><p>Guidance through the applicable paperwork and next steps.</p></div></article>
          </div>
        </div>
      </section>

      <section className="section home-about">
        <div className="shell home-about-grid">
          <div className="home-about-images"><img src="/media/site-inspection.jpeg" alt="Homland Nexus team during a site inspection" /><img src="/media/homland-team.jpeg" alt="Homland Nexus team and training participants" /></div>
          <div className="home-about-copy"><p className="eyebrow">About Homland Nexus</p><h2>A local team for a decision that matters.</h2><p>Homland Nexus Estates Limited works from Port Harcourt, helping individuals and families buy property with better information and dependable support.</p><div className="home-about-points"><span><ShieldCheck /> Transparent dealings</span><span><UsersRound /> Client-first guidance</span></div><a className="text-link" href="/about">Learn about our company <ArrowRight /></a></div>
        </div>
      </section>

      <section className="home-process">
        <div className="shell"><div className="home-process-heading"><p className="eyebrow">How it works</p><h2>From first message to your plot.</h2></div><ol><li><span>1</span><div><strong>Share your budget</strong><p>Tell us your preferred area and timeline.</p></div></li><li><span>2</span><div><strong>Review the options</strong><p>Get property details, pricing, and terms.</p></div></li><li><span>3</span><div><strong>Visit the site</strong><p>Inspect the location with our team.</p></div></li><li><span>4</span><div><strong>Complete allocation</strong><p>Finish the applicable ownership steps.</p></div></li></ol></div>
      </section>

      <section className="section home-gallery">
        <div className="shell"><SectionIntro label="Recent moments" title="Properties, inspections, and people." copy="See more of our sites, client milestones, and team activities." /><div className="home-gallery-grid"><figure className="home-gallery-main"><img src="/media/happy-clients.jpeg" alt="Clients celebrating a property ownership milestone" /><figcaption>Ownership milestones</figcaption></figure><figure><img src="/media/empower-centre.jpeg" alt="Homland Nexus team at the Empower Centre" /><figcaption>Professional development</figcaption></figure><figure><img src="/media/runyis-residence.jpeg" alt="Runyis Residence entrance concept" /><figcaption>Runyis Residence</figcaption></figure></div><a className="text-link" href="/gallery">View the gallery <ArrowRight /></a></div>
      </section>

      <section className="cta-section"><div className="shell cta-grid"><div><p className="eyebrow">Plan your site visit</p><h2>See the location before you make a decision.</h2></div><div><p>Speak with a property adviser about availability and choose a convenient inspection date.</p><a className="button cta-button" href={whatsappUrl} target="_blank" rel="noreferrer">Chat on WhatsApp <ArrowUpRight /></a></div></div></section>
      <section className="home-contact"><div className="shell home-contact-grid"><div><span>Visit our office</span><strong>29 Olu Obasanjo Road, Port Harcourt</strong></div><div><span>WhatsApp an adviser</span><a href={whatsappUrl} target="_blank" rel="noreferrer">+234 706 398 0382</a></div><a className="text-link" href="/contact">Full contact details <ArrowRight /></a></div></section>
      <Footer />
    </main>
  );
}
