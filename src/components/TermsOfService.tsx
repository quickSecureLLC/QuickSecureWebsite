/**
 * Terms of Service Page
 * Standalone page with global header and footer
 */

import { Header } from "./qs/Header";
import { Footer } from "./qs/Footer";

interface TermsOfServiceProps {
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

export function TermsOfService({
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
}: TermsOfServiceProps) {
  return (
    <div style={{ backgroundColor: 'var(--qs-bg)', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
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
        currentRoute="/terms"
      />

      {/* Content */}
      <section style={{ 
        padding: '120px 80px 80px', 
        backgroundColor: 'var(--qs-bg)', 
        flex: 1
      }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <h1 style={{ 
            marginBottom: '24px',
            color: 'var(--qs-text-primary)'
          }}>
            Terms of Service
          </h1>

          <p style={{ 
            marginBottom: '48px',
            color: 'var(--qs-text-secondary)',
            fontSize: '16px'
          }}>
            Last Updated: October 2025
          </p>

          <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '32px'
          }}>
            <p style={{ color: 'var(--qs-text-primary)', lineHeight: '1.8' }}>
              Welcome to QuickSecure Inc. ("QuickSecure," "we," "our," or "us"). These Terms of Service ("Terms") govern your access to and use of our websites, applications, hardware, and related services (collectively, the "Services"). By using our Services, you agree to these Terms.
            </p>

            <section>
              <h2 style={{ marginBottom: '16px' }}>1. Use of Services</h2>
              <p style={{ color: 'var(--qs-text-primary)', lineHeight: '1.8' }}>
                You may use the Services only for lawful purposes and in accordance with these Terms. You agree not to interfere with or attempt to disrupt our systems or security features. If you create an account, you are responsible for maintaining its confidentiality and for all activity under it.
              </p>
            </section>

            <section>
              <h2 style={{ marginBottom: '16px' }}>2. Hardware and Software Products</h2>
              <p style={{ color: 'var(--qs-text-primary)', lineHeight: '1.8' }}>
                Our hardware and cloud software are designed to enhance safety communication and incident response. You are responsible for proper installation, configuration, and maintenance following the documentation provided. We do not guarantee uninterrupted operation if hardware or network conditions fall outside recommended specifications.
              </p>
            </section>

            <section>
              <h2 style={{ marginBottom: '16px' }}>3. Data and Content</h2>
              <p style={{ color: 'var(--qs-text-primary)', lineHeight: '1.8' }}>
                You retain all rights to your school's or organization's data. By using our Services, you grant QuickSecure a limited right to store and process that data solely to operate and improve the system. We do not sell user data.
              </p>
            </section>

            <section>
              <h2 style={{ marginBottom: '16px' }}>4. Service Availability and Changes</h2>
              <p style={{ color: 'var(--qs-text-primary)', lineHeight: '1.8' }}>
                We continually improve our platform and may update or discontinue certain features at any time with reasonable notice. We are not liable for downtime caused by maintenance, network issues, or events beyond our control.
              </p>
            </section>

            <section>
              <h2 style={{ marginBottom: '16px' }}>5. Fees and Payments</h2>
              <p style={{ color: 'var(--qs-text-primary)', lineHeight: '1.8' }}>
                If you purchase hardware, subscriptions, or support plans, you agree to pay the listed fees. All payments are non-refundable unless otherwise required by law or explicitly stated in your contract.
              </p>
            </section>

            <section>
              <h2 style={{ marginBottom: '16px' }}>6. Intellectual Property</h2>
              <p style={{ color: 'var(--qs-text-primary)', lineHeight: '1.8' }}>
                All QuickSecure trademarks, designs, code, and documentation remain our property. You may not copy, modify, or redistribute our software or materials except as allowed under written agreement.
              </p>
            </section>

            <section>
              <h2 style={{ marginBottom: '16px' }}>7. Limitation of Liability</h2>
              <p style={{ color: 'var(--qs-text-primary)', lineHeight: '1.8' }}>
                To the fullest extent permitted by law, QuickSecure Inc. is not liable for any indirect, incidental, special, or consequential damages resulting from the use or inability to use the Services. Our total liability will not exceed the amount you paid for the Services in the preceding twelve months.
              </p>
            </section>

            <section>
              <h2 style={{ marginBottom: '16px' }}>8. Indemnification</h2>
              <p style={{ color: 'var(--qs-text-primary)', lineHeight: '1.8' }}>
                You agree to indemnify and hold harmless QuickSecure and its officers, employees, and partners from any claims arising out of your misuse of the Services or violation of these Terms.
              </p>
            </section>

            <section>
              <h2 style={{ marginBottom: '16px' }}>9. Governing Law</h2>
              <p style={{ color: 'var(--qs-text-primary)', lineHeight: '1.8' }}>
                These Terms are governed by the laws of the State of Georgia, USA, without regard to conflict-of-law principles.
              </p>
            </section>

            <section>
              <h2 style={{ marginBottom: '16px' }}>10. Contact</h2>
              <p style={{ color: 'var(--qs-text-primary)', lineHeight: '1.8' }}>
                Questions about these Terms may be sent to:
              </p>
              <p style={{ color: 'var(--qs-text-primary)', lineHeight: '1.8' }}>
                QuickSecure Inc.<br />
                Email: <a href="mailto:support@quicksecure.us" style={{ color: 'var(--qs-brand-accent)' }}>support@quicksecure.us</a><br />
                Address: Coda Tech Square, 756 West Peachtree St NW, Suite 4A, Atlanta, GA 30308
              </p>
            </section>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}
