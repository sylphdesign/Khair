import Link from 'next/link';

export default function Page() {
  return (
    <div className="page-wrapper">
<section className="sp-hero"><div className="hero-grain"></div><div className="sp-hero-in"><p className="sp-bc"><Link href="/home">Home</Link> &nbsp;/&nbsp; Measurement Guide</p><h1>Measurement <em>Guide</em></h1><p>Six points. Five minutes. A fit that disappears.</p></div></section>
<div className="sp-wide"><div className="sp-mgrid">
<div>
<p className="sp-rv">Accurate measurements are the foundation of an invisible fit. Follow our six-point system — it's quick, and you can do it at home.</p>
<div className="sp-hr sp-rv"></div><h2 className="sp-rv" style={{marginTop: '0'}}>You'll Need</h2>
<p className="sp-rv">A soft fabric measuring tape, a mirror, and optionally a second person for easier readings.</p>
<div className="sp-hr sp-rv"></div><h2 className="sp-rv">The 6-Point BGH System</h2>

<div className="sp-mp sp-rv"><div className="sp-mpn">1</div><div><h4 style={{fontFamily: 'var(--font-display)', fontSize: '1.05rem', fontWeight: '400', color: 'var(--espresso)', marginBottom: '4px'}}>Circumference <span style={{fontWeight: '300', color: 'var(--gold)', fontSize: '.85rem'}}>Standard: 21"</span></h4><p style={{fontSize: '.85rem', color: 'var(--text-med)', lineHeight: '1.6', margin: '0'}}>Around the full perimeter — starting at center front hairline, behind each ear, along the nape, and back to start.</p></div></div>
<div className="sp-mp sp-rv"><div className="sp-mpn">2</div><div><h4 style={{fontFamily: 'var(--font-display)', fontSize: '1.05rem', fontWeight: '400', color: 'var(--espresso)', marginBottom: '4px'}}>Forehead to Nape <span style={{fontWeight: '300', color: 'var(--gold)', fontSize: '.85rem'}}>Standard: 12.25"</span></h4><p style={{fontSize: '.85rem', color: 'var(--text-med)', lineHeight: '1.6', margin: '0'}}>From center front hairline, straight over the crown, down to where the hairline ends at the nape.</p></div></div>
<div className="sp-mp sp-rv"><div className="sp-mpn">3</div><div><h4 style={{fontFamily: 'var(--font-display)', fontSize: '1.05rem', fontWeight: '400', color: 'var(--espresso)', marginBottom: '4px'}}>Ear to Ear (Front) <span style={{fontWeight: '300', color: 'var(--gold)', fontSize: '.85rem'}}>Standard: 11"</span></h4><p style={{fontSize: '.85rem', color: 'var(--text-med)', lineHeight: '1.6', margin: '0'}}>From directly in front of one ear, crossing the front hairline, to the same point on the other side.</p></div></div>
<div className="sp-mp sp-rv"><div className="sp-mpn">4</div><div><h4 style={{fontFamily: 'var(--font-display)', fontSize: '1.05rem', fontWeight: '400', color: 'var(--espresso)', marginBottom: '4px'}}>Ear to Ear (Over Top) <span style={{fontWeight: '300', color: 'var(--gold)', fontSize: '.85rem'}}>Standard: 11.75"</span></h4><p style={{fontSize: '.85rem', color: 'var(--text-med)', lineHeight: '1.6', margin: '0'}}>From the top of one ear, over the highest point of your head, to the top of the other.</p></div></div>
<div className="sp-mp sp-rv"><div className="sp-mpn">5</div><div><h4 style={{fontFamily: 'var(--font-display)', fontSize: '1.05rem', fontWeight: '400', color: 'var(--espresso)', marginBottom: '4px'}}>Temple to Temple (Back) <span style={{fontWeight: '300', color: 'var(--gold)', fontSize: '.85rem'}}>Standard: 14"</span></h4><p style={{fontSize: '.85rem', color: 'var(--text-med)', lineHeight: '1.6', margin: '0'}}>From one temple, around the back of the head along the occipital bone, to the other.</p></div></div>
<div className="sp-mp sp-rv"><div className="sp-mpn">6</div><div><h4 style={{fontFamily: 'var(--font-display)', fontSize: '1.05rem', fontWeight: '400', color: 'var(--espresso)', marginBottom: '4px'}}>Nape Width <span style={{fontWeight: '300', color: 'var(--gold)', fontSize: '.85rem'}}>Standard: 5"</span></h4><p style={{fontSize: '.85rem', color: 'var(--text-med)', lineHeight: '1.6', margin: '0'}}>The width of your hairline at the very base of the neck.</p></div></div>
</div>
<div><div className="sp-iph sp-rv" style={{aspectRatio: '1/1', position: 'sticky', top: '120px'}}><div className="sp-iph"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><path d="M21 15l-5-5L5 21"/></svg><span>Measurement Diagram</span></div></div></div>
</div>
<div className="sp-card sp-rv" style={{textAlign: 'center', maxWidth: '600px', margin: '60px auto 0'}}><h3>Prefer Guided Help?</h3><p>Book a free virtual session and we'll walk through each measurement with you live.</p>
<Link href="/contact"><span>Book Measurement Session</span><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg></Link></div>
</div>
<div className="sp-cta"><div><h2>The Right Fit Makes <em>Everything</em></h2><p>Five minutes of measuring. Years of confidence.</p><Link href="/contact"><span>Get Started</span><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg></Link></div></div>
    </div>
  );
}
