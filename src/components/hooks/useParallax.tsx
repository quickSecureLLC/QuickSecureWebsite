/**
 * useParallax Hook
 * Applies subtle parallax effect to elements based on scroll position
 * Respects prefers-reduced-motion and AppSettings profile
 */

import { useEffect } from 'react';
import { useAppSettings } from '../AppSettings';

export function useParallax() {
  const { enableParallax } = useAppSettings();

  useEffect(() => {
    // Disabled if profile doesn't support parallax
    if (!enableParallax) {
      return;
    }

    // Check if user prefers reduced motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    
    if (prefersReducedMotion) {
      return;
    }

    const handleScroll = () => {
      const scrollY = window.scrollY;
      document.documentElement.style.setProperty('--scroll-y', scrollY.toString());
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    
    // Initialize on mount
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [enableParallax]);
}
