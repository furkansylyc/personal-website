'use client';

import { useEffect } from 'react';

export function ScrollReveal() {
  useEffect(() => {
    document.documentElement.classList.add('js');

    const elements = document.querySelectorAll<HTMLElement>('[data-reveal]');
    if (!elements.length) return;

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      elements.forEach((el) => el.classList.add('is-visible'));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.05,
        rootMargin: '120px 0px 80px 0px',
      }
    );

    elements.forEach((el) => observer.observe(el));

    // Fallback safety: ensure all elements are visible after 1.5s regardless
    const timer = setTimeout(() => {
      elements.forEach((el) => el.classList.add('is-visible'));
    }, 1500);

    return () => {
      clearTimeout(timer);
      observer.disconnect();
    };
  }, []);

  return null;
}
