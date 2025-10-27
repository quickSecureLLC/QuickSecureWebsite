/**
 * Products — Overview Page
 * "Complete Safety Platform" with all 9 product cards
 * 
 * Published as: QS/Products Overview
 * Route: #/products
 * 
 * Sections:
 * 1️⃣ Hero Section (title, subhead, search/filter)
 * 2️⃣ Product Cards Grid (9 products in 3-column layout)
 * 3️⃣ Integration CTA (platform benefits)
 * 
 * Product Cards Link To:
 * - QuickSecure Nexus → #/products/nexus
 * - Panic App → #/products/panic-app
 * - Gunshot Detection → #/products/gunshot-detection
 * - Ticketing → #/products/ticketing
 * - Drill Management → #/products/drill-management
 * - Visitor Management → #/products/visitor-management
 * - Mass Notifications → #/products/mass-notifications
 * - Electronic Lock → #/products/electronic-lock
 * - Anonymous Tip Line → #/products/tip-line
 */

import React from "react";
import { 
  Network, Shield, Smartphone, UserCheck, Lock, 
  Mic, Radio, Ticket, PhoneCall,
  ArrowRight
} from "lucide-react";
import { Footer } from "./qs";
import { useFadeUpOnScroll } from "./hooks/useFadeUpOnScroll";
import { useParallax } from "./hooks/useParallax";

