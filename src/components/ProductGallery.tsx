'use client';

import { useCallback, useEffect, useState } from 'react';
import type { ProductImage } from '@/data/products';

export default function ProductGallery({
  images,
  productName,
}: {
  images: ProductImage[];
  productName: string;
}) {
  const [active, setActive] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [zoomed, setZoomed] = useState(false);
  const [origin, setOrigin] = useState('50% 50%');

  const count = images.length;

  const step = useCallback(
    (delta: number) => {
      setActive((i) => (i + delta + count) % count);
      setZoomed(false);
    },
    [count],
  );

  const close = useCallback(() => {
    setLightboxOpen(false);
    setZoomed(false);
  }, []);

  // Keyboard control, and lock page scroll while the lightbox is up.
  useEffect(() => {
    if (!lightboxOpen) return;

    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close();
      else if (e.key === 'ArrowRight') step(1);
      else if (e.key === 'ArrowLeft') step(-1);
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', onKey);

    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = previousOverflow;
    };
  }, [lightboxOpen, close, step]);

  // Track the cursor so zooming magnifies the part of the wig being pointed at.
  const trackCursor = (e: React.MouseEvent<HTMLImageElement>) => {
    if (!zoomed) return;
    const r = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - r.left) / r.width) * 100;
    const y = ((e.clientY - r.top) / r.height) * 100;
    setOrigin(`${x}% ${y}%`);
  };

  if (count === 0) return null;

  const current = images[active];

  return (
    <>
      <div className="pd-gallery sp-rv">
        <button
          type="button"
          className="pd-cover-btn"
          onClick={() => setLightboxOpen(true)}
          aria-label={`Enlarge image ${active + 1} of ${count} of ${productName}`}
        >
          <img className="pd-cover" src={current.src} alt={current.alt} decoding="async" />
          <span className="pd-zoom-hint" aria-hidden="true">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <circle cx="11" cy="11" r="7" />
              <path d="M20 20l-3.5-3.5M11 8v6M8 11h6" />
            </svg>
            View larger
          </span>
        </button>

        {count > 1 && (
          <div className="pd-thumbs">
            {images.map((img, i) => (
              <button
                type="button"
                key={img.src}
                className={`pd-thumb${i === active ? ' on' : ''}`}
                onClick={() => setActive(i)}
                aria-label={`Show image ${i + 1} of ${count}`}
                aria-current={i === active}
              >
                <img src={img.src} alt={img.alt} loading="lazy" decoding="async" />
              </button>
            ))}
          </div>
        )}
      </div>

      {lightboxOpen && (
        <div
          className="pd-lb"
          role="dialog"
          aria-modal="true"
          aria-label={`${productName} image viewer`}
          onClick={close}
        >
          <button type="button" className="pd-lb-close" onClick={close} aria-label="Close viewer">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M18 6L6 18M6 6l12 12" />
            </svg>
          </button>

          {count > 1 && (
            <>
              <button
                type="button"
                className="pd-lb-nav prev"
                onClick={(e) => {
                  e.stopPropagation();
                  step(-1);
                }}
                aria-label="Previous image"
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M15 18l-6-6 6-6" />
                </svg>
              </button>
              <button
                type="button"
                className="pd-lb-nav next"
                onClick={(e) => {
                  e.stopPropagation();
                  step(1);
                }}
                aria-label="Next image"
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M9 18l6-6-6-6" />
                </svg>
              </button>
            </>
          )}

          <img
            className={`pd-lb-img${zoomed ? ' zoomed' : ''}`}
            src={current.src}
            alt={current.alt}
            style={zoomed ? { transformOrigin: origin } : undefined}
            onClick={(e) => {
              e.stopPropagation();
              setZoomed((z) => !z);
            }}
            onMouseMove={trackCursor}
          />

          <p className="pd-lb-meta" onClick={(e) => e.stopPropagation()}>
            {active + 1} / {count} &nbsp;·&nbsp; {zoomed ? 'Zoom out' : 'Zoom in'}
          </p>
        </div>
      )}
    </>
  );
}
