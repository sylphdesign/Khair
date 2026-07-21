'use client';

import { useState } from 'react';

const TESTIMONIALS = [
  {
    quote:
      "For the first time in three years, I didn't think about my hair once today. I just lived. That's the gift Khair gave me.",
    author: 'Sarah M.',
    context: 'Atlanta • Living with alopecia for 8 years',
  },
  {
    quote:
      "My husband cried when he saw me. He said I looked like myself again. I didn't realize how much I'd lost until I got it back.",
    author: 'Maria L.',
    context: 'Los Angeles • Post-chemotherapy recovery',
  },
  {
    quote:
      "I've worn wigs for twelve years. This is the first one I've ever forgotten I was wearing. The scalp — it looks like my skin.",
    author: 'Diane K.',
    context: 'London • Female pattern hair loss',
  },
];

export default function Testimonials() {
  const [index, setIndex] = useState(0);
  const step = (d: number) =>
    setIndex((i) => (i + d + TESTIMONIALS.length) % TESTIMONIALS.length);

  return (
    <div className="testimonials-slider reveal delay-2">
      {TESTIMONIALS.map((t, i) => (
        <div
          key={t.author}
          className={`testimonial-card${i === index ? ' active' : ''}`}
          data-index={i}
          aria-hidden={i !== index}
        >
          <div className="testimonial-quote-mark">&ldquo;</div>
          <p className="testimonial-text">{t.quote}</p>
          <p className="testimonial-author">{t.author}</p>
          <p className="testimonial-context">{t.context}</p>
        </div>
      ))}

      <div className="testimonial-nav">
        {TESTIMONIALS.map((t, i) => (
          <button
            key={t.author}
            type="button"
            className={`testimonial-dot${i === index ? ' active' : ''}`}
            data-index={i}
            onClick={() => setIndex(i)}
            aria-label={`Show testimonial ${i + 1} of ${TESTIMONIALS.length}`}
            aria-current={i === index}
          />
        ))}
      </div>

      <div className="testimonial-arrows">
        <button
          type="button"
          className="testimonial-arrow"
          id="prevTestimonial"
          onClick={() => step(-1)}
          aria-label="Previous testimonial"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M19 12H5M12 19l-7-7 7-7" />
          </svg>
        </button>
        <button
          type="button"
          className="testimonial-arrow"
          id="nextTestimonial"
          onClick={() => step(1)}
          aria-label="Next testimonial"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </div>
  );
}
