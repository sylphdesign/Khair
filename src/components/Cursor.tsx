'use client';

import { useEffect, useRef, useState } from 'react';
import { usePathname } from 'next/navigation';

export default function Cursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (cursorRef.current) {
        cursorRef.current.style.left = e.clientX - 6 + 'px';
        cursorRef.current.style.top = e.clientY - 6 + 'px';
        if (!visible) {
          cursorRef.current.classList.add('visible');
          setVisible(true);
        }
      }
    };

    const handleMouseEnter = () => cursorRef.current?.classList.add('hovering');
    const handleMouseLeave = () => cursorRef.current?.classList.remove('hovering');

    // Attach listeners
    window.addEventListener('mousemove', handleMouseMove);

    const attachHoverListeners = () => {
      document.querySelectorAll('a, button, .collection-card, .testimonial-dot, .process-step').forEach(el => {
        el.addEventListener('mouseenter', handleMouseEnter);
        el.addEventListener('mouseleave', handleMouseLeave);
      });
    };

    // Attach on mount and path change
    attachHoverListeners();

    // Re-attach after a bit when elements render
    const timer = setTimeout(attachHoverListeners, 1000);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.querySelectorAll('a, button, .collection-card, .testimonial-dot, .process-step').forEach(el => {
        el.removeEventListener('mouseenter', handleMouseEnter);
        el.removeEventListener('mouseleave', handleMouseLeave);
      });
      clearTimeout(timer);
    };
  }, [visible, pathname]);

  return <div className="custom-cursor" id="cursor" ref={cursorRef}></div>;
}
