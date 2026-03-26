'use client';

import { useEffect, useState } from 'react';

export default function Preloader() {
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    // Hide after 1.2s
    const timer = setTimeout(() => {
      setHidden(true);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`preloader ${hidden ? 'hidden' : ''}`} id="preloader">
      <div className="preloader-logo" aria-label="Khair"></div>
      <div className="preloader-line"></div>
    </div>
  );
}
