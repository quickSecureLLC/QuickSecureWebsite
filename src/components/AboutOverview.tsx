/**
 * About — Overview Page
 * Full-page layout using QS design tokens with dynamic elements
 * 
 * Sections:
 * 1️⃣ Hero Section (standard page hero with headline and subtext)
 * 2️⃣ Story Section (Mission text + image, two-column)
 * 3️⃣ Team Section (4-6 profile cards with hover effects)
 * 4️⃣ Timeline Section (horizontal milestones with brand accent)
 * 5️⃣ Culture/Values Section (3 cards: Innovation, Reliability, Empathy)
 * 6️⃣ Closing CTA (Join us + buttons)
 * 
 * Dynamic Elements:
 * - Parallax hero (20% scroll offset)
 * - Fast reveal-on-scroll (150ms fade-up)
 * - Cursor-responsive gradient on CTAs
 */

import { 
  Shield, Lightbulb, Heart, Zap, Users, TrendingUp,
  Award, Globe, Target, CheckCircle, ArrowRight
} from "lucide-react";
import { Footer } from "./qs";
import { useFadeUpOnScroll } from "./hooks/useFadeUpOnScroll";
import { useParallax } from "./hooks/useParallax";
import { useRevealFast } from "./hooks/useRevealFast";
import { useCursorGradient } from "./hooks/useCursorGradient";

export function AboutOverview() {
  // Global design standards: all dynamic elements
  useFadeUpOnScroll();
  useParallax();
  useRevealFast();

  return (
    <>
      <style>{`
        @media (max-width: 900px) {
          .founders-row {
            flex-wrap: wrap !important;
            justify-content: center !important;
          }
        }
        
        @media (max-width: 768px) {
          .about-hero {
            padding: 64px 40px !important;
          }
          .about-section {
            padding: 64px 40px !important;
          }
          .mission-grid {
            grid-template-columns: 1fr !important;
            gap: 40px !important;
          }
          .differentiators-grid {
            grid-template-columns: 1fr !important;
            gap: 24px !important;
          }
          .values-grid {
            grid-template-columns: 1fr !important;
          }
        }
        
        @media (max-width: 640px) {
          .founders-row {
            flex-direction: column !important;
            gap: 24px !important;
          }
          .founders-row article {
            width: 100% !important;
            max-width: 480px !important;
            min-width: auto !important;
          }
        }
        
        @media (max-width: 480px) {
          .about-hero {
            padding: 48px 24px !important;
          }
          .about-section {
            padding: 48px 24px !important;
          }
          .cta-buttons {
            flex-direction: column !important;
            width: 100% !important;
          }
        }

        /* Responsive hero spacing */
        @media (max-width: 1024px) {
          .about-hero {
            padding: 96px clamp(16px, 6vw, 80px) !important;
          }
        }

        @media (max-width: 640px) {
          .about-hero {
            padding: 80px clamp(16px, 6vw, 80px) !important;
          }
        }
      `}</style>

      <div style={{ height: '100%', width: '100%', overflowY: 'auto', backgroundColor: 'var(--qs-bg)', paddingTop: 0 }}>
        {/* NO TOP SPACER - Content starts at Y=0 directly under sticky header */}

        {/* 1️⃣ HERO SECTION */}
        <section className="about-hero" style={{
          padding: '120px 80px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: 'transparent'
        }}>
          <div style={{
            maxWidth: 'var(--qs-container-max-width)',
            width: '100%',
            textAlign: 'center'
          }}>
            <h1 style={{
              marginBottom: '24px'
            }}>
              Redefining School Safety<br />Operations
            </h1>

            <p style={{
              maxWidth: '700px',
              margin: '0 auto'
            }}>
              We're building technology that makes every campus safer, smarter, and more connected.
            </p>
          </div>
        </section>

        {/* Spacer 96px */}

        {/* 2️⃣ STORY SECTION - Our Mission */}
        <section className="about-section" style={{
          padding: '96px 80px',
          backgroundColor: 'var(--qs-bg)'
        }}>
          <div style={{
            maxWidth: '1200px',
            margin: '0 auto'
          }}>
            <div className="mission-grid" style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '80px',
              alignItems: 'center'
            }}>
              {/* Left: Mission Text */}
              <div>
                <h2 style={{
                  marginBottom: '32px'
                }}>
                  Our Story
                </h2>

                <div style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '24px'
                }}>
                  <p>
                    The story of QuickSecure began in a high school classroom, where founders Rohan Kumar and William Susskind witnessed firsthand how outdated and fragmented school safety systems left students and educators vulnerable. What started as a small idea to make schools safer has grown into a nationwide movement to modernize campus security.
                  </p>

                  <p>
                    During their senior year, they built the first QuickSecure prototype—a simple but powerful platform that merged real-time communication with intelligent automation. That innovation won the K-12 InVenture Prize and the WilmerHale Patent Award, setting the foundation for a company built on impact and integrity.
                  </p>

                  <p>
                    Today, QuickSecure empowers schools and universities across the country with an integrated safety ecosystem that connects detection, response, and communication into one seamless platform. Our mission remains the same: to create safer learning environments where every student and teacher can focus on what truly matters—education—knowing they're protected by reliable, state-of-the-art technology.
                  </p>

                  <p>
                    The journey from concept to reality has been driven by our commitment to innovation, reliability, and accessibility. We continue to work hand-in-hand with school leaders, law enforcement, and safety experts to evolve our solutions and meet the ever-changing demands of modern school security.
                  </p>
                </div>
              </div>

              {/* Right: Image (16:9 ratio) */}
              <div style={{
                width: '100%',
                aspectRatio: '16/9',
                borderRadius: '16px',
                boxShadow: '0 8px 24px 0 rgba(0, 0, 0, 0.1)',
                overflow: 'hidden'
              }}>
                <img
                  src="/media/QuickSecure-About-1.jpeg"
                  alt="QuickSecure Team"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover'
                  }}
                />
              </div>
            </div>
          </div>
        </section>

        {/* Spacer 96px */}

        {/* 3️⃣ TIMELINE SECTION */}
        <TimelineSection />

        {/* Spacer 96px */}

        {/* 4️⃣ CULTURE / VALUES SECTION */}
        <ValuesSection />

        {/* Spacer 96px */}

        {/* 5️⃣ CLOSING CTA */}
        <ClosingCTA />

        {/* QS Footer */}
        <Footer />
      </div>
    </>
  );
}

