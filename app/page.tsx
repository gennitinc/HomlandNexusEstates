import { ArrowRight, ArrowUpRight, CheckCircle2, MapPin, ShieldCheck } from 'lucide-react';
import { Footer, Header, SectionIntro, whatsappUrl } from '@/components/site-chrome';

export default function Home() {
  return (
    <main>
      <Header />
      <section className="hero" aria-labelledby="hero-title">
        <div className="shell hero-grid">
          <div className="hero-copy">
            <p className="eyebrow"><span /> Port Harcourt, Nigeria</p>
            <h1 id="hero-title">Own the land.<br /><em>Build the future.</em></h1>
            <p className="hero-lede">Secure verified property in fast-growing locations with a team that stays with you—from inspection to allocation.</p>
            <div className="hero-actions">
              <a className="button button-primary" href="/properties">Explore properties <ArrowUpRight aria-hidden="true" /></a>
              <a className="button button-secondary" href={whatsappUrl} target="_blank" rel="noreferrer">Talk to an adviser</a>
            </div>
            <div className="hero-proof" aria-label="Property assurance"><span><CheckCircle2 aria-hidden="true" /> Registered survey</span><span><CheckCircle2 aria-hidden="true" /> Clear documentation</span></div>
          </div>
          <div className="hero-visual">
            <div className="hero-image-wrap"><img src="/media/nexus-residence.jpeg" alt="Nexus Residence Choba property offer" /></div>
            <div className="hero-float-card"><span className="float-icon"><ShieldCheck aria-hidden="true" /></span><span><small>Property support</small><strong>Inspection to allocation</strong></span></div>
            <div className="plot-card"><small>Featured plot</small><strong>465 SQM</strong><span><MapPin aria-hidden="true" /> Choba, Rivers State</span></div>
          </div>
        </div>
      </section>
      <section className="trust-strip" aria-label="Why choose Homland Nexus">
        <div className="shell trust-grid"><p><b>01</b><span><strong>Verified locations</strong>Strategic, growth-ready communities</span></p><p><b>02</b><span><strong>Guided ownership</strong>Clear support at every step</span></p><p><b>03</b><span><strong>Value that grows</strong>Property built for your future</span></p></div>
      </section>
      <section className="section home-feature">
        <div className="shell home-feature-grid">
          <div><SectionIntro label="Featured opportunity" title="Nexus Residence, Choba." copy="A 465 SQM property offer near the University of Port Harcourt, key markets, healthcare, and the international airport." /><a className="text-link" href="/properties">View all properties <ArrowRight /></a></div>
          <img src="/media/nexus-residence.jpeg" alt="Nexus Residence entrance concept" />
        </div>
      </section>
      <section className="cta-section"><div className="shell cta-grid"><div><p className="eyebrow"><span /> Your next move</p><h2>Let&apos;s find the right land for your future.</h2></div><div><p>Speak with a property adviser, ask about current availability, or schedule a guided site inspection.</p><a className="button cta-button" href={whatsappUrl} target="_blank" rel="noreferrer">Book an inspection <ArrowUpRight /></a></div></div></section>
      <Footer />
    </main>
  );
}
