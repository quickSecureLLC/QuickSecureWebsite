/**
 * 📁 04 Pages → Products
 * ✅ Restructured with 4-section layout: Hero, Feature, Story, CTA (Oct 2025)
 * 
 * Layout Structure:
 * 1️⃣ Hero Section: Large headline + description block, centered, light surface background
 * 2️⃣ Feature Section: Two-column (image 16:9 left, 3 feature tiles right)
 * 3️⃣ Story Section: Two-column (text left, image 4:3 right, inverted on alternating products)
 * 4️⃣ CTA Section: Centered buttons with 64px top/bottom padding
 * 
 * Global Settings:
 * - Section spacing: 96px vertical
 * - Image placeholders: #E0E0E0 fill with labels
 * - Maintains all QS design tokens (colors, radii, typography)
 * - Responsive: Stack vertically on tablet/mobile
 */

import { useState, useEffect } from "react";
import { Network, Ticket, Smartphone, Brain, UserCheck, Lock, Mic, Radio, Map, Shield, ArrowRight, PhoneCall } from "lucide-react";
import { Footer } from "./qs";
import { useFadeUpOnScroll } from "./hooks/useFadeUpOnScroll";
import { useParallax } from "./hooks/useParallax";
import { useRevealFast } from "./hooks/useRevealFast";
import { useCursorGradient } from "./hooks/useCursorGradient";
import { PlaceholderImage } from "./PlaceholderImage";

type ProductPageProps = {
  onBack: () => void;
  icon: React.ReactNode;
  name: string;
  subtitle: string;
  description: string;
  features: Array<{ icon: React.ReactNode; title: string; description: string }>;
  storyHeadline: string;
  storyText: string;
  invertStory?: boolean;
  featureImageUrl?: string;
  storyImageUrl?: string;
};

// Main Product Page Component
export function ProductPage({
  onBack,
  icon,
  name,
  subtitle,
  description,
  features,
  storyHeadline,
  storyText,
  invertStory = false,
  featureImageUrl: propFeatureImageUrl,
  storyImageUrl: propStoryImageUrl
}: ProductPageProps) {
  const [heroImageUrl, setHeroImageUrl] = useState('');
  const [featureImageUrl, setFeatureImageUrl] = useState('');
  const [storyImageUrl, setStoryImageUrl] = useState('');
  
  // Use provided image URLs if available
  const featureImage = propFeatureImageUrl || featureImageUrl;
  const storyImage = propStoryImageUrl || storyImageUrl;

  // Global design standards: fade-up animations, parallax, and fast reveals
  useFadeUpOnScroll();
  useParallax();
  useRevealFast();

  return (
    <div style={{ height: '100%', width: '100%', overflowY: 'auto', backgroundColor: '#FFFFFF', paddingTop: 0 }}>
      {/* NO TOP SPACER - Content starts at Y=0 directly under sticky header */}

      {/* 1️⃣ HERO SECTION */}
      <HeroSection
        icon={icon}
        name={name}
        subtitle={subtitle}
        description={description}
      />

      {/* 2️⃣ FEATURE SECTION */}
      <FeatureSection
        productName={name}
        imageUrl={featureImage}
        features={features}
      />

      {/* 3️⃣ STORY SECTION */}
      <StorySection
        productName={name}
        headline={storyHeadline}
        text={storyText}
        imageUrl={storyImage}
        inverted={invertStory}
      />

      {/* QS Footer */}
      <Footer />
    </div>
  );
}

// 1️⃣ Hero Section Component
function HeroSection({ icon, name, subtitle, description }: {
  icon: React.ReactNode;
  name: string;
  subtitle: string;
  description: string;
}) {
  return (
    <section className="fade-up-on-scroll parallax-hero parallax-hero-20" style={{
      backgroundColor: '#F7F9FA',
      padding: '96px 80px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: '480px'
    }}>
      <div style={{
        maxWidth: '1200px',
        width: '100%',
        textAlign: 'center'
      }}>
        {/* Icon */}
        <div style={{
          display: 'inline-flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: '64px',
          height: '64px',
          backgroundColor: '#EAF7F7',
          borderRadius: '16px',
          marginBottom: '24px',
          color: 'var(--qs-brand-accent)'
        }}>
          {icon}
        </div>

        {/* Title */}
        <h1 style={{
          marginBottom: '16px'
        }}>
          {name}
        </h1>

        {/* Subtitle */}
        <p className="qs-text-h3" style={{
          color: 'var(--qs-brand-accent)',
          marginBottom: '24px',
          maxWidth: '900px',
          margin: '0 auto 24px'
        }}>
          {subtitle}
        </p>

        {/* Description */}
        <p style={{
          maxWidth: '800px',
          margin: '0 auto'
        }}>
          {description}
        </p>
      </div>
    </section>
  );
}

