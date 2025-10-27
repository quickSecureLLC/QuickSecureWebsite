/**
 * Resources — Overview Page
 * Full-page layout using QS design tokens
 * 
 * Sections:
 * 1️⃣ Hero Section (with gradient overlay background)
 * 2️⃣ Dynamic Tab Switcher (Grants, FAQ with icons)
 * 3️⃣ Tab Content Views (200ms fade slide transitions)
 * 4️⃣ CTA Band
 */

import React, { useState, useEffect } from "react";
import { 
  FileText, HelpCircle, Download, ArrowRight, 
  Building, GraduationCap, Shield, DollarSign
} from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "./ui/accordion";
import { DocCard, ResourceViewer, Footer } from "./qs";
import { useFadeUpOnScroll } from "./hooks/useFadeUpOnScroll";
import { useParallax } from "./hooks/useParallax";

export function ResourcesOverview() {
  const [activeTab, setActiveTab] = useState<'grants' | 'faq'>('grants');
  const [viewerOpen, setViewerOpen] = useState(false);
  const [viewerContent, setViewerContent] = useState<{ title: string; content: React.ReactNode }>({ title: '', content: null });
  
  // Global design standards: fade-up animations and parallax
  useFadeUpOnScroll();
  useParallax();

  // Listen for custom events to switch tabs when dropdown items are clicked
  useEffect(() => {
    const handleTabSwitch = (event: Event) => {
      const customEvent = event as CustomEvent<{ tab: string }>;
      const tab = customEvent.detail.tab as 'grants' | 'faq';
      if (tab) {
        setActiveTab(tab);
      }
    };

    window.addEventListener('switchResourceTab', handleTabSwitch);
    return () => window.removeEventListener('switchResourceTab', handleTabSwitch);
  }, []);

  return (
    <>
      <style>{`
        /* Tab transition animation */
        .tab-content-wrapper {
          animation: tabFadeSlide 200ms ease-out forwards;
        }

        @keyframes tabFadeSlide {
          from {
            opacity: 0;
            transform: translateY(8px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        /* FAQ Accordion custom styling */
        .faq-accordion-item {
          border-bottom: 1px solid rgba(0, 0, 0, 0.1);
          transition: background-color 120ms ease-in-out;
        }

        .faq-accordion-item:hover {
          background-color: rgba(43, 94, 156, 0.05);
        }

        /* Responsive */
        @media (max-width: 768px) {
          .resources-hero {
            padding: 64px 40px !important;
            min-height: 400px !important;
          }
          .resources-section {
            padding: 64px 40px !important;
          }
          .resources-cta {
            padding: 48px 40px !important;
          }
          .grants-grid {
            grid-template-columns: 1fr !important;
          }
        }
        @media (max-width: 480px) {
          .resources-hero {
            padding: 48px 24px !important;
            min-height: 300px !important;
          }
          .resources-section {
            padding: 48px 24px !important;
          }
          .resources-cta {
            padding: 32px 24px !important;
          }
        }
      `}</style>

      <div className="resources-page">
        {/* 1️⃣ HERO SECTION */}
        <section className="resources-hero fade-up-on-scroll" style={{
          minHeight: '480px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '96px 80px',
          background: 'linear-gradient(135deg, var(--qs-brand-primary) 0%, var(--qs-brand-accent) 100%)',
          color: 'var(--qs-text-on-dark)',
          textAlign: 'center',
          position: 'relative',
          overflow: 'hidden'
        }}>
          <div style={{ position: 'relative', zIndex: 1, maxWidth: '900px' }}>
            <h1 style={{
              color: 'var(--qs-text-on-dark)',
              marginBottom: '24px'
            }}>
              Resources
            </h1>
            <p style={{
              color: 'var(--qs-text-on-dark)',
              maxWidth: '700px',
              margin: '0 auto'
            }}>
              Funding opportunities and frequently asked questions.
            </p>
          </div>
        </section>

        {/* Spacer 96px - Global Section Spacing */}
        <div style={{ height: '96px' }}></div>

        {/* 2️⃣ TAB SWITCHER + TAB CONTENT */}
        <section className="resources-section" style={{
          padding: '0 80px 96px 80px',
          maxWidth: '1200px',
          margin: '0 auto'
        }}>
          <div>
            {/* Tab Switcher */}
            <div style={{
              display: 'flex',
              gap: '8px',
              borderBottom: '2px solid #EAEAEA',
              marginBottom: '64px'
            }}>
              <TabButton
                active={activeTab === 'grants'}
                onClick={() => setActiveTab('grants')}
                icon={<DollarSign style={{ width: '20px', height: '20px' }} />}
                label="Grants"
              />
              <TabButton
                active={activeTab === 'faq'}
                onClick={() => setActiveTab('faq')}
                icon={<HelpCircle style={{ width: '20px', height: '20px' }} />}
                label="FAQ"
              />
            </div>

            {/* Tab Content with 200ms Fade Slide Transition */}
            <div className="tab-content-wrapper" key={activeTab}>
              {activeTab === 'grants' && <div id="Resources_Grants"><GrantsTab onOpenViewer={(title, content) => {
                setViewerContent({ title, content });
                setViewerOpen(true);
              }} /></div>}
              {activeTab === 'faq' && <div id="Resources_FAQ"><FAQTab /></div>}
            </div>
          </div>
        </section>

        {/* 3️⃣ CTA BAND */}
        <section className="resources-cta" style={{
          background: 'var(--qs-panel)',
          padding: '64px 80px',
          textAlign: 'center'
        }}>
          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            <h3 style={{ marginBottom: '16px' }}>
              Ready to Secure Your School?
            </h3>
            <p style={{ 
              marginBottom: '32px',
              color: 'var(--qs-text-secondary)'
            }}>
              See how QuickSecure can protect your students and staff.
            </p>
            <button style={{
              backgroundColor: 'var(--qs-brand-accent)',
              color: 'var(--qs-brand-accent-fg)',
              border: 'none',
              padding: '14px 32px',
              borderRadius: 'var(--qs-radius-md)',
              fontFamily: 'var(--qs-type-family-body)',
              fontSize: '15px',
              fontWeight: 600,
              cursor: 'pointer',
              transition: 'background-color 150ms ease',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = 'var(--qs-brand-accent-80)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'var(--qs-brand-accent)';
            }}
            onClick={() => {
              window.location.hash = '/contact';
            }}
            >
              Schedule a Demo
              <ArrowRight style={{ width: '16px', height: '16px' }} />
            </button>
          </div>
        </section>

        {/* Footer */}
        <Footer />
      </div>

      {/* Resource Viewer Modal */}
      {viewerOpen && (
        <ResourceViewer
          isOpen={viewerOpen}
          onClose={() => setViewerOpen(false)}
          title={viewerContent.title}
        >
          {viewerContent.content}
        </ResourceViewer>
      )}
    </>
  );
}

