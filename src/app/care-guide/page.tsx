import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: "Wig Care Guide \u2014 How to Wash, Style & Maintain Luxury Human Hair Wigs | Khair Wigs",
  description: "Complete care instructions for your Khair wig. Learn how to wash, brush, heat-style, color, and store your hand-tied human hair wig for maximum longevity.",
  keywords: ["wig care guide", "how to wash human hair wig", "wig maintenance", "wig storage", "heat styling wig", "coloring human hair wig", "wig care tips", "luxury wig care"],
  openGraph: {
    title: "Wig Care Guide \u2014 Washing, Styling & Maintenance",
    description: "Keep your Khair wig looking beautiful for years. Daily care, washing technique, heat styling limits, and product recommendations.",
    images: [{ url: "/og-care.jpg", width: 1200, height: 630 }],
    type: "article",
  },
  twitter: {
    title: "Luxury Wig Care Guide | Khair Wigs",
    description: "Daily care, washing, heat styling, and storage tips for your hand-tied human hair wig.",
  },
};

export default function Page() {
  return (
    <div className="page-wrapper">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context":"https://schema.org","@type":"HowTo","name":"How to Care for a Luxury Human Hair Wig","description":"Complete care guide for hand-tied human hair wigs including daily care, washing, styling, and storage.","step":[{"@type":"HowToStep","name":"Daily Brushing","text":"Use a wide-tooth comb or wig brush. Start from the ends and work upward to protect hand-tied knots."},{"@type":"HowToStep","name":"Washing","text":"Every 8\u201312 wears with lukewarm water and sulfate-free shampoo. Swirl gently, never scrub. Condition mid-shaft to ends."},{"@type":"HowToStep","name":"Drying","text":"Blot with microfiber towel. Air dry completely on a wig stand before wearing or styling."},{"@type":"HowToStep","name":"Heat Styling","text":"Curl, straighten, or blow-dry below 350\u00b0F (175\u00b0C) with heat protectant."},{"@type":"HowToStep","name":"Storage","text":"Place on a silk or satin wig stand away from direct sunlight and heat sources."}]}) }}
      />
<section className="sp-hero"><div className="hero-grain"></div><div className="sp-hero-in"><p className="sp-bc"><Link href="/">Home</Link> &nbsp;/&nbsp; Care Guide</p><h1>Care <em>Guide</em></h1><p>Treat it well and it'll reward you for years.</p></div></section>
<div className="sp-narrow">
<p className="sp-rv">Your Khair piece is built from premium human hair with hand-knotted construction. That means it responds to care much like your own hair — with a few important differences.</p>
<div className="sp-hr sp-rv"></div>
<h2 className="sp-rv">Daily Routine</h2>
<div className="sp-rv"><h3>Brushing</h3><p>Start from the tips and work upward using a wide-tooth comb or dedicated wig brush. This protects the hand-tied knots from unnecessary pulling.</p>
<h3>Storage</h3><p>A silk or satin wig stand maintains the shape between wears. Keep it away from direct sunlight, radiators, and humidity. Never crumple or fold it.</p>
<h3>Sleeping</h3><p>If you wear it overnight, a silk bonnet or silk pillowcase minimizes friction and reduces tangling significantly.</p></div>
<div className="sp-hr sp-rv"></div>
<h2 className="sp-rv">Washing</h2>
<div className="sp-rv"><h3>How Often</h3><p>Roughly every 8–12 wears, or whenever product buildup becomes noticeable. Over-washing shortens lifespan.</p>
<h3>Technique</h3><p>Lukewarm water and sulfate-free shampoo. Swirl gently — never scrub or twist. Apply conditioner mid-shaft to ends, avoiding the cap and knot base.</p>
<h3>Drying</h3><p>Blot with microfiber (never wring). Air-dry completely on a stand before wearing or restyling.</p></div>
<div className="sp-hr sp-rv"></div>
<h2 className="sp-rv">Styling</h2>
<div className="sp-rv"><h3>Heat Tools</h3><p>Curling irons, flat irons, and blow dryers all work — it's real human hair. Use heat protectant and stay under 350°F (175°C).</p>
<h3>Color</h3><p>Professional dyeing and toning are safe. Semi-permanent options are gentler on the hair. Work with a stylist experienced with wig construction.</p>
<h3>Products</h3><p>Lightweight, alcohol-free formulas work best. Avoid heavy oils near the cap. A touch of argan or silk serum on the ends adds natural luster.</p></div>
<div className="sp-hr sp-rv"></div>
<h2 className="sp-rv">Avoid These</h2>
<ul className="sp-rv"><li>Sulfates and harsh detergents</li><li>Cotton pillowcases without a protective layer</li><li>Heat above 350°F / 175°C</li><li>Chlorine or saltwater without protection</li><li>Pulling or tugging at the lace edges</li><li>Storing in plastic bags (traps moisture)</li></ul>
<div className="sp-card sp-rv" style={{marginTop: '50px'}}><h3>Have Questions?</h3><p>We offer one-on-one care sessions for every Khair owner — just reach out.</p><Link href="/contact">Talk to Our Care Team →</Link></div>
</div>
<div className="sp-cta"><div><h2>Invest in What <em>Matters</em></h2><p>Proper care keeps your piece looking flawless, wear after wear.</p><Link href="/contact"><span>Get Personalized Care Advice</span><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg></Link></div></div>
    </div>
  );
}