// 2️⃣ Feature Section Component - Two-column layout
function FeatureSection({ productName, imageUrl, features }: {
  productName: string;
  imageUrl: string;
  features: Array<{ icon: React.ReactNode; title: string; description: string }>;
}) {
  // Generate placeholder name from product name
  const placeholderName = `QuickSecure-${productName.replace(/\s+/g, '')}-1`;

  // Special styling for Panic Button App (no drop shadow)
  const isPanicButtonApp = productName === 'Panic Button App';
  
  // Special styling for AI Tip Line (drop shadow and rounded corners)
  const isAITipLine = productName === 'AI Tip Line';
  
  // Special styling for Rapid Lockdown System (rounded corners, grey background, drop shadow)
  const isRapidLockdownSystem = productName === 'Rapid Lockdown System';

  return (
    <section className="fade-up-on-scroll delay-100" style={{
      padding: '96px 80px',
      backgroundColor: '#FFFFFF'
    }}>
      <div style={{
        maxWidth: '1400px',
        margin: '0 auto',
        display: 'flex',
        flexDirection: 'column',
        gap: '64px'
      }}>
        {/* Image - Full Width */}
        {imageUrl ? (
          <div
            style={{
              width: '100%',
              aspectRatio: '16 / 10',
              borderRadius: '12px',
              overflow: 'hidden',
              backgroundColor: isRapidLockdownSystem ? '#F5F5F5' : 'transparent',
              boxShadow: isPanicButtonApp ? 'none' : isRapidLockdownSystem ? '0 8px 24px rgba(0, 0, 0, 0.12)' : '0 8px 24px rgba(0, 0, 0, 0.12)'
            }}
          >
            <img
              src={imageUrl}
              alt="Product feature"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'contain'
              }}
            />
          </div>
        ) : (
          <PlaceholderImage 
            name={placeholderName}
            aspectRatio="16/10"
            resolution="1920×1200px"
            style={{
              borderRadius: '20px'
            }}
          />
        )}

        {/* Features - 3 Column Grid Below */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '32px'
        }}>
          {features.map((feature, index) => (
            <div
              key={index}
              className={`hover-lift reveal-fast delay-${index * 50}`}
              style={{
                backgroundColor: '#FFFFFF',
                borderRadius: '16px',
                padding: '32px',
                border: '1px solid var(--qs-border)',
                boxShadow: '0 2px 8px 0 rgba(0, 0, 0, 0.04)'
              }}
            >
              {/* Icon */}
              <div style={{
                color: 'var(--qs-brand-accent)',
                marginBottom: '16px'
              }}>
                {feature.icon}
              </div>

              {/* Title */}
              <h4 style={{
                margin: '0 0 12px 0'
              }}>
                {feature.title}
              </h4>

              {/* Description */}
              <p className="qs-text-body-medium" style={{
                margin: 0
              }}>
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// 3️⃣ Story Section Component - Two-column layout with optional invert
function StorySection({ productName, headline, text, imageUrl, inverted = false }: {
  productName: string;
  headline: string;
  text: string;
  imageUrl: string;
  inverted?: boolean;
}) {
  // Generate placeholder name from product name
  const placeholderName = `QuickSecure-${productName.replace(/\s+/g, '')}-2`;

  const textContent = (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      gap: '24px'
    }}>
      <h2 style={{
        margin: 0
      }}>
        {headline}
      </h2>
      <p style={{
        margin: 0
      }}>
        {text}
      </p>
    </div>
  );

  const imageContent = imageUrl ? (
    <div
      style={{
        width: '100%',
        aspectRatio: '4 / 3',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        overflow: 'hidden',
        backgroundColor: '#F7F9FA',
        borderRadius: '12px',
        boxShadow: productName === 'Panic Button App' ? '0 8px 24px rgba(0, 0, 0, 0.12)' : 'none'
      }}
    >
      <img
        src={imageUrl}
        alt="Story visual"
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'contain'
        }}
      />
    </div>
  ) : (
    <PlaceholderImage 
      name={placeholderName}
      aspectRatio="4/3"
      resolution="1600×1200px"
      style={{
        borderRadius: '20px'
      }}
    />
  );

  return (
    <section className="fade-up-on-scroll delay-200" style={{
      padding: '96px 80px',
      backgroundColor: '#F7F9FA'
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '64px',
        alignItems: 'center'
      }}
      className="story-section-responsive"
      >
        {inverted ? (
          <>
            {imageContent}
            {textContent}
          </>
        ) : (
          <>
            {textContent}
            {imageContent}
          </>
        )}
      </div>
    </section>
  );
}

