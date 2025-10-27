/**
 * Get in Touch Page - Standalone Contact Page
 * 
 * Dedicated page for contact form and contact information
 * Includes global nav bar and footer
 * Uses QS design system tokens
 * 
 * Structure:
 * - Header (Apple glass navbar)
 * - Contact section (form + info + business hours)
 * - Footer (single instance)
 */

import { Mail, Phone, MapPin } from "lucide-react";
import { useState } from "react";
import { Header } from "./qs/Header";
import { Footer } from "./qs/Footer";

// Responsive styles for Get in Touch page
const responsiveStyles = `
  @media (max-width: 1024px) {
    .contact-grid {
      grid-template-columns: 1fr !important;
      gap: 48px !important;
    }
  }
  
  @media (max-width: 768px) {
    .contact-section {
      padding: 48px 40px 48px !important;
    }
    
    .contact-grid {
      gap: 40px !important;
    }
  }
  
  @media (max-width: 480px) {
    .contact-section {
      padding: 32px 24px 32px !important;
    }
    
    .contact-grid {
      gap: 32px !important;
    }
  }
`;

interface GetInTouchPageProps {
  isScrolled?: boolean;
  viewport?: 'desktop' | 'tablet' | 'mobile';
  isProductsDropdownOpen?: boolean;
  isMobileMenuOpen?: boolean;
  isMobileProductsOpen?: boolean;
  onLogoClick?: () => void;
  onNavLinkClick?: (section: string) => void;
  onProductsMouseEnter?: () => void;
  onProductsMouseLeave?: () => void;
  onProductsClick?: () => void;
  onMobileMenuToggle?: () => void;
  onMobileProductsToggle?: () => void;
  onContactClick?: () => void;
}

