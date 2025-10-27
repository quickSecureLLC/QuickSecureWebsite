/**
 * QS/Header - QuickSecure global navigation header
 * REFINED v3: Enterprise-grade hover menus with hover-intent
 * 
 * Features:
 * - Logo + Navigation links with subtle hover bubble highlights
 * - Unified dropdown system with fixed 420px height
 * - Hover-intent timing: OPEN 140ms, CLOSE 180ms
 * - Only one dropdown open at a time
 * - Clean glass morphism with soft gradient divider
 * - CTA buttons (Contact Sales, Get a Demo)
 * - Responsive mobile menu with accordions
 * 
 * Interaction: Hover-intent with queue management
 * Visual: Clean frosted glass (0.70 opacity) with 12px blur + saturate
 * All tokens: Token-based with rgba transparency fallbacks only for glass effects
 */

import { useState, useRef, useEffect } from "react";
import { Menu, X } from "lucide-react";
import {
  NexusSystemIcon,
  DrillManagementIcon,
  TicketingSystemIcon,
  PanicButtonIcon,
  VisitorManagementIcon,
  GunshotDetectionIcon,
  RetrofitLockIcon,
  MassNotificationsIcon,
  AnonymousTipLineIcon
} from "../../icons";

interface HeaderProps {
  onNavigateToProduct?: (productId: string) => void;
  onContactClick?: () => void;
  className?: string;
}

// Hover-intent timing constants
const OPEN_DELAY = 140;  // ms
const CLOSE_DELAY = 180; // ms
const LEAVE_DELAY = 220; // ms before dropdown closes when pointer leaves

// Product data with icons and descriptions
const PRODUCTS = [
  {
    id: 'nexus',
    name: 'QuickSecure Nexus',
    description: 'Unified safety operations hub connecting alerts, drills, ticketing, and analytics',
    icon: NexusSystemIcon,
    path: '#/products/nexus'
  },
  {
    id: 'drill-management',
    name: 'Drill Management',
    description: 'Automated safety drill coordination with AI-driven insights',
    icon: DrillManagementIcon,
    path: '#/products/drill-management'
  },
  {
    id: 'ticketing',
    name: 'Ticketing System',
    description: 'Unified maintenance and safety tracking across IT, facilities, and security',
    icon: TicketingSystemIcon,
    path: '#/products/ticketing'
  },
  {
    id: 'panic-app',
    name: 'Panic Button App',
    description: 'One-touch emergency response with GPS location and live communication',
    icon: PanicButtonIcon,
    path: '#/products/panic-app'
  },
  {
    id: 'visitor-management',
    name: 'Visitor Management',
    description: 'Smart digital check-in system with ID scanning and badge issuance',
    icon: VisitorManagementIcon,
    path: '#/products/visitor-management'
  },
  {
    id: 'gunshot-detection',
    name: 'AI Gunshot Detection',
    description: 'Acoustic sensors with instant alerts notifying staff and law enforcement',
    icon: GunshotDetectionIcon,
    path: '#/products/gunshot-detection'
  },
  {
    id: 'electronic-lock',
    name: 'Rapid Lockdown System',
    description: 'Electronic retrofit door control with instant centralized or manual lockdown',
    icon: RetrofitLockIcon,
    path: '#/products/electronic-lock'
  },
  {
    id: 'mass-notifications',
    name: 'Mass Notification',
    description: 'Instant, targeted communication via SMS, email, voice, and app',
    icon: MassNotificationsIcon,
    path: '#/products/mass-notifications'
  },
  {
    id: 'tip-line',
    name: 'AI Tip Line',
    description: 'Anonymous AI-powered reporting filtering and prioritizing threats',
    icon: AnonymousTipLineIcon,
    path: '#/products/tip-line'
  }
];

const RESOURCES = [
  { 
    id: 'grants', 
    name: 'Grants',
    description: 'Federal, state, and foundation funding opportunities',
    path: '#/resources', 
    anchor: 'Resources_Grants' 
  },
  { 
    id: 'faq', 
    name: 'FAQ',
    description: 'Frequently asked questions and quick answers',
    path: '#/resources', 
    anchor: 'Resources_FAQ' 
  }
];