// 3️⃣ Differentiators Section Component
function TimelineSection() {
  const differentiators = [
    {
      icon: Zap,
      title: 'Built for Speed',
      description: 'When seconds count, our platform delivers instant alerts and real-time coordination. No delays, no friction—just immediate action when it matters most.'
    },
    {
      icon: Shield,
      title: 'Privacy-First Architecture',
      description: 'We engineer security into every layer. Your data stays encrypted, protected, and under your control—never sold, never compromised, always secure.'
    },
    {
      icon: Users,
      title: 'Designed with Schools',
      description: 'Built alongside educators, administrators, and safety directors. Every feature solves a real problem faced by real schools every single day.'
    },
    {
      icon: Globe,
      title: 'Always Available',
      description: '99.9% uptime backed by enterprise-grade infrastructure. Our platform is always on, always ready, so you can focus on what matters—keeping your community safe.'
    }
  ];

  return (
    <section className="about-section" style={{
      padding: '96px 80px',
      backgroundColor: 'var(--qs-bg)'
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto'
      }}>
        <h2 style={{
          textAlign: 'center',
          marginBottom: '64px'
        }}>
          Why We're Different
        </h2>

        {/* Differentiators Grid */}
        <div 
          className="differentiators-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            gap: '32px'
          }}
        >
          {differentiators.map((item, index) => (
            <div
              key={index}
              className={`reveal-fast delay-${index * 50} hover-lift`}
              style={{
                backgroundColor: 'var(--qs-panel)',
                borderRadius: '16px',
                padding: '40px 32px',
                border: '2px solid var(--qs-border)',
                cursor: 'pointer'
              }}
            >
              {/* Icon */}
              <div style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '64px',
                height: '64px',
                backgroundColor: 'var(--qs-brand-accent)',
                borderRadius: '16px',
                marginBottom: '24px'
              }}>
                <item.icon style={{ 
                  width: '32px', 
                  height: '32px', 
                  color: 'var(--qs-brand-accent-fg)' 
                }} />
              </div>

              {/* Title */}
              <h3 style={{
                marginBottom: '16px',
                color: 'var(--qs-brand-primary)'
              }}>
                {item.title}
              </h3>

              {/* Description */}
              <p className="qs-text-body-medium">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// 4️⃣ Values Section Component
function ValuesSection() {
  const values = [
    {
      icon: Lightbulb,
      title: 'Innovation',
      description: 'We constantly push boundaries to create cutting-edge safety solutions that anticipate tomorrow\'s challenges today.'
    },
    {
      icon: Shield,
      title: 'Reliability',
      description: 'When seconds matter, our platform delivers. 99.9% uptime and instant response times you can depend on.'
    },
    {
      icon: Heart,
      title: 'Empathy',
      description: 'We design with compassion, understanding that behind every alert is a real person and community we serve.'
    }
  ];

  return (
    <section className="about-section" style={{
      padding: '96px 80px',
      backgroundColor: 'var(--qs-panel)'
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto'
      }}>
        <h2 style={{
          textAlign: 'center',
          marginBottom: '64px'
        }}>
          Our Values
        </h2>

        <div className="values-grid" style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '40px'
        }}>
          {values.map((value, index) => (
            <div
              key={index}
              className={`reveal-fast delay-${index * 50} hover-lift`}
              style={{
                backgroundColor: 'var(--qs-bg)',
                borderRadius: '16px',
                padding: '48px 32px',
                textAlign: 'center',
                border: '2px solid var(--qs-border)',
                cursor: 'pointer'
              }}
            >
              {/* Icon */}
              <div style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '72px',
                height: '72px',
                backgroundColor: 'var(--qs-panel)',
                borderRadius: '16px',
                marginBottom: '24px',
                color: 'var(--qs-brand-accent)'
              }}>
                <value.icon style={{ width: '36px', height: '36px' }} />
              </div>

              {/* Title */}
              <h3 style={{
                marginBottom: '16px'
              }}>
                {value.title}
              </h3>

              {/* Description */}
              <p className="qs-text-body-medium">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// 5️⃣ Closing CTA Component
function ClosingCTA() {
  const primaryBtnRef = useCursorGradient();
  const secondaryBtnRef = useCursorGradient();

  return (
    <section className="about-section" style={{
      padding: '96px 80px',
      backgroundColor: 'var(--qs-bg)',
      textAlign: 'center'
    }}>
      <div style={{
        maxWidth: '800px',
        margin: '0 auto'
      }}>
        <h2 style={{
          marginBottom: '24px'
        }}>
          Join Us in Building Safer Schools
        </h2>

        <p className="qs-text-h4" style={{
          marginBottom: '48px'
        }}>
          Whether you're an educator, safety professional, or technology partner, there's a place for you in our mission to protect every student.
        </p>

        {/* CTA Button - Centered */}
        <div className="cta-buttons" style={{
          display: 'flex',
          justifyContent: 'center'
        }}>
          <button
            ref={primaryBtnRef as any}
            className="hover-lift cta-gradient-hover"
            onClick={() => { window.location.hash = '/contact'; }}
            style={{
              backgroundColor: 'var(--qs-brand-accent)',
              color: 'var(--qs-brand-accent-fg)',
              padding: '18px 48px',
              borderRadius: '12px',
              border: 'none',
              cursor: 'pointer',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '12px'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = 'var(--qs-brand-accent-80)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'var(--qs-brand-accent)';
            }}
          >
            Get a Demo
            <ArrowRight style={{ width: '20px', height: '20px' }} />
          </button>
        </div>
      </div>
    </section>
  );
}
