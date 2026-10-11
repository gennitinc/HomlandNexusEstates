import type { Metadata } from 'next';
import { BriefcaseBusiness, Handshake, HeartHandshake, Lightbulb, ShieldCheck, Sparkles, Target, TrendingUp } from 'lucide-react';
import { Footer, Header, PageHero, SectionIntro } from '@/components/site-chrome';

export const metadata: Metadata = { title: 'About | Homland Nexus Estates', description: 'Meet the Port Harcourt real estate company helping people access property ownership and build wealth.' };

const values = [
  [ShieldCheck, 'Integrity', 'Honest, transparent dealings.'], [Handshake, 'Trust', 'Dependable relationships that last.'],
  [Sparkles, 'Excellence', 'High standards in every interaction.'], [BriefcaseBusiness, 'Professionalism', 'Respect for every client and partner.'],
  [HeartHandshake, 'Customer satisfaction', 'Your ownership goal stays central.'], [Lightbulb, 'Innovation', 'Better ways to deliver solutions.'],
  [TrendingUp, 'Empowerment', 'Property as a path to wealth.'], [Target, 'Accountability', 'We stand behind our commitments.'],
];

export default function AboutPage() {
  return (
    <main>
      <Header />
      <PageHero label="About Homland Nexus" title="Clear guidance. Lasting value." copy="We help individuals and families make informed property decisions and move confidently toward ownership." />
      <section className="section about"><div className="shell about-grid"><div className="about-media"><img className="about-main-image" src="/media/site-inspection.jpeg" alt="Homland Nexus team conducting a property site inspection" /><div className="about-accent"><strong>Every plot</strong><span>a promise. Every home, a legacy.</span></div></div><div className="about-copy"><p className="eyebrow"><span /> Who we are</p><h2>Property ownership should feel clear—not complicated.</h2><p>Homland Nexus Estates Limited is a Port Harcourt real estate company helping individuals and families access property ownership opportunities and make informed decisions.</p><div className="mission-grid"><article><span>01</span><h3>Our mission</h3><p>To provide accessible, reliable, and value-driven real estate solutions that empower people to own property, build wealth, and secure their future.</p></article><article><span>02</span><h3>Our vision</h3><p>To become a trusted Nigerian real estate company recognised for investment excellence, customer satisfaction, wealth creation, and sustainable communities.</p></article></div></div></div></section>
      <section className="section values-section"><div className="shell"><SectionIntro label="Built on values" title="The standard behind every deal." copy="The principles that guide our team, our partnerships, and the way we serve every client." /><div className="values-grid">{values.map(([Icon, title, text]) => <article key={title as string}><Icon aria-hidden="true" /><h3>{title as string}</h3><p>{text as string}</p></article>)}</div></div></section>
      <section className="section proof-section"><div className="shell"><SectionIntro label="More than transactions" title="People. Progress. Property." copy="Site visits, professional development, and shared milestones—the work behind the ownership journey." /><div className="media-grid"><figure className="media-wide"><img src="/media/homland-team.jpeg" alt="Homland Nexus training participants and team" /><figcaption>Learning together</figcaption></figure><figure><img src="/media/happy-clients.jpeg" alt="Clients receiving allocation certificates on site" /><figcaption>Ownership milestones</figcaption></figure><figure><img src="/media/empower-centre.jpeg" alt="Homland Nexus team at the Empower Centre Abuja" /><figcaption>Professional growth</figcaption></figure></div></div></section>
      <Footer />
    </main>
  );
}
