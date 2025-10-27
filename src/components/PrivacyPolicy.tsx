/**
 * Privacy Policy Page
 * Standalone page with global header and footer
 */

import { Header } from "./qs/Header";
import { Footer } from "./qs/Footer";

interface PrivacyPolicyProps {
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

export function PrivacyPolicy({
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
}: PrivacyPolicyProps) {
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
        currentRoute="/privacy"
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
            Privacy Policy
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
              QuickSecure Inc. ("QuickSecure," "we," "our," or "us") respects your privacy. This Privacy Policy explains how we collect, use, and protect information when you interact with our websites, applications, and connected devices.
            </p>

            <section>
              <h2 style={{ marginBottom: '16px' }}>1. Information We Collect</h2>
              <ul style={{ 
                listStyleType: 'none', 
                padding: 0,
                display: 'flex',
                flexDirection: 'column',
                gap: '16px'
              }}>
                <li>
                  <strong>Account Information:</strong> Name, email address, role, and organization details.
                </li>
                <li>
                  <strong>Operational Data:</strong> Event logs, system alerts, and performance data from QuickSecure hardware and software.
                </li>
                <li>
                  <strong>Device and Usage Information:</strong> Browser type, IP address, pages visited, and usage statistics to improve reliability and user experience.
                </li>
                <li>
                  <strong>Optional Communications:</strong> Support tickets, surveys, or feedback messages you send to us.
                </li>
              </ul>
            </section>

            <section>
              <h2 style={{ marginBottom: '16px' }}>2. How We Use Information</h2>
              <p style={{ color: 'var(--qs-text-primary)', lineHeight: '1.8' }}>
                We use the information to:
              </p>
              <ul style={{ 
                listStyleType: 'disc',
                paddingLeft: '24px',
                display: 'flex',
                flexDirection: 'column',
                gap: '8px',
                color: 'var(--qs-text-primary)'
              }}>
                <li>Operate, maintain, and secure the QuickSecure platform</li>
                <li>Notify users of incidents, system updates, or safety alerts</li>
                <li>Improve product performance and develop new features</li>
                <li>Respond to support requests and administrative needs</li>
                <li>Comply with legal obligations and enforce our Terms</li>
              </ul>
            </section>

            <section>
              <h2 style={{ marginBottom: '16px' }}>3. Sharing and Disclosure</h2>
              <p style={{ color: 'var(--qs-text-primary)', lineHeight: '1.8' }}>
                We do not sell or rent personal data. We may share limited information with:
              </p>
              <ul style={{ 
                listStyleType: 'disc',
                paddingLeft: '24px',
                display: 'flex',
                flexDirection: 'column',
                gap: '8px',
                color: 'var(--qs-text-primary)'
              }}>
                <li><strong>Service Providers</strong> that help us host infrastructure or process data under strict confidentiality terms.</li>
                <li><strong>Authorized School Administrators</strong> for legitimate safety and operational purposes.</li>
                <li><strong>Law Enforcement or Legal Authorities</strong> when required by law or to protect the safety of users.</li>
              </ul>
            </section>

            <section>
              <h2 style={{ marginBottom: '16px' }}>4. Data Retention and Security</h2>
              <p style={{ color: 'var(--qs-text-primary)', lineHeight: '1.8' }}>
                We retain data only as long as necessary to provide our Services or comply with legal requirements. QuickSecure uses encryption, access controls, and secure AWS infrastructure to protect stored data.
              </p>
            </section>

            <section>
              <h2 style={{ marginBottom: '16px' }}>5. Cookies and Tracking</h2>
              <p style={{ color: 'var(--qs-text-primary)', lineHeight: '1.8' }}>
                Our website may use cookies or analytics tools to measure usage and performance. You can adjust cookie preferences through your browser settings.
              </p>
            </section>

            <section>
              <h2 style={{ marginBottom: '16px' }}>6. Children's Privacy</h2>
              <p style={{ color: 'var(--qs-text-primary)', lineHeight: '1.8' }}>
                Our Services are intended for institutional use by schools and authorized staff, not for direct use by children under 13. Any student data is processed only under the direction of the educational institution.
              </p>
            </section>

            <section>
              <h2 style={{ marginBottom: '16px' }}>7. Your Rights</h2>
              <p style={{ color: 'var(--qs-text-primary)', lineHeight: '1.8' }}>
                Depending on your location, you may request access, correction, or deletion of your personal data by contacting <a href="mailto:privacy@quicksecure.us" style={{ color: 'var(--qs-brand-accent)' }}>privacy@quicksecure.us</a>. We will respond as required by applicable law.
              </p>
            </section>

            <section>
              <h2 style={{ marginBottom: '16px' }}>8. Changes to This Policy</h2>
              <p style={{ color: 'var(--qs-text-primary)', lineHeight: '1.8' }}>
                We may update this Privacy Policy periodically. The "Last Updated" date indicates the latest revision. Material changes will be announced through our website or email notice.
              </p>
            </section>

            <section>
              <h2 style={{ marginBottom: '16px' }}>9. Contact Us</h2>
              <p style={{ color: 'var(--qs-text-primary)', lineHeight: '1.8' }}>
                For privacy inquiries:
              </p>
              <p style={{ color: 'var(--qs-text-primary)', lineHeight: '1.8' }}>
                QuickSecure Inc.<br />
                Email: <a href="mailto:privacy@quicksecure.us" style={{ color: 'var(--qs-brand-accent)' }}>privacy@quicksecure.us</a><br />
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
