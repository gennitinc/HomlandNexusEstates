import type { Metadata } from 'next';
import { Archivo, Archivo_Black } from 'next/font/google';
import './globals.css';

const archivo = Archivo({ variable: '--font-body', subsets: ['latin'] });
const archivoBlack = Archivo_Black({ variable: '--font-display', weight: '400', subsets: ['latin'] });

export const metadata: Metadata = {
  metadataBase: new URL('https://homland-nexus-estates.violetelm16.chatgpt.site'),
  title: 'Homland Nexus Estates | Own Land. Build Your Future.',
  description: 'Verified land and property investment opportunities in Port Harcourt, Rivers State. Book an inspection with Homland Nexus Estates Limited.',
  openGraph: {
    title: 'Homland Nexus Estates | Own Land. Build Your Future.',
    description: 'Verified land and property opportunities in Port Harcourt, Rivers State.',
    images: [{ url: '/og.png', width: 1200, height: 630, alt: 'Homland Nexus Estates' }],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Homland Nexus Estates | Own Land. Build Your Future.',
    description: 'Verified land and property opportunities in Port Harcourt, Rivers State.',
    images: ['/og.png'],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body className={`${archivo.variable} ${archivoBlack.variable}`}>{children}</body></html>;
}