/**
 * ========================================
 * PRODUCT PAGES - ALL 12 PRODUCTS
 * ========================================
 */

export function QuickSecureNexusPage({ onBack }: { onBack: () => void }) {
  const [featureImageUrl, setFeatureImageUrl] = useState('/media/QuickSecure-QuickSecureNexus-1.png');
  const [storyImageUrl, setStoryImageUrl] = useState('/media/QuickSecure-QuickSecureNexus-2.png');

  // Global design standards: fade-up animations, parallax, and fast reveals
  useFadeUpOnScroll();
  useParallax();
  useRevealFast();

  return (
    <div style={{ height: '100%', width: '100%', overflowY: 'auto', backgroundColor: '#FFFFFF', paddingTop: 0 }}>
      {/* 1️⃣ HERO SECTION */}
      <HeroSection
        icon={<Network style={{ width: '32px', height: '32px' }} />}
        name="QuickSecure Nexus"
        subtitle="Unified platform connecting all safety systems"
        description="Centralized command dashboard integrates drills, alerts, ticketing, and analytics into one powerful platform. Monitor all campuses simultaneously with comprehensive real-time visibility."
      />

      {/* 2️⃣ FEATURE SECTION */}
      <FeatureSection
        productName="QuickSecure Nexus"
        imageUrl={featureImageUrl}
        features={[
          {
            icon: <Network style={{ width: '28px', height: '28px' }} />,
            title: "Centralized Control",
            description: "Manage all safety operations from a single, intuitive dashboard with real-time status monitoring."
          },
          {
            icon: <Shield style={{ width: '28px', height: '28px' }} />,
            title: "District-Wide Visibility",
            description: "Monitor all campuses simultaneously with comprehensive analytics and reporting tools."
          },
          {
            icon: <Brain style={{ width: '28px', height: '28px' }} />,
            title: "Automated Workflows",
            description: "Streamline processes with intelligent automation and custom rule-based protocols."
          }
        ]}
      />

      {/* 3️⃣ STORY SECTION */}
      <StorySection
        productName="QuickSecure Nexus"
        headline="Built for Scale"
        text="Whether you manage one school or an entire district, QuickSecure Nexus scales to meet your needs. Our cloud-based architecture ensures reliable performance even during critical incidents, with redundant systems and 99.9% uptime guarantee."
        imageUrl={storyImageUrl}
        inverted={false}
      />

      {/* QS Footer */}
      <Footer />
    </div>
  );
}

