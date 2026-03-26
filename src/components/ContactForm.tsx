'use client';

import { useState } from 'react';

export default function ContactForm() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('loading');

    const formData = new FormData(e.currentTarget);
    const data = {
      firstName: formData.get('firstName'),
      lastName: formData.get('lastName'),
      email: formData.get('email'),
      subject: formData.get('subject'),
      message: formData.get('message'),
    };

    const webhookUrl = process.env.NEXT_PUBLIC_N8N_WEBHOOK_URL;
    
    if (!webhookUrl) {
      console.error("Missing NEXT_PUBLIC_N8N_WEBHOOK_URL environment variable");
      setStatus('error');
      // For local testing without n8n, uncomment this to simulate success:
      // setTimeout(() => setStatus('success'), 1000);
      return;
    }

    try {
      const response = await fetch(webhookUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setStatus('success');
      } else {
        setStatus('error');
      }
    } catch (err) {
      console.error(err);
      setStatus('error');
    }
  };

  if (status === 'success') {
    return (
      <div className="sp-rv" style={{background: 'var(--cream-light)', padding: '50px', border: '1px solid var(--cream-dark)', textAlign: 'center'}}>
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="var(--gold)" strokeWidth="1.5" style={{margin: '0 auto 20px'}}>
          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline>
        </svg>
        <h3 style={{fontFamily: 'var(--font-display)', fontSize: '1.3rem', color: 'var(--espresso)'}}>Message Sent</h3>
        <p style={{color: 'var(--text-med)', marginTop: '8px'}}>Thank you for reaching out. We will genuinely get back to you within 24 hours.</p>
        <button onClick={() => setStatus('idle')} className="sp-btn2" style={{marginTop: '24px'}}>Send Another Message</button>
      </div>
    );
  }

  return (
    <div className="sp-rv" style={{background: 'var(--cream-light)', padding: '50px', border: '1px solid var(--cream-dark)'}}>
      <h3 style={{fontFamily: 'var(--font-display)', fontSize: '1.3rem', fontWeight: '400', color: 'var(--espresso)', margin: '0 0 30px'}}>Send Us a Message</h3>
      
      {status === 'error' && (
        <div style={{background: '#fef2f2', color: '#991b1b', padding: '12px', borderRadius: '4px', marginBottom: '20px', fontSize: '14px'}}>
          Failed to send message. Please try again or email us directly at hello@khairwigs.com.
        </div>
      )}

      <form onSubmit={handleSubmit} style={{display: 'flex', flexDirection: 'column', gap: '16px'}}>
        <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px'}}>
          <div className="sp-fg">
            <label htmlFor="firstName">First Name</label>
            <input type="text" id="firstName" name="firstName" placeholder="Your first name" required disabled={status === 'loading'} />
          </div>
          <div className="sp-fg">
            <label htmlFor="lastName">Last Name</label>
            <input type="text" id="lastName" name="lastName" placeholder="Your last name" required disabled={status === 'loading'} />
          </div>
        </div>
        <div className="sp-fg">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" placeholder="your@email.com" required disabled={status === 'loading'} />
        </div>
        <div className="sp-fg">
          <label htmlFor="subject">Subject</label>
          <select id="subject" name="subject" required disabled={status === 'loading'}>
            <option value="General Inquiry">General Inquiry</option>
            <option value="Custom Order">Custom Order</option>
            <option value="Consultation">Consultation</option>
            <option value="Care Support">Care Support</option>
            <option value="Returns">Returns</option>
          </select>
        </div>
        <div className="sp-fg">
          <label htmlFor="message">Message</label>
          <textarea id="message" name="message" placeholder="Tell us how we can help..." required disabled={status === 'loading'}></textarea>
        </div>
        <button type="submit" className="sp-btn" style={{width: '100%', justifyContent: 'center', opacity: status === 'loading' ? 0.7 : 1}} disabled={status === 'loading'}>
          <span>{status === 'loading' ? 'Sending...' : 'Send Message'}</span>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
        </button>
      </form>
      <p style={{fontSize: '.75rem', color: 'var(--text-light)', marginTop: '16px', textAlign: 'center'}}>Your information is never shared.</p>
    </div>
  );
}
