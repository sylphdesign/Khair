import type { Metadata } from 'next';
import Link from 'next/link';
import { products, categories } from '@/data/products';
import { ProductCard } from '@/components/ProductCard';

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
        dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context":"https://schema.org","@type":"CollectionPage","name":"Khair Wigs Collection","description":"Hand-tied luxury wigs in straight, wavy, and curly styles using premium virgin and European hair.","url":"https://khairwigs.com/collection","isPartOf":{"@type":"WebSite","name":"Khair Wigs","url":"https://khairwigs.com"},"mainEntity":{"@type":"ItemList","itemListElement":products.map((p, i) => ({"@type":"ListItem","position":i+1,"url":`https://khairwigs.com/collection/${p.slug}/`,"name":p.name}))}}) }}
      />
<section className="sp-hero"><div className="hero-grain"></div><div className="sp-hero-in"><p className="sp-bc"><Link href="/">Home</Link> &nbsp;/&nbsp; Collection</p><h1>Our <em>Collection</em></h1><p>Pieces designed to disappear — so only you remain.</p></div></section>
<div className="sp-wide">
<div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '50px', flexWrap: 'wrap', gap: '20px'}}>
<div><h2 style={{margin: '0', fontFamily: 'var(--font-display)', fontSize: '2rem', fontWeight: '300', color: 'var(--espresso)'}}>Signature <em style={{fontStyle: 'italic', color: 'var(--sage)'}}>Pieces</em></h2>
<p style={{margin: '4px 0 0', fontSize: '.95rem', color: 'var(--text-med)', fontWeight: '300'}}>Each style reflects a decade and a half of real-world testing and refinement.</p></div>
<div className="sp-filtbar" id="collFilters">
{categories.map((c) => (
  <button key={c} className={c === 'All' ? 'on' : undefined} data-f={c}>{c}</button>
))}
</div></div>
<div className="sp-pgrid" id="collGrid">
{products.map((p) => <ProductCard key={p.slug} product={p} />)}
</div>
<div style={{textAlign: 'center', marginTop: '60px'}} className="sp-rv"><p style={{fontSize: '.9rem', color: 'var(--text-med)', maxWidth: '500px', margin: '0 auto 25px'}}>Looking for something that isn't here? Every piece can be tailored — length, color, density, and cap dimensions.</p>
<Link href="/custom-orders" className="sp-btn"><span>Start a Custom Order</span><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg></Link></div>
</div>
<div className="sp-cta"><div><h2>Ready to See the <em>Difference?</em></h2><p>It starts with a private, no-pressure conversation.</p><Link href="/contact" className="sp-btn"><span>Book a Free Consultation</span><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg></Link></div></div>
    </div>
  );
}
