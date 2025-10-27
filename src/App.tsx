/**
 * QuickSecure SaaS Website - Production Site
 * 
 * PRODUCTION MODE ONLY
 * Single editable page with clean production canvas
 * QS/Header and QS/Footer are pinned components (edit via properties)
 * 
 * @version 2.0.0
 * @library QuickSecure Web UI v1
 * @author QuickSecure Design Team
 * @description Production-ready website with responsive design system
 * @published October 2025
 */

import { LiveWebsite } from "./components/LiveWebsite";
import { AppSettingsProvider } from "./components/AppSettings";
import { useEffect } from "react";

export default function App() {
  // Scroll to top on first load
  useEffect(() => {
    if (document.readyState === 'complete') {
      window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
    } else {
      const handleLoad = () => window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
      window.addEventListener('load', handleLoad, { once: true });
      return () => window.removeEventListener('load', handleLoad);
    }
  }, []);

  // Scroll to top on hash change
  useEffect(() => {
    const handleHashChange = () => {
      window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
    };
    
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  return (
    <AppSettingsProvider profile="Desktop">
      <div className="w-full min-h-screen flex flex-col" style={{ backgroundColor: 'var(--qs-panel)' }}>
        {/* Production Site - Clean Canvas */}
        <div 
          className="w-full" 
          style={{ backgroundColor: 'var(--qs-panel)' }}
        >
          <LiveWebsite isProductionMode={true} />
        </div>
      </div>
    </AppSettingsProvider>
  );
}
