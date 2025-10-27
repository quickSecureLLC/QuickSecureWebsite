/**
 * AppSettings - Global Interaction Profile System
 * 
 * Controls interaction behavior across all devices
 * Profiles: "Desktop" | "Touch" | "Reduced"
 * 
 * When profile="Desktop":
 * - All devices get desktop hover behavior
 * - Mega-menus use hover-intent timing
 * - Animations use time-based loops (no cursor follow)
 * - No device detection or media query switching
 * 
 * @version 1.0.0
 */

import { createContext, useContext, ReactNode } from 'react';

export type InteractionProfile = 'Desktop' | 'Touch' | 'Reduced';

interface AppSettingsContextType {
  profile: InteractionProfile;
  canHover: boolean;
  enableParallax: boolean;
  enableCursorEffects: boolean;
  animationSeed: number;
}

const AppSettingsContext = createContext<AppSettingsContextType>({
  profile: 'Desktop',
  canHover: true,
  enableParallax: true,
  enableCursorEffects: false, // Disabled for desktop - no cursor following
  animationSeed: 42 // Constant seed for consistent animations
});

export const useAppSettings = () => useContext(AppSettingsContext);

interface AppSettingsProviderProps {
  children: ReactNode;
  profile?: InteractionProfile;
}

export function AppSettingsProvider({ 
  children, 
  profile = 'Desktop' 
}: AppSettingsProviderProps) {
  // Derive capabilities from profile
  const canHover = profile === 'Desktop';
  const enableParallax = profile === 'Desktop';
  const enableCursorEffects = false; // Always disabled - no cursor chase/magnet effects
  const animationSeed = 42; // Constant seed - no randomization

  const value: AppSettingsContextType = {
    profile,
    canHover,
    enableParallax,
    enableCursorEffects,
    animationSeed
  };

  return (
    <AppSettingsContext.Provider value={value}>
      {children}
    </AppSettingsContext.Provider>
  );
}
