/**
 * 🔒 ARCHIVE - Production Site Snapshot
 * Date: October 24, 2025
 * 
 * ⚠️ LOCKED - DO NOT EDIT
 * This is a frozen snapshot of the Production Site frame.
 * All layers are locked and preserved in their original state.
 * Names, links, and routing remain unchanged from the original.
 * 
 * Original: LiveWebsite.tsx
 * Purpose: Historical reference and rollback capability
 * 
 * ---
 * 
 * 00 Live Website - QuickSecure Website Desktop 1440
 * ✅ Converted to page-based routing with hash navigation (Oct 2025)
 * ✅ All product pages are now standalone full-page views (no overlays)
 * ✅ Browser back/forward navigation fully supported
 * 
 * Contact section hidden until 'Get a Demo' or 'Contact Sales' is clicked.
 * 
 * Full scrollable website preview showcasing the complete design system in action
 * Width: 1440px | Background: #F7F9FA | Grid: 12 columns, 24px gutter, 80px margins
 * 
 * Routing Structure:
 * - #/ or #/home - Main website with all templates
 * - #/product/{id} - Individual product pages (12 products)
 * 
 * Template Sequence (Home):
 * 1️⃣ Home Template (Hero + Value Props)
 * 2️⃣ Product Template (Complete Safety Platform - 12 products)
 * 3️⃣ Solutions Template (Role-based solutions)
 * 4️⃣ Resources Template (Featured guides, case studies, articles)
 * 5️⃣ About Template (Mission, stats, values)
 * 6️⃣ Contact Template (Contact form and info) - Hidden by default, revealed on CTA click
 * 
 * Each template has 96px vertical spacing and scroll-reveal animations
 * All content centered within 1200px max-width containers
 * All hover/card interactions inherit from Motion Specs in globals.css
 */

import { Shield } from "lucide-react";
import { Button } from "./ui/button";
import { useScrollReveal } from "./hooks/useScrollReveal";
import { Header } from "./qs/Header";
import { HomeTemplate, ProductTemplate, SolutionsTemplate, ResourcesTemplate, AboutTemplate, ContactTemplate, Footer } from "./TemplateImports";
import { 
  QuickSecureNexusPage, 
  DrillManagementPage, 
  TicketingSystemPage, 
  PanicButtonAppPage, 
  AIPoweredInsightsPage, 
  VisitorManagementPage, 
  ManualLockPage, 
  AIGunshotDetectionPage, 
  MassNotificationsPage,
  FloorPlanViewPage,
  AIAnonymousTipLinePage,
  ElectronicLockPage
} from "./ProductPages";
import { SolutionsOverview } from "./SolutionsOverview";
import { SolutionK12 } from "./SolutionK12";
import { SolutionMultiSite } from "./SolutionMultiSite";
import { SolutionPrivateCharter } from "./SolutionPrivateCharter";
import { ResourcesOverview } from "./ResourcesOverview";
import { AboutOverview } from "./AboutOverview";
import { useState, useEffect, createContext, useContext } from "react";

type Viewport = 'desktop' | 'tablet' | 'mobile';

// Context for revealing contact section
const ContactRevealContext = createContext<{
  isContactVisible: boolean;
  revealContact: () => void;
}>({
  isContactVisible: false,
  revealContact: () => {}
});

export const useContactReveal_Archive20251024 = () => useContext(ContactRevealContext);

interface Archive20251024Props {
  isProductionMode?: boolean;
}

