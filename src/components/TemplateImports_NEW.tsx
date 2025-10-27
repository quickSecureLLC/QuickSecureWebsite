export function ProductTemplate({ onNavigate }: { onNavigate?: ProductNavigationHandler } = {}) {
  return (
    <div className="scroll-reveal" data-section="section-product">
      <section style={{ padding: '80px 80px', backgroundColor: '#FFFFFF' }}>
        {/* 
          ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          TEMP LINK AUDIT — Complete Safety Platform Prototype Destinations
          ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          Page: "04 Pages" → Folder: "Products"
          
          UPDATED: Consolidated to 9 tiles in single 3x3 grid
          
          Tile Name                         │ onClick Handler        │ Target Frame (04 Pages/Products)
          ──────────────────────────────────┼────────────────────────┼─────────────────────────────────────
          QuickSecure Nexus                 │ onNavigate('nexus')   │ Product — QuickSecure Nexus
          Drill Management                  │ onNavigate('drill')   │ Product — Drill Management
          Ticketing System                  │ onNavigate('ticketing')│ Product — Ticketing System
          Panic Button App                  │ onNavigate('panic')   │ Product — Panic Button App
          Visitor Management                │ onNavigate('visitor') │ Product — Visitor Management
          Retrofit Lock (merged)            │ onNavigate('lock')    │ Product — Manual Lock
          AI-Powered Gunshot Detection      │ onNavigate('gunshot') │ Product — AI-Powered Gunshot Detection
          Mass Notifications                │ onNavigate('notifications')│ Product — Mass Notifications
          AI Anonymous Tip Line             │ onNavigate('tipline') │ Product — AI Anonymous Tip Line
          
          REMOVED:
          • AI-Powered Insights
          • Floor Plan View  
          • Electronic Lock (merged into Retrofit Lock)
          • Manual Lock (merged into Retrofit Lock)
          
          Prototype Interaction Settings:
          • Trigger: On Click (applies to BOTH full card overlay AND "View More →" button)
          • Action: Navigate To → Product — {Name} frame
          • Transition: Smart Animate
          • Duration: 300ms
          • Easing: cubic-bezier(0.4, 0, 0.2, 1)
          • Preserve scroll position: OFF
          
          ✅ 9 product tiles in single balanced 3x3 grid
          ✅ All prototype links verified against 04 Pages/Products folder
          ✅ Transition settings standardized: Smart Animate 300ms ease (0.4,0,0.2,1)
          ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
        */}
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-16">
            <h2 
              style={{ 
                fontFamily: 'Inter, sans-serif',
                fontWeight: 700,
                fontSize: '48px',
                lineHeight: 1.2,
                color: '#1E1E1E',
                marginBottom: '16px'
              }}
            >
              Complete Safety Platform
            </h2>
            <p 
              style={{ 
                fontFamily: 'Inter, sans-serif',
                fontWeight: 400,
                fontSize: '18px',
                lineHeight: 1.6,
                color: '#4A4A4A',
                maxWidth: '700px',
                margin: '0 auto'
              }}
            >
              Nine integrated modules working together to create the most comprehensive school safety solution available.
            </p>
          </div>

          {/* Single 3x3 Grid - All 9 Modules */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* 1. QuickSecure Nexus Module */}
            <a 
              href="#/product/nexus"
              className="testimonial-card"
              style={{
                backgroundColor: '#FFFFFF',
                padding: '32px',
                borderRadius: '12px',
                border: '1px solid rgba(0, 0, 0, 0.1)',
                cursor: 'pointer',
                position: 'relative',
                display: 'block',
                textDecoration: 'none',
                color: 'inherit'
              }}
            >
              <div style={{ 
                width: '56px', 
                height: '56px', 
                backgroundColor: '#E6F9F9', 
                borderRadius: '10px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '20px'
              }}>
                <Network style={{ width: '28px', height: '28px', color: '#006E6E' }} />
              </div>
              <h3 style={{ 
                fontFamily: 'Inter, sans-serif',
                fontWeight: 600,
                fontSize: '24px',
                color: '#1E1E1E',
                marginBottom: '12px'
              }}>
                QuickSecure Nexus
              </h3>
              <p style={{ 
                fontFamily: 'Inter, sans-serif',
                fontWeight: 400,
                fontSize: '18px',
                lineHeight: 1.6,
                color: '#4A4A4A',
                marginBottom: '20px'
              }}>
                Unified platform connecting all safety systems — drills, alerts, ticketing, and analytics — into one centralized command dashboard.
              </p>
              <div style={{ 
                display: 'flex', 
                flexWrap: 'wrap', 
                gap: '8px',
                marginTop: '16px'
              }}>
                <span 
                  className="tag-pill"
                  style={{
                    fontSize: '14px',
                    fontWeight: 500,
                    color: '#006E6E',
                    backgroundColor: 'rgba(51, 217, 217, 0.1)',
                    padding: '6px 12px',
                    borderRadius: '999px',
                    transition: 'background-color 150ms ease'
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'rgba(51, 217, 217, 0.2)'}
                  onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'rgba(51, 217, 217, 0.1)'}
                >
                  Central Dashboard
                </span>
                <span 
                  className="tag-pill"
                  style={{
                    fontSize: '14px',
                    fontWeight: 500,
                    color: '#006E6E',
                    backgroundColor: 'rgba(51, 217, 217, 0.1)',
                    padding: '6px 12px',
                    borderRadius: '999px',
                    transition: 'background-color 150ms ease'
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'rgba(51, 217, 217, 0.2)'}
                  onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'rgba(51, 217, 217, 0.1)'}
                >
                  Unified Control
                </span>
              </div>
              <div style={{ 
                display: 'flex', 
                justifyContent: 'flex-end', 
                marginTop: '24px'
              }}>
                <span 
                  style={{
                    fontFamily: 'Inter, sans-serif',
                    fontSize: '16px',
                    fontWeight: 500,
                    color: '#006E6E',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '4px'
                  }}
                >
                  View More <ArrowRight style={{ width: '16px', height: '16px' }} />
                </span>
              </div>
            </a>

            {/* 2. Drill Management Module */}
            <a 
              href="#/product/drill"
              className="testimonial-card"
              style={{
                backgroundColor: '#FFFFFF',
                padding: '32px',
                borderRadius: '12px',
                border: '1px solid rgba(0, 0, 0, 0.1)',
                cursor: 'pointer',
                position: 'relative',
                display: 'block',
                textDecoration: 'none',
                color: 'inherit'
              }}
            >
              <div style={{ 
                width: '56px', 
                height: '56px', 
                backgroundColor: '#E6F9F9', 
                borderRadius: '10px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '20px'
              }}>
                <Shield style={{ width: '28px', height: '28px', color: '#006E6E' }} />
              </div>
              <h3 style={{ 
                fontFamily: 'Inter, sans-serif',
                fontWeight: 600,
                fontSize: '24px',
                color: '#1E1E1E',
                marginBottom: '12px'
              }}>
                Drill Management
              </h3>
              <p style={{ 
                fontFamily: 'Inter, sans-serif',
                fontWeight: 400,
                fontSize: '16px',
                lineHeight: 1.6,
                color: '#4A4A4A',
                marginBottom: '20px'
              }}>
                Schedule, execute, and document safety drills with automated compliance tracking and detailed reporting.
              </p>
              <div style={{ 
                display: 'flex', 
                flexWrap: 'wrap', 
                gap: '8px',
                marginTop: '16px'
              }}>
                <span 
                  className="tag-pill"
                  style={{
                    fontSize: '14px',
                    fontWeight: 500,
                    color: '#006E6E',
                    backgroundColor: 'rgba(51, 217, 217, 0.1)',
                    padding: '6px 12px',
                    borderRadius: '999px',
                    transition: 'background-color 150ms ease'
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'rgba(51, 217, 217, 0.2)'}
                  onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'rgba(51, 217, 217, 0.1)'}
                >
                  Automated Scheduling
                </span>
                <span 
                  className="tag-pill"
                  style={{
                    fontSize: '14px',
                    fontWeight: 500,
                    color: '#006E6E',
                    backgroundColor: 'rgba(51, 217, 217, 0.1)',
                    padding: '6px 12px',
                    borderRadius: '999px',
                    transition: 'background-color 150ms ease'
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'rgba(51, 217, 217, 0.2)'}
                  onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'rgba(51, 217, 217, 0.1)'}
                >
                  Documentation
                </span>
              </div>
              <div style={{ 
                display: 'flex', 
                justifyContent: 'flex-end', 
                marginTop: '24px'
              }}>
                <span 
                  style={{
                    fontFamily: 'Inter, sans-serif',
                    fontSize: '16px',
                    fontWeight: 500,
                    color: '#006E6E',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '4px'
                  }}
                >
                  View More <ArrowRight style={{ width: '16px', height: '16px' }} />
                </span>
              </div>
            </a>

            {/* 3. Ticketing System Module */}
            <a 
              href="#/product/ticketing"
              className="testimonial-card"
              style={{
                backgroundColor: '#FFFFFF',
                padding: '32px',
                borderRadius: '12px',
                border: '1px solid rgba(0, 0, 0, 0.1)',
                cursor: 'pointer',
                position: 'relative',
                display: 'block',
                textDecoration: 'none',
                color: 'inherit'
              }}
            >
              <div style={{ 
                width: '56px', 
                height: '56px', 
                backgroundColor: '#E6F9F9', 
                borderRadius: '10px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '20px'
              }}>
                <Ticket style={{ width: '28px', height: '28px', color: '#006E6E' }} />
              </div>
              <h3 style={{ 
                fontFamily: 'Inter, sans-serif',
                fontWeight: 600,
                fontSize: '24px',
                color: '#1E1E1E',
                marginBottom: '12px'
              }}>
                Ticketing System
              </h3>
              <p style={{ 
                fontFamily: 'Inter, sans-serif',
                fontWeight: 400,
                fontSize: '16px',
                lineHeight: 1.6,
                color: '#4A4A4A',
                marginBottom: '20px'
              }}>
                Streamline maintenance requests and incident reporting with automated assignment and tracking.
              </p>
              <div style={{ 
                display: 'flex', 
                flexWrap: 'wrap', 
                gap: '8px',
                marginTop: '16px'
              }}>
                <span 
                  className="tag-pill"
                  style={{
                    fontSize: '14px',
                    fontWeight: 500,
                    color: '#006E6E',
                    backgroundColor: 'rgba(51, 217, 217, 0.1)',
                    padding: '6px 12px',
                    borderRadius: '999px',
                    transition: 'background-color 150ms ease'
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'rgba(51, 217, 217, 0.2)'}
                  onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'rgba(51, 217, 217, 0.1)'}
                >
                  Priority Routing
                </span>
                <span 
                  className="tag-pill"
                  style={{
                    fontSize: '14px',
                    fontWeight: 500,
                    color: '#006E6E',
                    backgroundColor: 'rgba(51, 217, 217, 0.1)',
                    padding: '6px 12px',
                    borderRadius: '999px',
                    transition: 'background-color 150ms ease'
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'rgba(51, 217, 217, 0.2)'}
                  onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'rgba(51, 217, 217, 0.1)'}
                >
                  Auto-assign
                </span>
              </div>
              <div style={{ 
                display: 'flex', 
                justifyContent: 'flex-end', 
                marginTop: '24px'
              }}>
                <span 
                  style={{
                    fontFamily: 'Inter, sans-serif',
                    fontSize: '16px',
                    fontWeight: 500,
                    color: '#006E6E',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '4px'
                  }}
                >
                  View More <ArrowRight style={{ width: '16px', height: '16px' }} />
                </span>
              </div>
            </a>

            {/* 4. Panic Button App Module */}
            <a 
              href="#/product/panic"
              className="testimonial-card"
              style={{
                backgroundColor: '#FFFFFF',
                padding: '32px',
                borderRadius: '12px',
                border: '1px solid rgba(0, 0, 0, 0.1)',
                cursor: 'pointer',
                position: 'relative',
                display: 'block',
                textDecoration: 'none',
                color: 'inherit'
              }}
            >
              <div style={{ 
                width: '56px', 
                height: '56px', 
                backgroundColor: '#E6F9F9', 
                borderRadius: '10px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '20px'
              }}>
                <Smartphone style={{ width: '28px', height: '28px', color: '#006E6E' }} />
              </div>
              <h3 style={{ 
                fontFamily: 'Inter, sans-serif',
                fontWeight: 600,
                fontSize: '24px',
                color: '#1E1E1E',
                marginBottom: '12px'
              }}>
                Panic Button App
              </h3>
              <p style={{ 
                fontFamily: 'Inter, sans-serif',
                fontWeight: 400,
                fontSize: '16px',
                lineHeight: 1.6,
                color: '#4A4A4A',
                marginBottom: '20px'
              }}>
                One-touch emergency alerts with GPS location and direct communication to first responders.
              </p>
              <div style={{ 
                display: 'flex', 
                flexWrap: 'wrap', 
                gap: '8px',
                marginTop: '16px'
              }}>
                <span 
                  className="tag-pill"
                  style={{
                    fontSize: '14px',
                    fontWeight: 500,
                    color: '#006E6E',
                    backgroundColor: 'rgba(51, 217, 217, 0.1)',
                    padding: '6px 12px',
                    borderRadius: '999px',
                    transition: 'background-color 150ms ease'
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'rgba(51, 217, 217, 0.2)'}
                  onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'rgba(51, 217, 217, 0.1)'}
                >
                  GPS Location
                </span>
                <span 
                  className="tag-pill"
                  style={{
                    fontSize: '14px',
                    fontWeight: 500,
                    color: '#006E6E',
                    backgroundColor: 'rgba(51, 217, 217, 0.1)',
                    padding: '6px 12px',
                    borderRadius: '999px',
                    transition: 'background-color 150ms ease'
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'rgba(51, 217, 217, 0.2)'}
                  onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'rgba(51, 217, 217, 0.1)'}
                >
                  911 Integration
                </span>
              </div>
              <div style={{ 
                display: 'flex', 
                justifyContent: 'flex-end', 
                marginTop: '24px'
              }}>
                <span 
                  style={{
                    fontFamily: 'Inter, sans-serif',
                    fontSize: '16px',
                    fontWeight: 500,
                    color: '#006E6E',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '4px'
                  }}
                >
                  View More <ArrowRight style={{ width: '16px', height: '16px' }} />
                </span>
              </div>
            </a>

            {/* 5. Visitor Management Module */}
            <div 
              className="testimonial-card"
              style={{
                backgroundColor: '#FFFFFF',
                padding: '32px',
                borderRadius: '12px',
                border: '1px solid rgba(0, 0, 0, 0.1)',
                position: 'relative'
              }}
            >
              <div style={{ 
                width: '56px', 
                height: '56px', 
                backgroundColor: '#E6F9F9', 
                borderRadius: '10px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '20px'
              }}>
                <UserCheck style={{ width: '28px', height: '28px', color: '#006E6E' }} />
              </div>
              <h3 style={{ 
                fontFamily: 'Inter, sans-serif',
                fontWeight: 600,
                fontSize: '24px',
                color: '#1E1E1E',
                marginBottom: '12px'
              }}>
                Visitor Management
              </h3>
              <p style={{ 
                fontFamily: 'Inter, sans-serif',
                fontWeight: 400,
                fontSize: '16px',
                lineHeight: 1.6,
                color: '#4A4A4A',
                marginBottom: '20px'
              }}>
                Secure check-in with background screening, digital badges, and real-time visitor tracking.
              </p>
              <div style={{ 
                display: 'flex', 
                flexWrap: 'wrap', 
                gap: '8px',
                marginTop: '16px'
              }}>
                <span 
                  className="tag-pill"
                  style={{
                    fontSize: '14px',
                    fontWeight: 500,
                    color: '#006E6E',
                    backgroundColor: 'rgba(51, 217, 217, 0.1)',
                    padding: '6px 12px',
                    borderRadius: '999px',
                    transition: 'background-color 150ms ease'
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'rgba(51, 217, 217, 0.2)'}
                  onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'rgba(51, 217, 217, 0.1)'}
                >
                  Background Check
                </span>
                <span 
                  className="tag-pill"
                  style={{
                    fontSize: '14px',
                    fontWeight: 500,
                    color: '#006E6E',
                    backgroundColor: 'rgba(51, 217, 217, 0.1)',
                    padding: '6px 12px',
                    borderRadius: '999px',
                    transition: 'background-color 150ms ease'
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'rgba(51, 217, 217, 0.2)'}
                  onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'rgba(51, 217, 217, 0.1)'}
                >
                  Digital Badges
                </span>
              </div>
              <div style={{ 
                display: 'flex', 
                justifyContent: 'flex-end', 
                marginTop: '24px'
              }}>
                <button 
                  onClick={() => onNavigate?.('visitor')}
                  style={{
                    fontFamily: 'Inter, sans-serif',
                    fontSize: '16px',
                    fontWeight: 500,
                    color: '#006E6E',
                    background: 'none',
                    border: 'none',
                    cursor: 'pointer',
                    transition: 'opacity 150ms ease',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '4px'
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.opacity = '0.7'}
                  onMouseLeave={(e) => e.currentTarget.style.opacity = '1'}
                >
                  View More <ArrowRight style={{ width: '16px', height: '16px' }} />
                </button>
              </div>
            </div>

            {/* 6. Retrofit Lock Module (merged from Electronic Lock + Manual Lock) */}
            <div 
              className="testimonial-card"
              style={{
                backgroundColor: '#FFFFFF',
                padding: '32px',
                borderRadius: '12px',
                border: '1px solid rgba(0, 0, 0, 0.1)',
                position: 'relative'
              }}
            >
              <div style={{ 
                width: '56px', 
                height: '56px', 
                backgroundColor: '#E6F9F9', 
                borderRadius: '10px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '20px'
              }}>
                <LockKeyhole style={{ width: '28px', height: '28px', color: '#006E6E' }} />
              </div>
              <h3 style={{ 
                fontFamily: 'Inter, sans-serif',
                fontWeight: 600,
                fontSize: '24px',
                color: '#1E1E1E',
                marginBottom: '12px'
              }}>
                Retrofit Lock
              </h3>
              <p style={{ 
                fontFamily: 'Inter, sans-serif',
                fontWeight: 400,
                fontSize: '18px',
                lineHeight: 1.6,
                color: '#4A4A4A',
                marginBottom: '20px'
              }}>
                Smart door hardware retrofit solution with instant remote locking, scheduled access, and emergency override — durable, compliant, and easy to deploy.
              </p>
              <div style={{ 
                display: 'flex', 
                flexWrap: 'wrap', 
                gap: '8px',
                marginTop: '16px'
              }}>
                <span 
                  className="tag-pill"
                  style={{
                    fontSize: '14px',
                    fontWeight: 500,
                    color: '#006E6E',
                    backgroundColor: 'rgba(51, 217, 217, 0.1)',
                    padding: '6px 12px',
                    borderRadius: '999px',
                    transition: 'background-color 150ms ease'
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'rgba(51, 217, 217, 0.2)'}
                  onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'rgba(51, 217, 217, 0.1)'}
                >
                  Smart Access
                </span>
                <span 
                  className="tag-pill"
                  style={{
                    fontSize: '14px',
                    fontWeight: 500,
                    color: '#006E6E',
                    backgroundColor: 'rgba(51, 217, 217, 0.1)',
                    padding: '6px 12px',
                    borderRadius: '999px',
                    transition: 'background-color 150ms ease'
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'rgba(51, 217, 217, 0.2)'}
                  onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'rgba(51, 217, 217, 0.1)'}
                >
                  Remote Control
                </span>
              </div>
              <div style={{ 
                display: 'flex', 
                justifyContent: 'flex-end', 
                marginTop: '24px'
              }}>
                <button 
                  onClick={(e) => { e.stopPropagation(); onNavigate?.('lock'); }}
                  style={{
                    fontFamily: 'Inter, sans-serif',
                    fontSize: '16px',
                    fontWeight: 500,
                    color: '#006E6E',
                    background: 'none',
                    border: 'none',
                    cursor: 'pointer',
                    transition: 'opacity 150ms ease',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '4px'
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.opacity = '0.7'}
                  onMouseLeave={(e) => e.currentTarget.style.opacity = '1'}
                >
                  View More <ArrowRight style={{ width: '16px', height: '16px' }} />
                </button>
              </div>
            </div>

            {/* 7. AI-Powered Gunshot Detection Module */}
            <div 
              className="testimonial-card"
              style={{
                backgroundColor: '#FFFFFF',
                padding: '32px',
                borderRadius: '12px',
                border: '1px solid rgba(0, 0, 0, 0.1)',
                position: 'relative'
              }}
            >
              <div style={{ 
                width: '56px', 
                height: '56px', 
                backgroundColor: '#E6F9F9', 
                borderRadius: '10px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '20px'
              }}>
                <Mic style={{ width: '28px', height: '28px', color: '#006E6E' }} />
              </div>
              <h3 style={{ 
                fontFamily: 'Inter, sans-serif',
                fontWeight: 600,
                fontSize: '24px',
                color: '#1E1E1E',
                marginBottom: '12px'
              }}>
                AI-Powered Gunshot Detection
              </h3>
              <p style={{ 
                fontFamily: 'Inter, sans-serif',
                fontWeight: 400,
                fontSize: '18px',
                lineHeight: 1.6,
                color: '#4A4A4A',
                marginBottom: '20px'
              }}>
                Real-time AI acoustic detection network instantly identifies gunfire and auto-triggers emergency protocols.
              </p>
              <div style={{ 
                display: 'flex', 
                flexWrap: 'wrap', 
                gap: '8px',
                marginTop: '16px'
              }}>
                <span 
                  className="tag-pill"
                  style={{
                    fontSize: '14px',
                    fontWeight: 500,
                    color: '#006E6E',
                    backgroundColor: 'rgba(51, 217, 217, 0.1)',
                    padding: '6px 12px',
                    borderRadius: '999px',
                    transition: 'background-color 150ms ease'
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'rgba(51, 217, 217, 0.2)'}
                  onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'rgba(51, 217, 217, 0.1)'}
                >
                  AI Detection
                </span>
                <span 
                  className="tag-pill"
                  style={{
                    fontSize: '14px',
                    fontWeight: 500,
                    color: '#006E6E',
                    backgroundColor: 'rgba(51, 217, 217, 0.1)',
                    padding: '6px 12px',
                    borderRadius: '999px',
                    transition: 'background-color 150ms ease'
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'rgba(51, 217, 217, 0.2)'}
                  onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'rgba(51, 217, 217, 0.1)'}
                >
                  Instant Response
                </span>
              </div>
              <div style={{ 
                display: 'flex', 
                justifyContent: 'flex-end', 
                marginTop: '24px'
              }}>
                <button 
                  onClick={(e) => { e.stopPropagation(); onNavigate?.('gunshot'); }}
                  style={{
                    fontFamily: 'Inter, sans-serif',
                    fontSize: '16px',
                    fontWeight: 500,
                    color: '#006E6E',
                    background: 'none',
                    border: 'none',
                    cursor: 'pointer',
                    transition: 'opacity 150ms ease',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '4px'
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.opacity = '0.7'}
                  onMouseLeave={(e) => e.currentTarget.style.opacity = '1'}
                >
                  View More <ArrowRight style={{ width: '16px', height: '16px' }} />
                </button>
              </div>
            </div>

            {/* 8. Mass Notifications Module */}
            <div 
              className="testimonial-card"
              style={{
                backgroundColor: '#FFFFFF',
                padding: '32px',
                borderRadius: '12px',
                border: '1px solid rgba(0, 0, 0, 0.1)',
                position: 'relative'
              }}
            >
              <div style={{ 
                width: '56px', 
                height: '56px', 
                backgroundColor: '#E6F9F9', 
                borderRadius: '10px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '20px'
              }}>
                <Radio style={{ width: '28px', height: '28px', color: '#006E6E' }} />
              </div>
              <h3 style={{ 
                fontFamily: 'Inter, sans-serif',
                fontWeight: 600,
                fontSize: '24px',
                color: '#1E1E1E',
                marginBottom: '12px'
              }}>
                Mass Notifications
              </h3>
              <p style={{ 
                fontFamily: 'Inter, sans-serif',
                fontWeight: 400,
                fontSize: '18px',
                lineHeight: 1.6,
                color: '#4A4A4A',
                marginBottom: '20px'
              }}>
                Broadcast critical updates to every campus channel simultaneously — SMS, email, intercom, and digital signage — ensuring instant communication.
              </p>
              <div style={{ 
                display: 'flex', 
                flexWrap: 'wrap', 
                gap: '8px',
                marginTop: '16px'
              }}>
                <span 
                  className="tag-pill"
                  style={{
                    fontSize: '14px',
                    fontWeight: 500,
                    color: '#006E6E',
                    backgroundColor: 'rgba(51, 217, 217, 0.1)',
                    padding: '6px 12px',
                    borderRadius: '999px',
                    transition: 'background-color 150ms ease'
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'rgba(51, 217, 217, 0.2)'}
                  onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'rgba(51, 217, 217, 0.1)'}
                >
                  Multi-Channel
                </span>
                <span 
                  className="tag-pill"
                  style={{
                    fontSize: '14px',
                    fontWeight: 500,
                    color: '#006E6E',
                    backgroundColor: 'rgba(51, 217, 217, 0.1)',
                    padding: '6px 12px',
                    borderRadius: '999px',
                    transition: 'background-color 150ms ease'
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'rgba(51, 217, 217, 0.2)'}
                  onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'rgba(51, 217, 217, 0.1)'}
                >
                  Real-Time Broadcast
                </span>
              </div>
              <div style={{ 
                display: 'flex', 
                justifyContent: 'flex-end', 
                marginTop: '24px'
              }}>
                <button 
                  onClick={(e) => { e.stopPropagation(); onNavigate?.('notifications'); }}
                  style={{
                    fontFamily: 'Inter, sans-serif',
                    fontSize: '16px',
                    fontWeight: 500,
                    color: '#006E6E',
                    background: 'none',
                    border: 'none',
                    cursor: 'pointer',
                    transition: 'opacity 150ms ease',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '4px'
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.opacity = '0.7'}
                  onMouseLeave={(e) => e.currentTarget.style.opacity = '1'}
                >
                  View More <ArrowRight style={{ width: '16px', height: '16px' }} />
                </button>
              </div>
            </div>

            {/* 9. AI Anonymous Tip Line Module */}
            <div 
              className="testimonial-card"
              style={{
                backgroundColor: '#FFFFFF',
                padding: '32px',
                borderRadius: '12px',
                border: '1px solid rgba(0, 0, 0, 0.1)',
                position: 'relative'
              }}
            >
              <div style={{ 
                width: '56px', 
                height: '56px', 
                backgroundColor: '#E6F9F9', 
                borderRadius: '10px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '20px'
              }}>
                <PhoneCall style={{ width: '28px', height: '28px', color: '#006E6E' }} />
              </div>
              <h3 style={{ 
                fontFamily: 'Inter, sans-serif',
                fontWeight: 600,
                fontSize: '24px',
                color: '#1E1E1E',
                marginBottom: '12px'
              }}>
                AI Anonymous Tip Line
              </h3>
              <p style={{ 
                fontFamily: 'Inter, sans-serif',
                fontWeight: 400,
                fontSize: '18px',
                lineHeight: 1.6,
                color: '#4A4A4A',
                marginBottom: '20px'
              }}>
                Secure AI-powered reporting channel that auto-categorizes tips, filters false reports, and prioritizes credible concerns for administrators and security teams.
              </p>
              <div style={{ 
                display: 'flex', 
                flexWrap: 'wrap', 
                gap: '8px',
                marginTop: '16px'
              }}>
                <span 
                  className="tag-pill"
                  style={{
                    fontSize: '14px',
                    fontWeight: 500,
                    color: '#006E6E',
                    backgroundColor: 'rgba(51, 217, 217, 0.1)',
                    padding: '6px 12px',
                    borderRadius: '999px',
                    transition: 'background-color 150ms ease'
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'rgba(51, 217, 217, 0.2)'}
                  onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'rgba(51, 217, 217, 0.1)'}
                >
                  AI Filtering
                </span>
                <span 
                  className="tag-pill"
                  style={{
                    fontSize: '14px',
                    fontWeight: 500,
                    color: '#006E6E',
                    backgroundColor: 'rgba(51, 217, 217, 0.1)',
                    padding: '6px 12px',
                    borderRadius: '999px',
                    transition: 'background-color 150ms ease'
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'rgba(51, 217, 217, 0.2)'}
                  onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'rgba(51, 217, 217, 0.1)'}
                >
                  Threat Detection
                </span>
              </div>
              <div style={{ 
                display: 'flex', 
                justifyContent: 'flex-end', 
                marginTop: '24px'
              }}>
                <button 
                  onClick={(e) => { e.stopPropagation(); onNavigate?.('tipline'); }}
                  style={{
                    fontFamily: 'Inter, sans-serif',
                    fontSize: '16px',
                    fontWeight: 500,
                    color: '#006E6E',
                    background: 'none',
                    border: 'none',
                    cursor: 'pointer',
                    transition: 'opacity 150ms ease',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '4px'
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.opacity = '0.7'}
                  onMouseLeave={(e) => e.currentTarget.style.opacity = '1'}
                >
                  View More <ArrowRight style={{ width: '16px', height: '16px' }} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
