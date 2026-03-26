import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: "Khair Wigs \u2014 Hand-Tied Luxury Wigs for Women with Hair Loss",
  description: "Hand-tied luxury wigs crafted over 100+ hours using premium virgin and European hair. Featuring Scalp Simulation Technology\u2122 for an undetectable finish. Free private consultations available.",
  keywords: ["luxury wigs", "hand-tied wigs", "human hair wigs", "wigs for hair loss", "wigs for women", "alopecia wigs", "chemo wigs", "European hair wigs", "virgin hair wigs", "scalp simulation", "natural looking wigs", "Khair Wigs"],
  openGraph: {
    title: "Khair Wigs \u2014 Hand-Tied Luxury Wigs for Women with Hair Loss",
    description: "~120,000 strands of premium virgin and European hair, hand-tied over 100+ hours with Scalp Simulation Technology\u2122. So realistic, no one will know but you.",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630 }],
  },
  twitter: {
    title: "Khair Wigs \u2014 Hand-Tied Luxury Wigs for Women",
    description: "~120,000 strands of premium hair, hand-tied over 100+ hours with Scalp Simulation Technology\u2122. So realistic, no one will know but you.",
  },
};

export default function Page() {
  return (
    <div className="page-wrapper">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context":"https://schema.org","@type":"Organization","name":"Khair Wigs","url":"https://khairwigs.com","logo":"https://khairwigs.com/logo.png","description":"Hand-tied luxury wigs for women experiencing hair loss. Each piece crafted over 100+ hours using premium virgin and European hair with Scalp Simulation Technology\u2122.","contactPoint":{"@type":"ContactPoint","email":"hello@khairwigs.com","contactType":"customer service","availableLanguage":"English"},"sameAs":["https://www.instagram.com/khairwigs","https://www.facebook.com/khairwigs","https://www.tiktok.com/@khairwigs"]}) }}
      />
{/*  HERO  */}
<section className="hero" id="hero">
  <div className="hero-bg"></div>
  <div className="hero-grain"></div>
  <div className="hero-lines"></div>
  <div className="hero-content">
    <p className="hero-eyebrow">Hand-Tied Luxury Since Day One</p>
    <h1 className="hero-title">Your Hair Didn't<br />Define You.<br /><em>Until You Lost It.</em></h1>
    <p className="hero-subtitle">~120,000 strands of top-quality virgin and European hair, hand-tied over 100+ hours with Scalp Simulation Technology™ so realistic — no one will know but you.</p>
    <div className="hero-actions">
      <a href="#collection" className="btn-primary">
        <span>Explore Collection</span>
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
      </a>
      <a href="#cta" className="btn-secondary">Book a Consultation</a>
    </div>
  </div>
  <div className="hero-visual">
    <div className="hero-circle">
      <div className="hero-image-placeholder">
        <span>Hero Image</span>
        <small>Place Product Photo</small>
      </div>
    </div>
  </div>
  <div className="hero-scroll">
    <div className="hero-scroll-line"></div>
    <span>Scroll</span>
  </div>
</section>

{/*  MARQUEE  */}
<div className="marquee-section">
  <div className="marquee-track">
    <div className="marquee-item"><span>100+ Hours of Craftsmanship</span><div className="marquee-dot"></div></div>
    <div className="marquee-item"><span>~120,000 Individual Strands</span><div className="marquee-dot"></div></div>
    <div className="marquee-item"><span>Scalp Simulation Technology™</span><div className="marquee-dot"></div></div>
    <div className="marquee-item"><span>Finest European Hair</span><div className="marquee-dot"></div></div>
    <div className="marquee-item"><span>Hand-Tied Full Lace</span><div className="marquee-dot"></div></div>
    <div className="marquee-item"><span>Custom Fit Available</span><div className="marquee-dot"></div></div>
    {/*  Duplicate for seamless loop  */}
    <div className="marquee-item"><span>100+ Hours of Craftsmanship</span><div className="marquee-dot"></div></div>
    <div className="marquee-item"><span>~120,000 Individual Strands</span><div className="marquee-dot"></div></div>
    <div className="marquee-item"><span>Scalp Simulation Technology™</span><div className="marquee-dot"></div></div>
    <div className="marquee-item"><span>Finest European Hair</span><div className="marquee-dot"></div></div>
    <div className="marquee-item"><span>Hand-Tied Full Lace</span><div className="marquee-dot"></div></div>
    <div className="marquee-item"><span>Custom Fit Available</span><div className="marquee-dot"></div></div>
  </div>
</div>

{/*  STATS  */}
<section className="stats-section">
  <div className="stats-grid">
    <div className="stat-card reveal delay-1">
      <div className="stat-number"><span className="counter" data-target="100">0</span><span className="stat-suffix">+</span></div>
      <div className="stat-label">Hours Per Wig</div>
    </div>
    <div className="stat-card reveal delay-2">
      <div className="stat-number">~<span className="counter" data-target="120">0</span><span className="stat-suffix">K</span></div>
      <div className="stat-label">Individual Strands</div>
    </div>
    <div className="stat-card reveal delay-3">
      <div className="stat-number"><span className="counter" data-target="46">0</span><span className="stat-suffix">M</span></div>
      <div className="stat-label">Women Affected in U.S.</div>
    </div>
    <div className="stat-card reveal delay-4">
      <div className="stat-number"><span className="counter" data-target="12">0</span><span className="stat-suffix">+</span></div>
      <div className="stat-label">Countries Served</div>
    </div>
  </div>
</section>

{/*  COLLECTION  */}
<section className="section collection-section" id="collection">
  <div className="collection-header reveal">
    <p className="section-eyebrow">Our Collection</p>
    <h2 className="section-title">Made to Look Like Yours.<br /><em>But Better.</em></h2>
    <p className="section-desc">Each piece is thoughtfully designed based on 15 years of firsthand experience with hair loss. Each unit is crafted to our precise standards using premium virgin and European hair, enhanced with Scalp Simulation Technology™ for the most natural appearance.</p>
  </div>
  <div className="collection-grid">
    <div className="collection-card reveal delay-1">
      <div className="collection-card-image">
        <div className="collection-card-placeholder">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><path d="M21 15l-5-5L5 21"/></svg>
          <span>Product Image</span>
        </div>
        <div className="collection-card-overlay"></div>
        <div className="collection-card-info">
          <h3>European Silky Straight</h3>
          <p>18" · Color 1B Natural Virgin · 130% Density</p>
        </div>
      </div>
      <div className="collection-card-bottom">
        <h3>European Silky Straight</h3>
        <p>Full Lace · Scalp Simulation Technology™</p>
      </div>
    </div>
    <div className="collection-card reveal delay-2">
      <div className="collection-card-image">
        <div className="collection-card-placeholder">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><path d="M21 15l-5-5L5 21"/></svg>
          <span>Product Image</span>
        </div>
        <div className="collection-card-overlay"></div>
        <div className="collection-card-info">
          <h3>Natural Body Wave</h3>
          <p>20" · Custom Color Match · 150% Density</p>
        </div>
      </div>
      <div className="collection-card-bottom">
        <h3>Natural Body Wave</h3>
        <p>Full Lace · Custom Fit</p>
      </div>
    </div>
    <div className="collection-card reveal delay-3">
      <div className="collection-card-image">
        <div className="collection-card-placeholder">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><path d="M21 15l-5-5L5 21"/></svg>
          <span>Product Image</span>
        </div>
        <div className="collection-card-overlay"></div>
        <div className="collection-card-info">
          <h3>Deep Curl Luxury</h3>
          <p>22" · Virgin European · 130% Density</p>
        </div>
      </div>
      <div className="collection-card-bottom">
        <h3>Deep Curl Luxury</h3>
        <p>Full Lace · Baby Hair Detail</p>
      </div>
    </div>
  </div>
  <div className="collection-cta reveal">
    <a href="#" className="btn-primary" style={{background: 'var(--espresso)', color: 'var(--cream)'}}>
      <span>View All Styles</span>
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
    </a>
  </div>
</section>

{/*  CRAFTSMANSHIP  */}
<section className="section craft-section" id="craft">
  <div className="craft-grid">
    <div className="craft-content">
      <p className="section-eyebrow reveal">The Art of Khair</p>
      <h2 className="section-title reveal delay-1">Curated by Experience.<br /><em>Perfected by Obsession.</em></h2>
      <p className="section-desc reveal delay-2">Mass-produced wigs are made in hours. A Khair wig takes weeks. Each piece is created to our precise specifications by a trusted production partner we spent years carefully selecting. Every strand is hand-tied, baby hairs are individually shaped, and density calibrated so the part line mimics real scalp—not fabric.</p>
      <div className="craft-features">
        <div className="craft-feature reveal delay-2">
          <div className="craft-feature-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>
          </div>
          <div>
            <h4>Scalp Simulation Technology™</h4>
            <p>The part line mimics real skin — the #1 giveaway, eliminated entirely.</p>
          </div>
        </div>
        <div className="craft-feature reveal delay-3">
          <div className="craft-feature-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>
          </div>
          <div>
            <h4>100+ Hours of Precision</h4>
            <p>Every strand hand-tied to our exact specifications. Over a dozen quality checkpoints before delivery.</p>
          </div>
        </div>
        <div className="craft-feature reveal delay-4">
          <div className="craft-feature-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>
          </div>
          <div>
            <h4>Baby Hair Detailing</h4>
            <p>Extra baby hairs along the front hairline and part for a completely seamless, undetectable edge.</p>
          </div>
        </div>
      </div>
    </div>
    <div className="craft-visual reveal-right">
      <div className="craft-image-main">
        <span>Artisan Craft Image</span>
        <small>Place Behind-the-Scenes Photo</small>
      </div>
      <div className="craft-float-card">
        <div className="stat-number">~120<span className="stat-suffix">K</span></div>
        <div className="stat-label">Individual Strands</div>
      </div>
    </div>
  </div>
</section>

{/*  PROCESS  */}
<section className="section process-section" id="process">
  <div className="process-header">
    <p className="section-eyebrow reveal">Your Journey</p>
    <h2 className="section-title reveal delay-1">From Consultation<br /><em>to Confidence</em></h2>
    <p className="section-desc reveal delay-2">A guided experience built around your needs and your measurements.</p>
  </div>
  <div className="process-timeline">
    <div className="process-step reveal delay-1">
      <div className="process-step-number"><span>01</span></div>
      <h3>Private Consultation</h3>
      <p>A compassionate, pressure-free conversation about your needs, preferences, and lifestyle.</p>
    </div>
    <div className="process-step reveal delay-2">
      <div className="process-step-number"><span>02</span></div>
      <h3>Custom Measurements</h3>
      <p>Six-point BGH measurement system ensures a fit that's uniquely yours. Takes under five minutes.</p>
    </div>
    <div className="process-step reveal delay-3">
      <div className="process-step-number"><span>03</span></div>
      <h3>Production</h3>
      <p>Your specifications are sent to our team. Over 100+ hours of hand-tied precision per piece.</p>
    </div>
    <div className="process-step reveal delay-4">
      <div className="process-step-number"><span>04</span></div>
      <h3>Discreet Delivery</h3>
      <p>Your Khair wig arrives within 3–12 weeks in elegant, discreet packaging with a complete care guide included.</p>
    </div>
  </div>
</section>

{/*  TESTIMONIALS  */}
<section className="section testimonials-section" id="testimonials">
  <div className="testimonials-header">
    <p className="section-eyebrow reveal">Stories</p>
    <h2 className="section-title reveal delay-1">They Tried Everything.<br /><em>Then They Found Khair.</em></h2>
  </div>
  <div className="testimonials-slider reveal delay-2">
    <div className="testimonial-card active" data-index="0">
      <div className="testimonial-quote-mark">&ldquo;</div>
      <p className="testimonial-text">For the first time in three years, I didn't think about my hair once today. I just lived. That's the gift Khair gave me.</p>
      <p className="testimonial-author">Sarah M.</p>
      <p className="testimonial-context">Atlanta &bull; Living with alopecia for 8 years</p>
    </div>
    <div className="testimonial-card" data-index="1">
      <div className="testimonial-quote-mark">&ldquo;</div>
      <p className="testimonial-text">My husband cried when he saw me. He said I looked like myself again. I didn't realize how much I'd lost until I got it back.</p>
      <p className="testimonial-author">Maria L.</p>
      <p className="testimonial-context">Los Angeles &bull; Post-chemotherapy recovery</p>
    </div>
    <div className="testimonial-card" data-index="2">
      <div className="testimonial-quote-mark">&ldquo;</div>
      <p className="testimonial-text">I've worn wigs for twelve years. This is the first one I've ever forgotten I was wearing. The scalp — it looks like my skin.</p>
      <p className="testimonial-author">Diane K.</p>
      <p className="testimonial-context">London &bull; Female pattern hair loss</p>
    </div>
    <div className="testimonial-nav">
      <div className="testimonial-dot active" data-index="0"></div>
      <div className="testimonial-dot" data-index="1"></div>
      <div className="testimonial-dot" data-index="2"></div>
    </div>
    <div className="testimonial-arrows">
      <button className="testimonial-arrow" id="prevTestimonial" aria-label="Previous testimonial">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
      </button>
      <button className="testimonial-arrow" id="nextTestimonial" aria-label="Next testimonial">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
      </button>
    </div>
  </div>
</section>

{/*  CTA SECTION  */}
<section className="cta-section" id="cta">
  <div className="cta-content">
    <p className="section-eyebrow reveal">Begin Your Journey</p>
    <h2 className="section-title reveal delay-1">You've Waited<br /><em>Long Enough.</em></h2>
    <p className="section-desc reveal delay-2">We don't believe in rushing craftsmanship. We don't mass-produce. We don't rush. Each Khair wig is crafted to our exact specifications with thoughtful attention to every detail and the level of care you deserve.</p>
    <div className="cta-actions reveal delay-3">
      <a href="#" className="btn-primary">
        <span>Shop the Collection</span>
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
      </a>
      <a href="#" className="btn-secondary" style={{color: 'var(--cream-dark)', borderColor: 'rgba(196,162,101,0.3)'}}>Book a Free Consultation</a>
    </div>
    <div className="cta-trust reveal delay-4">
      <span>Discreet Shipping</span>
      <div className="cta-trust-dot"></div>
      <span>Private Consultations</span>
      <div className="cta-trust-dot"></div>
      <span>Satisfaction Guarantee</span>
    </div>
  </div>
</section>
    </div>
  );
}
