import Link from 'next/link';

export default function Page() {
  return (
    <div className="page-wrapper">
<section className="sp-hero"><div className="hero-grain"></div><div className="sp-hero-in"><p className="sp-bc"><Link href="/home">Home</Link> &nbsp;/&nbsp; Contact Us</p><h1>Contact <em>Us</em></h1><p>Everything stays between us.</p></div></section>
<div className="sp-wide"><div className="sp-cgrid">
<div>
<h2 className="sp-rv" style={{marginTop: '0'}}>We're <em style={{fontStyle: 'italic', color: 'var(--sage)'}}>Here</em></h2>
<p className="sp-rv">Whether you're exploring options or ready to begin, there's no wrong time to reach out. Every conversation is confidential and completely pressure-free.</p>
<div className="sp-hr sp-rv"></div>
<div className="sp-rv">
<div className="sp-ci"><div className="sp-ci-icon"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--gold)" strokeWidth="1.5"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg></div><div><p style={{fontWeight: '500', color: 'var(--espresso)', marginBottom: '2px'}}>Email</p><p style={{color: 'var(--text-med)', margin: '0'}}>hello@khairwigs.com</p></div></div>
<div className="sp-ci"><div className="sp-ci-icon"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--gold)" strokeWidth="1.5"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.12.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.58 2.81.7A2 2 0 0 1 22 16.92z"/></svg></div><div><p style={{fontWeight: '500', color: 'var(--espresso)', marginBottom: '2px'}}>Phone</p><p style={{color: 'var(--text-med)', margin: '0'}}>Available upon request</p></div></div>
<div className="sp-ci"><div className="sp-ci-icon"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--gold)" strokeWidth="1.5"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg></div><div><p style={{fontWeight: '500', color: 'var(--espresso)', marginBottom: '2px'}}>Response Time</p><p style={{color: 'var(--text-med)', margin: '0'}}>Within 24 hours, Monday – Friday</p></div></div>
</div></div>
<div><div className="sp-rv" style={{background: 'var(--cream-light)', padding: '50px', border: '1px solid var(--cream-dark)'}}>
<h3 style={{fontFamily: 'var(--font-display)', fontSize: '1.3rem', fontWeight: '400', color: 'var(--espresso)', margin: '0 0 30px'}}>Send Us a Message</h3>
<div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px'}}><div className="sp-fg"><label>First Name</label><input type="text" placeholder="Your first name" /></div><div className="sp-fg"><label>Last Name</label><input type="text" placeholder="Your last name" /></div></div>
<div className="sp-fg"><label>Email</label><input type="email" placeholder="your@email.com" /></div>
<div className="sp-fg"><label>Subject</label><select><option>General Inquiry</option><option>Custom Order</option><option>Consultation</option><option>Care Support</option><option>Returns</option></select></div>
<div className="sp-fg"><label>Message</label><textarea placeholder="Tell us how we can help..."></textarea></div>
<button className="sp-btn" style={{width: '100%', justifyContent: 'center'}}><span>Send Message</span><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg></button>
<p style={{fontSize: '.75rem', color: 'var(--text-light)', marginTop: '16px', textAlign: 'center'}}>Your information is never shared.</p>
</div></div>
</div></div>
<div className="sp-cta"><div><h2>We're <em>Listening</em></h2><p>No question is too small. No timeline too early.</p><Link href="/contact"><span>Book a Free Consultation</span><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg></Link></div></div>
    </div>
  );
}
