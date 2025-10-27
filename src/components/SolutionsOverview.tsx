/**
 * Solutions — Overview Page
 * Full-page layout using QS design tokens
 * 
 * Sections:
 * 1️⃣ Hero Section - Everything Works Together (animated network diagram)
 * 2️⃣ Solution Blocks (K-12, Multi-Site, Private & Charter)
 * 3️⃣ Metrics / Outcomes (animated stat cards)
 * 4️⃣ Closing CTA
 */

import { useState, useEffect, useRef } from "react";
import { 
  Shield, Lock, Smartphone, Network, Building2, GraduationCap,
  AlertTriangle, Bell, MapPin, TrendingUp, Users, Clock, Zap,
  ArrowRight, Play
} from "lucide-react";
import { Footer } from "./qs";
import { useFadeUpOnScroll } from "./hooks/useFadeUpOnScroll";
import { useParallax } from "./hooks/useParallax";
import { useRevealFast } from "./hooks/useRevealFast";
import { useCursorGradient } from "./hooks/useCursorGradient";
import { IntegrationFlowDiagram } from "./IntegrationFlowDiagram";
import { PlaceholderImage } from "./PlaceholderImage";

export function SolutionsOverview() {
  const [metricsVisible, setMetricsVisible] = useState(false);
  const metricsRef = useRef<HTMLDivElement>(null);
  
  // Global design standards: fade-up animations, parallax, and fast reveals
  useFadeUpOnScroll();
  useParallax();
  useRevealFast();

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

  const uptime = useCounter(99.9, 2000, metricsVisible);
  const alertSpeed = useCounter(70, 2000, metricsVisible);
  const oneOnOneSupport = true; // Static text, not animated
  const responseTime = useCounter(93, 2000, metricsVisible);

  return (
    <>
      <style>{`
        @media (max-width: 768px) {
          .solutions-hero {
            padding: 64px 40px !important;
            min-height: auto !important;
          }
          .solutions-section {
            padding: 64px 40px !important;
          }
          .solutions-cta {
            padding: 48px 40px !important;
          }

          .solution-block {
            flex-direction: column !important;
          }
          .solution-block-image,
          .solution-block-content {
            width: 100% !important;
          }
          .metrics-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
        @media (max-width: 480px) {
          .solutions-hero {
            padding: 48px 24px !important;
            min-height: auto !important;
          }
          .solutions-section {
            padding: 48px 24px !important;
          }
          .solutions-cta {
            padding: 32px 24px !important;
          }

          .metrics-grid {
            grid-template-columns: 1fr !important;
          }
        }

        /* Solution block hover effect */
        .solution-block {
          transition: transform 200ms ease, box-shadow 200ms ease;
        }

        .solution-block:hover {
          transform: translateY(-4px);
          box-shadow: var(--qs-shadow-2);
        }
      `}</style>
      <div style={{ height: '100%', width: '100%', overflowY: 'auto', backgroundColor: 'var(--qs-bg)', paddingTop: 0 }}>
        {/* NO TOP SPACER - Content starts at Y=0 directly under sticky header */}

        {/* 1️⃣ HERO SECTION - Everything Works Together */}
        <section className="solutions-hero fade-up-on-scroll parallax-hero parallax-hero-20" style={{
          padding: '64px 80px 120px',
          backgroundColor: 'var(--qs-bg)',
          minHeight: 'calc(100vh - 64px)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}>
          <div style={{
            maxWidth: '1200px',
            width: '100%',
            margin: '0 auto',
            textAlign: 'center'
          }}>
            {/* Main Hero Title - H1 */}
            <h1 style={{
              color: 'var(--qs-text-primary)',
              textAlign: 'center',
              marginBottom: '24px'
            }}>
              Everything Works Together
            </h1>

            {/* Hero Subtitle - Body Large */}
            <p style={{
              textAlign: 'center',
              maxWidth: '700px',
              margin: '0 auto 80px',
              color: 'var(--qs-text-secondary)'
            }}>
              QuickSecure Nexus acts as your central command hub, receiving inputs from security systems and distributing actions across your campus in real-time.
            </p>

            {/* Integration Flow Diagram */}
            <IntegrationFlowDiagram />
          </div>
        </section>

        {/* 2️⃣ SOLUTION BLOCKS SECTION */}
        <section className="solutions-section fade-up-on-scroll delay-200" style={{
          padding: '48px 80px',
          backgroundColor: 'var(--qs-bg)'
        }}>
          <div style={{
            maxWidth: '1200px',
            margin: '0 auto'
          }}>
            {/* Section Title */}
            <h2 style={{
              fontFamily: 'Inter, sans-serif',
              fontWeight: 700,
              fontSize: '40px',
              lineHeight: 1.3,
              color: 'var(--qs-text-primary)',
              textAlign: 'center',
              marginBottom: '64px'
            }}>
              Solutions for Every Campus
            </h2>

            {/* Solution Blocks */}
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '32px'
            }}>
              {/* K-12 Single Campus */}
              <div className="solution-block" style={{
                backgroundColor: '#FFFFFF',
                borderRadius: '16px',
                overflow: 'hidden',
                display: 'flex',
                alignItems: 'center'
              }}>
                <div className="solution-block-image" style={{
                  width: '45%',
                  height: '320px',
                  padding: '16px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  <img
                    src="/media/QuickSecure-Solutions-K12-1.png"
                    alt="K-12 Single Campus Solution"
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      borderRadius: '12px'
                    }}
                  />
                </div>
                <div className="solution-block-content" style={{
                  width: '55%',
                  padding: '48px'
                }}>
                  <h3 style={{
                    fontFamily: 'Inter, sans-serif',
                    fontWeight: 700,
                    fontSize: '32px',
                    color: 'var(--qs-text-primary)',
                    marginBottom: '16px'
                  }}>
                    K-12 Single Campus
                  </h3>
                  <p style={{
                    fontFamily: 'Inter, sans-serif',
                    fontWeight: 400,
                    fontSize: '18px',
                    color: 'var(--qs-text-secondary)',
                    lineHeight: 1.6,
                    marginBottom: '24px'
                  }}>
                    Streamlined safety management for individual schools. Monitor drills, manage incidents, and communicate with staff and parents from one centralized platform.
                  </p>
                  <ul style={{
                    listStyle: 'none',
                    padding: 0,
                    margin: 0,
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '12px'
                  }}>
                    {[
                      'One-click lockdown activation',
                      'Automated drill scheduling',
                      'Parent notification system',
                      'Compliance reporting'
                    ].map((feature, idx) => (
                      <li key={idx} style={{
                        fontFamily: 'Inter, sans-serif',
                        fontSize: '16px',
                        color: 'var(--qs-text-secondary)',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '12px'
                      }}>
                        <div style={{
                          width: '6px',
                          height: '6px',
                          backgroundColor: 'var(--qs-brand-accent)',
                          borderRadius: '50%'
                        }}></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Multi-Site District */}
              <div className="solution-block" style={{
                backgroundColor: '#FFFFFF',
                borderRadius: '16px',
                overflow: 'hidden',
                display: 'flex',
                alignItems: 'center',
                flexDirection: 'row-reverse'
              }}>
                <div className="solution-block-image" style={{
                  width: '45%',
                  height: '320px',
                  padding: '16px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  <img
                    src="/media/QuickSecure-Solutions-Multisite-1.png"
                    alt="Multi-Site District Solution"
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      borderRadius: '12px'
                    }}
                  />
                </div>
                <div className="solution-block-content" style={{
                  width: '55%',
                  padding: '48px'
                }}>
                  <h3 style={{
                    fontFamily: 'Inter, sans-serif',
                    fontWeight: 700,
                    fontSize: '32px',
                    color: 'var(--qs-text-primary)',
                    marginBottom: '16px'
                  }}>
                    Multi-Site District
                  </h3>
                  <p style={{
                    fontFamily: 'Inter, sans-serif',
                    fontWeight: 400,
                    fontSize: '18px',
                    color: 'var(--qs-text-secondary)',
                    lineHeight: 1.6,
                    marginBottom: '24px'
                  }}>
                    District-wide visibility and control across all campuses. Coordinate safety protocols, standardize procedures, and generate compliance reports for multiple locations.
                  </p>
                  <ul style={{
                    listStyle: 'none',
                    padding: 0,
                    margin: 0,
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '12px'
                  }}>
                    {[
                      'Centralized command dashboard',
                      'Cross-campus communication',
                      'Unified reporting & analytics',
                      'Role-based access control'
                    ].map((feature, idx) => (
                      <li key={idx} style={{
                        fontFamily: 'Inter, sans-serif',
                        fontSize: '16px',
                        color: 'var(--qs-text-secondary)',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '12px'
                      }}>
                        <div style={{
                          width: '6px',
                          height: '6px',
                          backgroundColor: 'var(--qs-brand-accent)',
                          borderRadius: '50%'
                        }}></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Private & Charter */}
              <div className="solution-block" style={{
                backgroundColor: '#FFFFFF',
                borderRadius: '16px',
                overflow: 'hidden',
                display: 'flex',
                alignItems: 'center'
              }}>
                <div className="solution-block-image" style={{
                  width: '45%',
                  height: '320px',
                  padding: '16px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  <img
                    src="/media/QuickSecure-Solutions-PrivateCharter-1.png"
                    alt="Private & Charter Solution"
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      borderRadius: '12px'
                    }}
                  />
                </div>
                <div className="solution-block-content" style={{
                  width: '55%',
                  padding: '48px'
                }}>
                  <h3 style={{
                    fontFamily: 'Inter, sans-serif',
                    fontWeight: 700,
                    fontSize: '32px',
                    color: 'var(--qs-text-primary)',
                    marginBottom: '16px'
                  }}>
                    Private & Charter
                  </h3>
                  <p style={{
                    fontFamily: 'Inter, sans-serif',
                    fontWeight: 400,
                    fontSize: '18px',
                    color: 'var(--qs-text-secondary)',
                    lineHeight: 1.6,
                    marginBottom: '24px'
                  }}>
                    Flexible solutions tailored to independent schools and charter networks. Customize workflows to match your unique governance structure while maintaining best-in-class safety standards.
                  </p>
                  <ul style={{
                    listStyle: 'none',
                    padding: 0,
                    margin: 0,
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '12px'
                  }}>
                    {[
                      'Customizable workflows',
                      'Scalable pricing model',
                      'White-label options',
                      'Premium support'
                    ].map((feature, idx) => (
                      <li key={idx} style={{
                        fontFamily: 'Inter, sans-serif',
                        fontSize: '16px',
                        color: 'var(--qs-text-secondary)',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '12px'
                      }}>
                        <div style={{
                          width: '6px',
                          height: '6px',
                          backgroundColor: 'var(--qs-brand-accent)',
                          borderRadius: '50%'
                        }}></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>


        {/* QS Footer */}
        <Footer />
      </div>
    </>
  );
}
