/**
 * useFadeUpOnScroll Hook
 * Triggers fade-up animation when elements enter viewport
 * Global design standard: 96px section spacing + on-scroll fade-up animations
 */

import { useEffect } from 'react';

export function useFadeUpOnScroll() {
  useEffect(() => {
    // Check if user prefers reduced motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    
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

    // Observe all elements with fade-up-on-scroll class
    const elements = document.querySelectorAll('.fade-up-on-scroll');
    elements.forEach((element) => {
      // If reduced motion, immediately show element
      if (prefersReducedMotion) {
        element.classList.add('in-view');
      } else {
        observer.observe(element);
      }
    });

    return () => {
      observer.disconnect();
    };
  }, []);
}
