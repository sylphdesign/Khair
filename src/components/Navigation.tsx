'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80);
    };
    
    // Initial check
    handleScroll();
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`nav ${scrolled ? 'scrolled' : ''}`} id="nav">
      <Link href="/" className="nav-logo" aria-label="Khair Wigs"></Link>
      <ul className="nav-links">
        <li><Link href="/collection">Collection</Link></li>
        <li><Link href="/our-story">Our Story</Link></li>
        <li><Link href="/custom-orders">Custom Orders</Link></li>
        <li><Link href="/faq">FAQ</Link></li>
      </ul>
      <Link href="/contact" className="nav-cta">Book Consultation</Link>
      <div className="nav-hamburger" id="hamburger">
        <span></span><span></span><span></span>
      </div>
    </nav>
  );
}
