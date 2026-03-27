import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: "Luxury Wig Collection \u2014 Hand-Tied European & Virgin Hair | Khair Wigs",
  description: "Browse Khair's signature collection of hand-tied luxury wigs. European Silky Straight, Natural Body Wave, Deep Curl, and more \u2014 all featuring full lace and Scalp Simulation Technology\u2122. Ships in 1\u20133 days.",
  keywords: ["luxury wig collection", "European hair wigs", "virgin hair wigs", "silky straight wig", "body wave wig", "deep curl wig", "full lace wig", "hand-tied wig", "buy luxury wig"],
  openGraph: {
    title: "Luxury Wig Collection \u2014 Hand-Tied European & Virgin Hair",
    description: "Signature pieces designed to disappear \u2014 so only you remain. Straight, wavy, and curly styles available. Ships in 1\u20133 business days.",
    images: [{ url: "/og-collection.jpg", width: 1200, height: 630 }],
  },
  twitter: {
    title: "Luxury Wig Collection | Khair Wigs",
    description: "Hand-tied European and virgin hair wigs. Straight, wavy, and curly styles. Ships in 1\u20133 days.",
  },
};

export default function Page() {
  return (
    <div className="page-wrapper">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context":"https://schema.org","@type":"CollectionPage","name":"Khair Wigs Collection","description":"Hand-tied luxury wigs in straight, wavy, and curly styles using premium virgin and European hair.","url":"https://khairwigs.com/collection","isPartOf":{"@type":"WebSite","name":"Khair Wigs","url":"https://khairwigs.com"}}) }}
      />
<section className="sp-hero"><div className="hero-grain"></div><div className="sp-hero-in"><p className="sp-bc"><Link href="/">Home</Link> &nbsp;/&nbsp; Collection</p><h1>Our <em>Collection</em></h1><p>Pieces designed to disappear — so only you remain.</p></div></section>
<div className="sp-wide">
<div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '50px', flexWrap: 'wrap', gap: '20px'}}>
<div><h2 style={{margin: '0', fontFamily: 'var(--font-display)', fontSize: '2rem', fontWeight: '300', color: 'var(--espresso)'}}>Signature <em style={{fontStyle: 'italic', color: 'var(--sage)'}}>Pieces</em></h2>
<p style={{margin: '4px 0 0', fontSize: '.95rem', color: 'var(--text-med)', fontWeight: '300'}}>Each style reflects a decade and a half of real-world testing and refinement.</p></div>
<div className="sp-filtbar" id="collFilters">
<button className="on" data-f="All">All</button><button data-f="Straight">Straight</button><button data-f="Wavy">Wavy</button><button data-f="Curly">Curly</button>
</div></div>
<div className="sp-pgrid" id="collGrid">
<div className="sp-pcard sp-rv" data-cat="Straight"><div className="sp-pimg"><div className="sp-iph"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><path d="M21 15l-5-5L5 21"/></svg><span>Product</span></div><div className="sp-badge">Signature</div></div><div className="sp-pinfo"><h3>European Silky Straight</h3><p>18" · Color 1B Natural Virgin · 130% Density</p><p style={{fontSize: '.75rem', color: 'var(--text-light)'}}>Full Lace · Proprietary Scalp Tech</p></div></div>
<div className="sp-pcard sp-rv" data-cat="Wavy"><div className="sp-pimg"><div className="sp-iph"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><path d="M21 15l-5-5L5 21"/></svg><span>Product</span></div><div className="sp-badge">Popular</div></div><div className="sp-pinfo"><h3>Natural Body Wave</h3><p>20" · Custom Color Match · 150% Density</p><p style={{fontSize: '.75rem', color: 'var(--text-light)'}}>Full Lace · Custom Fit Available</p></div></div>
<div className="sp-pcard sp-rv" data-cat="Curly"><div className="sp-pimg"><div className="sp-iph"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><path d="M21 15l-5-5L5 21"/></svg><span>Product</span></div><div className="sp-badge">New</div></div><div className="sp-pinfo"><h3>Deep Curl Luxury</h3><p>22" · Virgin European · 130% Density</p><p style={{fontSize: '.75rem', color: 'var(--text-light)'}}>Full Lace · Baby Hair Detail</p></div></div>
<div className="sp-pcard sp-rv" data-cat="Straight"><div className="sp-pimg"><div className="sp-iph"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><path d="M21 15l-5-5L5 21"/></svg><span>Product</span></div></div><div className="sp-pinfo"><h3>Classic Straight Long</h3><p>24" · Color 2 Darkest Brown · 130% Density</p><p style={{fontSize: '.75rem', color: 'var(--text-light)'}}>Full Lace · Proprietary Scalp Tech</p></div></div>
<div className="sp-pcard sp-rv" data-cat="Wavy"><div className="sp-pimg"><div className="sp-iph"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><path d="M21 15l-5-5L5 21"/></svg><span>Product</span></div></div><div className="sp-pinfo"><h3>Soft Wave Bob</h3><p>14" · Color 1B Natural · 150% Density</p><p style={{fontSize: '.75rem', color: 'var(--text-light)'}}>Full Lace · Lightweight Cap</p></div></div>
<div className="sp-pcard sp-rv" data-cat="Curly"><div className="sp-pimg"><div className="sp-iph"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><path d="M21 15l-5-5L5 21"/></svg><span>Product</span></div></div><div className="sp-pinfo"><h3>Romantic Loose Curl</h3><p>20" · Custom Color · 130% Density</p><p style={{fontSize: '.75rem', color: 'var(--text-light)'}}>Full Lace · Hand-Tied Throughout</p></div></div>
</div>
<div style={{textAlign: 'center', marginTop: '60px'}} className="sp-rv"><p style={{fontSize: '.9rem', color: 'var(--text-med)', maxWidth: '500px', margin: '0 auto 25px'}}>Looking for something that isn't here? Every piece can be tailored — length, color, density, and cap dimensions.</p>
<Link href="/custom-orders"><span>Start a Custom Order</span><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg></Link></div>
</div>
<div className="sp-cta"><div><h2>Ready to See the <em>Difference?</em></h2><p>It starts with a private, no-pressure conversation.</p><Link href="/contact"><span>Book a Free Consultation</span><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg></Link></div></div>
    </div>
  );
}