// TAB BUTTON COMPONENT
function TabButton({ active, onClick, icon, label }: {
  active: boolean;
  onClick: () => void;
  icon: React.ReactNode;
  label: string;
}) {
  return (
    <button
      onClick={onClick}
      className="no-underline-hover"
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: '8px',
        padding: '12px 20px',
        backgroundColor: 'transparent',
        border: 'none',
        borderBottom: active ? '3px solid var(--qs-brand-accent)' : '3px solid transparent',
        color: active ? 'var(--qs-brand-accent)' : 'var(--qs-text-secondary)',
        fontFamily: 'var(--qs-type-family-body)',
        fontSize: '16px',
        fontWeight: 500,
        cursor: 'pointer',
        transition: 'color 150ms ease, border-color 150ms ease',
        marginBottom: '-2px'
      }}
      onMouseEnter={(e) => {
        if (!active) {
          e.currentTarget.style.color = 'var(--qs-brand-accent)';
        }
      }}
      onMouseLeave={(e) => {
        if (!active) {
          e.currentTarget.style.color = 'var(--qs-text-secondary)';
        }
      }}
    >
      {icon}
      {label}
    </button>
  );
}

// GRANTS TAB - Two-Column Grid of Grant Cards
function GrantsTab({ onOpenViewer }: { onOpenViewer: (title: string, content: React.ReactNode) => void }) {
  const grants = [
    {
      icon: <DollarSign style={{ width: '28px', height: '28px', color: '#2B5E9C' }} />,
      title: "Federal School Safety Grants",
      summary: "Access national funding for safety technology & infrastructure upgrades.",
      content: <div>
        <h3 style={{ marginBottom: '24px', color: '#1E1E1E', fontSize: '28px', fontWeight: 700 }}>Federal School Safety Grants</h3>
        <p style={{ marginBottom: '32px', lineHeight: 1.8, color: '#4A4A4A', fontSize: '16px' }}>
          Many federal programs (e.g., the School Violence Prevention Program under the U.S. Dept. of Justice) support K-12 safety upgrades including technology, access controls and training. For example, Daviess County Public Schools (KY) received nearly $500,000 from the U.S. Department of Justice's School Violence Prevention Program to enhance campus communication systems, add bus navigation tablets and install new video cameras.
        </p>
        <h4 style={{ marginTop: '32px', marginBottom: '16px', color: '#2B5E9C', fontSize: '20px', fontWeight: 600 }}>Key Eligibility Points</h4>
        <p style={{ marginBottom: '32px', lineHeight: 1.8, color: '#4A4A4A', fontSize: '16px' }}>
          You'll need to align your project to federal priorities (student & staff safety, technology upgrades, emergency communication) and coordinate with district/state level.
        </p>
        <h4 style={{ marginTop: '32px', marginBottom: '16px', color: '#2B5E9C', fontSize: '20px', fontWeight: 600 }}>Example Uses</h4>
        <p style={{ marginBottom: '0', lineHeight: 1.8, color: '#4A4A4A', fontSize: '16px' }}>
          Installing surveillance & alert systems, improving communications, integrating technology for threats detection.
        </p>
      </div>
    },
    {
      icon: <Building style={{ width: '28px', height: '28px', color: '#2B5E9C' }} />,
      title: "State Safety Grants",
      summary: "State-level funding for schools to implement safety improvements.",
      content: <div>
        <h3 style={{ marginBottom: '24px', color: '#1E1E1E', fontSize: '28px', fontWeight: 700 }}>State Safety Grants</h3>
        <p style={{ marginBottom: '32px', lineHeight: 1.8, color: '#4A4A4A', fontSize: '16px' }}>
          States frequently run dedicated grant programs for school safety. For example, in Ohio over $57.8 million was awarded to 708 schools for safety grants. Across North Carolina, more than $74.1 million in safety grants were awarded to 200+ districts and charters for safety equipment, training and crisis-services.
        </p>
        <h4 style={{ marginTop: '32px', marginBottom: '16px', color: '#2B5E9C', fontSize: '20px', fontWeight: 600 }}>The Scope</h4>
        <p style={{ marginBottom: '32px', lineHeight: 1.8, color: '#4A4A4A', fontSize: '16px' }}>
          Funds often allow for equipment, training, personnel, and technology implementation.
        </p>
        <h4 style={{ marginTop: '32px', marginBottom: '16px', color: '#2B5E9C', fontSize: '20px', fontWeight: 600 }}>Tip</h4>
        <p style={{ marginBottom: '0', lineHeight: 1.8, color: '#4A4A4A', fontSize: '16px' }}>
          Check your state's Department of Education (or equivalent) for timelines, eligible uses, matching requirements.
        </p>
      </div>
    },
    {
      icon: <GraduationCap style={{ width: '28px', height: '28px', color: '#2B5E9C' }} />,
      title: "Foundation Grants",
      summary: "Private foundation funding for school safety initiatives & tech upgrades.",
      content: <div>
        <h3 style={{ marginBottom: '24px', color: '#1E1E1E', fontSize: '28px', fontWeight: 700 }}>Foundation Grants</h3>
        <p style={{ marginBottom: '32px', lineHeight: 1.8, color: '#4A4A4A', fontSize: '16px' }}>
          Private foundations can be more flexible and allow pilot projects, creative approaches or technology-forward solutions (which could benefit QuickSecure's offerings).
        </p>
        <h4 style={{ marginTop: '32px', marginBottom: '16px', color: '#2B5E9C', fontSize: '20px', fontWeight: 600 }}>Example Uses</h4>
        <p style={{ marginBottom: '32px', lineHeight: 1.8, color: '#4A4A4A', fontSize: '16px' }}>
          Safety assessment studies, installation of advanced alert systems, technology integration for early threat detection.
        </p>
        <h4 style={{ marginTop: '32px', marginBottom: '16px', color: '#2B5E9C', fontSize: '20px', fontWeight: 600 }}>Tip</h4>
        <p style={{ marginBottom: '0', lineHeight: 1.8, color: '#4A4A4A', fontSize: '16px' }}>
          Craft narratives emphasizing innovation, measurable outcomes, sustainability beyond the grant period.
        </p>
      </div>
    },
    {
      icon: <Download style={{ width: '28px', height: '28px', color: '#2B5E9C' }} />,
      title: "Grant Writing Resources",
      summary: "Templates, guides & best practices for successful grant applications.",
      content: <div>
        <h3 style={{ marginBottom: '24px', color: '#1E1E1E', fontSize: '28px', fontWeight: 700 }}>Grant Writing Resources</h3>
        <p style={{ marginBottom: '32px', lineHeight: 1.8, color: '#4A4A4A', fontSize: '16px' }}>
          Downloadable templates for concept-papers, budgets, project-timelines. For example, the Leon County Schools "Concept Paper Template" is designed to help you get thoughts together before full proposal development.
        </p>
        <h4 style={{ marginTop: '32px', marginBottom: '16px', color: '#2B5E9C', fontSize: '20px', fontWeight: 600 }}>Comprehensive Guides</h4>
        <p style={{ marginBottom: '32px', lineHeight: 1.8, color: '#4A4A4A', fontSize: '16px' }}>
          "How to Write a Winning K-12 School Safety Grant Application" outlines how to clearly define the safety challenge, build a structured project proposal, and craft measurable objectives.
        </p>
        <h4 style={{ marginTop: '32px', marginBottom: '16px', color: '#2B5E9C', fontSize: '20px', fontWeight: 600 }}>Best-Practice Articles</h4>
        <p style={{ marginBottom: '32px', lineHeight: 1.8, color: '#4A4A4A', fontSize: '16px' }}>
          "Three Best Practices for Writing Your Next K-12 School-Safety Grant" gives focused advice on persuasive writing for safety applications.
        </p>
        <h4 style={{ marginTop: '32px', marginBottom: '16px', color: '#2B5E9C', fontSize: '20px', fontWeight: 600 }}>Training & How-To Resources</h4>
        <p style={{ marginBottom: '0', lineHeight: 1.8, color: '#4A4A4A', fontSize: '16px' }}>
          The South Carolina Department of Education Grant Training Resources page offers videos, webinars & proposal-development support.
        </p>
      </div>
    },
    {
      icon: <Shield style={{ width: '28px', height: '28px', color: '#2B5E9C' }} />,
      title: "Equipment Grants",
      summary: "Funding for tangible safety equipment, surveillance systems & emergency tools.",
      content: <div>
        <h3 style={{ marginBottom: '24px', color: '#1E1E1E', fontSize: '28px', fontWeight: 700 }}>Equipment Grants</h3>
        <p style={{ marginBottom: '32px', lineHeight: 1.8, color: '#4A4A4A', fontSize: '16px' }}>
          Dedicated grants exist specifically for equipment upgrades: access control, cameras, panic buttons, integrated alert systems. Example: grants cited for rural communication upgrades.
        </p>
        <h4 style={{ marginTop: '32px', marginBottom: '16px', color: '#2B5E9C', fontSize: '20px', fontWeight: 600 }}>When Applying</h4>
        <p style={{ marginBottom: '32px', lineHeight: 1.8, color: '#4A4A4A', fontSize: '16px' }}>
          Define the equipment, integration with existing systems, training/maintenance plan, outcome measures (reduced response time, improved monitoring).
        </p>
        <h4 style={{ marginTop: '32px', marginBottom: '16px', color: '#2B5E9C', fontSize: '20px', fontWeight: 600 }}>Tip</h4>
        <p style={{ marginBottom: '0', lineHeight: 1.8, color: '#4A4A4A', fontSize: '16px' }}>
          Link the equipment financing to your technology offer (for example how QuickSecure's smart-lockdown system aligns).
        </p>
      </div>
    },
    {
      icon: <FileText style={{ width: '28px', height: '28px', color: '#2B5E9C' }} />,
      title: "Grant Success Stories",
      summary: "Schools that secured funding for safety upgrades.",
      content: <div>
        <h3 style={{ marginBottom: '24px', color: '#1E1E1E', fontSize: '28px', fontWeight: 700 }}>Grant Success Stories</h3>
        <p style={{ marginBottom: '32px', lineHeight: 1.8, color: '#4A4A4A', fontSize: '16px' }}>
          Daviess County Public Schools (KY) received nearly $500,000 from the U.S. Department of Justice's School Violence Prevention Program to enhance campus communication systems, add bus navigation tablets and install new video cameras.
        </p>
        <p style={{ marginBottom: '32px', lineHeight: 1.8, color: '#4A4A4A', fontSize: '16px' }}>
          Across North Carolina, more than $74.1 million in safety grants were awarded to 200+ districts and charters for safety equipment, training and crisis-services.
        </p>
        <p style={{ marginBottom: '0', lineHeight: 1.8, color: '#4A4A4A', fontSize: '16px' }}>
          The New Jersey Office of Homeland Security & Preparedness "Grant Success Stories" page lists many examples (e.g., CCTV installations, physical-site security enhancements) that show how districts leveraged funds.
        </p>
      </div>
    }
  ];

  return (
    <div className="grants-grid" style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(2, 1fr)',
      gap: '24px'
    }}>
      {grants.map((grant, index) => (
        <DocCard 
          key={index} 
          icon={grant.icon}
          title={grant.title}
          summary={grant.summary}
          onOpen={() => onOpenViewer(grant.title, grant.content)}
        />
      ))}
    </div>
  );
}

