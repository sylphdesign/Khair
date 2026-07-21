import type { Metadata } from 'next';
import Link from 'next/link';
import { products } from '@/data/products';
import CollectionGrid from '@/components/CollectionGrid';

export const metadata: Metadata = {
  title: "Luxury Wig Collection \u2014 Hand-Tied European & Virgin Hair | Khair Wigs",
  description: "Browse Khair's signature collection of hand-tied luxury wigs \u2014 Alisha and Amara, 18\" full lace pieces in 100% European hair, each featuring Scalp Simulation Technology\u2122. Ships in 1\u20133 days.",
  keywords: ["luxury wig collection", "European hair wigs", "virgin hair wigs", "silky straight wig", "full lace wig", "hand-tied wig", "scalp simulation wig", "buy luxury wig"],
  openGraph: {
    title: "Luxury Wig Collection \u2014 Hand-Tied European & Virgin Hair",
    description: "Signature pieces designed to disappear \u2014 so only you remain. Hand-tied full lace in silky straight European hair. Ships in 1\u20133 business days.",
    images: [{ url: "/og-collection.jpg", width: 1200, height: 630 }],
  },
  twitter: {
    title: "Luxury Wig Collection | Khair Wigs",
    description: "Hand-tied full lace wigs in silky straight European hair, with Scalp Simulation Technology\u2122. Ships in 1\u20133 days.",
  },
};

export default function Page() {
  return (
    <div className="page-wrapper">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context":"https://schema.org","@type":"CollectionPage","name":"Khair Wigs Collection","description":"Hand-tied full lace wigs in silky straight European hair, featuring Scalp Simulation Technology™.","url":"https://khairwigs.com/collection","isPartOf":{"@type":"WebSite","name":"Khair Wigs","url":"https://khairwigs.com"},"mainEntity":{"@type":"ItemList","itemListElement":products.map((p, i) => ({"@type":"ListItem","position":i+1,"url":`https://khairwigs.com/collection/${p.slug}/`,"name":p.name}))}}) }}
      />
<section className="sp-hero"><div className="hero-grain"></div><div className="sp-hero-in"><p className="sp-bc"><Link href="/">Home</Link> &nbsp;/&nbsp; Collection</p><h1>Our <em>Collection</em></h1><p>Pieces designed to disappear — so only you remain.</p></div></section>
<div className="sp-wide">
<CollectionGrid products={products} />
<div style={{textAlign: 'center', marginTop: '60px'}} className="sp-rv"><p style={{fontSize: '.9rem', color: 'var(--text-med)', maxWidth: '500px', margin: '0 auto 25px'}}>Looking for something that isn't here? Every piece can be tailored — length, color, density, and cap dimensions.</p>
<Link href="/custom-orders" className="sp-btn"><span>Start a Custom Order</span><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg></Link></div>
</div>
<div className="sp-cta"><div><h2>Ready to See the <em>Difference?</em></h2><p>It starts with a private, no-pressure conversation.</p><Link href="/contact" className="sp-btn"><span>Book a Free Consultation</span><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg></Link></div></div>
    </div>
  );
}
