import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: "Terms of Service | Khair Wigs",
  description: "Khair Wigs terms of service. Covers ordering, payments, custom orders, intellectual property, and governing law (State of Arizona).",
  openGraph: {
    title: "Terms of Service | Khair Wigs",
    description: "Terms governing the use of Khair Wigs products and services.",
  },
  twitter: {
  },
};

export default function Page() {
  return (
    <div className="page-wrapper">
<section className="sp-hero"><div className="hero-grain"></div><div className="sp-hero-in"><p className="sp-bc"><Link href="/">Home</Link> &nbsp;/&nbsp; Terms of Service</p><h1>Terms of <em>Service</em></h1><p>The ground rules for using Khair Wigs products and services.</p></div></section>
<div className="sp-narrow">
<p className="sp-lu">Last updated: March 1, 2026</p>
<p className="sp-rv">By using our website or placing an order, you agree to the following.</p>
<h2 className="sp-rv">Eligibility</h2><p className="sp-rv">Must be 18+ or have parental consent. All information you provide must be accurate and current.</p>
<h2 className="sp-rv">Orders & Payment</h2><p className="sp-rv">Prices in USD, subject to change. Payment collected at checkout. Custom pieces may require a non-refundable deposit before work begins.</p>
<h2 className="sp-rv">Custom Orders</h2><p className="sp-rv">Each custom piece is hand-built to your specs over weeks of focused work. Quoted timelines (3–12 weeks) are estimates and may shift with complexity. Accurate measurements are your responsibility — our <Link href="/measurement-guide">guide</Link> and virtual consultations are there to help.</p>
<h2 className="sp-rv">Intellectual Property</h2><p className="sp-rv">All site content, the Khair name, logos, and proprietary technologies are protected under applicable copyright and trademark laws.</p>
<h2 className="sp-rv">Liability</h2><p className="sp-rv">To the extent allowed by law, Khair Wigs is not liable for indirect or consequential damages. Maximum liability is limited to the purchase price of the product in question.</p>
<h2 className="sp-rv">Governing Law</h2><p className="sp-rv">Governed by the laws of the State of Arizona. Disputes shall be resolved in Maricopa County courts.</p>
</div>
<div className="sp-cta"><div><h2>Questions About <em>Terms?</em></h2><p>We're happy to clarify anything.</p><Link href="/contact"><span>Get in Touch</span><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg></Link></div></div>
    </div>
  );
}
