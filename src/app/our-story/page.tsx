import Link from 'next/link';

export default function Page() {
  return (
    <div className="page-wrapper">
<section className="sp-hero"><div className="hero-grain"></div><div className="sp-hero-in"><p className="sp-bc"><Link href="/home">Home</Link> &nbsp;/&nbsp; Our Story</p><h1>Our <em>Story</em></h1><p>What happens when someone who's lived it decides no one else should settle.</p></div></section>
<div className="sp-narrow">
<div className="sp-rv"><h2 style={{marginTop: '0'}}>Where It Started</h2>
<p>Khair didn't begin as a brand. It began in a bathroom mirror. Our founder spent over fifteen years navigating hair loss — the disappointing wigs, the well-meaning but useless advice, the quiet feeling that nothing available was made with her in mind.</p>
<p>She tested dozens of manufacturers across multiple countries. Rejected hundreds of samples. Kept raising the bar on what "good enough" should actually mean. Eventually, she found a production partner capable of matching her standards — and Khair was born out of that partnership.</p></div>
<div className="sp-hr sp-rv"></div>
<div className="sp-rv"><h2>What <em style={{fontStyle: 'italic', color: 'var(--sage)'}}>Drives Us</em></h2>
<p>We don't operate a factory. We operate a quality filter. Every wig that carries the Khair name has been specified down to the knot pattern, hair grade, density taper, and lace type — then inspected against those specs before it reaches a customer.</p>
<p>Our founder still personally signs off on the specs for every new style. If she wouldn't wear it herself, it doesn't ship.</p></div>
<div className="sp-mgrid sp-rv" style={{margin: '50px 0', gap: '24px'}}><div className="sp-iph" style={{aspectRatio: '4/3'}}><div className="sp-iph"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><path d="M21 15l-5-5L5 21"/></svg><span>Founder's Journey</span></div></div><div className="sp-iph" style={{aspectRatio: '4/3'}}><div className="sp-iph"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><path d="M21 15l-5-5L5 21"/></svg><span>Finished Piece</span></div></div></div>
<div className="sp-rv"><h2>Who This Is For</h2>
<p>46 million women in the U.S. deal with hair loss. Close to 900,000 face chemotherapy-related loss each year. For many, it triggers anxiety, social withdrawal, and a fractured sense of identity.</p>
<p>Khair exists for these women — not as a fashion accessory, but as a restoration of something deeply personal. Every interaction is shaped by that understanding.</p></div>
<div className="sp-hr sp-rv"></div>
<div className="sp-rv"><h2>Three Commitments</h2>
<div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(220px,1fr))', gap: '20px', marginTop: '30px'}}>
<div className="sp-card"><h3>Invisible Results</h3><p>Proprietary scalp construction and hand-knotted density make the wig vanish — leaving only you.</p></div>
<div className="sp-card"><h3>Total Discretion</h3><p>From your first inquiry to unmarked delivery, every touchpoint is designed to protect your privacy.</p></div>
<div className="sp-card"><h3>Zero Compromise</h3><p>Fifteen years of firsthand experience behind every decision. We'd rather delay than deliver something subpar.</p></div>
</div></div>
</div>
<div className="sp-cta"><div><h2>Every Wig Tells <em>a Story</em></h2><p>Let us help you write the next chapter of yours.</p><Link href="/contact"><span>Start the Conversation</span><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg></Link></div></div>
    </div>
  );
}