// Unified Dropdown Component v3
interface UnifiedDropdownProps {
  isOpen: boolean;
  items: Array<{ 
    id: string; 
    name: string; 
    description?: string; 
    path: string; 
    anchor?: string;
    icon?: React.ComponentType<any>;
  }>;
  hoveredItem: string | null;
  onItemHover: (itemId: string | null) => void;
  onItemClick?: (item: any) => void;
  showIcons?: boolean;
  onClose?: () => void;
}

function UnifiedDropdown({ 
  isOpen, 
  items, 
  hoveredItem, 
  onItemHover,
  onItemClick,
  showIcons = false,
  onClose
}: UnifiedDropdownProps) {
  const [isClosing, setIsClosing] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  
  if (!isOpen && !isClosing) return null;

  const hoveredItemData = items.find(i => i.id === hoveredItem);
  const ItemIcon = showIcons && hoveredItemData?.icon ? hoveredItemData.icon : null;

  // Close mega menu with animation
  const closeMegaMenu = async (href?: string) => {
    if (!menuRef.current) return;
    
    setIsClosing(true);
    menuRef.current.setAttribute('data-state', 'closing');
    
    return new Promise<void>((resolve) => {
      setTimeout(() => {
        setIsClosing(false);
        if (onClose) onClose();
        if (href) {
          window.location.hash = href.replace('#', '');
        }
        resolve();
      }, 170); // slightly > duration
    });
  };

  // Handle submenu link click
  const handleSubmenuClick = async (e: React.MouseEvent<HTMLAnchorElement>, item: any) => {
    if (item.anchor && onItemClick) {
      e.preventDefault();
      await closeMegaMenu();
      onItemClick(item);
    } else {
      e.preventDefault();
      await closeMegaMenu(item.path);
    }
  };

  // Handle keyboard activation
  const handleSubmenuKeyDown = async (e: React.KeyboardEvent<HTMLAnchorElement>, item: any) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      if (item.anchor && onItemClick) {
        await closeMegaMenu();
        onItemClick(item);
      } else {
        await closeMegaMenu(item.path);
      }
    }
  };

  return (
    <div
      ref={menuRef}
      className="unified-dropdown-v3 qs-mega"
      data-state={isClosing ? 'closing' : 'open'}
      style={{
        position: 'fixed',
        top: '68px',
        left: '50%',
        transform: 'translateX(-50%)',
        width: items.some(item => item.description) ? '760px' : 'auto',
        minWidth: items.some(item => item.description) ? '760px' : '280px',
        background: 'rgba(255, 255, 255, 0.70)',
        backdropFilter: 'blur(12px) saturate(120%)',
        WebkitBackdropFilter: 'blur(12px) saturate(120%)',
        borderRadius: '20px',
        boxShadow: '0 10px 30px rgba(0, 0, 0, 0.10), 0 2px 10px rgba(0, 0, 0, 0.06)',
        display: 'flex',
        gap: '0',
        zIndex: 999,
        animation: 'dropdown-fade-slide-v3 200ms ease forwards',
        overflow: 'hidden'
      }}
    >
      <style>{`
        @keyframes dropdown-fade-slide-v3 {
          from {
            opacity: 0;
            transform: translateX(-50%) translateY(-6px);
          }
          to {
            opacity: 1;
            transform: translateX(-50%) translateY(0);
          }
        }
      `}</style>

      {/* Left Column: Item List */}
      <div style={{
        flex: '1 1 auto',
        padding: items.some(item => item.description) ? '16px 20px' : '24px 32px',
        display: 'flex',
        flexDirection: 'column',
        gap: '4px',
        position: 'relative'
      }}>
        {items.map((item) => {
          const Icon = showIcons && item.icon ? item.icon : null;
          
          return (
            <a
              key={item.id}
              href={item.anchor ? '#' : item.path}
              data-nav="submenu"
              onClick={(e) => handleSubmenuClick(e, item)}
              onKeyDown={(e) => handleSubmenuKeyDown(e, item)}
              onMouseEnter={() => onItemHover(item.id)}
              onMouseLeave={() => onItemHover(null)}
              className="no-underline-hover qs-subitem"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                height: '44px',
                padding: '0 12px',
                borderRadius: '8px',
                textDecoration: 'none',
                transition: 'background-color 150ms ease, color 150ms ease',
                backgroundColor: hoveredItem === item.id 
                  ? 'rgba(43, 94, 156, 0.10)' 
                  : 'transparent',
                cursor: 'pointer'
              }}
            >
              {Icon && (
                <div style={{
                  width: '18px',
                  height: '18px',
                  flexShrink: 0,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  <Icon style={{ width: '18px', height: '18px' }} />
                </div>
              )}
              <span style={{
                fontFamily: 'var(--qs-type-family-body)',
                fontSize: '15px',
                fontWeight: 500,
                lineHeight: '20px',
                color: hoveredItem === item.id 
                  ? 'var(--qs-brand-accent)' 
                  : 'var(--qs-text-primary)'
              }}>
                {item.name}
              </span>
            </a>
          );
        })}
      </div>

      {/* Soft Gradient Divider and Right Column - Only show if descriptions exist */}
      {items.some(item => item.description) && (
        <>
          {/* Soft Gradient Divider - 20px invisible buffer zone */}
          <div style={{
            width: '20px',
            position: 'relative',
            flexShrink: 0
          }}>
            <div style={{
              position: 'absolute',
              left: '0',
              top: '40px',
              bottom: '40px',
              width: '1px',
              background: 'linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.06) 20%, rgba(0, 0, 0, 0.06) 80%, rgba(0, 0, 0, 0))',
              pointerEvents: 'none'
            }} />
          </div>

          {/* Right Column: Detail Pane */}
          <div style={{
            width: '280px',
            flexShrink: 0,
            padding: '24px',
            display: 'flex',
            flexDirection: 'column',
            gap: '12px'
          }}>
            {hoveredItemData ? (
              <>
                {ItemIcon && (
                  <div style={{
                    width: '40px',
                    height: '40px',
                    marginBottom: '4px'
                  }}>
                    <ItemIcon style={{ width: '40px', height: '40px' }} />
                  </div>
                )}
                <div>
                  <h4 style={{
                    fontFamily: 'var(--qs-type-family-display)',
                    fontSize: 'clamp(20px, 1.94vw, 28px)',
                    fontWeight: 'var(--qs-type-weight-light)',
                    lineHeight: 'clamp(28px, 2.78vw, 40px)',
                    letterSpacing: '-0.25px',
                    color: 'var(--qs-text-secondary)',
                    marginBottom: '8px'
                  }}>
                    {hoveredItemData.name}
                  </h4>
                  <p style={{
                    fontFamily: 'var(--qs-type-family-body)',
                    fontSize: 'clamp(15px, 1.11vw, 16px)',
                    fontWeight: 'var(--qs-type-weight-regular)',
                    lineHeight: 'clamp(26px, 1.94vw, 28px)',
                    letterSpacing: '-0.25px',
                    color: 'var(--qs-text-secondary)',
                    marginBottom: '12px'
                  }}>
                    {hoveredItemData.description}
                  </p>
                  <div style={{
                    width: '32px',
                    height: '2px',
                    backgroundColor: 'var(--qs-brand-accent)'
                  }} />
                </div>
              </>
            ) : (
              <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                height: '100%',
                textAlign: 'center'
              }}>
                <p style={{
                  fontFamily: 'var(--qs-type-family-body)',
                  fontSize: '13px',
                  lineHeight: '18px',
                  color: 'var(--qs-text-muted)'
                }}>
                  Hover to learn more
                </p>
              </div>
            )}
          </div>
        </>
      )}
    </div>
  );
}