export function DrillManagementPage({ onBack }: { onBack: () => void }) {
  return (
    <ProductPage
      onBack={onBack}
      icon={<Shield style={{ width: '32px', height: '32px' }} />}
      name="Drill Management"
      subtitle="Schedule, execute, and document safety drills"
      description="Automated compliance tracking and detailed reporting ensures your institution meets all state and federal requirements. Digital documentation provides comprehensive audit trails."
      features={[
        {
          icon: <Shield style={{ width: '28px', height: '28px' }} />,
          title: "Automated Scheduling",
          description: "Smart scheduling system that ensures compliance while minimizing disruption to learning."
        },
        {
          icon: <Network style={{ width: '28px', height: '28px' }} />,
          title: "Digital Documentation",
          description: "Comprehensive digital records with photo/video capture and timestamped audit trails."
        },
        {
          icon: <Brain style={{ width: '28px', height: '28px' }} />,
          title: "Compliance Tracking",
          description: "Automatic compliance reporting that meets all state and federal requirements."
        }
      ]}
      storyHeadline="Compliance Made Easy"
      storyText="Stop managing drills with spreadsheets and paper forms. Our automated system handles scheduling, execution, and documentation while ensuring you stay compliant with all regulations. Generate reports with a single click."
      invertStory={true}
      featureImageUrl="/media/QuickSecure-DrillManagement-1.png"
      storyImageUrl="/media/QuickSecure-DrillManagement-2.png"
    />
  );
}

export function TicketingSystemPage({ onBack }: { onBack: () => void }) {
  return (
    <ProductPage
      onBack={onBack}
      icon={<Ticket style={{ width: '32px', height: '32px' }} />}
      name="Ticketing System"
      subtitle="Streamline maintenance requests and incident reporting"
      description="Automated assignment and tracking ensures urgent issues get immediate attention. Intelligent routing based on workload, location, and expertise optimizes response times."
      featureImageUrl="/media/QuickSecure-TicketingSystem-1.png"
      features={[
        {
          icon: <Ticket style={{ width: '28px', height: '28px' }} />,
          title: "Priority Routing",
          description: "Intelligent routing system ensures urgent issues get immediate attention from the right team."
        },
        {
          icon: <Network style={{ width: '28px', height: '28px' }} />,
          title: "Auto-Assign",
          description: "Automatic assignment based on workload, location, and expertise for optimal efficiency."
        },
        {
          icon: <Shield style={{ width: '28px', height: '28px' }} />,
          title: "Real-Time Tracking",
          description: "Track every ticket from submission to resolution with full transparency and updates."
        }
      ]}
      storyHeadline="Never Miss an Issue"
      storyText="AI-driven insights detect patterns before problems escalate. The system flags emerging maintenance or safety risks early, ensuring issues are resolved before anyone even reports them."
      storyImageUrl="/media/QuickSecure-TicketingSystem-2.png"
      invertStory={false}
    />
  );
}

export function PanicButtonAppPage({ onBack }: { onBack: () => void }) {
  return (
    <ProductPage
      onBack={onBack}
      icon={<Smartphone style={{ width: '32px', height: '32px' }} />}
      name="Panic Button App"
      subtitle="One-touch emergency alerts"
      description="GPS location tracking and direct communication to first responders ensures help arrives exactly where needed. Silent activation options protect users without alerting potential threats."
      features={[
        {
          icon: <Smartphone style={{ width: '28px', height: '28px' }} />,
          title: "GPS Location",
          description: "Precise location tracking ensures responders know exactly where help is needed."
        },
        {
          icon: <Network style={{ width: '28px', height: '28px' }} />,
          title: "911 Integration",
          description: "Direct connection to emergency services with automatic alert escalation protocols."
        },
        {
          icon: <Shield style={{ width: '28px', height: '28px' }} />,
          title: "Silent Activation",
          description: "Discreet activation options ensure safety without alerting potential threats."
        }
      ]}
      storyHeadline="Advanced GPS Connection"
      storyText="Uses advanced sensor fusion — combining GPS, Wi-Fi, and motion data — to deliver pinpoint indoor location accuracy without the need for extra hardware."
      invertStory={true}
      featureImageUrl="/media/QuickSecure-PanicButtonApp-1.png"
      storyImageUrl="/media/QuickSecure-PanicButtonApp-2.png"
    />
  );
}

