'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

export default function PageAnimations() {
  const pathname = usePathname();

  useEffect(() => {
    // Reveal Observer
    const observerOptions = {
      threshold: 0.15,
      rootMargin: '0px 0px -40px 0px'
    };

    const revealObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          entry.target.classList.add('vis'); // handle both logic
        }
      });
    }, observerOptions);

    document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-scale, .sp-rv').forEach(el => {
      revealObserver.observe(el);
    });

    // Counter Observer
    const counterObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const counter = entry.target as HTMLElement;
          const target = parseInt(counter.dataset.target || '0');
          const duration = 2000;
          const startTime = performance.now();
          
          const updateCounter = (currentTime: number) => {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            const current = Math.round(eased * target);
            counter.textContent = current.toString();
            
            if (progress < 1) {
              requestAnimationFrame(updateCounter);
            }
          };
          
          requestAnimationFrame(updateCounter);
          counterObserver.unobserve(counter);
        }
      });
    }, { threshold: 0.5 });

    document.querySelectorAll('.counter').forEach(el => counterObserver.observe(el));

    // Fallback just in case
    const timer = setTimeout(() => {
      document.querySelectorAll('.reveal:not(.visible), .sp-rv:not(.vis)').forEach((el) => {
        el.classList.add('visible');
        el.classList.add('vis');
      });
    }, 1500);

    return () => {
      revealObserver.disconnect();
      counterObserver.disconnect();
      clearTimeout(timer);
    };
  }, [pathname]);

  return null;
}
