import {
  ArrowRight, ArrowUpRight, BadgeCheck, BriefcaseBusiness, Building2,
  CheckCircle2, Clock3, FileCheck2, Handshake, HeartHandshake, House,
  Lightbulb, Mail, MapPin, Menu, Phone, ShieldCheck, Sparkles, Target,
  TrendingUp, UsersRound,
} from 'lucide-react';

const whatsappUrl = 'https://wa.me/2347063980382?text=Hello%20Homland%20Nexus%2C%20I%20would%20like%20to%20book%20a%20property%20inspection.';

const services = [
  [MapPin, 'Land sales & marketing', 'Verified property options in strategic locations across Rivers State.'],
  [TrendingUp, 'Property investment', 'Guidance to help you identify value-driven opportunities for long-term growth.'],
  [Building2, 'Inspections & site visits', 'See the location, ask questions, and make your decision with clarity.'],
  [BadgeCheck, 'Plot allocation & support', 'Structured assistance from initial enquiry through plot allocation.'],
  [UsersRound, 'Realtor development', 'Practical business development for people building a career in real estate.'],
  [FileCheck2, 'Ownership documentation', 'Assistance with applicable property paperwork for the services we provide.'],
];

const values = [
  [ShieldCheck, 'Integrity', 'Honest, transparent dealings.'],
  [Handshake, 'Trust', 'Dependable relationships that last.'],
  [Sparkles, 'Excellence', 'High standards in every interaction.'],
  [BriefcaseBusiness, 'Professionalism', 'Respect for every client and partner.'],
  [HeartHandshake, 'Customer satisfaction', 'Your ownership goal stays central.'],
  [Lightbulb, 'Innovation', 'Better ways to deliver solutions.'],
  [TrendingUp, 'Empowerment', 'Property as a path to wealth.'],
  [Target, 'Accountability', 'We stand behind our commitments.'],
];

function Brand() {
  return (
    <a href="#top" className="brand" aria-label="Homland Nexus home">
      <span className="brand-mark" aria-hidden="true"><House /></span>
      <span className="brand-name"><b>HOMLAND</b><em>NEXUS</em></span>
    </a>
  );
}

function SectionIntro({ label, title, copy }: { label: string; title: string; copy?: string }) {
  return (
    <div className="section-heading">
      <div><p className="eyebrow"><span /> {label}</p><h2>{title}</h2></div>
      {copy && <p>{copy}</p>}
    </div>
  );
}

