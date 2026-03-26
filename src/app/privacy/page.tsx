import Link from 'next/link';

export default function Page() {
  return (
    <div className="page-wrapper">
<section className="sp-hero"><div className="hero-grain"></div><div className="sp-hero-in"><p className="sp-bc"><Link href="/home">Home</Link> &nbsp;/&nbsp; Privacy Policy</p><h1>Privacy <em>Policy</em></h1><p>How we handle your information — and why you can trust us with it.</p></div></section>
<div className="sp-narrow">
<p className="sp-lu">Last updated: March 1, 2026</p>
<p className="sp-rv">We understand our customers share sensitive details, and we treat that responsibility with the gravity it deserves.</p>
<h2 className="sp-rv">What We Collect</h2>
<div className="sp-rv"><h3>Information You Provide</h3><p>Name, email, phone, shipping and billing address, head measurements, hair preferences, and any medical context you choose to share during consultations.</p>
<h3>Information Gathered Automatically</h3><p>Device type, browser, IP address, pages visited, and referral source via cookies and analytics.</p></div>
<h2 className="sp-rv">How We Use It</h2><p className="sp-rv">Order fulfillment, customer support, shipping updates, product improvement, and marketing communications (with your explicit opt-in only).</p>
<h2 className="sp-rv">Sharing</h2><p className="sp-rv">We never sell, rent, or trade your data. Trusted service providers receive only what's necessary to fulfill your order, under strict confidentiality agreements.</p>
<h2 className="sp-rv">Security</h2><p className="sp-rv">Industry-standard encryption, secure payment processing, access controls, and regular audits. Given the personal nature of what we do, we apply additional layers of discretion beyond what's typical.</p>
<h2 className="sp-rv">Your Rights</h2><p className="sp-rv">Access, correct, or delete your data at any time. Opt out of marketing with one click. Email hello@khairwigs.com for any data requests.</p>
<h2 className="sp-rv">Cookies</h2><p className="sp-rv">Used for site functionality and analytics. Manage preferences through your browser settings.</p>
</div>
<div className="sp-cta"><div><h2>Your Privacy is <em>Sacred</em></h2><p>Questions about how we handle your data? We're happy to answer.</p><Link href="/contact"><span>Contact Us</span><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg></Link></div></div>
    </div>
  );
}