export function Header({ onNavigateToProduct, onContactClick, className = "" }: HeaderProps) {
  const [activeDropdown, setActiveDropdown] = useState<'products' | 'resources' | null>(null);
  const [hoveredProduct, setHoveredProduct] = useState<string | null>(null);
  
  const [hoveredResource, setHoveredResource] = useState<string | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [currentPath, setCurrentPath] = useState<string>('');
  
  const openTimerRef = useRef<NodeJS.Timeout | null>(null);
  const closeTimerRef = useRef<NodeJS.Timeout | null>(null);
  const leaveTimerRef = useRef<NodeJS.Timeout | null>(null);
  const mobileMenuRef = useRef<HTMLDivElement>(null);

  // Track current route for active nav highlighting
  useEffect(() => {
    const updatePath = () => {
      setCurrentPath(window.location.hash.slice(1) || '/');
    };
    
    updatePath();
    window.addEventListener('hashchange', updatePath);
    return () => window.removeEventListener('hashchange', updatePath);
  }, []);

  // Cleanup all timers on unmount
  useEffect(() => {
    return () => {
      if (openTimerRef.current) clearTimeout(openTimerRef.current);
      if (closeTimerRef.current) clearTimeout(closeTimerRef.current);
      if (leaveTimerRef.current) clearTimeout(leaveTimerRef.current);
    };
  }, []);

  // Helper to determine if a nav item is active
  const isActive = (section: string) => {
    if (section === 'products') {
      return currentPath.startsWith('/products');
    } else if (section === 'solutions') {
      return currentPath.startsWith('/solutions');
    } else if (section === 'resources') {
      return currentPath.startsWith('/resources');
    } else if (section === 'about') {
      return currentPath === '/about';
    }
    return false;
  };

  // Hover-intent: Open dropdown with delay
  const handleNavItemEnter = (dropdown: 'products' | 'resources') => {
    // Cancel any pending close operations
    if (closeTimerRef.current) {
      clearTimeout(closeTimerRef.current);
      closeTimerRef.current = null;
    }
    if (leaveTimerRef.current) {
      clearTimeout(leaveTimerRef.current);
      leaveTimerRef.current = null;
    }

    // If switching dropdowns, close current immediately then open new one
    if (activeDropdown && activeDropdown !== dropdown) {
      setActiveDropdown(null);
      // Clear any pending opens
      if (openTimerRef.current) {
        clearTimeout(openTimerRef.current);
        openTimerRef.current = null;
      }
      // Queue the new dropdown after a brief moment
      openTimerRef.current = setTimeout(() => {
        setActiveDropdown(dropdown);
      }, CLOSE_DELAY);
    } else if (!activeDropdown) {
      // Opening from closed state - use OPEN_DELAY
      if (openTimerRef.current) {
        clearTimeout(openTimerRef.current);
      }
      openTimerRef.current = setTimeout(() => {
        setActiveDropdown(dropdown);
      }, OPEN_DELAY);
    }
  };

  // Hover-intent: Close dropdown with delay
  const handleNavItemLeave = () => {
    // Cancel open timer if hovering away before it triggered
    if (openTimerRef.current) {
      clearTimeout(openTimerRef.current);
      openTimerRef.current = null;
    }

    // Queue close
    leaveTimerRef.current = setTimeout(() => {
      setActiveDropdown(null);
      setHoveredProduct(null);
      setHoveredResource(null);
    }, LEAVE_DELAY);
  };

  // Keep dropdown open while mouse is over dropdown container
  const handleDropdownEnter = () => {
    if (leaveTimerRef.current) {
      clearTimeout(leaveTimerRef.current);
      leaveTimerRef.current = null;
    }
    if (openTimerRef.current) {
      clearTimeout(openTimerRef.current);
      openTimerRef.current = null;
    }
  };

  const handleDropdownLeave = () => {
    leaveTimerRef.current = setTimeout(() => {
      setActiveDropdown(null);
      setHoveredProduct(null);
      setHoveredResource(null);
    }, LEAVE_DELAY);
  };

  // Close dropdown immediately when clicking main nav link
  const handleMainNavClick = () => {
    // Clear all timers
    if (openTimerRef.current) {
      clearTimeout(openTimerRef.current);
      openTimerRef.current = null;
    }
    if (closeTimerRef.current) {
      clearTimeout(closeTimerRef.current);
      closeTimerRef.current = null;
    }
    if (leaveTimerRef.current) {
      clearTimeout(leaveTimerRef.current);
      leaveTimerRef.current = null;
    }
    
    // Close dropdown immediately
    setActiveDropdown(null);
    setHoveredProduct(null);
    setHoveredResource(null);
  };

  // Helper function to scroll to anchor with smooth animation
  const scrollToAnchor = (anchorId: string) => {
    const tabMap: Record<string, string> = {
      'Resources_Grants': 'grants',
      'Resources_FAQ': 'faq'
    };

    const tabName = tabMap[anchorId];

    if (window.location.hash !== '#/resources') {
      window.location.hash = '/resources';
      setTimeout(() => {
        if (tabName) {
          window.dispatchEvent(new CustomEvent('switchResourceTab', { detail: { tab: tabName } }));
        }
        setTimeout(() => {
          const anchor = document.getElementById(anchorId);
          if (anchor) {
            const headerHeight = 64;
            const targetPosition = anchor.getBoundingClientRect().top + window.scrollY - headerHeight;
            window.scrollTo({ top: targetPosition, behavior: 'auto' });
          }
        }, 50);
      }, 100);
    } else {
      if (tabName) {
        window.dispatchEvent(new CustomEvent('switchResourceTab', { detail: { tab: tabName } }));
      }
      setTimeout(() => {
        const anchor = document.getElementById(anchorId);
        if (anchor) {
          const headerHeight = 64;
          const targetPosition = anchor.getBoundingClientRect().top + window.scrollY - headerHeight;
          window.scrollTo({ top: targetPosition, behavior: 'auto' });
        }
      }, 50);
    }
  };

  // Close mobile menu when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (mobileMenuRef.current && !mobileMenuRef.current.contains(event.target as Node)) {
        setIsMobileMenuOpen(false);
      }
    }

    if (isMobileMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      return () => document.removeEventListener('mousedown', handleClickOutside);
    }
  }, [isMobileMenuOpen]);

  return (
    <>
      <style>{`
        /* Nav item hover bubble - refined v3 */
        .nav-item-bubble-v3 {
          position: relative;
        }

        .nav-item-bubble-v3::before {
          content: '';
          position: absolute;
          top: -6px;
          left: -14px;
          right: -14px;
          bottom: -6px;
          background: var(--qs-panel);
          opacity: 0;
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          border-radius: 999px;
          transform: scale(0.95);
          transition: opacity 150ms ease-in-out, transform 150ms ease-in-out;
          pointer-events: none;
          z-index: -1;
        }

        .nav-item-bubble-v3:hover::before {
          opacity: 0.75;
          transform: scale(1);
        }

        /* Responsive */
        @media (max-width: 768px) {
          .qs-header-container {
            padding: var(--qs-space-4) var(--qs-space-10) !important;
          }
          .qs-header-nav {
            display: none !important;
          }
          .qs-header-cta {
            display: none !important;
          }
          .qs-mobile-menu-button {
            display: flex !important;
          }
          .qs-mobile-menu {
            display: block !important;
          }
        }
        @media (max-width: 480px) {
          .qs-header-container {
            padding: var(--qs-space-3) var(--qs-space-6) !important;
          }
        }
      `}</style>
      
      <nav className={`${className} qs-header-container`} style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        width: '100%',
        zIndex: 1000,
        padding: `var(--qs-space-4) var(--qs-space-20)`,
        backgroundColor: 'transparent'
      }}>
        {/* Glass Background with border - matching dropdown styling */}
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(255, 255, 255, 0.70)',
          backdropFilter: 'blur(12px) saturate(120%)',
          WebkitBackdropFilter: 'blur(12px) saturate(120%)',
          borderBottom: '1px solid rgba(0, 0, 0, 0.08)',
          zIndex: 0
        }} />
        
        <div style={{
          maxWidth: '1440px',
          margin: '0 auto',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          position: 'relative',
          zIndex: 1
        }}>
          {/* Logo */}
          <a href="#/" className="no-underline-hover" style={{
            display: 'flex',
            alignItems: 'center',
            gap: 'var(--qs-space-3)',
            textDecoration: 'none',
            transition: 'opacity 150ms ease'
          }}
          onMouseEnter={(e) => e.currentTarget.style.opacity = '0.8'}
          onMouseLeave={(e) => e.currentTarget.style.opacity = '1'}
          >
            <img 
              src="/media/QS-Logo-Brand%20Blue.svg" 
              alt="QuickSecure"
              style={{
                height: '40px',
                width: 'auto'
              }}
            />
            <span style={{
              fontFamily: 'Inter, sans-serif',
              fontWeight: 700,
              fontSize: '20px',
              color: 'var(--navbar-text-color)'
            }}>
              QuickSecure
            </span>
          </a>

          {/* Navigation Links */}
          <div className="qs-header-nav" style={{
            display: 'flex',
            alignItems: 'center',
            gap: 'var(--qs-space-8)'
          }}>
            {/* Products Dropdown */}
            <div
              style={{ position: 'relative' }}
              onMouseEnter={() => handleNavItemEnter('products')}
              onMouseLeave={handleNavItemLeave}
            >
              <a
                href="#/products"
                className={`no-underline-hover nav-item-bubble-v3 ${isActive('products') ? 'active' : ''}`}
                style={{
                  fontFamily: 'var(--qs-type-family-body)',
                  fontSize: '16px',
                  fontWeight: 500,
                  lineHeight: '24px',
                  color: isActive('products') ? 'var(--qs-brand-accent)' : 'var(--navbar-text-color)',
                  textDecoration: 'none',
                  padding: 'var(--qs-space-2) 0',
                  transition: 'color 150ms ease',
                  cursor: 'pointer'
                }}
                onClick={handleMainNavClick}
                onMouseEnter={(e) => {
                  if (!isActive('products')) {
                    e.currentTarget.style.color = 'var(--qs-brand-accent)';
                  }
                }}
                onMouseLeave={(e) => {
                  if (!isActive('products')) {
                    e.currentTarget.style.color = 'var(--navbar-text-color)';
                  }
                }}
              >
                Products
              </a>
              <div
                onMouseEnter={handleDropdownEnter}
                onMouseLeave={handleDropdownLeave}
              >
                <UnifiedDropdown
                  isOpen={activeDropdown === 'products'}
                  items={PRODUCTS}
                  hoveredItem={hoveredProduct}
                  onItemHover={setHoveredProduct}
                  onClose={handleMainNavClick}
                  showIcons={true}
                />
              </div>
            </div>

            {/* Solutions - No Dropdown */}
            <a
              href="#/solutions"
              className={`no-underline-hover nav-item-bubble-v3 ${isActive('solutions') ? 'active' : ''}`}
              style={{
                fontFamily: 'var(--qs-type-family-body)',
                fontSize: '16px',
                fontWeight: 500,
                lineHeight: '24px',
                color: isActive('solutions') ? 'var(--qs-brand-accent)' : 'var(--navbar-text-color)',
                textDecoration: 'none',
                padding: 'var(--qs-space-2) 0',
                transition: 'color 150ms ease',
                cursor: 'pointer'
              }}
              onClick={handleMainNavClick}
              onMouseEnter={(e) => {
                if (!isActive('solutions')) {
                  e.currentTarget.style.color = 'var(--qs-brand-accent)';
                }
              }}
              onMouseLeave={(e) => {
                if (!isActive('solutions')) {
                  e.currentTarget.style.color = 'var(--navbar-text-color)';
                }
              }}
            >
              Solutions
            </a>

            {/* Resources Dropdown */}
            <div
              style={{ position: 'relative' }}
              onMouseEnter={() => handleNavItemEnter('resources')}
              onMouseLeave={handleNavItemLeave}
            >
              <a
                href="#/resources"
                className={`no-underline-hover nav-item-bubble-v3 ${isActive('resources') ? 'active' : ''}`}
                style={{
                  fontFamily: 'var(--qs-type-family-body)',
                  fontSize: '16px',
                  fontWeight: 500,
                  lineHeight: '24px',
                  color: isActive('resources') ? 'var(--qs-brand-accent)' : 'var(--navbar-text-color)',
                  textDecoration: 'none',
                  padding: 'var(--qs-space-2) 0',
                  transition: 'color 150ms ease',
                  cursor: 'pointer'
                }}
                onClick={handleMainNavClick}
                onMouseEnter={(e) => {
                  if (!isActive('resources')) {
                    e.currentTarget.style.color = 'var(--qs-brand-accent)';
                  }
                }}
                onMouseLeave={(e) => {
                  if (!isActive('resources')) {
                    e.currentTarget.style.color = 'var(--navbar-text-color)';
                  }
                }}
              >
                Resources
              </a>
              <div
                onMouseEnter={handleDropdownEnter}
                onMouseLeave={handleDropdownLeave}
              >
                <UnifiedDropdown
                  isOpen={activeDropdown === 'resources'}
                  items={RESOURCES}
                  hoveredItem={hoveredResource}
                  onItemHover={setHoveredResource}
                  onItemClick={(item) => {
                    if (item.anchor) {
                      scrollToAnchor(item.anchor);
                    }
                  }}
                  onClose={handleMainNavClick}
                  showIcons={false}
                />
              </div>
            </div>

            {/* About Link */}
            <a
              href="#/about"
              className={`no-underline-hover nav-item-bubble-v3 ${isActive('about') ? 'active' : ''}`}
              style={{
                fontFamily: 'var(--qs-type-family-body)',
                fontSize: '16px',
                fontWeight: 500,
                lineHeight: '24px',
                color: isActive('about') ? 'var(--qs-brand-accent)' : 'var(--navbar-text-color)',
                textDecoration: 'none',
                padding: 'var(--qs-space-2) 0',
                transition: 'color 150ms ease'
              }}
              onClick={handleMainNavClick}
              onMouseEnter={(e) => {
                if (!isActive('about')) {
                  e.currentTarget.style.color = 'var(--qs-brand-accent)';
                }
              }}
              onMouseLeave={(e) => {
                if (!isActive('about')) {
                  e.currentTarget.style.color = 'var(--navbar-text-color)';
                }
              }}
            >
              About
            </a>
          </div>

          {/* CTA Buttons */}
          <div className="qs-header-cta" style={{
            display: 'flex',
            alignItems: 'center',
            gap: 'var(--qs-space-3)'
          }}>
            <a
              href="https://dashboard.quicksecure.us"
              target="_blank"
              rel="noopener noreferrer"
              className="no-underline-hover"
              style={{
                fontFamily: 'var(--qs-type-family-body)',
                fontSize: '15px',
                fontWeight: 600,
                lineHeight: '20px',
                color: 'var(--qs-brand-accent)',
                backgroundColor: 'transparent',
                border: 'none',
                padding: 'var(--qs-space-2) var(--qs-space-4)',
                borderRadius: 'var(--qs-radius-md)',
                cursor: 'pointer',
                transition: 'background-color 150ms ease',
                textDecoration: 'none',
                display: 'inline-flex',
                alignItems: 'center'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = 'rgba(43, 94, 156, 0.1)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'transparent';
              }}
            >
              Dashboard Login
            </a>
            <button
              onClick={() => {
                if (onContactClick) {
                  onContactClick();
                } else {
                  window.location.hash = '/contact';
                }
              }}
              className="no-underline-hover"
              style={{
                fontFamily: 'var(--qs-type-family-body)',
                fontSize: '15px',
                fontWeight: 600,
                lineHeight: '20px',
                color: 'var(--qs-brand-accent-fg)',
                backgroundColor: 'var(--qs-brand-accent)',
                border: 'none',
                padding: 'var(--qs-space-2) var(--qs-space-4)',
                borderRadius: 'var(--qs-radius-md)',
                cursor: 'pointer',
                transition: 'background-color 150ms ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = 'var(--qs-brand-accent-80)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'var(--qs-brand-accent)';
              }}
            >
              Get a Demo
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="qs-mobile-menu-button"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            style={{
              display: 'none',
              alignItems: 'center',
              justifyContent: 'center',
              width: '40px',
              height: '40px',
              backgroundColor: 'transparent',
              border: 'none',
              cursor: 'pointer',
              color: 'var(--navbar-text-color)'
            }}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div
            ref={mobileMenuRef}
            className="qs-mobile-menu"
            style={{
              display: 'none',
              position: 'absolute',
              top: '100%',
              left: 0,
              right: 0,
              backgroundColor: 'var(--navbar-glass-bg)',
              backdropFilter: 'var(--navbar-glass-blur)',
              WebkitBackdropFilter: 'var(--navbar-glass-blur)',
              padding: 'var(--qs-space-6)',
              borderTop: '1px solid rgba(255, 255, 255, 0.2)'
            }}
          >
            <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--qs-space-4)' }}>
              <a href="#/products" style={{ color: 'var(--navbar-text-color)', textDecoration: 'none' }}>
                Products
              </a>
              <a href="#/solutions" style={{ color: 'var(--navbar-text-color)', textDecoration: 'none' }}>
                Solutions
              </a>
              <a href="#/resources" style={{ color: 'var(--navbar-text-color)', textDecoration: 'none' }}>
                Resources
              </a>
              <a href="#/about" style={{ color: 'var(--navbar-text-color)', textDecoration: 'none' }}>
                About
              </a>
            </div>
          </div>
        )}
      </nav>
    </>
  );
}
