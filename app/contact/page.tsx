import type { Metadata } from 'next';
import { ArrowUpRight, Clock3, Mail, MapPin, Phone } from 'lucide-react';
import { Footer, Header, PageHero, whatsappUrl } from '@/components/site-chrome';

export const metadata: Metadata = { title: 'Contact | Homland Nexus Estates', description: 'Contact Homland Nexus Estates in Port Harcourt or book a guided property inspection.' };

export default function ContactPage() {
  return (
    <main>
      <Header />
      <PageHero label="Contact us" title="We're ready when you are." copy="Reach the Port Harcourt office during business hours, or send us a WhatsApp message any time." />
      <section className="contact-section contact-page"><div className="shell contact-grid"><div className="contact-heading"><p className="eyebrow"><span /> Visit or contact us</p><h2>Let&apos;s talk about your next property.</h2><p>Ask about current availability, payment terms, documentation, or your preferred inspection date.</p><a className="button button-primary" href={whatsappUrl} target="_blank" rel="noreferrer">Message us on WhatsApp <ArrowUpRight /></a></div><div className="contact-cards"><article><MapPin /><span><small>Head office</small><strong>29 Olu Obasanjo Road</strong><p>Opposite Civil Defence Office, Port Harcourt, Rivers State.</p><a href="https://www.google.com/maps/search/?api=1&query=29+Olu+Obasanjo+Road+Port+Harcourt" target="_blank" rel="noreferrer">Get directions <ArrowUpRight /></a></span></article><article><Phone /><span><small>Call or WhatsApp</small><a className="contact-link" href="tel:+2347063980382">0706 398 0382</a><a className="contact-link" href="tel:+2349044186356">0904 418 6356</a></span></article><article><Mail /><span><small>Email</small><a className="contact-link email-link" href="mailto:homlandnexuslimited@gmail.com">homlandnexuslimited@gmail.com</a></span></article><article><Clock3 /><span><small>Opening hours</small><dl><div><dt>Monday–Friday</dt><dd>8:00 AM–5:00 PM</dd></div><div><dt>Saturday</dt><dd>10:00 AM–2:00 PM</dd></div><div><dt>Sunday</dt><dd>Closed</dd></div></dl></span></article></div></div></section>
      <Footer />
    </main>
  );
}
