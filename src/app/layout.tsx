import type { Metadata } from 'next';
import './globals.css';
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
    <html lang="en">
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
