'use client';

import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

const LINKS = [
  { href: '/collection', label: 'Collection' },
  { href: '/our-story', label: 'Our Story' },
  { href: '/custom-orders', label: 'Custom Orders' },
  { href: '/faq', label: 'FAQ' },
];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 80);
    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Navigating away should always leave the menu closed.
  useEffect(() => setMenuOpen(false), [pathname]);

  useEffect(() => {
    if (!menuOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMenuOpen(false);
    };
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', onKey);
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = previousOverflow;
    };
  }, [menuOpen]);

  return (
    <>
      <nav className={`nav ${scrolled ? 'scrolled' : ''}${menuOpen ? ' menu-open' : ''}`} id="nav">
        <Link href="/" className="nav-logo" aria-label="Khair Wigs"></Link>
        <ul className="nav-links">
          {LINKS.map((l) => (
            <li key={l.href}>
              <Link href={l.href}>{l.label}</Link>
            </li>
          ))}
        </ul>
        <Link href="/contact" className="nav-cta">
          Book Consultation
        </Link>
        <button
          type="button"
          className={`nav-hamburger${menuOpen ? ' open' : ''}`}
          id="hamburger"
          onClick={() => setMenuOpen((o) => !o)}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </nav>

      {/* `visibility: hidden` when closed keeps it out of the tab order and the
          accessibility tree, while still allowing the fade transition. */}
      <div id="mobile-menu" className={`nav-mobile${menuOpen ? ' open' : ''}`}>
        <ul>
          {LINKS.map((l) => (
            <li key={l.href}>
              <Link href={l.href} onClick={() => setMenuOpen(false)}>
                {l.label}
              </Link>
            </li>
          ))}
        </ul>
        <Link href="/contact" className="sp-btn" onClick={() => setMenuOpen(false)}>
          <span>Book Consultation</span>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </Link>
      </div>
    </>
  );
}
