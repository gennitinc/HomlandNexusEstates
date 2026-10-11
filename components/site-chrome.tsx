import { ArrowUpRight, House, Menu, MessageCircle } from 'lucide-react';

export const whatsappUrl = 'https://wa.me/2347063980382?text=Hello%20Homland%20Nexus%2C%20I%20would%20like%20to%20book%20a%20property%20inspection.';

export const navItems = [
  ['/properties', 'Properties'],
  ['/services', 'Services'],
  ['/about', 'About'],
  ['/gallery', 'Gallery'],
  ['/contact', 'Contact'],
];

export function Brand() {
  return (
    <a href="/" className="brand" aria-label="Homland Nexus home">
      <span className="brand-mark" aria-hidden="true"><House /></span>
      <span className="brand-name"><b>HOMLAND</b><em>NEXUS</em></span>
    </a>
  );
}

export function Header() {
  return (
    <header className="site-header">
      <div className="shell nav-row">
        <Brand />
        <nav className="desktop-nav" aria-label="Main navigation">
          {navItems.map(([href, label]) => <a href={href} key={href}>{label}</a>)}
        </nav>
        <details className="mobile-menu">
          <summary aria-label="Open navigation"><Menu /></summary>
          <nav aria-label="Mobile navigation">{navItems.map(([href, label]) => <a href={href} key={href}>{label}</a>)}</nav>
        </details>
        <a className="nav-cta" href={whatsappUrl} target="_blank" rel="noreferrer">Book Appointment <ArrowUpRight aria-hidden="true" /></a>
      </div>
    </header>
  );
}

export function Footer() {
  return (
    <>
      <footer>
        <div className="shell footer-main">
          <div><Brand /><p>Connecting you to a better future through trusted property ownership.</p></div>
          <nav id="footer-nav" aria-label="Footer navigation">
            {navItems.map(([href, label]) => <a href={href} key={href}>{label}</a>)}
          </nav>
          <div className="footer-contact"><a href={whatsappUrl} target="_blank" rel="noreferrer">WhatsApp: +234 706 398 0382</a><a href="mailto:homlandnexuslimited@gmail.com">homlandnexuslimited@gmail.com</a></div>
        </div>
        <div className="shell footer-bottom"><span>© 2026 Homland Nexus Estates Limited.</span><span>Every plot a promise. Every home a legacy.</span></div>
      </footer>
      <a className="whatsapp-float" href={whatsappUrl} target="_blank" rel="noreferrer" aria-label="Chat with Homland Nexus on WhatsApp"><MessageCircle aria-hidden="true" /><span>WhatsApp</span></a>
    </>
  );
}

export function PageHero({ label, title, copy }: { label: string; title: string; copy: string }) {
  return (
    <section className="page-hero">
      <div className="shell page-hero-inner">
        <p className="eyebrow"><span /> {label}</p>
        <h1>{title}</h1>
        <p>{copy}</p>
      </div>
    </section>
  );
}

export function SectionIntro({ label, title, copy }: { label: string; title: string; copy?: string }) {
  return (
    <div className="section-heading">
      <div><p className="eyebrow"><span /> {label}</p><h2>{title}</h2></div>
      {copy && <p>{copy}</p>}
    </div>
  );
}