export function AIPoweredInsightsPage({ onBack }: { onBack: () => void }) {
  return (
    <ProductPage
      onBack={onBack}
      icon={<Brain style={{ width: '32px', height: '32px' }} />}
      name="AI-Powered Insights"
      subtitle="Advanced analytics and predictive modeling"
      description="Identify patterns and optimize safety outcomes with machine learning. Predictive analytics forecasts potential risks before they become incidents."
      features={[
        {
          icon: <Brain style={{ width: '28px', height: '28px' }} />,
          title: "Predictive Analytics",
          description: "AI-powered forecasting identifies potential risks before they become incidents."
        },
        {
          icon: <Network style={{ width: '28px', height: '28px' }} />,
          title: "Pattern Detection",
          description: "Identify trends and patterns across incidents, drills, and safety events."
        },
        {
          icon: <Shield style={{ width: '28px', height: '28px' }} />,
          title: "Custom Reporting",
          description: "Generate detailed reports tailored to your specific compliance and operational needs."
        }
      ]}
      storyHeadline="Smarter Safety Decisions"
      storyText="Our AI analyzes thousands of data points to surface insights you might miss. Identify high-risk areas, predict equipment failures, and optimize staff deployment based on historical patterns and real-time conditions."
      invertStory={false}
    />
  );
}

export function VisitorManagementPage({ onBack }: { onBack: () => void }) {
  return (
    <div style={{ height: '100%', width: '100%', overflowY: 'auto', backgroundColor: '#F7F9FA', paddingTop: 0 }}>
      {/* Hero Section - Coming Soon */}
      <section style={{
        minHeight: 'calc(100vh - 380px)',
        padding: '120px 80px 0',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'linear-gradient(135deg, #F7F9FA 0%, #E6EBEF 100%)'
      }}>
        <div style={{
          maxWidth: '900px',
          margin: '0 auto',
          textAlign: 'center'
        }}>
          {/* Icon with gradient background */}
          <div style={{
            width: '140px',
            height: '140px',
            background: 'linear-gradient(135deg, #2B5E9C 0%, #1E4A75 100%)',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            margin: '0 auto 48px',
            boxShadow: '0 8px 24px rgba(43, 94, 156, 0.2)'
          }}>
            <UserCheck style={{ width: '64px', height: '64px', color: '#FFFFFF' }} />
          </div>
          
          {/* Badge */}
          <div style={{
            display: 'inline-block',
            backgroundColor: 'rgba(43, 94, 156, 0.1)',
            color: 'var(--qs-brand-accent)',
            padding: '8px 20px',
            borderRadius: '20px',
            fontSize: '14px',
            fontWeight: 600,
            marginBottom: '32px',
            fontFamily: 'Inter, sans-serif'
          }}>
            BETA TESTING
          </div>
          
          <h1 style={{
            fontFamily: 'Inter, sans-serif',
            fontWeight: 700,
            fontSize: '64px',
            color: '#1E1E1E',
            marginBottom: '24px',
            lineHeight: 1.2
          }}>
            Coming Soon
          </h1>
          
          <p style={{
            fontFamily: 'Inter, sans-serif',
            fontSize: '22px',
            lineHeight: 1.6,
            color: '#4A4A4A',
            marginBottom: '32px',
            maxWidth: '700px',
            margin: '0 auto 32px'
          }}>
            QuickSecure is in the beta testing phase of this feature and is excited to bring it to our customers. We are committed to only providing features to customers that we fully believe in.
          </p>

          <p style={{
            fontFamily: 'Inter, sans-serif',
            fontSize: '18px',
            lineHeight: 1.6,
            color: '#6B7280',
            marginBottom: '48px',
            maxWidth: '600px',
            margin: '0 auto 48px'
          }}>
            As of now, this feature is unavailable. If you would like to join the initial pilot program of this feature, please feel free to book a demo with us.
          </p>

          <button
            onClick={() => { window.location.hash = '/contact'; }}
            style={{
              backgroundColor: 'var(--qs-brand-accent)',
              color: '#FFFFFF',
              padding: '18px 48px',
              borderRadius: '12px',
              border: 'none',
              cursor: 'pointer',
              fontSize: '16px',
              fontWeight: 600,
              display: 'inline-flex',
              alignItems: 'center',
              gap: '12px',
              transition: 'all 200ms ease',
              boxShadow: '0 4px 12px rgba(43, 94, 156, 0.3)'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = 'var(--qs-brand-accent-80)';
              e.currentTarget.style.transform = 'translateY(-2px)';
              e.currentTarget.style.boxShadow = '0 6px 16px rgba(43, 94, 156, 0.4)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'var(--qs-brand-accent)';
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 4px 12px rgba(43, 94, 156, 0.3)';
            }}
          >
            Book a Demo
            <ArrowRight style={{ width: '20px', height: '20px' }} />
          </button>
        </div>
      </section>

      {/* QS Footer */}
      <Footer />
    </div>
  );
}