// FAQ TAB - Accordion with Custom Styling
function FAQTab() {
  const faqs = [
    {
      question: "How long does implementation take?",
      answer: "Most schools complete implementation within 2-4 weeks. Our team provides dedicated onboarding support, including data migration, staff training, and initial drill setup. Enterprise districts typically complete rollout across all campuses within 6-8 weeks."
    },
    {
      question: "Is QuickSecure compliant with state and federal regulations?",
      answer: "Yes. QuickSecure meets all FERPA requirements for student data protection and complies with state-specific safety drill mandates in all 50 states. Our platform generates compliance-ready documentation automatically and maintains SOC 2 Type II certification."
    },
    {
      question: "Can we integrate with our existing systems?",
      answer: "Absolutely. QuickSecure offers REST API access and pre-built integrations with popular SIS platforms (PowerSchool, Infinite Campus, Skyward), identity providers (Google Workspace, Microsoft Azure AD), and communication tools (SchoolMessenger, ParentSquare)."
    },
    {
      question: "What training is included?",
      answer: "All plans include unlimited online training resources, video tutorials, and documentation. Professional and Enterprise plans add live onboarding sessions, dedicated success managers, and annual on-site training workshops for administrators and staff."
    },
    {
      question: "How does pricing work for multi-site districts?",
      answer: "District pricing is based on total student enrollment across all campuses, with volume discounts starting at 5,000 students. Contact our sales team for a customized quote that includes your specific feature requirements and support needs."
    },
    {
      question: "What happens to our data if we cancel?",
      answer: "You retain full ownership of all data. Upon cancellation, we provide complete data export in standard formats (CSV, JSON) and maintain read-only access for 90 days. All data is permanently deleted from our systems after 12 months per our data retention policy."
    },
    {
      question: "Do you offer 24/7 support?",
      answer: "Yes. Professional and Enterprise plans include 24/7 phone and chat support with guaranteed response times. All plans include email support with responses within 24 hours during business days."
    },
    {
      question: "Can parents access the system?",
      answer: "Yes. Parents can receive emergency notifications, view drill schedules, and access visitor check-in confirmations through our parent portal. District administrators control what information is shared with parents."
    }
  ];

  return (
    <div style={{ maxWidth: '900px' }}>
      <Accordion type="single" collapsible className="w-full">
        {faqs.map((faq, index) => (
          <AccordionItem 
            key={index} 
            value={`item-${index}`} 
            className="faq-accordion-item"
            style={{
              borderBottom: '1px solid rgba(0, 0, 0, 0.1)',
              borderRadius: '8px',
              marginBottom: '8px',
              padding: '8px 16px'
            }}
          >
            <AccordionTrigger 
              className="faq-accordion-trigger"
              style={{
                textAlign: 'left',
                paddingRight: '16px'
              }}
            >
              <strong>{faq.question}</strong>
            </AccordionTrigger>
            <AccordionContent 
              className="faq-accordion-content qs-text-body-medium"
              style={{
                paddingTop: '12px',
                paddingRight: '48px'
              }}
            >
              {faq.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}

