/**
 * 00 Live Website - QuickSecure Website Desktop 1440
 * ✅ Converted to page-based routing with hash navigation (Oct 2025)
 * ✅ All product pages are now standalone full-page views (no overlays)
 * ✅ Browser back/forward navigation fully supported
 * ✅ Dedicated "Get in Touch" page (Oct 2025)
 * 
 * Contact now uses a dedicated page route instead of inline section reveal.
 * 
 * Full scrollable website preview showcasing the complete design system in action
 * Width: 1440px | Background: #F7F9FA | Grid: 12 columns, 24px gutter, 80px margins
 * 
 * Routing Structure:
 * - #/ or #/home - Main website with all templates
 * - #/product/{id} - Individual product pages (12 products)
 * - #/contact - Dedicated "Get in Touch" page with form and contact info
 * 
 * Template Sequence (Home):
 * 1️⃣ Home Template (Hero + Value Props)
 * 2️⃣ Product Template (Complete Safety Platform - 12 products)
 * 3️⃣ Solutions Template (Role-based solutions)
 * 4️⃣ Resources Template (Featured guides, case studies, articles)
 * 5️⃣ About Template (Mission, stats, values)
 * 
 * Each template has 96px vertical spacing and scroll-reveal animations
 * All content centered within 1200px max-width containers
 * All hover/card interactions inherit from Motion Specs in globals.css
 */

import { Shield } from "lucide-react";
import { Button } from "./ui/button";
import { useScrollReveal } from "./hooks/useScrollReveal";
import { usePreflightCheck } from "./utils/preflightChecks";
import { Header } from "./qs/Header";
import { HomeTemplate, ProductTemplate, SolutionsTemplate, ResourcesTemplate, AboutTemplate, Footer } from "./TemplateImports";
import { GetInTouchPage } from "./GetInTouchPage";
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
import { ProductsOverview } from "./ProductsOverview";
import { SolutionsOverview } from "./SolutionsOverview";
import { SolutionK12 } from "./SolutionK12";
import { SolutionMultiSite } from "./SolutionMultiSite";
import { SolutionPrivateCharter } from "./SolutionPrivateCharter";
import { ResourcesOverview } from "./ResourcesOverview";
import { AboutOverview } from "./AboutOverview";
import { PrivacyPolicy } from "./PrivacyPolicy";
import { TermsOfService } from "./TermsOfService";
import { useState, useEffect, createContext, useContext } from "react";

type Viewport = 'desktop' | 'tablet' | 'mobile';

// Context for revealing contact section - DEPRECATED (now using dedicated /contact page)
// Kept for backward compatibility but no longer used
const ContactRevealContext = createContext<{
  isContactVisible: boolean;
  revealContact: () => void;
}>({
  isContactVisible: false,
  revealContact: () => {}
});

export const useContactReveal = () => useContext(ContactRevealContext);

interface LiveWebsiteProps {
  isProductionMode?: boolean;
}