export function GetInTouchPage({
  isScrolled = false,
  viewport = 'desktop',
  isProductsDropdownOpen = false,
  isMobileMenuOpen = false,
  isMobileProductsOpen = false,
  onLogoClick = () => {},
  onNavLinkClick = () => {},
  onProductsMouseEnter = () => {},
  onProductsMouseLeave = () => {},
  onProductsClick = () => {},
  onMobileMenuToggle = () => {},
  onMobileProductsToggle = () => {},
  onContactClick = () => {}
}: GetInTouchPageProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    institution: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // Create mailto link with form data
      const subject = encodeURIComponent('Demo Request from QuickSecure Website');
      const body = encodeURIComponent(
        `Name: ${formData.name}\n` +
        `Email: ${formData.email}\n` +
        `Institution: ${formData.institution}\n\n` +
        `Message:\n${formData.message}`
      );
      
      // Open email client
      window.location.href = `mailto:rohankumar@quicksecurellc.com?subject=${subject}&body=${body}`;
      
      // Simulate sending (since mailto doesn't provide confirmation)
      setTimeout(() => {
        setSubmitStatus('success');
        setIsSubmitting(false);
        setFormData({ name: '', email: '', institution: '', message: '' });
      }, 500);
    } catch (error) {
      setSubmitStatus('error');
      setIsSubmitting(false);
    }
  };

  return (
    <div style={{ backgroundColor: 'var(--qs-bg)', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <style>{responsiveStyles}</style>
      {/* Header */}
      <Header
        isScrolled={isScrolled}
        viewport={viewport}
        isProductsDropdownOpen={isProductsDropdownOpen}
        isMobileMenuOpen={isMobileMenuOpen}
        isMobileProductsOpen={isMobileProductsOpen}
        onLogoClick={onLogoClick}
        onNavLinkClick={onNavLinkClick}
        onProductsMouseEnter={onProductsMouseEnter}
        onProductsMouseLeave={onProductsMouseLeave}
        onProductsClick={onProductsClick}
        onMobileMenuToggle={onMobileMenuToggle}
        onMobileProductsToggle={onMobileProductsToggle}
        onContactClick={onContactClick}
        currentRoute="/contact"
      />

      {/* Contact Section - Optimized for viewport fit without scroll */}
      <section className="contact-section" style={{ 
        padding: '64px var(--qs-grid-margin, 80px) 64px', 
        backgroundColor: 'var(--qs-bg)', 
        flex: 1,
        display: 'flex',
        alignItems: 'center'
      }}>
        <div className="max-w-[1200px] mx-auto" style={{ width: '100%' }}>
          <div className="contact-grid" style={{ 
            display: 'grid', 
            gridTemplateColumns: '1fr 1fr',
            gap: '80px',
            alignItems: 'start'
          }}>
            {/* Left Column - Contact Form */}
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <h2 style={{ 
                fontFamily: 'Emilio Light, serif',
                fontSize: '48px',
                fontWeight: 300,
                lineHeight: '64px',
                letterSpacing: '-1.44px',
                color: 'var(--qs-text-primary)',
                marginBottom: '12px'
              }}>
                Get in Touch
              </h2>
              <p style={{ 
                fontFamily: 'Inter, sans-serif',
                fontSize: '18px',
                fontWeight: 400,
                lineHeight: '32px',
                letterSpacing: '-0.18px',
                color: 'rgba(17, 17, 17, 0.49)',
                marginBottom: '32px'
              }}>
                Ready to make your district safer? Our team is here to help you get started.
              </p>

              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                {/* Full Name Field */}
                <div>
                  <label 
                    style={{ 
                      fontFamily: 'Inter, sans-serif',
                      fontWeight: 600,
                      fontSize: '14px',
                      color: 'var(--qs-text-primary)',
                      marginBottom: '8px',
                      display: 'block'
                    }}
                  >
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="contact-form-field"
                    style={{
                      width: '100%',
                      height: '48px',
                      padding: '0 16px',
                      fontFamily: 'Inter, sans-serif',
                      fontSize: '16px',
                      backgroundColor: 'var(--qs-panel)',
                      borderRadius: '8px'
                    }}
                    placeholder="John Smith"
                  />
                </div>

                {/* Email Field (renamed from Work Email) */}
                <div>
                  <label 
                    style={{ 
                      fontFamily: 'Inter, sans-serif',
                      fontWeight: 600,
                      fontSize: '14px',
                      color: '#1E1E1E',
                      marginBottom: '8px',
                      display: 'block'
                    }}
                  >
                    Email *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="contact-form-field"
                    style={{
                      width: '100%',
                      height: '48px',
                      padding: '0 16px',
                      fontFamily: 'Inter, sans-serif',
                      fontSize: '16px',
                      backgroundColor: '#FFFFFF',
                      borderRadius: '8px'
                    }}
                    placeholder="john.smith@district.edu"
                  />
                </div>

                {/* Institution Name Field - Now Required */}
                <div>
                  <label 
                    style={{ 
                      fontFamily: 'Inter, sans-serif',
                      fontWeight: 600,
                      fontSize: '14px',
                      color: '#1E1E1E',
                      marginBottom: '8px',
                      display: 'block'
                    }}
                  >
                    Institution Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.institution}
                    onChange={(e) => setFormData({ ...formData, institution: e.target.value })}
                    className="contact-form-field"
                    style={{
                      width: '100%',
                      height: '48px',
                      padding: '0 16px',
                      fontFamily: 'Inter, sans-serif',
                      fontSize: '16px',
                      backgroundColor: '#FFFFFF',
                      borderRadius: '8px'
                    }}
                    placeholder="Lincoln High School"
                  />
                </div>

                {/* Message Field - Reduced spacing below */}
                <div style={{ marginBottom: '8px' }}>
                  <label 
                    style={{ 
                      fontFamily: 'Inter, sans-serif',
                      fontWeight: 600,
                      fontSize: '14px',
                      color: '#1E1E1E',
                      marginBottom: '8px',
                      display: 'block'
                    }}
                  >
                    Message
                  </label>
                  <textarea
                    className="contact-form-field"
                    rows={3}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '12px 16px',
                      fontFamily: 'Inter, sans-serif',
                      fontSize: '16px',
                      backgroundColor: '#FFFFFF',
                      borderRadius: '8px',
                      resize: 'vertical'
                    }}
                    placeholder="Tell us about your safety needs..."
                  />
                </div>

                {/* Submit Button - Fixed alignment */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  style={{
                    width: '100%',
                    padding: '16px 32px',
                    borderRadius: '8px',
                    backgroundColor: submitStatus === 'success' ? '#6ECF89' : 'var(--qs-brand-accent)',
                    color: 'var(--qs-brand-accent-fg)',
                    fontFamily: 'Inter, sans-serif',
                    fontWeight: 600,
                    fontSize: '16px',
                    border: 'none',
                    cursor: isSubmitting ? 'not-allowed' : 'pointer',
                    transition: 'background-color 200ms ease',
                    opacity: isSubmitting ? 0.7 : 1
                  }}
                  onMouseEnter={(e) => {
                    if (!isSubmitting) {
                      e.currentTarget.style.backgroundColor = 'var(--qs-brand-primary-hover)';
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (!isSubmitting) {
                      e.currentTarget.style.backgroundColor = submitStatus === 'success' ? '#6ECF89' : 'var(--qs-brand-accent)';
                    }
                  }}
                >
                  {submitStatus === 'success' ? 'Message Sent!' : isSubmitting ? 'Sending...' : 'Send Message'}
                </button>

                {/* Status Message */}
                {submitStatus === 'success' && (
                  <p style={{
                    fontFamily: 'Inter, sans-serif',
                    fontSize: '14px',
                    color: '#6ECF89',
                    margin: 0,
                    textAlign: 'center'
                  }}>
                    Thank you! Your demo request has been sent to rohankumar@quicksecurellc.com
                  </p>
                )}
                {submitStatus === 'error' && (
                  <p style={{
                    fontFamily: 'Inter, sans-serif',
                    fontSize: '14px',
                    color: '#E65050',
                    margin: 0,
                    textAlign: 'center'
                  }}>
                    Something went wrong. Please try again or email us directly.
                  </p>
                )}
              </form>
            </div>

            {/* Right Column - Contact Info */}
            <div>
              <div 
                style={{
                  backgroundColor: '#FFFFFF',
                  padding: '40px',
                  borderRadius: '16px',
                  height: 'fit-content'
                }}
              >
                <h3 style={{ 
                  fontFamily: 'Emilio Light, serif',
                  fontSize: '32px',
                  fontWeight: 300,
                  lineHeight: '44px',
                  letterSpacing: '-0.96px',
                  color: '#1E1E1E',
                  marginBottom: '24px'
                }}>
                  Contact Information
                </h3>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', marginBottom: '40px' }}>
                  {/* Email */}
                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: '16px' }}>
                    <div style={{ 
                      width: '48px', 
                      height: '48px', 
                      backgroundColor: 'var(--qs-brand-accent-20)', 
                      borderRadius: '50%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0
                    }}>
                      <Mail style={{ width: '24px', height: '24px', color: 'var(--qs-brand-accent)' }} />
                    </div>
                    <div>
                      <div style={{ 
                        fontFamily: 'Inter, sans-serif',
                        fontWeight: 600,
                        fontSize: '16px',
                        color: '#1E1E1E',
                        marginBottom: '4px'
                      }}>
                        Email
                      </div>
                      <a 
                        href="mailto:contactus@quicksecurellc.com"
                        style={{ 
                          fontFamily: 'Inter, sans-serif',
                          fontWeight: 400,
                          fontSize: '16px',
                          color: 'var(--qs-brand-accent)',
                          textDecoration: 'none'
                        }}
                      >
                        contactus@quicksecurellc.com
                      </a>
                    </div>
                  </div>

                  {/* Phone */}
                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: '16px' }}>
                    <div style={{ 
                      width: '48px', 
                      height: '48px', 
                      backgroundColor: 'var(--qs-brand-accent-20)', 
                      borderRadius: '50%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0
                    }}>
                      <Phone style={{ width: '24px', height: '24px', color: 'var(--qs-brand-accent)' }} />
                    </div>
                    <div>
                      <div style={{ 
                        fontFamily: 'Inter, sans-serif',
                        fontWeight: 600,
                        fontSize: '16px',
                        color: '#1E1E1E',
                        marginBottom: '4px'
                      }}>
                        Phone
                      </div>
                      <a 
                        href="tel:+14705097078"
                        style={{ 
                          fontFamily: 'Inter, sans-serif',
                          fontWeight: 400,
                          fontSize: '16px',
                          color: 'var(--qs-brand-accent)',
                          textDecoration: 'none'
                        }}
                      >
                        470-509-7078
                      </a>
                    </div>
                  </div>

                  {/* Office */}
                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: '16px' }}>
                    <div style={{ 
                      width: '48px', 
                      height: '48px', 
                      backgroundColor: 'var(--qs-brand-accent-20)', 
                      borderRadius: '50%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0
                    }}>
                      <MapPin style={{ width: '24px', height: '24px', color: 'var(--qs-brand-accent)' }} />
                    </div>
                    <div>
                      <div style={{ 
                        fontFamily: 'Inter, sans-serif',
                        fontWeight: 600,
                        fontSize: '16px',
                        color: '#1E1E1E',
                        marginBottom: '4px'
                      }}>
                        Office
                      </div>
                      <div style={{ 
                        fontFamily: 'Inter, sans-serif',
                        fontWeight: 400,
                        fontSize: '16px',
                        color: '#4A4A4A',
                        lineHeight: 1.6
                      }}>
                        Coda Tech Square<br />
                        756 West Peachtree St NW, Suite 4A<br />
                        Atlanta, GA 30308
                      </div>
                    </div>
                  </div>
                </div>

                {/* Business Hours */}
                <div 
                  style={{
                    padding: '20px',
                    backgroundColor: '#F7F9FA',
                    borderRadius: '12px'
                  }}
                >
                  <div style={{ 
                    fontFamily: 'Inter, sans-serif',
                    fontWeight: 600,
                    fontSize: '14px',
                    color: '#1E1E1E',
                    marginBottom: '8px'
                  }}>
                    Business Hours
                  </div>
                  <div style={{ 
                    fontFamily: 'Inter, sans-serif',
                    fontWeight: 400,
                    fontSize: '14px',
                    color: '#4A4A4A',
                    lineHeight: 1.6
                  }}>
                    Monday - Friday: 8:00 AM - 6:00 PM CST<br />
                    Saturday - Sunday: Closed
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}