export function ManualLockPage({ onBack }: { onBack: () => void }) {
  return (
    <ProductPage
      onBack={onBack}
      icon={<Lock style={{ width: '32px', height: '32px' }} />}
      name="Manual Lock"
      subtitle="Advanced keyless entry and lockdown systems"
      description="Role-based permissions and remote management provide flexible access control. Instant emergency lockdown capabilities tie directly to your alert system."
      features={[
        {
          icon: <Lock style={{ width: '28px', height: '28px' }} />,
          title: "Smart Locks",
          description: "Keyless entry with role-based access permissions and audit trails for every door."
        },
        {
          icon: <Shield style={{ width: '28px', height: '28px' }} />,
          title: "Lockdown Integration",
          description: "Instant emergency lockdown capabilities tied directly to your alert system."
        },
        {
          icon: <Network style={{ width: '28px', height: '28px' }} />,
          title: "Remote Management",
          description: "Control access permissions from anywhere with cloud-based management tools."
        }
      ]}
      storyHeadline="Security Without Keys"
      storyText="Eliminate the cost and security risks of physical keys. Grant and revoke access instantly from your central dashboard. Every entry is logged with timestamp and user identification for complete accountability."
      invertStory={false}
    />
  );
}

export function AIGunshotDetectionPage({ onBack }: { onBack: () => void }) {
  return (
    <ProductPage
      onBack={onBack}
      icon={<Mic style={{ width: '32px', height: '32px' }} />}
      name="AI Gunshot Detection"
      subtitle="AI-powered acoustic sensors"
      description="Detect gunshots instantly and alert law enforcement automatically. Advanced triangulation identifies the exact location where shots were fired with 99% accuracy."
      features={[
        {
          icon: <Mic style={{ width: '28px', height: '28px' }} />,
          title: "Instant Detection",
          description: "AI-powered acoustic sensors detect gunshots in under a second with 99% accuracy."
        },
        {
          icon: <Radio style={{ width: '28px', height: '28px' }} />,
          title: "Auto 911 Alert",
          description: "Automatic notification to law enforcement with precise location data."
        },
        {
          icon: <Map style={{ width: '28px', height: '28px' }} />,
          title: "Location Pinpointing",
          description: "Advanced triangulation identifies the exact room or hallway where shots were fired."
        }
      ]}
      storyHeadline="Faster Than Human Response"
      storyText="In an active shooter situation, every second matters. Our AI detection system alerts law enforcement before anyone can reach for a phone, providing exact location data to speed response times."
      invertStory={true}
    />
  );
}

export function MassNotificationsPage({ onBack }: { onBack: () => void }) {
  return (
    <ProductPage
      onBack={onBack}
      icon={<Radio style={{ width: '32px', height: '32px' }} />}
      name="Mass Notifications"
      subtitle="Multi-channel emergency alerts"
      description="Reach thousands instantly via SMS, email, voice, and push notifications. Cloud-based delivery ensures messages get through when every second counts."
      features={[
        {
          icon: <Radio style={{ width: '28px', height: '28px' }} />,
          title: "Multi-Channel Alerts",
          description: "Send messages via SMS, email, voice calls, and push notifications simultaneously."
        },
        {
          icon: <Network style={{ width: '28px', height: '28px' }} />,
          title: "Instant Delivery",
          description: "Reach thousands of recipients in seconds with cloud-based message delivery."
        },
        {
          icon: <Shield style={{ width: '28px', height: '28px' }} />,
          title: "Delivery Tracking",
          description: "Real-time delivery confirmation and read receipts for every notification sent."
        }
      ]}
      storyHeadline="Critical Information, Instantly"
      storyText="Whether it's a weather emergency, security threat, or school closure, reach your entire community in seconds. Message templates and contact groups ensure rapid deployment during critical situations."
      invertStory={false}
    />
  );
}

