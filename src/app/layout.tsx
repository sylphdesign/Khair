import type { Metadata } from 'next';
import { Cormorant_Garamond, DM_Sans } from 'next/font/google';
import './globals.css';

/* globals.css declared these families but nothing ever loaded them, so every
   visitor fell back to Times New Roman. next/font self-hosts at build time,
   which keeps the static export self-contained (no external font request). */
const display = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500'],
  style: ['normal', 'italic'],
  variable: '--font-display-loaded',
  display: 'swap',
});

const body = DM_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  variable: '--font-body-loaded',
  display: 'swap',
});
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import PageAnimations from '@/components/PageAnimations';
import Preloader from '@/components/Preloader';
import Cursor from '@/components/Cursor';

export const metadata: Metadata = {
  metadataBase: new URL('https://khairwigs.com'),
  title: 'Khair Wigs — Handcrafted Luxury Hair',
  description: 'Premium quality handcrafted luxury hair and custom wigs. Made to look and feel like your own- but better.',
  authors: [{ name: 'Khair Wigs' }],
  openGraph: {
    siteName: 'Khair Wigs',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable}`}>
      <body className="js-ready antialiased">
        <Preloader />
        <Cursor />
        <PageAnimations />
        
        {/* Back to top implementation can go here or in a separate component */}
        
        <Navigation />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
