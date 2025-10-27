/**
 * QuickSecure Icon Showcase
 * Demo component showing all available icons
 * Use this for design system preview and testing
 */

import {
  DrillManagementIcon,
  PanicButtonIcon,
  VisitorManagementIcon,
  RetrofitLockIcon,
  MassNotificationsIcon,
  NexusSystemIcon,
  AnonymousTipLineIcon,
  GunshotDetectionIcon,
  TicketingSystemIcon
} from './index';

export function IconShowcase() {
  const icons = [
    {
      component: DrillManagementIcon,
      name: 'Drill Management',
      description: 'Emergency drill scheduling and management',
      product: 'Drill Management System',
      batch: 1
    },
    {
      component: PanicButtonIcon,
      name: 'Panic Button',
      description: 'Emergency alert and panic button system',
      product: 'Panic App',
      batch: 1
    },
    {
      component: VisitorManagementIcon,
      name: 'Visitor Management',
      description: 'Visitor check-in and badge management',
      product: 'Visitor Management System',
      batch: 1
    },
    {
      component: RetrofitLockIcon,
      name: 'Retrofit Lock',
      description: 'Smart lock retrofit and access control',
      product: 'Retrofit Lock System',
      batch: 2
    },
    {
      component: MassNotificationsIcon,
      name: 'Mass Notifications',
      description: 'Emergency broadcast and mass alert system',
      product: 'Mass Notification System',
      batch: 2
    },
    {
      component: NexusSystemIcon,
      name: 'Nexus System',
      description: 'Integrated security platform and hub',
      product: 'Nexus Central Platform',
      batch: 2
    },
    {
      component: AnonymousTipLineIcon,
      name: 'Anonymous Tip Line',
      description: 'Secure anonymous reporting and tip submission',
      product: 'Anonymous Tip Line System',
      batch: 3
    },
    {
      component: GunshotDetectionIcon,
      name: 'Gunshot Detection',
      description: 'AI-powered gunshot detection and alert system',
      product: 'Gunshot Detection System',
      batch: 3
    },
    {
      component: TicketingSystemIcon,
      name: 'Ticketing System',
      description: 'Issue tracking and support ticket management',
      product: 'Ticketing System',
      batch: 3
    }
  ];

  return (
    <div style={{
      padding: 'var(--qs-space-16)',
      maxWidth: 'var(--qs-container-max-width)',
      margin: '0 auto'
    }}>
      <div style={{ marginBottom: 'var(--qs-space-12)' }}>
        <h1>QuickSecure Icon Library</h1>
        <p style={{ color: 'var(--qs-text-secondary)' }}>
          48×48 px product icons using brand accent color
        </p>
      </div>

      {/* Icon Grid */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
        gap: 'var(--qs-space-6)'
      }}>
        {icons.map((icon) => {
          const IconComponent = icon.component;
          return (
            <div
              key={icon.name}
              style={{
                padding: 'var(--qs-space-8)',
                backgroundColor: 'var(--qs-bg)',
                borderRadius: 'var(--qs-radius-lg)',
                border: '1px solid var(--qs-border)',
                display: 'flex',
                flexDirection: 'column',
                gap: 'var(--qs-space-4)'
              }}
            >
              {/* Icon Display */}
              <div style={{
                width: '48px',
                height: '48px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: 'var(--qs-space-2)'
              }}>
                <IconComponent />
              </div>

              {/* Icon Info */}
              <div>
                <h4 style={{ marginBottom: 'var(--qs-space-1)' }}>
                  {icon.name}
                </h4>
                <p style={{
                  fontSize: '14px',
                  color: 'var(--qs-text-secondary)',
                  marginBottom: 'var(--qs-space-2)'
                }}>
                  {icon.description}
                </p>
                <small style={{
                  color: 'var(--qs-brand-accent)',
                  fontWeight: 'var(--qs-type-weight-medium)'
                }}>
                  {icon.product}
                </small>
              </div>

              {/* Usage Code */}
              <div style={{
                backgroundColor: 'var(--qs-panel)',
                padding: 'var(--qs-space-3)',
                borderRadius: 'var(--qs-radius-sm)',
                fontFamily: 'monospace',
                fontSize: '12px',
                color: 'var(--qs-text-primary)',
                overflowX: 'auto',
                marginTop: 'var(--qs-space-2)'
              }}>
                <code>{`<${icon.component.name} />`}</code>
              </div>
            </div>
          );
        })}
      </div>

      {/* Color Info */}
      <div style={{
        marginTop: 'var(--qs-space-12)',
        padding: 'var(--qs-space-8)',
        backgroundColor: 'var(--qs-panel)',
        borderRadius: 'var(--qs-radius-lg)',
        borderLeft: `4px solid var(--qs-brand-accent)`
      }}>
        <h3 style={{ marginBottom: 'var(--qs-space-4)' }}>
          Design Specifications
        </h3>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: 'var(--qs-space-4)'
        }}>
          <div>
            <strong>Size:</strong>
            <p style={{ color: 'var(--qs-text-secondary)' }}>48×48 px</p>
          </div>
          <div>
            <strong>ViewBox:</strong>
            <p style={{ color: 'var(--qs-text-secondary)' }}>0 0 100 100</p>
          </div>
          <div>
            <strong>Color Token:</strong>
            <p style={{ color: 'var(--qs-text-secondary)' }}>--qs-brand-accent</p>
          </div>
          <div>
            <strong>Color Value:</strong>
            <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--qs-space-2)' }}>
              <div style={{
                width: '20px',
                height: '20px',
                backgroundColor: 'var(--qs-brand-accent)',
                borderRadius: 'var(--qs-radius-sm)',
                border: '1px solid var(--qs-border)'
              }} />
              <p style={{ color: 'var(--qs-text-secondary)' }}>#33D9D9</p>
            </div>
          </div>
        </div>
      </div>

      {/* Usage Examples */}
      <div style={{
        marginTop: 'var(--qs-space-12)'
      }}>
        <h3 style={{ marginBottom: 'var(--qs-space-4)' }}>
          Usage Examples
        </h3>
        
        <div style={{
          backgroundColor: 'var(--qs-bg)',
          padding: 'var(--qs-space-8)',
          borderRadius: 'var(--qs-radius-lg)',
          border: '1px solid var(--qs-border)'
        }}>
          <h4 style={{ marginBottom: 'var(--qs-space-3)' }}>Import</h4>
          <pre style={{
            backgroundColor: 'var(--qs-panel)',
            padding: 'var(--qs-space-4)',
            borderRadius: 'var(--qs-radius-sm)',
            overflow: 'auto',
            fontFamily: 'monospace',
            fontSize: '14px'
          }}>
{`import {
  DrillManagementIcon,
  PanicButtonIcon,
  VisitorManagementIcon
} from './icons';`}
          </pre>

          <h4 style={{ marginTop: 'var(--qs-space-6)', marginBottom: 'var(--qs-space-3)' }}>
            Basic Usage
          </h4>
          <pre style={{
            backgroundColor: 'var(--qs-panel)',
            padding: 'var(--qs-space-4)',
            borderRadius: 'var(--qs-radius-sm)',
            overflow: 'auto',
            fontFamily: 'monospace',
            fontSize: '14px'
          }}>
{`<div>
  <DrillManagementIcon />
  <PanicButtonIcon />
  <VisitorManagementIcon />
</div>`}
          </pre>
        </div>
      </div>
    </div>
  );
}