export function FloorPlanViewPage({ onBack }: { onBack: () => void }) {
  return (
    <ProductPage
      onBack={onBack}
      icon={<Map style={{ width: '32px', height: '32px' }} />}
      name="Floor Plan View"
      subtitle="Interactive floor plans with live status updates"
      description="First responder sharing capabilities ensure emergency personnel have building layouts before arrival. Safety zones, exits, and assembly points are clearly marked."
      features={[
        {
          icon: <Map style={{ width: '28px', height: '28px' }} />,
          title: "Interactive Maps",
          description: "Real-time interactive floor plans with live status updates and incident markers."
        },
        {
          icon: <Radio style={{ width: '28px', height: '28px' }} />,
          title: "Responder Access",
          description: "Share detailed maps with first responders before they arrive on campus."
        },
        {
          icon: <Shield style={{ width: '28px', height: '28px' }} />,
          title: "Safety Zones",
          description: "Identify safe zones, exits, and assembly points for efficient evacuations."
        }
      ]}
      storyHeadline="Navigate in Crisis"
      storyText="First responders arriving at your campus need building layouts immediately. Our floor plan system provides instant access to detailed maps showing exits, safe zones, and real-time incident locations."
      invertStory={true}
    />
  );
}

export function ElectronicLockPage({ onBack }: { onBack: () => void }) {
  return (
    <ProductPage
      onBack={onBack}
      icon={<Lock style={{ width: '32px', height: '32px' }} />}
      name="Rapid Lockdown System"
      subtitle="Electronic retrofit door control"
      description="Locks down buildings instantly through centralized or manual commands with live status feedback."
      features={[
        {
          icon: <Lock style={{ width: '28px', height: '28px' }} />,
          title: "Instant Lockdown",
          description: "Centralized or manual door control with immediate building-wide activation."
        },
        {
          icon: <Network style={{ width: '28px', height: '28px' }} />,
          title: "Live Status",
          description: "Real-time feedback on door status and lockdown progress across all buildings."
        },
        {
          icon: <Shield style={{ width: '28px', height: '28px' }} />,
          title: "Electronic Retrofit",
          description: "Add smart lock capability to existing doors without full replacement."
        }
      ]}
      storyHeadline="Protect Every Entry Point"
      storyText="Monitor the status of every lock across campus from one central dashboard. Ensure full readiness with live door feedback, system health checks, and instant control when response time matters most."
      invertStory={false}
      featureImageUrl="/media/QuickSecure-RapidLockdownSystem-1.png"
      storyImageUrl="/media/QuickSecure-RapidLockdownSystem-2.png"
    />
  );
}

export function AIAnonymousTipLinePage({ onBack }: { onBack: () => void }) {
  return (
    <ProductPage
      onBack={onBack}
      icon={<PhoneCall style={{ width: '32px', height: '32px' }} />}
      name="AI Tip Line"
      subtitle="Anonymous AI-powered reporting"
      description="Securely collects and categorizes reports from students and staff to identify real threats faster. Filters and prioritizes tips while protecting identity."
      features={[
        {
          icon: <PhoneCall style={{ width: '28px', height: '28px' }} />,
          title: "AI-Powered Filtering",
          description: "Automatically filters and prioritizes tips to identify credible threats faster."
        },
        {
          icon: <Network style={{ width: '28px', height: '28px' }} />,
          title: "Secure Collection",
          description: "Safely collects and categorizes reports while protecting reporter identity."
        },
        {
          icon: <Shield style={{ width: '28px', height: '28px' }} />,
          title: "Anonymous Submission",
          description: "Students and staff can report confidentially via web or mobile app."
        }
      ]}
      storyHeadline="Prevent Incidents Before They Happen"
      storyText="Many tragedies could be prevented if warning signs were reported earlier. Our AI Tip Line removes barriers to reporting by providing anonymous, secure channels while intelligent analysis helps prioritize credible threats and ensure nothing falls through the cracks."
      invertStory={true}
      featureImageUrl="/media/QuickSecure-AITipLine-1.png"
      storyImageUrl="/media/QuickSecure-AITipLine-2.png"
    />
  );
}
