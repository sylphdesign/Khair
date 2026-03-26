import type { Metadata } from 'next';
import './globals.css';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import PageAnimations from '@/components/PageAnimations';
import Preloader from '@/components/Preloader';
import Cursor from '@/components/Cursor';

export const metadata: Metadata = {
  title: 'Khair Wigs — Handcrafted Luxury Hair',
  description: 'Premium quality handcrafted luxury hair and custom wigs. Made to look and feel like your own- but better.',
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