export function LiveWebsite({ isProductionMode = false }: LiveWebsiteProps) {
  useScrollReveal();
  
  // Run preflight checks (development only)
  usePreflightCheck(process.env.NODE_ENV === 'development');
  
  const [isScrolled, setIsScrolled] = useState(false);
  const [viewport, setViewport] = useState<Viewport>('desktop');
  const [isContactVisible, setIsContactVisible] = useState(false);
  const [isContactAnimating, setIsContactAnimating] = useState(false);
  const [currentRoute, setCurrentRoute] = useState<string>('home');
  const [isProductsDropdownOpen, setIsProductsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileProductsOpen, setIsMobileProductsOpen] = useState(false);
  const [dropdownCloseTimer, setDropdownCloseTimer] = useState<NodeJS.Timeout | null>(null);

  // Hash-based routing - no forced scroll
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.slice(1) || '/'; // Remove # and default to /
      const route = hash === '/' || hash === '/home' ? 'home' : hash;
      setCurrentRoute(route);
    };

    handleHashChange(); // Initial route
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 80);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const viewportWidth = viewport === 'desktop' ? '1440px' : viewport === 'tablet' ? '1024px' : '390px';
  const gridColumns = viewport === 'desktop' ? 12 : viewport === 'tablet' ? 8 : 4;
  const gridGutter = viewport === 'desktop' ? '24px' : viewport === 'tablet' ? '24px' : '16px';
  const gridMargins = viewport === 'desktop' ? '80px' : viewport === 'tablet' ? '56px' : '16px';

  // Navigate to contact page
  const handleContactClick = () => {
    window.location.hash = '/contact';
  };

  const handleNavigateToProduct = (productId: string) => {
    window.location.hash = `/product/${productId}`;
  };

  const handleBackToHome = () => {
    window.location.hash = '/';
    // Note: Page will automatically scroll to top due to global scroll-to-top behavior
    // If specific section scrolling is needed, it can be implemented separately
  };

  const productPages: Record<string, React.ReactNode> = {
    // New routes (primary) - All 12 products
    '/products/nexus': <QuickSecureNexusPage onBack={handleBackToHome} />,
    '/products/panic-app': <PanicButtonAppPage onBack={handleBackToHome} />,
    '/products/manual-lock': <ManualLockPage onBack={handleBackToHome} />,
    '/products/gunshot-detection': <AIGunshotDetectionPage onBack={handleBackToHome} />,
    '/products/ticketing': <TicketingSystemPage onBack={handleBackToHome} />,
    '/products/drill-management': <DrillManagementPage onBack={handleBackToHome} />,
    '/products/ai-insights': <AIPoweredInsightsPage onBack={handleBackToHome} />,
    '/products/visitor-management': <VisitorManagementPage onBack={handleBackToHome} />,
    '/products/mass-notifications': <MassNotificationsPage onBack={handleBackToHome} />,
    '/products/floor-plan': <FloorPlanViewPage onBack={handleBackToHome} />,
    '/products/electronic-lock': <ElectronicLockPage onBack={handleBackToHome} />,
    '/products/tip-line': <AIAnonymousTipLinePage onBack={handleBackToHome} />,
    // Legacy routes (backward compatibility)
    '/products/retrofit-locks': <ManualLockPage onBack={handleBackToHome} />,
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
    '/products': <ProductsOverview />,
    '/solutions': <SolutionsOverview />,
    '/solutions/k12': <SolutionK12 />,
    '/solutions/multi-site': <SolutionMultiSite />,
    '/solutions/private-charter': <SolutionPrivateCharter />,
    '/resources': <ResourcesOverview />,
    '/resources/docs': <ResourcesOverview />,
    '/resources/case-studies': <ResourcesOverview />,
    '/resources/blog': <ResourcesOverview />,
    '/resources/faq': <ResourcesOverview />,
    '/about': <AboutOverview />,
    '/contact': <GetInTouchPage 
      isScrolled={isScrolled}
      viewport={viewport}
      isProductsDropdownOpen={isProductsDropdownOpen}
      isMobileMenuOpen={isMobileMenuOpen}
      isMobileProductsOpen={isMobileProductsOpen}
      onLogoClick={() => { window.location.hash = '/'; }}
      onNavLinkClick={(section) => { window.location.hash = `/${section}`; }}
      onProductsMouseEnter={() => { setIsProductsDropdownOpen(true); }}
      onProductsMouseLeave={() => { setIsProductsDropdownOpen(false); }}
      onProductsClick={() => { setIsProductsDropdownOpen(!isProductsDropdownOpen); }}
      onMobileMenuToggle={() => { setIsMobileMenuOpen(!isMobileMenuOpen); }}
      onMobileProductsToggle={() => { setIsMobileProductsOpen(!isMobileProductsOpen); }}
      onContactClick={handleContactClick}
    />,
    '/privacy': <PrivacyPolicy
      isScrolled={isScrolled}
      viewport={viewport}
      isProductsDropdownOpen={isProductsDropdownOpen}
      isMobileMenuOpen={isMobileMenuOpen}
      isMobileProductsOpen={isMobileProductsOpen}
      onLogoClick={() => { window.location.hash = '/'; }}
      onNavLinkClick={(section) => { window.location.hash = `/${section}`; }}
      onProductsMouseEnter={() => { setIsProductsDropdownOpen(true); }}
      onProductsMouseLeave={() => { setIsProductsDropdownOpen(false); }}
      onProductsClick={() => { setIsProductsDropdownOpen(!isProductsDropdownOpen); }}
      onMobileMenuToggle={() => { setIsMobileMenuOpen(!isMobileMenuOpen); }}
      onMobileProductsToggle={() => { setIsMobileProductsOpen(!isMobileProductsOpen); }}
      onContactClick={handleContactClick}
    />,
    '/terms': <TermsOfService
      isScrolled={isScrolled}
      viewport={viewport}
      isProductsDropdownOpen={isProductsDropdownOpen}
      isMobileMenuOpen={isMobileMenuOpen}
      isMobileProductsOpen={isMobileProductsOpen}
      onLogoClick={() => { window.location.hash = '/'; }}
      onNavLinkClick={(section) => { window.location.hash = `/${section}`; }}
      onProductsMouseEnter={() => { setIsProductsDropdownOpen(true); }}
      onProductsMouseLeave={() => { setIsProductsDropdownOpen(false); }}
      onProductsClick={() => { setIsProductsDropdownOpen(!isProductsDropdownOpen); }}
      onMobileMenuToggle={() => { setIsMobileMenuOpen(!isMobileMenuOpen); }}
      onMobileProductsToggle={() => { setIsMobileProductsOpen(!isMobileProductsOpen); }}
      onContactClick={handleContactClick}
    />
  };

  // Check if we're on a product page or overview page
  const isProductPage = currentRoute.startsWith('/product/') || currentRoute.startsWith('/products/');
  const isOverviewPage = currentRoute === '/products' || currentRoute === '/solutions' || currentRoute === '/resources' || currentRoute === '/about' || currentRoute === '/contact' || currentRoute === '/privacy' || currentRoute === '/terms' || currentRoute.startsWith('/solutions/') || currentRoute.startsWith('/resources/');
  const productPageContent = isProductPage ? productPages[currentRoute] : null;
  const overviewPageContent = isOverviewPage ? overviewPages[currentRoute] : null;

  return (
    <>
      {/* TEMPORARY DEBUG CSS - Force scrolling */}
      <style>{`
        html, body, #root {
          height: auto !important;
          min-height: 100% !important;
          overflow-y: auto !important;
          position: static !important;
        }
      `}</style>
      
      <ContactRevealContext.Provider value={{ isContactVisible, revealContact: handleContactClick }}>
      <div className="w-full min-h-screen" style={{ backgroundColor: '#FFFFFF' }}>
      {/* Viewport Switcher - Hidden in Production Mode */}
      {!isProductionMode && (
        <div className="border-b px-8 py-3 bg-white">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-xs" style={{ color: '#4A4A4A' }}>Viewport:</span>
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
                    backgroundColor: viewport === v.value ? 'var(--qs-brand-accent)' : 'transparent',
                    color: viewport === v.value ? '#FFFFFF' : 'var(--qs-text-secondary)',
                    border: `1px solid ${viewport === v.value ? 'var(--qs-brand-accent)' : 'var(--qs-border)'}`
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

      {/* Scrollable Content */}
      <div className="w-full" style={{ backgroundColor: '#FFFFFF' }}>
        <div className="mx-auto" style={{ width: isProductionMode ? '100%' : viewportWidth, backgroundColor: '#FFFFFF' }}>
        
        {/* ========================================
             SINGLE HEADER ARCHITECTURE
             This is the ONLY Header instance for the entire site.
             Position: sticky, top: 0, z-index: 1000
             All child pages (products, solutions, resources, about) 
             should NOT render their own headers.
             NOTE: Contact, Privacy, and Terms pages render their own headers, so we hide this one for those routes
             ======================================== */}
        {currentRoute !== '/contact' && currentRoute !== '/privacy' && currentRoute !== '/terms' && <Header onContactClick={handleContactClick} />}

        {/* Main Content with Smart Animate 300ms transitions */}
        <main className="page-transition" key={currentRoute} style={{ 
          animation: 'page-enter 300ms ease-in-out forwards'
        }}>
          {/* ========================================
               ROUTING: Show either home page or product page
               ======================================== */}
          
          {isProductPage ? (
            /* PRODUCT PAGE VIEW - Full page for individual product */
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
                      backgroundColor: 'var(--qs-brand-accent)',
                      color: '#FFFFFF',
                      borderRadius: '8px',
                      textDecoration: 'none'
                    }}
                  >
                    Return Home
                  </a>
                </div>
              )}
            </div>
          ) : isOverviewPage ? (
            /* OVERVIEW PAGE VIEW - Full page for Solutions or Resources */
            <div className="scroll-reveal" style={{ minHeight: '100vh' }}>
              {overviewPageContent}
            </div>
          ) : (
            /* HOME PAGE VIEW - Complete website with all templates */
            <>
              {/* 1️⃣ HOME TEMPLATE */}
              <HomeTemplate />

              {/* 2️⃣ PRODUCT TEMPLATE */}
              <ProductTemplate onNavigate={handleNavigateToProduct} />

              {/* 3️⃣ SOLUTIONS TEMPLATE */}
              <SolutionsTemplate />

              {/* 4️⃣ ABOUT TEMPLATE */}
              <AboutTemplate />
            </>
          )}

        </main>

        {/* QS Footer - Root level, last element (not shown for contact, privacy, or terms pages, which have their own footers) */}
        {currentRoute !== '/contact' && currentRoute !== '/privacy' && currentRoute !== '/terms' && <Footer />}
        </div>
      </div>

      </div>
    </ContactRevealContext.Provider>
    </>
  );
}
