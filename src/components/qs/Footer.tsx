/**
 * QS/Footer - Canonical Footer Component
 * Published component from QuickSecure Web UI v1
 * 
 * @component QS/Footer
 * @version 2.0.0
 * @published October 2025
 * 
 * Features:
 * - 4-column footer grid (Brand, Products, Company, Contact)
 * - Social media links
 * - Legal row (Privacy, Terms, Cookies)
 * - Copyright information
 * - Fully responsive (desktop → tablet → mobile)
 * - Uses QS Tokens exclusively
 * - Dark background (--qs-surface-900) with teal accent
 * 
 * QS Tokens Used:
 * - Colors: --qs-surface-900, --qs-on-surface-900, --qs-border-900
 * - Spacing: --qs-space-* (8px grid) - 32px columns, 16px items
 * - Typography: --qs-font-body, --qs-font-weight-*
 * - Radius: 0 (no corner radius)
 * 
 * Design Specifications:
 * - Background: --qs-surface-900 (#1E1E1E)
 * - Text: --qs-on-surface-900 (#FFFFFF)
 * - Corner radius: 0
 * - Section gaps: 32px (columns), 16px (items)
 * - Legal row top border: 1px --qs-border-900 @ 24%
 * 
 * Responsive Breakpoints:
 * - Desktop: 1440px (4 columns)
 * - Tablet: 768px (2 columns)
 * - Mobile: 480px (1 column)
 */

import { Mail, Phone, MapPin, Linkedin } from "lucide-react";

interface FooterProps {
  className?: string;
}