export default function Home() {
  return (
    <main id="top">
      <header className="site-header">
        <div className="shell nav-row">
          <Brand />
          <nav className="desktop-nav" aria-label="Main navigation">
            <a href="#properties">Properties</a><a href="#services">Services</a><a href="#about">About</a><a href="#contact">Contact</a>
          </nav>
          <a className="mobile-menu" href="#footer-nav" aria-label="Open navigation"><Menu /></a>
          <a className="nav-cta" href={whatsappUrl} target="_blank" rel="noreferrer">Book inspection <ArrowUpRight aria-hidden="true" /></a>
        </div>
      </header>

      <section className="hero" aria-labelledby="hero-title">
        <div className="shell hero-grid">
          <div className="hero-copy">
            <p className="eyebrow"><span /> Port Harcourt, Nigeria</p>
            <h1 id="hero-title">Own the land.<br /><em>Build the future.</em></h1>
            <p className="hero-lede">Secure verified property in fast-growing locations with a team that stays with you—from inspection to allocation.</p>
            <div className="hero-actions">
              <a className="button button-primary" href="#properties">Explore properties <ArrowUpRight aria-hidden="true" /></a>
              <a className="button button-secondary" href={whatsappUrl} target="_blank" rel="noreferrer">Talk to an adviser</a>
            </div>
            <div className="hero-proof" aria-label="Property assurance">
              <span><CheckCircle2 aria-hidden="true" /> Registered survey</span><span><CheckCircle2 aria-hidden="true" /> Clear documentation</span>
            </div>
          </div>

          <div className="hero-visual">
            <div className="hero-image-wrap"><img src="/media/nexus-residence.jpeg" alt="Nexus Residence Choba property offer" /></div>
            <div className="hero-float-card"><span className="float-icon"><ShieldCheck aria-hidden="true" /></span><span><small>Property support</small><strong>Inspection to allocation</strong></span></div>
            <div className="plot-card"><small>Featured plot</small><strong>465 SQM</strong><span><MapPin aria-hidden="true" /> Choba, Rivers State</span></div>
          </div>
        </div>
      </section>

      <section className="trust-strip" aria-label="Why choose Homland Nexus">
        <div className="shell trust-grid">
          <p><b>01</b><span><strong>Verified locations</strong>Strategic, growth-ready communities</span></p>
          <p><b>02</b><span><strong>Guided ownership</strong>Clear support at every step</span></p>
          <p><b>03</b><span><strong>Value that grows</strong>Property built for your future</span></p>
        </div>
      </section>

      <section className="section properties" id="properties">
        <div className="shell">
          <SectionIntro label="Featured opportunities" title="Land worth building on." copy="Carefully selected locations with practical access, credible documentation, and long-term potential." />
          <div className="property-grid">
            <article className="property-card property-card-large">
              <div className="property-image"><img src="/media/nexus-residence.jpeg" alt="Entrance concept for Nexus Residence, Choba" /><span className="property-status">Now selling</span></div>
              <div className="property-body">
                <div><p className="card-kicker">Choba, Aluu</p><h3>Nexus Residence</h3></div><p className="price"><small>From</small> ₦20M</p>
                <div className="property-meta"><span>465 SQM</span><span>50FT × 100FT</span><span>Registered survey</span></div>
                <p>Close to the University of Port Harcourt, major markets, healthcare, and the international airport.</p>
                <a href={whatsappUrl} target="_blank" rel="noreferrer">Request inspection <ArrowRight /></a>
              </div>
            </article>
            <article className="property-card">
              <div className="property-image"><img src="/media/runyis-residence.jpeg" alt="Entrance concept for Runyis Residence, Eneka" /><span className="property-status">Featured</span></div>
              <div className="property-body">
                <div><p className="card-kicker">Eneka, Igbo–Etche</p><h3>Runyis Residence</h3></div><p className="price"><small>From</small> ₦10M</p>
                <div className="property-meta"><span>Sales agreement</span><span>Deed of conveyance</span><span>Registered survey</span></div>
                <p>Positioned near Eneka Flyover, schools, hospitality, and everyday services.</p>
                <a href={whatsappUrl} target="_blank" rel="noreferrer">Request inspection <ArrowRight /></a>
              </div>
            </article>
          </div>
          <p className="price-note">Property availability, pricing, and terms may change. Confirm current details with a Homland Nexus adviser.</p>
        </div>
      </section>

      <section className="section about" id="about">
        <div className="shell about-grid">
          <div className="about-media">
            <img className="about-main-image" src="/media/site-inspection.jpeg" alt="Homland Nexus team conducting a property site inspection" />
            <div className="about-accent"><strong>Every plot</strong><span>a promise. Every home, a legacy.</span></div>
          </div>
          <div className="about-copy">
            <p className="eyebrow"><span /> About Homland Nexus</p>
            <h2>Property ownership should feel clear—not complicated.</h2>
            <p>Homland Nexus Estates Limited is a Port Harcourt real estate company helping individuals and families access property ownership opportunities and make informed decisions.</p>
            <div className="mission-grid">
              <article><span>01</span><h3>Our mission</h3><p>To provide accessible, reliable, and value-driven real estate solutions that empower people to own property, build wealth, and secure their future.</p></article>
              <article><span>02</span><h3>Our vision</h3><p>To become a trusted Nigerian real estate company recognised for investment excellence, customer satisfaction, wealth creation, and sustainable communities.</p></article>
            </div>
          </div>
        </div>
      </section>

      <section className="section services" id="services">
        <div className="shell">
          <SectionIntro label="What we do" title="From enquiry to ownership." copy="Real estate solutions designed to give you confidence, clarity, and dependable support." />
          <div className="service-grid">
            {services.map(([Icon, title, text], index) => (
              <article className="service-card" key={title as string}>
                <span className="service-number">0{index + 1}</span><Icon aria-hidden="true" /><h3>{title as string}</h3><p>{text as string}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="process-section">
        <div className="shell process-grid">
          <div>
            <p className="eyebrow"><span /> A simple path</p><h2>Four steps. One confident decision.</h2>
            <a className="button button-primary" href={whatsappUrl} target="_blank" rel="noreferrer">Start on WhatsApp <ArrowUpRight /></a>
          </div>
          <ol className="process-list">
            <li><b>01</b><span><strong>Tell us your goal</strong>Share your preferred location, budget, and timeline.</span></li>
            <li><b>02</b><span><strong>Review your options</strong>Receive clear property information and available terms.</span></li>
            <li><b>03</b><span><strong>Visit the site</strong>Book an inspection and experience the location.</span></li>
            <li><b>04</b><span><strong>Secure your plot</strong>Complete the applicable documentation and allocation steps.</span></li>
          </ol>
        </div>
      </section>

      <section className="section values-section">
        <div className="shell">
          <SectionIntro label="Built on values" title="The standard behind every deal." copy="The principles that guide our team, our partnerships, and the way we serve every client." />
          <div className="values-grid">
            {values.map(([Icon, title, text]) => <article key={title as string}><Icon aria-hidden="true" /><h3>{title as string}</h3><p>{text as string}</p></article>)}
          </div>
        </div>
      </section>

      <section className="section proof-section">
        <div className="shell">
          <SectionIntro label="More than transactions" title="People. Progress. Property." copy="Site visits, professional development, and shared milestones—the work behind the ownership journey." />
          <div className="media-grid">
            <figure className="media-wide"><img src="/media/homland-team.jpeg" alt="Homland Nexus training participants and team" /><figcaption>Learning together</figcaption></figure>
            <figure><img src="/media/happy-clients.jpeg" alt="Clients receiving allocation certificates on site" /><figcaption>Ownership milestones</figcaption></figure>
            <figure><img src="/media/empower-centre.jpeg" alt="Homland Nexus team at the Empower Centre Abuja" /><figcaption>Professional growth</figcaption></figure>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="shell cta-grid">
          <div><p className="eyebrow"><span /> Your next move</p><h2>Let&apos;s find the right land for your future.</h2></div>
          <div><p>Speak with a property adviser, ask about current availability, or schedule a guided site inspection.</p><a className="button cta-button" href={whatsappUrl} target="_blank" rel="noreferrer">Book an inspection <ArrowUpRight /></a></div>
        </div>
      </section>

      <section className="contact-section" id="contact">
        <div className="shell contact-grid">
          <div className="contact-heading"><p className="eyebrow"><span /> Visit or contact us</p><h2>We&apos;re ready when you are.</h2><p>Reach the Port Harcourt office during business hours, or send us a WhatsApp message any time.</p></div>
          <div className="contact-cards">
            <article><MapPin /><span><small>Head office</small><strong>29 Olu Obasanjo Road</strong><p>Opposite Civil Defence Office, Port Harcourt, Rivers State.</p><a href="https://www.google.com/maps/search/?api=1&query=29+Olu+Obasanjo+Road+Port+Harcourt" target="_blank" rel="noreferrer">Get directions <ArrowUpRight /></a></span></article>
            <article><Phone /><span><small>Call or WhatsApp</small><a className="contact-link" href="tel:+2347063980382">0706 398 0382</a><a className="contact-link" href="tel:+2349044186356">0904 418 6356</a></span></article>
            <article><Mail /><span><small>Email</small><a className="contact-link email-link" href="mailto:homlandnexuslimited@gmail.com">homlandnexuslimited@gmail.com</a></span></article>
            <article><Clock3 /><span><small>Opening hours</small><dl><div><dt>Monday–Friday</dt><dd>8:00 AM–5:00 PM</dd></div><div><dt>Saturday</dt><dd>10:00 AM–2:00 PM</dd></div><div><dt>Sunday</dt><dd>Closed</dd></div></dl></span></article>
          </div>
        </div>
      </section>

      <footer>
        <div className="shell footer-main">
          <div><Brand /><p>Connecting you to a better future through trusted property ownership.</p></div>
          <nav id="footer-nav" aria-label="Footer navigation"><a href="#properties">Properties</a><a href="#services">Services</a><a href="#about">About us</a><a href="#contact">Contact</a></nav>
          <div className="footer-contact"><a href="tel:+2347063980382">+234 706 398 0382</a><a href="mailto:homlandnexuslimited@gmail.com">homlandnexuslimited@gmail.com</a></div>
        </div>
        <div className="shell footer-bottom"><span>© 2026 Homland Nexus Estates Limited.</span><span>Every plot a promise. Every home a legacy.</span></div>
      </footer>

      <a className="whatsapp-float" href={whatsappUrl} target="_blank" rel="noreferrer" aria-label="Chat with Homland Nexus on WhatsApp"><Phone /></a>
    </main>
  );
}
