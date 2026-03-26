import Link from 'next/link';

export default function Page() {
  return (
    <div className="page-wrapper">
<section className="sp-hero"><div className="hero-grain"></div><div className="sp-hero-in"><p className="sp-bc"><Link href="/home">Home</Link> &nbsp;/&nbsp; Return Policy</p><h1>Return <em>Policy</em></h1><p>Our commitment to your confidence, backed by a clear guarantee.</p></div></section>
<div className="sp-narrow">
<p className="sp-lu">Last updated: March 1, 2026</p>
<p className="sp-rv">We want you to feel completely right about your purchase.</p>
<h2 className="sp-rv">Standard Collection</h2><p className="sp-rv">Returnable within 14 days of delivery if the piece is unworn, with tags attached and original packaging intact. Email hello@khairwigs.com with your order number to begin.</p>
<h2 className="sp-rv">Custom Pieces</h2><p className="sp-rv">Because each custom wig is hand-built over weeks to your unique specifications, it cannot be returned once production starts. That said, manufacturing defects or specification mismatches are corrected at no cost. We also offer complimentary cap, density, and hairline adjustments within 30 days of delivery.</p>
<h2 className="sp-rv">Quality Guarantee</h2><p className="sp-rv">Every piece passes a multi-point inspection before it ships. If you discover a construction defect within 7 days, we'll repair or replace it at our expense.</p>
<h2 className="sp-rv">Refunds</h2><p className="sp-rv">Approved returns are processed to the original payment method within 10 business days. Shipping costs are non-refundable unless the issue is on our end.</p>
<h2 className="sp-rv">Exchanges</h2><p className="sp-rv">Available on standard collection pieces within 14 days, same condition requirements. Price differences are charged or refunded accordingly.</p>
</div>
<div className="sp-cta"><div><h2>We Stand Behind <em>Every Piece</em></h2><p>Satisfaction isn't optional — it's the whole point.</p><Link href="/contact"><span>Contact Us</span><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg></Link></div></div>
    </div>
  );
}