export function Footer({ className = "" }: FooterProps) {
  return (
    <>
      <style>{`
        /* Responsive Footer Grid - Design System v2.0 */
        @media (max-width: 768px) {
          .qs-footer-container {
            padding: var(--qs-space-12) var(--qs-space-10) var(--qs-space-6) !important;
          }
          .qs-footer-grid {
            grid-template-columns: repeat(2, 1fr) !important;
            gap: var(--qs-space-8) !important; /* 32px columns */
          }
          .qs-footer-bottom {
            flex-direction: column !important;
            gap: var(--qs-space-4) !important;
            align-items: flex-start !important;
          }
          .qs-footer-legal {
            flex-direction: column !important;
            gap: var(--qs-space-4) !important; /* 16px items */
          }
        }
        @media (max-width: 480px) {
          .qs-footer-container {
            padding: var(--qs-space-8) var(--qs-space-6) var(--qs-space-4) !important;
          }
          .qs-footer-grid {
            grid-template-columns: 1fr !important;
            gap: var(--qs-space-8) !important; /* 32px columns */
          }
        }
      `}</style>
      
      <footer 
        className={`${className} qs-footer-container`} 
        style={{
          backgroundColor: 'var(--qs-surface-900)',
          color: 'var(--qs-on-surface-900)',
          padding: 'var(--qs-space-12) var(--qs-space-20) var(--qs-space-6)',
          borderRadius: '0',
          fontFamily: 'Inter, sans-serif'
        }}
        data-component="qs-footer"
      >
        <div style={{
          maxWidth: 'var(--qs-container-max-width)',
          margin: '0 auto'
        }}>
          {/* Top Section - 4 Column Grid */}
          <div className="qs-footer-grid" style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: 'var(--qs-space-8)', /* 32px between columns */
            marginBottom: 'var(--qs-space-8)'
          }}>
            {/* Column 1 - Brand */}
            <div>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: 'var(--qs-space-3)',
                marginBottom: 'var(--qs-space-4)'
              }}>
                <img 
                  src="/media/QS-Logo-Brand%20Blue.svg" 
                  alt="QuickSecure"
                  style={{
                    height: '48px',
                    width: 'auto',
                    filter: 'brightness(0) invert(1)'
                  }}
                />
                <span style={{
                  fontFamily: 'Inter, sans-serif',
                  fontWeight: 700,
                  fontSize: '24px',
                  color: 'var(--qs-text-on-dark)',
                  marginLeft: 'var(--qs-space-3)'
                }}>
                  QuickSecure
                </span>
              </div>
              <p style={{
                fontFamily: 'Inter, sans-serif',
                fontSize: '13px',
                lineHeight: '1.5',
                color: 'var(--qs-text-on-dark)',
                opacity: '0.8',
                margin: '0 0 16px 0'
              }}>
                Comprehensive safety platform for schools and campuses.
              </p>
              
              {/* Social Media Links */}
              <div style={{
                display: 'flex',
                gap: 'var(--qs-space-3)',
                marginTop: '0'
              }}>
                <a
                  href="https://linkedin.com/company/quicksecure-llc"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="hover-lift"
                  style={{
                    width: '36px',
                    height: '36px',
                    borderRadius: 'var(--qs-radius-md)',
                    backgroundColor: 'rgba(255, 255, 255, 0.1)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    transition: 'all 150ms ease'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = 'var(--qs-accent)';
                    e.currentTarget.style.transform = 'translateY(-2px)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
                    e.currentTarget.style.transform = 'translateY(0)';
                  }}
                >
                  <Linkedin style={{ width: '18px', height: '18px', color: 'var(--qs-on-surface-900)' }} />
                </a>
              </div>
            </div>

            {/* Column 2 - Products */}
            <div>
              <h4 style={{
                fontFamily: 'Inter, sans-serif',
                fontWeight: 600,
                fontSize: '13px',
                marginBottom: '12px',
                textTransform: 'uppercase',
                letterSpacing: '0.5px',
                color: 'var(--qs-on-surface-900)'
              }}>
                Products
              </h4>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                {[
                  { name: 'QuickSecure Nexus', href: '#/products/nexus' },
                  { name: 'Drill Management', href: '#/products/drill-management' },
                  { name: 'Panic Button', href: '#/products/panic-button' },
                  { name: 'Rapid Lockdown System', href: '#/products/rapid-lockdown' }
                ].map((item) => (
                  <li key={item.name} style={{ marginBottom: '8px' }}>
                    <a 
                      href={item.href}
                      className="no-underline-hover"
                      style={{
                        fontFamily: 'Inter, sans-serif',
                        fontSize: '13px',
                        lineHeight: '1.5',
                        color: 'var(--qs-on-surface-900)',
                        opacity: '0.8',
                        textDecoration: 'none',
                        transition: 'color 150ms ease, opacity 150ms ease'
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.color = 'var(--qs-accent)';
                        e.currentTarget.style.opacity = '1';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.color = 'var(--qs-on-surface-900)';
                        e.currentTarget.style.opacity = '0.8';
                      }}
                    >
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 3 - Company */}
            <div>
              <h4 style={{
                fontFamily: 'Inter, sans-serif',
                fontWeight: 600,
                fontSize: '13px',
                marginBottom: '12px',
                textTransform: 'uppercase',
                letterSpacing: '0.5px',
                color: 'var(--qs-on-surface-900)'
              }}>
                Company
              </h4>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                <li style={{ marginBottom: '8px' }}>
                  <a 
                    href="#/about"
                    className="no-underline-hover"
                    style={{
                      fontFamily: 'Inter, sans-serif',
                      fontSize: '13px',
                      lineHeight: '1.5',
                      color: 'var(--qs-on-surface-900)',
                      opacity: '0.8',
                      textDecoration: 'none',
                      transition: 'color 150ms ease, opacity 150ms ease'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.color = 'var(--qs-accent)';
                      e.currentTarget.style.opacity = '1';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.color = 'var(--qs-on-surface-900)';
                      e.currentTarget.style.opacity = '0.8';
                    }}
                  >
                    About Us
                  </a>
                </li>
              </ul>
              
              <h4 style={{
                fontFamily: 'Inter, sans-serif',
                fontWeight: 600,
                fontSize: '13px',
                marginTop: '16px',
                marginBottom: '12px',
                textTransform: 'uppercase',
                letterSpacing: '0.5px',
                color: 'var(--qs-on-surface-900)'
              }}>
                Resources
              </h4>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                {[
                  { name: 'Grants', href: '#/resources', anchor: 'Resources_Grants' },
                  { name: 'FAQ', href: '#/resources', anchor: 'Resources_FAQ' }
                ].map((item) => (
                  <li key={item.name} style={{ marginBottom: '8px' }}>
                    <a 
                      href={item.href}
                      onClick={(e) => {
                        e.preventDefault();
                        window.location.hash = item.href;
                        setTimeout(() => {
                          const anchor = document.getElementById(item.anchor || '');
                          if (anchor) anchor.scrollIntoView({ behavior: 'smooth' });
                        }, 300);
                      }}
                      className="no-underline-hover"
                      style={{
                        fontFamily: 'Inter, sans-serif',
                        fontSize: '13px',
                        lineHeight: '1.5',
                        color: 'var(--qs-on-surface-900)',
                        opacity: '0.8',
                        textDecoration: 'none',
                        transition: 'color 150ms ease, opacity 150ms ease',
                        cursor: 'pointer'
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.color = 'var(--qs-accent)';
                        e.currentTarget.style.opacity = '1';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.color = 'var(--qs-on-surface-900)';
                        e.currentTarget.style.opacity = '0.8';
                      }}
                    >
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 4 - Contact */}
            <div>
              <h4 style={{
                fontFamily: 'Inter, sans-serif',
                fontWeight: 600,
                fontSize: '13px',
                marginBottom: '12px',
                textTransform: 'uppercase',
                letterSpacing: '0.5px',
                color: 'var(--qs-on-surface-900)'
              }}>
                Contact
              </h4>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                <li style={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  gap: 'var(--qs-space-2)',
                  marginBottom: '8px',
                  color: 'var(--qs-on-surface-900)',
                  opacity: '0.8'
                }}>
                  <Mail style={{ width: '16px', height: '16px', flexShrink: 0 }} />
                  <small style={{ fontFamily: 'Inter, sans-serif', fontSize: '13px', lineHeight: '1.5' }}>contactus@quicksecurellc.com</small>
                </li>
                <li style={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  gap: 'var(--qs-space-2)',
                  marginBottom: '8px',
                  color: 'var(--qs-on-surface-900)',
                  opacity: '0.8'
                }}>
                  <Phone style={{ width: '16px', height: '16px', flexShrink: 0 }} />
                  <small style={{ fontFamily: 'Inter, sans-serif', fontSize: '13px', lineHeight: '1.5' }}>470-509-7078</small>
                </li>
                <li style={{ 
                  display: 'flex', 
                  alignItems: 'flex-start', 
                  gap: 'var(--qs-space-2)',
                  color: 'var(--qs-on-surface-900)',
                  opacity: '0.8'
                }}>
                  <MapPin style={{ width: '16px', height: '16px', marginTop: '2px', flexShrink: 0 }} />
                  <small style={{ fontFamily: 'Inter, sans-serif', fontSize: '13px', lineHeight: '1.5' }}>Coda Tech Square<br />756 West Peachtree St NW, Suite 4A<br />Atlanta, GA 30308</small>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Section - Legal Row */}
          <div className="qs-footer-bottom" style={{
            paddingTop: '24px',
            borderTop: '1px solid var(--qs-border-900)',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center'
          }}>
            <p style={{
              fontFamily: 'Inter, sans-serif',
              fontSize: '12px',
              lineHeight: '1.5',
              color: 'var(--qs-on-surface-900)',
              opacity: '0.8',
              margin: 0
            }}>
              © 2025 QuickSecure. All rights reserved.
            </p>

            <div className="qs-footer-legal" style={{ 
              display: 'flex', 
              gap: '20px' 
            }}>
              {[
                { name: 'Privacy Policy', href: '#/privacy' },
                { name: 'Terms of Service', href: '#/terms' }
              ].map((item) => (
                <a 
                  key={item.name} 
                  href={item.href}
                  className="no-underline-hover"
                  style={{
                    fontFamily: 'Inter, sans-serif',
                    fontSize: '12px',
                    lineHeight: '1.5',
                    color: 'var(--qs-on-surface-900)',
                    opacity: '0.8',
                    textDecoration: 'none',
                    transition: 'color 150ms ease, opacity 150ms ease'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = 'var(--qs-accent)';
                    e.currentTarget.style.opacity = '1';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = 'var(--qs-on-surface-900)';
                    e.currentTarget.style.opacity = '0.8';
                  }}
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
