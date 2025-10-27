/**
 * useRevealFast Hook
 * Fast reveal-on-scroll for statistics and feature cards (150ms fade-up)
 * Global dynamic element
 */

import { useEffect } from 'react';

export function useRevealFast() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in-view');
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      }
    );

    // Observe all elements with reveal-fast class
    const elements = document.querySelectorAll('.reveal-fast');
    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);
}
