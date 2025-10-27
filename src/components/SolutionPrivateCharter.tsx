/**
 * Solution — Private & Charter
 * Specialized solution page for private and charter schools
 * 
 * Sections:
 * 1️⃣ Hero Section (localized image + headline)
 * 2️⃣ Problem Section (challenges for private/charter schools)
 * 3️⃣ Solution Section (how QuickSecure solves these problems)
 * 4️⃣ Metrics / Outcomes (animated stat cards)
 * 5️⃣ Feature Highlights
 * 6️⃣ Closing CTA
 */

import { useState, useEffect, useRef } from "react";
import { 
  Shield, Users, Clock, CheckCircle, AlertTriangle, Bell, 
  FileText, TrendingUp, ArrowRight, Play, GraduationCap,
  Award, DollarSign, Star
} from "lucide-react";
import { Footer } from "./qs";
import { useFadeUpOnScroll } from "./hooks/useFadeUpOnScroll";
import { useParallax } from "./hooks/useParallax";

export function SolutionPrivateCharter() {
  const [metricsVisible, setMetricsVisible] = useState(false);
  const metricsRef = useRef<HTMLDivElement>(null);
  
  // Global design standards: fade-up animations and parallax
  useFadeUpOnScroll();
  useParallax();

  // Intersection Observer for metrics animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setMetricsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (metricsRef.current) {
      observer.observe(metricsRef.current);
    }

    return () => {
      if (metricsRef.current) {
        observer.unobserve(metricsRef.current);
      }
    };
  }, []);

  // Animated Counter Hook
  const useCounter = (end: number, duration: number, start: boolean) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
      if (!start) return;

      let startTime: number | null = null;
      const animate = (currentTime: number) => {
        if (!startTime) startTime = currentTime;
        const progress = Math.min((currentTime - startTime) / duration, 1);
        setCount(Math.floor(progress * end));
        if (progress < 1) {
          requestAnimationFrame(animate);
        }
      };
      requestAnimationFrame(animate);
    }, [end, duration, start]);

    return count;
  };

  const parentSatisfaction = useCounter(98, 2000, metricsVisible);
  const accreditationReady = useCounter(100, 2000, metricsVisible);
  const enrollment = useCounter(23, 2000, metricsVisible);
  const donorConfidence = useCounter(94, 2000, metricsVisible);

  return (
    <>
      <style>{`
        @media (max-width: 768px) {
          .solution-hero {
            padding: 64px 40px !important;
            flex-direction: column !important;
          }
          .solution-section {
            padding: 64px 40px !important;
          }
          .problem-grid {
            grid-template-columns: 1fr !important;
          }
          .feature-grid {
            grid-template-columns: 1fr !important;
          }
          .metrics-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
        @media (max-width: 480px) {
          .solution-hero {
            padding: 48px 24px !important;
          }
          .solution-section {
            padding: 48px 24px !important;
          }
          .metrics-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>

      <div style={{ height: '100%', width: '100%', overflowY: 'auto', backgroundColor: '#FFFFFF', paddingTop: 0 }}>
        {/* NO TOP SPACER - Content starts at Y=0 directly under sticky header */}

        {/* 1️⃣ HERO SECTION */}
        <section className="solution-hero parallax-hero parallax-medium fade-up-on-scroll" style={{
          padding: '128px 80px',
          backgroundColor: '#F7F9FA',
          position: 'relative',
          overflow: 'hidden'
        }}>
          {/* Background gradient overlay */}
          <div style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(135deg, rgba(43, 94, 156, 0.03) 0%, rgba(43, 94, 156, 0.05) 100%)',
            pointerEvents: 'none'
          }}></div>

          <div style={{
            maxWidth: '1200px',
            margin: '0 auto',
            display: 'flex',
            alignItems: 'center',
            gap: '80px',
            position: 'relative',
            zIndex: 1
          }}>
            {/* Left: Hero Icon/Illustration */}
            <div style={{
              width: '45%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              <div style={{
                width: '320px',
                height: '320px',
                borderRadius: '24px',
                background: 'linear-gradient(135deg, var(--qs-brand-accent-20) 0%, #9BB8D9 100%)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                position: 'relative',
                boxShadow: '0 8px 24px 0 rgba(0, 110, 110, 0.15)'
              }}>
                <Award style={{ 
                  width: '160px', 
                  height: '160px', 
                  color: 'var(--qs-accent)',
                  opacity: 0.8
                }} />
                
                {/* Floating badges */}
                <div style={{
                  position: 'absolute',
                  top: '20px',
                  right: '20px',
                  backgroundColor: '#FFFFFF',
                  padding: '8px 16px',
                  borderRadius: '20px',
                  boxShadow: '0 2px 8px 0 rgba(0, 0, 0, 0.1)',
                  fontSize: '12px',
                  fontWeight: 600,
                  color: 'var(--qs-brand-accent)'
                }}>
                  Premium Quality
                </div>
              </div>
            </div>

            {/* Right: Headline + Description + CTAs */}
            <div style={{ width: '55%' }}>
              <div style={{
                fontSize: '14px',
                fontWeight: 600,
                color: 'var(--qs-accent)',
                marginBottom: '16px',
                textTransform: 'uppercase',
                letterSpacing: '1px'
              }}>
                Solution for Independent Schools
              </div>

              <h1 style={{
                fontFamily: 'Inter, sans-serif',
                fontWeight: 700,
                fontSize: '56px',
                lineHeight: 1.2,
                color: '#1E1E1E',
                marginBottom: '24px'
              }}>
                Excellence in Safety for Private & Charter Schools
              </h1>

              <p style={{
                fontFamily: 'Inter, sans-serif',
                fontSize: '20px',
                lineHeight: 1.6,
                color: '#4A4A4A',
                marginBottom: '40px'
              }}>
                Premium safety solutions that meet the high standards of private and charter institutions while supporting accreditation, parent communication, and donor transparency.
              </p>

              {/* CTA Buttons */}
              <div style={{
                display: 'flex',
                gap: '16px',
                flexWrap: 'wrap'
              }}>
                <button
                  className="hover-lift"
                  style={{
                    backgroundColor: 'var(--qs-brand-accent)',
                    color: '#FFFFFF',
                    padding: '16px 32px',
                    fontSize: '16px',
                    fontWeight: 600,
                    borderRadius: '12px',
                    border: 'none',
                    cursor: 'pointer',
                    fontFamily: 'Inter, sans-serif',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '8px'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = 'var(--qs-brand-primary-hover)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = 'var(--qs-brand-accent)';
                  }}
                >
                  <Play style={{ width: '20px', height: '20px' }} />
                  Watch Demo
                </button>


              </div>
            </div>
          </div>
        </section>

        {/* Spacer 96px - Global Section Spacing */}

        {/* 2️⃣ PROBLEM SECTION */}
        <section className="solution-section fade-up-on-scroll delay-100" style={{
          padding: '96px 80px',
          backgroundColor: '#FFFFFF'
        }}>
          <div style={{
            maxWidth: '1200px',
            margin: '0 auto'
          }}>
            <h2 style={{
              fontFamily: 'Inter, sans-serif',
              fontWeight: 700,
              fontSize: '40px',
              lineHeight: 1.3,
              color: '#1E1E1E',
              marginBottom: '16px',
              textAlign: 'center'
            }}>
              The Challenge for Private & Charter Schools
            </h2>

            <p style={{
              fontFamily: 'Inter, sans-serif',
              fontSize: '18px',
              lineHeight: 1.6,
              color: '#4A4A4A',
              textAlign: 'center',
              maxWidth: '800px',
              margin: '0 auto 64px'
            }}>
              Independent schools need comprehensive safety solutions that meet accreditation standards and satisfy demanding stakeholders.
            </p>

            {/* Problem Cards Grid */}
            <div className="problem-grid" style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: '32px'
            }}>
              {[
                {
                  icon: <Award style={{ width: '32px', height: '32px', color: 'var(--qs-accent)' }} />,
                  title: "Accreditation Requirements",
                  description: "Meeting rigorous safety standards for NAIS, ISACS, or state accreditation bodies requires extensive documentation and proven protocols."
                },
                {
                  icon: <Users style={{ width: '32px', height: '32px', color: 'var(--qs-accent)' }} />,
                  title: "Parent Expectations",
                  description: "Families paying tuition expect transparent, proactive communication about safety measures and incident responses."
                },
                {
                  icon: <DollarSign style={{ width: '32px', height: '32px', color: 'var(--qs-accent)' }} />,
                  title: "Donor Confidence",
                  description: "Demonstrating responsible stewardship through professional safety management is essential for fundraising and enrollment."
                }
              ].map((problem, idx) => (
                <div
                  key={idx}
                  className="hover-lift"
                  style={{
                    backgroundColor: '#F7F9FA',
                    padding: '32px',
                    borderRadius: '16px',
                    border: '1px solid var(--qs-border)'
                  }}
                >
                  <div style={{ marginBottom: '16px' }}>
                    {problem.icon}
                  </div>
                  <h3 style={{
                    fontFamily: 'Inter, sans-serif',
                    fontWeight: 600,
                    fontSize: '20px',
                    color: '#1E1E1E',
                    marginBottom: '12px'
                  }}>
                    {problem.title}
                  </h3>
                  <p style={{
                    fontFamily: 'Inter, sans-serif',
                    fontSize: '16px',
                    lineHeight: 1.6,
                    color: '#4A4A4A'
                  }}>
                    {problem.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Spacer 96px - Global Section Spacing */}

        {/* 3️⃣ SOLUTION SECTION */}
        <section className="solution-section fade-up-on-scroll delay-200" style={{
          padding: '96px 80px',
          backgroundColor: '#F7F9FA'
        }}>
          <div style={{
            maxWidth: '1200px',
            margin: '0 auto'
          }}>
            <h2 style={{
              fontFamily: 'Inter, sans-serif',
              fontWeight: 700,
              fontSize: '40px',
              lineHeight: 1.3,
              color: '#1E1E1E',
              marginBottom: '16px',
              textAlign: 'center'
            }}>
              The QuickSecure Solution
            </h2>

            <p style={{
              fontFamily: 'Inter, sans-serif',
              fontSize: '18px',
              lineHeight: 1.6,
              color: '#4A4A4A',
              textAlign: 'center',
              maxWidth: '800px',
              margin: '0 auto 64px'
            }}>
              A premium safety platform designed for the unique needs of private and charter institutions.
            </p>

            {/* Solution Feature Blocks - Alternating Layout */}
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '64px'
            }}>
              {/* Feature 1 - Image Left */}
              <div style={{
                display: 'flex',
                gap: '64px',
                alignItems: 'center'
              }}>
                <div style={{
                  width: '50%',
                  height: '320px',
                  borderRadius: '16px',
                  background: 'linear-gradient(135deg, var(--qs-brand-accent-20) 0%, #9BB8D9 100%)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  boxShadow: '0 4px 12px 0 rgba(0, 0, 0, 0.06)'
                }}>
                  <Award style={{ width: '120px', height: '120px', color: 'var(--qs-brand-accent)', opacity: 0.6 }} />
                </div>
                <div style={{ width: '50%' }}>
                  <div style={{
                    display: 'inline-block',
                    backgroundColor: 'var(--qs-brand-accent-20)',
                    color: 'var(--qs-brand-accent)',
                    padding: '6px 16px',
                    borderRadius: '20px',
                    fontSize: '12px',
                    fontWeight: 600,
                    marginBottom: '16px'
                  }}>
                    Accreditation Support
                  </div>
                  <h3 style={{
                    fontFamily: 'Inter, sans-serif',
                    fontWeight: 700,
                    fontSize: '32px',
                    lineHeight: 1.3,
                    color: '#1E1E1E',
                    marginBottom: '16px'
                  }}>
                    Audit-Ready Documentation
                  </h3>
                  <p style={{
                    fontFamily: 'Inter, sans-serif',
                    fontSize: '18px',
                    lineHeight: 1.6,
                    color: '#4A4A4A',
                    marginBottom: '24px'
                  }}>
                    Automatically generate the comprehensive safety documentation required for NAIS, ISACS, and state accreditations. Every drill, incident, and policy is tracked and exportable.
                  </p>
                  <ul style={{
                    listStyle: 'none',
                    padding: 0,
                    margin: 0
                  }}>
                    {[
                      'Accreditation-ready reports',
                      'Comprehensive audit trails',
                      'Policy version control',
                      'Board presentation materials'
                    ].map((item, idx) => (
                      <li key={idx} style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '12px',
                        marginBottom: '12px',
                        fontFamily: 'Inter, sans-serif',
                        fontSize: '16px',
                        color: '#4A4A4A'
                      }}>
                        <CheckCircle style={{ width: '20px', height: '20px', color: 'var(--qs-accent)' }} />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Feature 2 - Image Right */}
              <div style={{
                display: 'flex',
                gap: '64px',
                alignItems: 'center',
                flexDirection: 'row-reverse'
              }}>
                <div style={{
                  width: '50%',
                  height: '320px',
                  borderRadius: '16px',
                  background: 'linear-gradient(135deg, #F0E8FF 0%, #D1BBF5 100%)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  boxShadow: '0 4px 12px 0 rgba(0, 0, 0, 0.06)'
                }}>
                  <Bell style={{ width: '120px', height: '120px', color: 'var(--qs-brand-accent)', opacity: 0.6 }} />
                </div>
                <div style={{ width: '50%' }}>
                  <div style={{
                    display: 'inline-block',
                    backgroundColor: 'var(--qs-brand-accent-20)',
                    color: 'var(--qs-brand-accent)',
                    padding: '6px 16px',
                    borderRadius: '20px',
                    fontSize: '12px',
                    fontWeight: 600,
                    marginBottom: '16px'
                  }}>
                    Parent Communication
                  </div>
                  <h3 style={{
                    fontFamily: 'Inter, sans-serif',
                    fontWeight: 700,
                    fontSize: '32px',
                    lineHeight: 1.3,
                    color: '#1E1E1E',
                    marginBottom: '16px'
                  }}>
                    Transparent Family Updates
                  </h3>
                  <p style={{
                    fontFamily: 'Inter, sans-serif',
                    fontSize: '18px',
                    lineHeight: 1.6,
                    color: '#4A4A4A',
                    marginBottom: '24px'
                  }}>
                    Keep parents informed with branded communications, automated drill notifications, and real-time incident updates through their preferred channels.
                  </p>
                  <ul style={{
                    listStyle: 'none',
                    padding: 0,
                    margin: 0
                  }}>
                    {[
                      'Branded parent portal',
                      'Multi-channel notifications',
                      'Drill schedule sharing',
                      'Incident transparency controls'
                    ].map((item, idx) => (
                      <li key={idx} style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '12px',
                        marginBottom: '12px',
                        fontFamily: 'Inter, sans-serif',
                        fontSize: '16px',
                        color: '#4A4A4A'
                      }}>
                        <CheckCircle style={{ width: '20px', height: '20px', color: 'var(--qs-accent)' }} />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Feature 3 - Image Left */}
              <div style={{
                display: 'flex',
                gap: '64px',
                alignItems: 'center'
              }}>
                <div style={{
                  width: '50%',
                  height: '320px',
                  borderRadius: '16px',
                  background: 'linear-gradient(135deg, #FFF4E6 0%, #FFE4B3 100%)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  boxShadow: '0 4px 12px 0 rgba(0, 0, 0, 0.06)'
                }}>
                  <Star style={{ width: '120px', height: '120px', color: 'var(--qs-brand-accent)', opacity: 0.6 }} />
                </div>
                <div style={{ width: '50%' }}>
                  <div style={{
                    display: 'inline-block',
                    backgroundColor: 'var(--qs-brand-accent-20)',
                    color: 'var(--qs-brand-accent)',
                    padding: '6px 16px',
                    borderRadius: '20px',
                    fontSize: '12px',
                    fontWeight: 600,
                    marginBottom: '16px'
                  }}>
                    Premium Experience
                  </div>
                  <h3 style={{
                    fontFamily: 'Inter, sans-serif',
                    fontWeight: 700,
                    fontSize: '32px',
                    lineHeight: 1.3,
                    color: '#1E1E1E',
                    marginBottom: '16px'
                  }}>
                    White-Glove Support
                  </h3>
                  <p style={{
                    fontFamily: 'Inter, sans-serif',
                    fontSize: '18px',
                    lineHeight: 1.6,
                    color: '#4A4A4A',
                    marginBottom: '24px'
                  }}>
                    Dedicated success managers, priority support, and custom training programs ensure your safety team has everything they need to excel.
                  </p>
                  <ul style={{
                    listStyle: 'none',
                    padding: 0,
                    margin: 0
                  }}>
                    {[
                      'Dedicated success manager',
                      'Priority 24/7 support',
                      'Custom training programs',
                      'Quarterly strategy reviews'
                    ].map((item, idx) => (
                      <li key={idx} style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '12px',
                        marginBottom: '12px',
                        fontFamily: 'Inter, sans-serif',
                        fontSize: '16px',
                        color: '#4A4A4A'
                      }}>
                        <CheckCircle style={{ width: '20px', height: '20px', color: 'var(--qs-accent)' }} />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Spacer 96px - Global Section Spacing */}

        {/* 4️⃣ METRICS / OUTCOMES SECTION */}
        <section 
          ref={metricsRef}
          className="solution-section fade-up-on-scroll delay-300"
          style={{
            padding: '96px 80px',
            backgroundColor: '#FFFFFF'
          }}
        >
          <div style={{
            maxWidth: '1200px',
            margin: '0 auto'
          }}>
            <h2 style={{
              fontFamily: 'Inter, sans-serif',
              fontWeight: 700,
              fontSize: '40px',
              lineHeight: 1.3,
              color: '#1E1E1E',
              marginBottom: '16px',
              textAlign: 'center'
            }}>
              Results That Matter
            </h2>

            <p style={{
              fontFamily: 'Inter, sans-serif',
              fontSize: '18px',
              lineHeight: 1.6,
              color: '#4A4A4A',
              textAlign: 'center',
              maxWidth: '700px',
              margin: '0 auto 64px'
            }}>
              Real outcomes from private and charter schools using QuickSecure
            </p>

            {/* Metrics Grid */}
            <div className="metrics-grid" style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(4, 1fr)',
              gap: '32px'
            }}>
              <div className="hover-lift" style={{
                backgroundColor: '#F7F9FA',
                padding: '40px 32px',
                borderRadius: '16px',
                textAlign: 'center',
                border: '1px solid var(--qs-border)'
              }}>
                <div style={{
                  fontFamily: 'Inter, sans-serif',
                  fontWeight: 700,
                  fontSize: '48px',
                  color: 'var(--qs-accent)',
                  marginBottom: '8px'
                }}>
                  {parentSatisfaction}%
                </div>
                <div style={{
                  fontFamily: 'Inter, sans-serif',
                  fontSize: '16px',
                  fontWeight: 600,
                  color: '#1E1E1E',
                  marginBottom: '8px'
                }}>
                  Parent Satisfaction
                </div>
                <div style={{
                  fontFamily: 'Inter, sans-serif',
                  fontSize: '14px',
                  color: '#4A4A4A',
                  lineHeight: 1.5
                }}>
                  With safety communications
                </div>
              </div>

              <div className="hover-lift" style={{
                backgroundColor: '#F7F9FA',
                padding: '40px 32px',
                borderRadius: '16px',
                textAlign: 'center',
                border: '1px solid var(--qs-border)'
              }}>
                <div style={{
                  fontFamily: 'Inter, sans-serif',
                  fontWeight: 700,
                  fontSize: '48px',
                  color: 'var(--qs-accent)',
                  marginBottom: '8px'
                }}>
                  {accreditationReady}%
                </div>
                <div style={{
                  fontFamily: 'Inter, sans-serif',
                  fontSize: '16px',
                  fontWeight: 600,
                  color: '#1E1E1E',
                  marginBottom: '8px'
                }}>
                  Accreditation Ready
                </div>
                <div style={{
                  fontFamily: 'Inter, sans-serif',
                  fontSize: '14px',
                  color: '#4A4A4A',
                  lineHeight: 1.5
                }}>
                  Meeting all requirements
                </div>
              </div>

              <div className="hover-lift" style={{
                backgroundColor: '#F7F9FA',
                padding: '40px 32px',
                borderRadius: '16px',
                textAlign: 'center',
                border: '1px solid var(--qs-border)'
              }}>
                <div style={{
                  fontFamily: 'Inter, sans-serif',
                  fontWeight: 700,
                  fontSize: '48px',
                  color: 'var(--qs-accent)',
                  marginBottom: '8px'
                }}>
                  +{enrollment}%
                </div>
                <div style={{
                  fontFamily: 'Inter, sans-serif',
                  fontSize: '16px',
                  fontWeight: 600,
                  color: '#1E1E1E',
                  marginBottom: '8px'
                }}>
                  Enrollment Impact
                </div>
                <div style={{
                  fontFamily: 'Inter, sans-serif',
                  fontSize: '14px',
                  color: '#4A4A4A',
                  lineHeight: 1.5
                }}>
                  Safety as differentiator
                </div>
              </div>

              <div className="hover-lift" style={{
                backgroundColor: '#F7F9FA',
                padding: '40px 32px',
                borderRadius: '16px',
                textAlign: 'center',
                border: '1px solid var(--qs-border)'
              }}>
                <div style={{
                  fontFamily: 'Inter, sans-serif',
                  fontWeight: 700,
                  fontSize: '48px',
                  color: 'var(--qs-accent)',
                  marginBottom: '8px'
                }}>
                  {donorConfidence}%
                </div>
                <div style={{
                  fontFamily: 'Inter, sans-serif',
                  fontSize: '16px',
                  fontWeight: 600,
                  color: '#1E1E1E',
                  marginBottom: '8px'
                }}>
                  Donor Confidence
                </div>
                <div style={{
                  fontFamily: 'Inter, sans-serif',
                  fontSize: '14px',
                  color: '#4A4A4A',
                  lineHeight: 1.5
                }}>
                  In safety stewardship
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Spacer 96px - Global Section Spacing */}

        {/* 5️⃣ CLOSING CTA */}
        <section className="fade-up-on-scroll delay-400" style={{
          padding: '96px 80px',
          backgroundColor: 'linear-gradient(135deg, var(--qs-brand-accent) 0%, var(--qs-brand-primary-hover) 100%)',
          background: 'linear-gradient(135deg, var(--qs-brand-accent) 0%, var(--qs-brand-primary-hover) 100%)',
          textAlign: 'center',
          color: '#FFFFFF'
        }}>
          <div style={{
            maxWidth: '800px',
            margin: '0 auto'
          }}>
            <h2 style={{
              fontFamily: 'Inter, sans-serif',
              fontWeight: 700,
              fontSize: '40px',
              lineHeight: 1.3,
              color: '#FFFFFF',
              marginBottom: '24px'
            }}>
              Ready to Elevate Your School's Safety?
            </h2>

            <p style={{
              fontFamily: 'Inter, sans-serif',
              fontSize: '20px',
              lineHeight: 1.6,
              color: 'var(--qs-brand-accent-20)',
              marginBottom: '48px'
            }}>
              Get started with QuickSecure to provide exceptional safety for your community.
            </p>

            <button
              className="hover-lift"
              onClick={() => { window.location.hash = '/contact'; }}
              style={{
                backgroundColor: '#FFFFFF',
                color: 'var(--qs-brand-accent)',
                padding: '16px 40px',
                fontSize: '16px',
                fontWeight: 600,
                borderRadius: '12px',
                border: 'none',
                cursor: 'pointer',
                fontFamily: 'Inter, sans-serif',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.backgroundColor = 'var(--qs-brand-accent-20)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.backgroundColor = '#FFFFFF';
              }}
            >
              Schedule a Demo
              <ArrowRight style={{ width: '20px', height: '20px' }} />
            </button>
          </div>
        </section>

        {/* QS Footer */}
        <Footer />
      </div>
    </>
  );
}
