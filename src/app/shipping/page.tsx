import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: "Shipping Information \u2014 Discreet Delivery to 12+ Countries | Khair Wigs",
  description: "Khair Wigs ships in unmarked packaging. Standard collection ships in 1\u20133 days. Domestic delivery in 2\u20137 business days. International shipping to 12+ countries. All tracked and insured.",
  keywords: ["wig shipping", "discreet wig shipping", "wig delivery time", "international wig shipping", "luxury wig shipping", "wig tracking", "Khair Wigs shipping"],
  openGraph: {
    title: "Shipping Information \u2014 Discreet & Tracked | Khair Wigs",
    description: "Unmarked packaging. Standard collection ships in 1\u20133 days. Priority and international options available. All tracked and insured.",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630 }],
  },
  twitter: {
    title: "Shipping Info | Khair Wigs",
    description: "Discreet packaging, fast shipping, tracked delivery to 12+ countries.",
  },
};

export default function Page() {
  return (
    <div className="page-wrapper">
<section className="sp-hero"><div className="hero-grain"></div><div className="sp-hero-in"><p className="sp-bc"><Link href="/home">Home</Link> &nbsp;/&nbsp; Shipping Info</p><h1>Shipping <em>Information</em></h1><p>Plain packaging. Reliable tracking. Complete peace of mind.</p></div></section>
<div className="sp-narrow">
<p className="sp-rv">We put as much thought into delivery as we do into the wigs themselves.</p>
<div className="sp-hr sp-rv"></div>
<h2 className="sp-rv" style={{marginTop: '0'}}>In-Stock Pieces</h2>
<p className="sp-rv">Our standard collection is warehoused and ready to ship. Orders go out within 1–3 business days of purchase.</p>
<h2 className="sp-rv">Packaging</h2>
<p className="sp-rv">Every shipment arrives in unmarked, elegant packaging — no logos, no product names visible, nothing that hints at what's inside.</p>
<h2 className="sp-rv">Domestic Delivery</h2>
<div className="sp-mgrid sp-rv" style={{margin: '20px 0 30px', gap: '20px'}}>
<div className="sp-card"><h3>Standard</h3><p><strong style={{color: 'var(--espresso)'}}>5–7 business days</strong> after dispatch<br />Tracked, insured, signature required.</p></div>
<div className="sp-card"><h3>Priority</h3><p><strong style={{color: 'var(--espresso)'}}>2–3 business days</strong> after dispatch<br />Expedited, tracked, insured, signature required.</p></div></div>
<h2 className="sp-rv">International</h2>
<p className="sp-rv">Available to 12+ countries. Typically 7–14 business days depending on destination and customs. All shipments tracked and insured. Import duties are the recipient's responsibility.</p>
<h2 className="sp-rv">Tracking</h2>
<p className="sp-rv">Standard collection: tracking number within 1–3 business days. Custom orders: milestone updates throughout the build, with tracking once the piece ships.</p>
<h2 className="sp-rv">Custom Order Timeline</h2>
<p className="sp-rv">Custom pieces aren't pre-made — each one is built from scratch to your exact specifications over 3–12 weeks. Once finished, it ships within one business day.</p>
<p className="sp-rv">We'll notify you at every milestone: confirmation, production start, quality review, and shipment.</p>
<div className="sp-card sp-rv" style={{marginTop: '50px'}}><h3>Shipping Question?</h3><p>Our team responds within 24 hours, Monday through Friday.</p><Link href="/contact">Reach Shipping Support →</Link></div>
</div>
<div className="sp-cta"><div><h2>Discreet from Start <em>to Finish</em></h2><p>Your privacy matters at every step.</p><Link href="/contact"><span>Contact Us</span><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg></Link></div></div>
    </div>
  );
}
