/**
 * Logo Showcase Component
 * Displays all logo variants with usage examples
 */

import { Logo, LogoPrimary, LogoAccent, LogoCream, LogoBlack } from './index';

export function LogoShowcase() {
  const variants = [
    {
      name: 'Primary',
      component: LogoPrimary,
      color: 'var(--qs-brand-primary)',
      hex: '#0E1C2B',
      description: 'Main brand color - use on light backgrounds',
      background: '#FFFFFF'
    },
    {
      name: 'Accent',
      component: LogoAccent,
      color: 'var(--qs-brand-accent)',
      hex: '#2B5E9C',
      description: 'Accent blue - alternative brand color',
      background: '#FFFFFF'
    },
    {
      name: 'Cream',
      component: LogoCream,
      color: 'var(--qs-bg)',
      hex: '#F5F6F4',
      description: 'Light variant - use on dark backgrounds',
      background: '#1E1E1E'
    },
    {
      name: 'Black',
      component: LogoBlack,
      color: '#000000',
      hex: '#000000',
      description: 'Pure black - use on very light backgrounds',
      background: '#F7F9FA'
    }
  ];

  return (
    <div style={{ 
      padding: '48px',
      backgroundColor: 'var(--qs-panel)',
      fontFamily: 'var(--qs-type-family-body)'
    }}>
      <div style={{ marginBottom: '48px' }}>
        <h2 style={{ 
          fontFamily: 'var(--qs-type-family-display)',
          fontSize: '32px',
          fontWeight: '300',
          color: 'var(--qs-text-primary)',
          marginBottom: '16px'
        }}>
          QuickSecure Logo Variants
        </h2>
        <p style={{ 
          fontSize: '16px',
          color: 'var(--qs-text-secondary)',
          marginBottom: '8px'
        }}>
          Max width: 160px | Height: auto | Responsive SVG
        </p>
        <p style={{ 
          fontSize: '14px',
          color: 'var(--qs-text-muted)'
        }}>
          All variants maintain the shield and keyhole design with different color treatments
        </p>
      </div>

      <div style={{ 
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
        gap: '32px',
        marginBottom: '64px'
      }}>
        {variants.map((variant) => {
          const Component = variant.component;
          return (
            <div 
              key={variant.name}
              style={{
                backgroundColor: 'var(--qs-bg)',
                borderRadius: '12px',
                padding: '32px',
                border: '1px solid var(--qs-border)',
                boxShadow: 'var(--qs-shadow-1)'
              }}
            >
              {/* Logo display */}
              <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '48px 24px',
                backgroundColor: variant.background,
                borderRadius: '8px',
                marginBottom: '24px',
                minHeight: '200px'
              }}>
                <Component />
              </div>

              {/* Variant info */}
              <div>
                <h4 style={{
                  fontSize: '18px',
                  fontWeight: '600',
                  color: 'var(--qs-text-primary)',
                  marginBottom: '8px'
                }}>
                  {variant.name}
                </h4>
                
                <p style={{
                  fontSize: '14px',
                  color: 'var(--qs-text-secondary)',
                  marginBottom: '16px'
                }}>
                  {variant.description}
                </p>

                <div style={{ marginBottom: '12px' }}>
                  <div style={{
                    fontSize: '12px',
                    color: 'var(--qs-text-muted)',
                    marginBottom: '4px'
                  }}>
                    Color
                  </div>
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px'
                  }}>
                    <div style={{
                      width: '24px',
                      height: '24px',
                      backgroundColor: variant.color === 'var(--qs-brand-primary)' ? '#006E6E' : variant.color,
                      borderRadius: '4px',
                      border: '1px solid var(--qs-border)'
                    }} />
                    <code style={{
                      fontSize: '13px',
                      fontFamily: 'monospace',
                      color: 'var(--qs-text-primary)',
                      backgroundColor: 'var(--qs-panel)',
                      padding: '4px 8px',
                      borderRadius: '4px'
                    }}>
                      {variant.hex}
                    </code>
                  </div>
                </div>

                <div style={{
                  fontSize: '12px',
                  color: 'var(--qs-text-muted)',
                  marginBottom: '4px'
                }}>
                  Import
                </div>
                <code style={{
                  display: 'block',
                  fontSize: '12px',
                  fontFamily: 'monospace',
                  color: 'var(--qs-text-primary)',
                  backgroundColor: 'var(--qs-panel)',
                  padding: '8px 12px',
                  borderRadius: '4px',
                  whiteSpace: 'nowrap',
                  overflow: 'auto'
                }}>
                  {`import { Logo${variant.name} } from './logo'`}
                </code>
              </div>
            </div>
          );
        })}
      </div>

      {/* Usage examples */}
      <div style={{
        backgroundColor: 'var(--qs-bg)',
        borderRadius: '12px',
        padding: '32px',
        border: '1px solid var(--qs-border)'
      }}>
        <h3 style={{
          fontSize: '20px',
          fontWeight: '500',
          color: 'var(--qs-text-primary)',
          marginBottom: '24px'
        }}>
          Usage Examples
        </h3>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
          {/* Basic usage */}
          <div>
            <h4 style={{
              fontSize: '16px',
              fontWeight: '500',
              color: 'var(--qs-text-primary)',
              marginBottom: '12px'
            }}>
              Basic Usage (Primary)
            </h4>
            <pre style={{
              backgroundColor: 'var(--qs-panel)',
              padding: '16px',
              borderRadius: '8px',
              fontSize: '13px',
              fontFamily: 'monospace',
              overflow: 'auto',
              margin: 0
            }}>
{`import { LogoPrimary } from './logo';

function Header() {
  return (
    <header>
      <LogoPrimary />
    </header>
  );
}`}
            </pre>
          </div>

          {/* Custom color */}
          <div>
            <h4 style={{
              fontSize: '16px',
              fontWeight: '500',
              color: 'var(--qs-text-primary)',
              marginBottom: '12px'
            }}>
              Custom Color
            </h4>
            <pre style={{
              backgroundColor: 'var(--qs-panel)',
              padding: '16px',
              borderRadius: '8px',
              fontSize: '13px',
              fontFamily: 'monospace',
              overflow: 'auto',
              margin: 0
            }}>
{`import { Logo } from './logo';

function CustomLogo() {
  return (
    <Logo color="#FF5733" />
  );
}`}
            </pre>
          </div>

          {/* With styling */}
          <div>
            <h4 style={{
              fontSize: '16px',
              fontWeight: '500',
              color: 'var(--qs-text-primary)',
              marginBottom: '12px'
            }}>
              With Custom Styling
            </h4>
            <pre style={{
              backgroundColor: 'var(--qs-panel)',
              padding: '16px',
              borderRadius: '8px',
              fontSize: '13px',
              fontFamily: 'monospace',
              overflow: 'auto',
              margin: 0
            }}>
{`import { LogoPrimary } from './logo';

function Header() {
  return (
    <LogoPrimary 
      className="hover:opacity-80 transition-opacity"
      style={{ maxWidth: '120px' }}
    />
  );
}`}
            </pre>
          </div>

          {/* Footer usage */}
          <div>
            <h4 style={{
              fontSize: '16px',
              fontWeight: '500',
              color: 'var(--qs-text-primary)',
              marginBottom: '12px'
            }}>
              Footer Usage (Cream on Dark)
            </h4>
            <pre style={{
              backgroundColor: 'var(--qs-panel)',
              padding: '16px',
              borderRadius: '8px',
              fontSize: '13px',
              fontFamily: 'monospace',
              overflow: 'auto',
              margin: 0
            }}>
{`import { LogoCream } from './logo';

function Footer() {
  return (
    <footer style={{ backgroundColor: '#1E1E1E' }}>
      <LogoCream />
    </footer>
  );
}`}
            </pre>
          </div>
        </div>
      </div>

      {/* Design specifications */}
      <div style={{
        backgroundColor: 'var(--qs-bg)',
        borderRadius: '12px',
        padding: '32px',
        border: '1px solid var(--qs-border)',
        marginTop: '32px'
      }}>
        <h3 style={{
          fontSize: '20px',
          fontWeight: '500',
          color: 'var(--qs-text-primary)',
          marginBottom: '16px'
        }}>
          Design Specifications
        </h3>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '24px' }}>
          <div>
            <div style={{ fontSize: '12px', color: 'var(--qs-text-muted)', marginBottom: '4px' }}>
              Max Width
            </div>
            <div style={{ fontSize: '16px', color: 'var(--qs-text-primary)', fontWeight: '500' }}>
              160px
            </div>
          </div>
          
          <div>
            <div style={{ fontSize: '12px', color: 'var(--qs-text-muted)', marginBottom: '4px' }}>
              Height
            </div>
            <div style={{ fontSize: '16px', color: 'var(--qs-text-primary)', fontWeight: '500' }}>
              Auto (responsive)
            </div>
          </div>
          
          <div>
            <div style={{ fontSize: '12px', color: 'var(--qs-text-muted)', marginBottom: '4px' }}>
              Format
            </div>
            <div style={{ fontSize: '16px', color: 'var(--qs-text-primary)', fontWeight: '500' }}>
              Inline SVG
            </div>
          </div>
          
          <div>
            <div style={{ fontSize: '12px', color: 'var(--qs-text-muted)', marginBottom: '4px' }}>
              ViewBox
            </div>
            <div style={{ fontSize: '16px', color: 'var(--qs-text-primary)', fontWeight: '500' }}>
              0 0 120 140
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
