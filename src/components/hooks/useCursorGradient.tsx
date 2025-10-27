/**
 * useCursorGradient Hook
 * Tracks cursor position for gradient overlay on CTA buttons
 * Global dynamic element - cursor-responsive gradient overlay
 * 
 * DISABLED in Desktop profile - no cursor following
 */

import { useEffect, useRef } from 'react';
import { useAppSettings } from '../AppSettings';

export function useCursorGradient() {
  const elementRef = useRef<HTMLElement | null>(null);
  const { enableCursorEffects } = useAppSettings();

  useEffect(() => {
    // DISABLED: No cursor-follow effects in Desktop profile
    if (!enableCursorEffects) return;

    const element = elementRef.current;
    if (!element) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = element.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 100;
      const y = ((e.clientY - rect.top) / rect.height) * 100;
      
      element.style.setProperty('--mouse-x', `${x}%`);
      element.style.setProperty('--mouse-y', `${y}%`);
    };

    element.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      element.removeEventListener('mousemove', handleMouseMove);
    };
  }, [enableCursorEffects]);

  return elementRef;
}