export function Archive_20251024({ isProductionMode = false }: Archive20251024Props) {
  useScrollReveal();
  const [isScrolled, setIsScrolled] = useState(false);
  const [viewport, setViewport] = useState<Viewport>('desktop');
  const [isContactVisible, setIsContactVisible] = useState(false);
  const [isContactAnimating, setIsContactAnimating] = useState(false);
  const [currentRoute, setCurrentRoute] = useState<string>('home');
  const [isProductsDropdownOpen, setIsProductsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileProductsOpen, setIsMobileProductsOpen] = useState(false);
  const [dropdownCloseTimer, setDropdownCloseTimer] = useState<NodeJS.Timeout | null>(null);

  // Hash-based routing
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.slice(1) || '/'; // Remove # and default to /
      const route = hash === '/' || hash === '/home' ? 'home' : hash;
      setCurrentRoute(route);
      
      // Scroll to top when route changes (instant for clean transitions)
      window.scrollTo({ top: 0, behavior: 'instant' });
    };

    handleHashChange(); // Initial route
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  useEffect(() => {
    const handleScroll = (e: Event) => {
      const target = e.target as HTMLElement;
      setIsScrolled(target.scrollTop > 80);
    };

    const scrollContainer = document.querySelector('.h-full.overflow-y-auto');
    if (scrollContainer) {
      scrollContainer.addEventListener('scroll', handleScroll);
      return () => scrollContainer.removeEventListener('scroll', handleScroll);
    }
  }, []);

  const viewportWidth = viewport === 'desktop' ? '1440px' : viewport === 'tablet' ? '1024px' : '390px';
  const gridColumns = viewport === 'desktop' ? 12 : viewport === 'tablet' ? 8 : 4;
  const gridGutter = viewport === 'desktop' ? '24px' : viewport === 'tablet' ? '24px' : '16px';
  const gridMargins = viewport === 'desktop' ? '80px' : viewport === 'tablet' ? '56px' : '16px';

  const revealContact = () => {
    if (!isContactVisible) {
      setIsContactAnimating(true);
      setIsContactVisible(true);
      
      // Wait for animation to complete, then scroll to contact
      setTimeout(() => {
        const contactSection = document.querySelector('[data-section="section-contact"]');
        if (contactSection) {
          contactSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 300);
    }
  };

  const handleNavigateToProduct = (productId: string) => {
    window.location.hash = `/product/${productId}`;
  };

  const handleBackToHome = () => {
    window.location.hash = '/';
    // Scroll to the "Complete Safety Platform" section after navigating home
    setTimeout(() => {
      const productSection = document.querySelector('[data-section="section-product"]');
      if (productSection) {
        productSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 100);
  };

  const productPages: Record<string, React.ReactNode> = {
    '/product/nexus': <QuickSecureNexusPage onBack={handleBackToHome} />,
    '/product/drill': <DrillManagementPage onBack={handleBackToHome} />,
    '/product/ticketing': <TicketingSystemPage onBack={handleBackToHome} />,
    '/product/panic': <PanicButtonAppPage onBack={handleBackToHome} />,
    '/product/insights': <AIPoweredInsightsPage onBack={handleBackToHome} />,
    '/product/visitor': <VisitorManagementPage onBack={handleBackToHome} />,
    '/product/lock': <ManualLockPage onBack={handleBackToHome} />,
    '/product/gunshot': <AIGunshotDetectionPage onBack={handleBackToHome} />,
    '/product/notifications': <MassNotificationsPage onBack={handleBackToHome} />,
    '/product/floorplan': <FloorPlanViewPage onBack={handleBackToHome} />,
    '/product/tipline': <AIAnonymousTipLinePage onBack={handleBackToHome} />,
    '/product/electroniclock': <ElectronicLockPage onBack={handleBackToHome} />
  };

  const overviewPages: Record<string, React.ReactNode> = {
    '/solutions': <SolutionsOverview />,
    '/solutions/k12': <SolutionK12 />,
    '/solutions/multi-site': <SolutionMultiSite />,
    '/solutions/private-charter': <SolutionPrivateCharter />,
    '/resources': <ResourcesOverview />,
    '/about': <AboutOverview />
  };

  // Check if we're on a product page or overview page
  const isProductPage = currentRoute.startsWith('/product/');
  const isOverviewPage = currentRoute === '/solutions' || currentRoute === '/resources' || currentRoute === '/about' || currentRoute.startsWith('/solutions/');
  const productPageContent = isProductPage ? productPages[currentRoute] : null;
  const overviewPageContent = isOverviewPage ? overviewPages[currentRoute] : null;

  return (
    <ContactRevealContext.Provider value={{ isContactVisible, revealContact }}>
      <div className="h-full flex flex-col bg-[#F7F9FA]">
      {/* 🔒 LOCKED - Viewport Switcher - Hidden in Production Mode */}
      {!isProductionMode && (
        <div className="border-b px-8 py-3 bg-white">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-xs" style={{ color: '#4A4A4A' }}>🔒 ARCHIVE - October 24, 2025 | Viewport:</span>
            <div className="flex gap-1">
              {([
                { value: 'desktop', label: 'Desktop 1440', icon: '🖥️' },
                { value: 'tablet', label: 'Tablet 1024', icon: '📱' },
                { value: 'mobile', label: 'Mobile 390', icon: '📱' }
              ] as const).map((v) => (
                <button
                  key={v.value}
                  onClick={() => setViewport(v.value)}
                  className="px-3 py-1 rounded text-xs transition-colors"
                  style={{
                    backgroundColor: viewport === v.value ? '#006E6E' : 'transparent',
                    color: viewport === v.value ? '#FFFFFF' : '#4A4A4A',
                    border: `1px solid ${viewport === v.value ? '#006E6E' : '#EAEAEA'}`
                  }}
                >
                  {v.icon} {v.label}
                </button>
              ))}
            </div>
          </div>
          <div className="text-xs px-3 py-1 rounded" style={{ backgroundColor: '#F7F9FA', color: '#4A4A4A' }}>
            Grid: {gridColumns} cols • {gridGutter} gutter • {gridMargins} margins
          </div>
        </div>
      </div>
      )}

      {/* 🔒 LOCKED - Scrollable Content */}
      <div className="flex-1 overflow-y-auto bg-[#F7F9FA]">
        <div className="mx-auto" style={{ width: isProductionMode ? '100%' : viewportWidth, backgroundColor: '#F7F9FA' }}>
        
        {/* 🔒 LOCKED - Global Header - Sticky - Shows on ALL pages */}
        <Header onContactClick={revealContact} />

        {/* 🔒 LOCKED - Main Content with Smart Animate 300ms transitions */}
        <main className="page-transition" key={currentRoute} style={{ 
          animation: 'page-enter 300ms ease-in-out forwards'
        }}>
          {/* ========================================
               🔒 LOCKED - ROUTING: Show either home page or product page
               ======================================== */}
          
          {isProductPage ? (
            /* 🔒 LOCKED - PRODUCT PAGE VIEW - Full page for individual product */
            <div className="scroll-reveal" style={{ minHeight: '100vh' }}>
              {productPageContent || (
                <div style={{ 
                  padding: '96px 80px', 
                  textAlign: 'center',
                  maxWidth: '1200px',
                  margin: '0 auto'
                }}>
                  <h1>Product Not Found</h1>
                  <p style={{ color: '#4A4A4A', marginTop: '16px' }}>
                    The product you're looking for doesn't exist.
                  </p>
                  <a 
                    href="#/"
                    style={{
                      display: 'inline-block',
                      marginTop: '32px',
                      padding: '12px 24px',
                      backgroundColor: '#006E6E',
                      color: '#FFFFFF',
                      borderRadius: '8px',
                      textDecoration: 'none',
                      fontWeight: 600
                    }}
                  >
                    Return Home
                  </a>
                </div>
              )}
            </div>
          ) : isOverviewPage ? (
            /* 🔒 LOCKED - OVERVIEW PAGE VIEW - Full page for Solutions or Resources */
            <div className="scroll-reveal" style={{ minHeight: '100vh' }}>
              {overviewPageContent}
            </div>
          ) : (
            /* 🔒 LOCKED - HOME PAGE VIEW - Complete website with all templates */
            <>
              {/* 🔒 LOCKED - 1️⃣ HOME TEMPLATE */}
              <HomeTemplate />

              {/* 🔒 LOCKED - Spacer 96px */}
              <div data-label="spacer-96" style={{ height: '96px' }}></div>

              {/* 🔒 LOCKED - 2️⃣ PRODUCT TEMPLATE */}
              <ProductTemplate onNavigate={handleNavigateToProduct} />

              {/* 🔒 LOCKED - Spacer 96px */}
              <div data-label="spacer-96" style={{ height: '96px' }}></div>

              {/* 🔒 LOCKED - 3️⃣ SOLUTIONS TEMPLATE */}
              <SolutionsTemplate />

              {/* 🔒 LOCKED - Spacer 96px */}
              <div data-label="spacer-96" style={{ height: '96px' }}></div>

              {/* 🔒 LOCKED - 4️⃣ RESOURCES TEMPLATE */}
              <ResourcesTemplate />

              {/* 🔒 LOCKED - Spacer 96px */}
              <div data-label="spacer-96" style={{ height: '96px' }}></div>

              {/* 🔒 LOCKED - 5️⃣ ABOUT TEMPLATE */}
              <AboutTemplate />

              {/* 🔒 LOCKED - Spacer 96px */}
              <div data-label="spacer-96" style={{ height: '96px' }}></div>

              {/* 🔒 LOCKED - 6️⃣ CONTACT TEMPLATE - Hidden initially, revealed on CTA click */}
              <div 
                style={{
                  opacity: isContactVisible ? 1 : 0,
                  transform: isContactVisible ? 'translateY(0)' : 'translateY(80px)',
                  transition: 'opacity 300ms cubic-bezier(0.4, 0, 0.2, 1), transform 300ms cubic-bezier(0.4, 0, 0.2, 1)',
                  maxHeight: isContactVisible ? 'none' : '0',
                  overflow: isContactVisible ? 'visible' : 'hidden'
                }}
              >
                <ContactTemplate />
              </div>
            </>
          )}

        </main>

        {/* 🔒 LOCKED - FOOTER - Show on all pages */}
        <Footer />
        </div>
      </div>

      </div>
    </ContactRevealContext.Provider>
  );
}
