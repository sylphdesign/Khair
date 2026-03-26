import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: "Custom Wigs Made to Your Measurements \u2014 100+ Hours Hand-Tied | Khair Wigs",
  description: "Order a custom luxury wig built to your exact head measurements, preferred density, length, texture, and color. Each piece hand-tied over 100+ hours. Delivered in 3\u201312 weeks.",
  keywords: ["custom wig", "custom made wig", "bespoke wig", "wig made to order", "custom hair replacement", "personalized wig", "custom lace wig", "wig fitting", "BGH measurements"],
  openGraph: {
    title: "Custom Wigs Made to Your Measurements | Khair Wigs",
    description: "Built to your exact dimensions, preferences, and specifications. Choose length, texture, color, and density. Delivered in 3\u201312 weeks.",
    images: [{ url: "/og-custom.jpg", width: 1200, height: 630 }],
  },
  twitter: {
    title: "Custom Wigs \u2014 Built to Your Specs | Khair Wigs",
    description: "Your measurements. Your preferences. Hand-tied over 100+ hours and delivered in 3\u201312 weeks.",
  },
};

export default function Page() {
  return (
    <div className="page-wrapper">
<section className="sp-hero"><div className="hero-grain"></div><div className="sp-hero-in"><p className="sp-bc"><Link href="/home">Home</Link> &nbsp;/&nbsp; Custom Orders</p><h1>Custom <em>Orders</em></h1><p>Designed around your measurements, your preferences, your life.</p></div></section>
<div className="sp-wide"><div className="sp-mgrid">
<div>
<h2 className="sp-rv" style={{marginTop: '0'}}>How It <em style={{fontStyle: 'italic', color: 'var(--sage)'}}>Works</em></h2>
<p className="sp-rv">A truly custom wig isn't about adjusting something off the shelf — it's about building from the ground up, strand by strand, for one person's head.</p>
<p className="sp-rv">The result doesn't feel like wearing something. It feels like getting something back.</p>
<div className="sp-hr sp-rv"></div>
<div className="sp-rv" style={{display: 'flex', gap: '20px', alignItems: 'flex-start', padding: '20px 0', borderBottom: '1px solid var(--cream-dark)'}}><div className="sp-sn"><span>01</span></div><div><h3 style={{margin: '0 0 6px', fontFamily: 'var(--font-display)', fontSize: '1.2rem', fontWeight: '400', color: 'var(--espresso)'}}>Conversation</h3><p style={{margin: '0'}}>We learn about your daily routine, styling habits, and what hasn't worked before. No sales pitch — just listening.</p></div></div><div className="sp-rv" style={{display: 'flex', gap: '20px', alignItems: 'flex-start', padding: '20px 0', borderBottom: '1px solid var(--cream-dark)'}}><div className="sp-sn"><span>02</span></div><div><h3 style={{margin: '0 0 6px', fontFamily: 'var(--font-display)', fontSize: '1.2rem', fontWeight: '400', color: 'var(--espresso)'}}>Measurements</h3><p style={{margin: '0'}}>Six precise points using our BGH system. Under five minutes, and we'll walk you through every step.</p></div></div><div className="sp-rv" style={{display: 'flex', gap: '20px', alignItems: 'flex-start', padding: '20px 0', borderBottom: '1px solid var(--cream-dark)'}}><div className="sp-sn"><span>03</span></div><div><h3 style={{margin: '0 0 6px', fontFamily: 'var(--font-display)', fontSize: '1.2rem', fontWeight: '400', color: 'var(--espresso)'}}>Design</h3><p style={{margin: '0'}}>Choose your length (14"–26"), texture, color, and density (130%–180%). We translate your vision into technical specs.</p></div></div><div className="sp-rv" style={{display: 'flex', gap: '20px', alignItems: 'flex-start', padding: '20px 0', borderBottom: '1px solid var(--cream-dark)'}}><div className="sp-sn"><span>04</span></div><div><h3 style={{margin: '0 0 6px', fontFamily: 'var(--font-display)', fontSize: '1.2rem', fontWeight: '400', color: 'var(--espresso)'}}>Construction</h3><p style={{margin: '0'}}>Your design goes to our vetted production team. Each strand is individually knotted by hand — a process that takes weeks, not days.</p></div></div><div className="sp-rv" style={{display: 'flex', gap: '20px', alignItems: 'flex-start', padding: '20px 0', borderBottom: '1px solid var(--cream-dark)'}}><div className="sp-sn"><span>05</span></div><div><h3 style={{margin: '0 0 6px', fontFamily: 'var(--font-display)', fontSize: '1.2rem', fontWeight: '400', color: 'var(--espresso)'}}>Inspection</h3><p style={{margin: '0'}}>We verify density uniformity, knot consistency, lace quality, baby hair placement, and cap structure before signing off.</p></div></div><div className="sp-rv" style={{display: 'flex', gap: '20px', alignItems: 'flex-start', padding: '20px 0', borderBottom: '1px solid var(--cream-dark)'}}><div className="sp-sn"><span>06</span></div><div><h3 style={{margin: '0 0 6px', fontFamily: 'var(--font-display)', fontSize: '1.2rem', fontWeight: '400', color: 'var(--espresso)'}}>Delivery</h3><p style={{margin: '0'}}>Arrives in plain, elegant packaging within 3–12 weeks depending on complexity. Includes a care guide and personal note.</p></div></div>
</div>
<div><div className="sp-iph sp-rv" style={{aspectRatio: '3/4', marginBottom: '30px'}}><div className="sp-iph"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><path d="M21 15l-5-5L5 21"/></svg><span>Custom Order</span></div></div>
<div className="sp-card sp-rv"><h3>Standard BGH Reference</h3><p style={{fontSize: '.85rem', color: 'var(--text-med)', lineHeight: '1.8'}}>Circumference: 21" · Forehead to Nape: 12.25"<br />Ear to Ear (front): 11" · Ear to Ear (over top): 11.75"<br />Temple to Temple: 14" · Nape: 5"</p>
<Link href="/measurement-guide">Full Measurement Guide →</Link></div></div>
</div></div>
<div className="sp-cta"><div><h2>Your Perfect Fit <em>Awaits</em></h2><p>Let's talk about what you need — we'll handle the rest.</p><Link href="/contact"><span>Schedule Your Consultation</span><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg></Link></div></div>
    </div>
  );
}