export function ProductsOverview() {
  // Global design standards: fade-up animations and parallax
  useFadeUpOnScroll();
  useParallax();

  // 9 Products
  const products = [
    {
      id: "nexus",
      name: "QuickSecure Nexus",
      subtitle: "Unified safety operations hub",
      description: "Central dashboard connecting alerts, drills, ticketing, and analytics for complete campus visibility.",
      icon: <Network style={{ width: '32px', height: '32px' }} />,
      category: "Platform",
      route: "#/products/nexus"
    },
    {
      id: "panic-app",
      name: "Panic Button App",
      subtitle: "One-touch emergency response",
      description: "Instantly alerts responders with GPS location and live communication from any device.",
      icon: <Smartphone style={{ width: '32px', height: '32px' }} />,
      category: "Emergency",
      route: "#/products/panic-app"
    },
    {
      id: "gunshot-detection",
      name: "AI Gunshot Detection",
      subtitle: "Acoustic sensors with instant alerts",
      description: "Detects and verifies gunfire automatically, notifying staff and law enforcement in seconds.",
      icon: <Mic style={{ width: '32px', height: '32px' }} />,
      category: "Emergency",
      route: "#/products/gunshot-detection"
    },
    {
      id: "ticketing",
      name: "Ticketing System",
      subtitle: "Unified maintenance and safety tracking",
      description: "Automates issue reporting across IT, facilities, and security with real-time updates.",
      icon: <Ticket style={{ width: '32px', height: '32px' }} />,
      category: "Operations",
      route: "#/products/ticketing"
    },
    {
      id: "drill-management",
      name: "Drill Management",
      subtitle: "Automated safety drill coordination",
      description: "Plans, executes, and records drills with AI-driven insights and compliance tracking.",
      icon: <Shield style={{ width: '32px', height: '32px' }} />,
      category: "Compliance",
      route: "#/products/drill-management"
    },
    {
      id: "visitor-management",
      name: "Visitor Management",
      subtitle: "Smart digital check-in system",
      description: "Scans IDs, issues badges, and logs visitor activity for secure, traceable access.",
      icon: <UserCheck style={{ width: '32px', height: '32px' }} />,
      category: "Access Control",
      route: "#/products/visitor-management"
    },
    {
      id: "mass-notifications",
      name: "Mass Notifications",
      subtitle: "Instant, targeted communication",
      description: "Sends alerts and personalized safety instructions via SMS, email, voice, and app.",
      icon: <Radio style={{ width: '32px', height: '32px' }} />,
      category: "Emergency",
      route: "#/products/mass-notifications"
    },
    {
      id: "electronic-lock",
      name: "Rapid Lockdown System",
      subtitle: "Electronic retrofit door control",
      description: "Locks down buildings instantly through centralized or manual commands with live status feedback.",
      icon: <Lock style={{ width: '32px', height: '32px' }} />,
      category: "Access Control",
      route: "#/products/electronic-lock"
    },
    {
      id: "tip-line",
      name: "AI Tip Line",
      subtitle: "Anonymous AI-powered reporting",
      description: "Securely collects and categorizes reports from students and staff to identify real threats faster. Filters and prioritizes tips while protecting identity.",
      icon: <PhoneCall style={{ width: '32px', height: '32px' }} />,
      category: "Safety",
      route: "#/products/tip-line"
    }
  ];

  return (
    <>
      <style>{`
        @media (max-width: 768px) {
          .products-hero {
            padding: 64px 40px !important;
          }
          .products-grid {
            grid-template-columns: 1fr !important;
          }
          .filter-buttons {
            flex-wrap: wrap !important;
          }
        }
        @media (max-width: 480px) {
          .products-hero {
            padding: 48px 24px !important;
          }
          .search-input {
            width: 100% !important;
          }
        }

        /* Product card hover effect */
        .product-card {
          transition: transform 200ms ease, box-shadow 200ms ease;
          cursor: pointer;
        }

        .product-card:hover {
          transform: translateY(-4px);
          box-shadow: var(--qs-shadow-2);
        }

        /* Product card underline animation - clipped to border radius */
        .product-card::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          height: 3px;
          background-color: var(--qs-brand-accent);
          transform: scaleX(0);
          transform-origin: left;
          transition: transform 200ms ease-out;
          border-radius: 0 0 16px 16px;
        }

        .product-card:hover::after {
          transform: scaleX(1);
        }

        .product-card:hover .product-icon {
          transform: scale(1.1);
        }

        .product-icon {
          transition: transform 200ms ease;
        }

        /* Filter button styles */
        .filter-button {
          transition: all 150ms ease;
        }

        .filter-button:hover {
          background-color: var(--qs-panel);
        }

        .filter-button.active {
          background-color: var(--qs-brand-primary);
          color: var(--qs-brand-primary-fg);
        }
      `}</style>

      <div style={{ height: '100%', width: '100%', overflowY: 'auto', backgroundColor: '#FFFFFF', paddingTop: 0 }}>
        {/* NO TOP SPACER - Content starts at Y=0 directly under sticky header */}

        {/* 1️⃣ HERO SECTION */}
        <section className="products-hero fade-up-on-scroll parallax-hero parallax-hero-20" style={{
          padding: '120px 80px 80px',
          backgroundColor: '#F7F9FA',
          borderBottom: '1px solid rgba(0, 0, 0, 0.1)'
        }}>
          <div style={{
            maxWidth: '1200px',
            margin: '0 auto',
            textAlign: 'center'
          }}>
            <h1 style={{
              marginBottom: '24px'
            }}>
              Complete Safety Platform
            </h1>

            <p style={{
              maxWidth: '800px',
              margin: '0 auto'
            }}>
              Explore QuickSecure's integrated hardware and software solutions that keep campuses safe and connected.
            </p>

          </div>
        </section>

        {/* 2️⃣ PRODUCT CARDS GRID */}
        <section className="fade-up-on-scroll delay-150" style={{
          padding: '96px 80px',
          backgroundColor: '#FFFFFF'
        }}>
          <div style={{
            maxWidth: '1200px',
            margin: '0 auto'
          }}>
            <div className="products-grid" style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: '32px'
            }}>
              {products.map((product, index) => (
                <a
                  key={product.id}
                  href={product.route}
                  className={`product-card fade-up-on-scroll delay-${(index % 3) * 150}`}
                  style={{
                    display: 'block',
                    padding: '32px',
                    backgroundColor: '#FFFFFF',
                    border: '1px solid rgba(0, 0, 0, 0.1)',
                    borderRadius: '16px',
                    textDecoration: 'none',
                    color: 'inherit',
                    overflow: 'hidden',
                    position: 'relative'
                  }}
                >
                  {/* Icon */}
                  <div className="product-icon" style={{
                    width: '64px',
                    height: '64px',
                    backgroundColor: 'rgba(14, 28, 43, 0.1)',
                    borderRadius: '12px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '24px',
                    color: 'var(--qs-brand-accent)'
                  }}>
                    {product.icon}
                  </div>

                  {/* Name */}
                  <h3 style={{
                    marginBottom: '8px',
                    color: 'var(--qs-brand-primary)'
                  }}>
                    {product.name}
                  </h3>

                  {/* Subtitle */}
                  <p className="qs-text-body-small" style={{
                    color: 'var(--qs-brand-accent)',
                    marginBottom: '12px'
                  }}>
                    {product.subtitle}
                  </p>

                  {/* Description */}
                  <p className="qs-text-body-medium" style={{
                    marginBottom: '16px'
                  }}>
                    {product.description}
                  </p>

                  {/* Learn More Link */}
                  <div className="qs-text-body-small" style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    color: 'var(--qs-brand-accent)'
                  }}>
                    <span style={{ fontWeight: 600 }}>Learn More</span>
                    <ArrowRight style={{ width: '16px', height: '16px' }} />
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>


        {/* QS Footer */}
        <Footer />
      </div>
    </>
  );
}
