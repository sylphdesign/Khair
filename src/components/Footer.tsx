"use client";

import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-grid">
        <div className="footer-brand">
          <Link href="/" className="nav-logo" aria-label="Khair Wigs"></Link>
          <p>Guided by over a decade of personal experience. We utilize premium quality hair for a finish that moves, feels, and blends beautifully. Made to look and feel like your own- but better.</p>
          <div className="footer-social">
            <a href="https://www.instagram.com/khair.wigs/" target="_blank" aria-label="Instagram">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="5"/><circle cx="17.5" cy="6.5" r="1"/></svg>
            </a>
            <a href="#" onClick={(e) => e.preventDefault()} title="Coming soon" aria-label="Facebook">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
            </a>
            <a href="#" onClick={(e) => e.preventDefault()} title="Coming soon" aria-label="TikTok">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5"/></svg>
            </a>
          </div>
        </div>
        <div className="footer-col">
          <h4>Explore</h4>
          <ul>
            <li><Link href="/collection">Collection</Link></li>
            <li><Link href="/custom-orders">Custom Orders</Link></li>
            <li><Link href="/our-story">Our Story</Link></li>
            <li><Link href="/care-guide">Care Guide</Link></li>
          </ul>
        </div>
        <div className="footer-col">
          <h4>Support</h4>
          <ul>
            <li><Link href="/contact">Contact Us</Link></li>
            <li><Link href="/faq">FAQ</Link></li>
            <li><Link href="/measurement-guide">Measurement Guide</Link></li>
            <li><Link href="/shipping">Shipping Info</Link></li>
          </ul>
        </div>
        <div className="footer-col">
          <h4>Legal</h4>
          <ul>
            <li><Link href="/privacy">Privacy Policy</Link></li>
            <li><Link href="/terms">Terms of Service</Link></li>
            <li><Link href="/return-policy">Return Policy</Link></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2026 Khair Wigs. All rights reserved.</p>
        <p>Crafted with care. Delivered with confidence.</p>
      </div>
    </footer>
  );
}
