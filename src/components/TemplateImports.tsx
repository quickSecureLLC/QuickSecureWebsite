/**
 * Template Imports for Live Website
 * Exact templates extracted from 03 Templates section
 * Used in 00 Live Website with proper naming and spacing
 * 
 * Template Structure:
 * - Each template wrapped with scroll-reveal animation class
 * - Data attribute for section identification (section-home, section-product, section-solutions, etc.)
 * - Content centered within max-w-[1200px] container
 * - Original typography, spacing, and motion tokens preserved
 * - 96px vertical spacing between templates (handled in LiveWebsite component)
 * 
 * On-Scroll Reveal Animation: fade 0→1, translateY 20→0, 300ms cubic-bezier(0.4, 0, 0.2, 1)
 */

// Removed useContactReveal - contact now uses dedicated /contact page route
import { 
  Zap, 
  Eye, 
  Gauge, 
  Shield, 
  AlertTriangle, 
  Ticket, 
  Smartphone, 
  Brain, 
  UserCheck,
  CheckCircle2,
  Star,
  FileText,
  Download,
  ArrowRight,
  Users,
  TrendingUp,
  Clock,
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Twitter,
  Youtube,
  Lock,
  Mic,
  Network,
  Radio,
  Map,
  PhoneCall,
  LockKeyhole
} from "lucide-react";
import { PlaceholderImage } from "./PlaceholderImage";

/* ========================================
   QS FOOTER - CANONICAL COMPONENT
   ======================================== */

// Re-export canonical QS/Footer component (full implementation in /components/qs/Footer.tsx)
export { Footer } from './qs/Footer';

/* ========================================
   HOME TEMPLATE
   ======================================== */

export function HomeTemplate() {
  return (
    <div className="scroll-reveal" data-section="section-home">
      <style>{`
        @media (max-width: 1024px) {
          .hero-grid {
            grid-template-columns: 1fr !important;
            gap: 48px !important;
          }
          .hero-image {
            order: -1;
          }
        }
      `}</style>
      {/* Hero Section - Two Column Layout: Text Left, Image Right */}
      <section style={{ 
        minHeight: 'calc(100vh - 160px)', 
        padding: '120px 80px',
        backgroundColor: '#FFFFFF',
        display: 'flex',
        alignItems: 'center',
        width: '100%'
      }}>
        <div className="hero-grid" style={{ 
          maxWidth: '1600px', 
          width: '100%', 
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '80px',
          alignItems: 'center'
        }}>
          {/* Left Column - Text Content */}
          <div style={{ 
            textAlign: 'left',
            display: 'flex',
            flexDirection: 'column',
            gap: '32px'
          }}>
            <h1 style={{ 
              marginBottom: 0,
              fontSize: '64px',
              fontWeight: 300,
              lineHeight: '1.2',
              letterSpacing: '-1.92px',
              color: '#1E1E1E'
            }}>
              Redefining school safety operations.
            </h1>
            <p style={{ 
              fontSize: '18px',
              lineHeight: '1.8',
              color: '#4A4A4A',
              margin: 0
            }}>
              QuickSecure is the unified operating system for drills, alerts, ticketing, analytics, and campus coordination.
            </p>
            <div style={{ marginTop: '8px' }}>
              <button
                className="qs-cta-button-enhanced"
                onClick={() => { window.location.hash = '/contact'; }}
                style={{
                  height: '48px',
                  paddingLeft: '32px',
                  paddingRight: '32px',
                  borderRadius: '8px',
                  backgroundColor: 'var(--qs-brand-accent)',
                  color: '#FFFFFF',
                  border: 'none',
                  cursor: 'pointer',
                  fontSize: '16px',
                  fontWeight: 600,
                  transition: 'all 250ms cubic-bezier(0.4, 0, 0.2, 1)',
                  position: 'relative',
                  overflow: 'hidden',
                  boxShadow: '0 2px 8px rgba(43, 94, 156, 0.2)',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-2px) scale(1.02)';
                  e.currentTarget.style.boxShadow = '0 12px 24px rgba(43, 94, 156, 0.35), 0 0 20px rgba(43, 94, 156, 0.2)';
                  e.currentTarget.style.backgroundColor = 'var(--qs-brand-accent-80)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0) scale(1)';
                  e.currentTarget.style.boxShadow = '0 2px 8px rgba(43, 94, 156, 0.2)';
                  e.currentTarget.style.backgroundColor = 'var(--qs-brand-accent)';
                }}
              >
                Talk to Us
              </button>
            </div>
          </div>

          {/* Right Column - Image */}
          <div className="hero-image" style={{ 
            width: '100%',
            height: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'flex-start',
            backgroundColor: '#FFFFFF'
          }}>
            <img
              src="/media/QuickSecure-Hero-1.png"
              alt="QuickSecure Platform Dashboard"
              style={{
                width: '100%',
                height: 'auto',
                maxHeight: '600px',
                objectFit: 'contain'
              }}
            />
          </div>
        </div>
      </section>
    </div>
  );
}

/* ========================================
   PRODUCT TEMPLATE
   ======================================== */

type ProductNavigationHandler = (product: string) => void;

export function ProductTemplate({ onNavigate }: { onNavigate?: ProductNavigationHandler } = {}) {
  return (
    <div className="scroll-reveal" data-section="section-product">
      <section style={{ padding: '80px 80px', backgroundColor: '#FFFFFF' }}>
        {/* 
          ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          TEMP LINK AUDIT — Complete Safety Platform Prototype Destinations
          ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          Page: "04 Pages" → Folder: "Products"
          
          Tile Name                         │ onClick Handler        │ Target Frame (04 Pages/Products)
          ──────────────────────────────────┼─���─────────────────────┼─────────────────────────────────────
          QuickSecure Nexus                 │ onNavigate('nexus')   │ Product — QuickSecure Nexus
          Drill Management                  │ onNavigate('drill')   │ Product — Drill Management
          Ticketing System                  │ onNavigate('ticketing')│ Product — Ticketing System
          Panic Button App                  │ onNavigate('panic')   │ Product — Panic Button App
          AI-Powered Insights               │ onNavigate('insights')│ Product — AI-Powered Insights
          Visitor Management                │ onNavigate('visitor') │ Product — Visitor Management
          Manual Lock                       │ onNavigate('lock')    │ Product — Manual Lock
          AI-Powered Gunshot Detection      │ onNavigate('gunshot') │ Product — AI-Powered Gunshot Detection
          Mass Notifications                │ onNavigate('notifications')│ Product — Mass Notifications
          Floor Plan View                   │ onNavigate('floorplan')│ Product — Floor Plan View
          AI Anonymous Tip Line             │ onNavigate('tipline') │ Product — AI Anonymous Tip Line
          Electronic Lock                   │ onNavigate('electroniclock')│ Product — Electronic Lock
          
          Prototype Interaction Settings:
          • Trigger: On Click (applies to BOTH full card overlay AND "View More →" button)
          • Action: Navigate To → Product — {Name} frame
          • Transition: Smart Animate
          • Duration: 300ms
          • Easing: cubic-bezier(0.4, 0, 0.2, 1)
          • Preserve scroll position: OFF
          
          ✅ All 12 product tiles accounted for
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

          <div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
            style={{ 
              gap: '32px',
              maxWidth: '100%'
            }}
          >
            {/* QuickSecure Nexus Module */}
            <a 
              href="#/product/nexus"
              className="no-underline-hover"
              style={{
                backgroundColor: '#FFFFFF',
                padding: '32px',
                borderRadius: '12px',
                border: '1px solid rgba(0, 0, 0, 0.1)',
                boxShadow: '0 4px 12px 0 rgba(0, 0, 0, 0.08)',
                cursor: 'pointer',
                position: 'relative',
                display: 'flex',
                flexDirection: 'column',
                textDecoration: 'none',
                color: 'inherit',
                transition: 'box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1)'
              }}
              onMouseEnter={(e) => e.currentTarget.style.boxShadow = '0 6px 12px 0 rgba(0, 0, 0, 0.25)'}
              onMouseLeave={(e) => e.currentTarget.style.boxShadow = '0 4px 12px 0 rgba(0, 0, 0, 0.08)'}
            >
              <div style={{ 
                width: '56px', 
                height: '56px', 
                backgroundColor: 'var(--qs-brand-accent-20)', 
                borderRadius: '10px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '20px'
              }}>
                <Network style={{ width: '28px', height: '28px', color: 'var(--qs-brand-accent)' }} />
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
                    color: 'var(--qs-text-secondary)',
                    backgroundColor: 'rgba(43, 94, 156, 0.06)',
                    padding: '6px 12px',
                    borderRadius: '999px',
                    border: '1px solid rgba(43, 94, 156, 0.12)',
                    transition: 'background-color 150ms ease, border-color 150ms ease'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = 'rgba(43, 94, 156, 0.1)';
                    e.currentTarget.style.borderColor = 'rgba(43, 94, 156, 0.2)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = 'rgba(43, 94, 156, 0.06)';
                    e.currentTarget.style.borderColor = 'rgba(43, 94, 156, 0.12)';
                  }}
                >
                  Central Dashboard
                </span>
                <span 
                  className="tag-pill"
                  style={{
                    fontSize: '14px',
                    fontWeight: 500,
                    color: 'var(--qs-text-secondary)',
                    backgroundColor: 'rgba(43, 94, 156, 0.06)',
                    padding: '6px 12px',
                    borderRadius: '999px',
                    border: '1px solid rgba(43, 94, 156, 0.12)',
                    transition: 'background-color 150ms ease, border-color 150ms ease'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = 'rgba(43, 94, 156, 0.1)';
                    e.currentTarget.style.borderColor = 'rgba(43, 94, 156, 0.2)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = 'rgba(43, 94, 156, 0.06)';
                    e.currentTarget.style.borderColor = 'rgba(43, 94, 156, 0.12)';
                  }}
                >
                  Unified Control
                </span>
              </div>
              {/* Spacer - pushes button to bottom */}
              <div style={{ flexGrow: 1 }} />
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
                    color: 'var(--qs-brand-accent)',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '4px'
                  }}
                >
                  View More <ArrowRight style={{ width: '16px', height: '16px' }} />
                </span>
              </div>
            </a>

            {/* Drill Management Module */}
            <a 
              href="#/product/drill"
              className="no-underline-hover"
              style={{
                backgroundColor: '#FFFFFF',
                padding: '32px',
                borderRadius: '12px',
                border: '1px solid rgba(0, 0, 0, 0.1)',
                boxShadow: '0 4px 12px 0 rgba(0, 0, 0, 0.08)',
                cursor: 'pointer',
                position: 'relative',
                display: 'flex',
                flexDirection: 'column',
                textDecoration: 'none',
                color: 'inherit',
                transition: 'box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1)'
              }}
              onMouseEnter={(e) => e.currentTarget.style.boxShadow = '0 6px 12px 0 rgba(0, 0, 0, 0.25)'}
              onMouseLeave={(e) => e.currentTarget.style.boxShadow = '0 4px 12px 0 rgba(0, 0, 0, 0.08)'}
            >
              <div style={{ 
                width: '56px', 
                height: '56px', 
                backgroundColor: 'var(--qs-brand-accent-20)', 
                borderRadius: '10px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '20px'
              }}>
                <Shield style={{ width: '28px', height: '28px', color: 'var(--qs-brand-accent)' }} />
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
                    color: 'var(--qs-text-secondary)',
                    backgroundColor: 'rgba(43, 94, 156, 0.06)',
                    padding: '6px 12px',
                    borderRadius: '999px',
                    border: '1px solid rgba(43, 94, 156, 0.12)',
                    transition: 'background-color 150ms ease, border-color 150ms ease'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = 'rgba(43, 94, 156, 0.1)';
                    e.currentTarget.style.borderColor = 'rgba(43, 94, 156, 0.2)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = 'rgba(43, 94, 156, 0.06)';
                    e.currentTarget.style.borderColor = 'rgba(43, 94, 156, 0.12)';
                  }}
                >
                  Automated Scheduling
                </span>
                <span 
                  className="tag-pill"
                  style={{
                    fontSize: '14px',
                    fontWeight: 500,
                    color: 'var(--qs-text-secondary)',
                    backgroundColor: 'rgba(43, 94, 156, 0.06)',
                    padding: '6px 12px',
                    borderRadius: '999px',
                    border: '1px solid rgba(43, 94, 156, 0.12)',
                    transition: 'background-color 150ms ease, border-color 150ms ease'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = 'rgba(43, 94, 156, 0.1)';
                    e.currentTarget.style.borderColor = 'rgba(43, 94, 156, 0.2)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = 'rgba(43, 94, 156, 0.06)';
                    e.currentTarget.style.borderColor = 'rgba(43, 94, 156, 0.12)';
                  }}
                >
                  Documentation
                </span>
              </div>
              {/* Spacer - pushes button to bottom */}
              <div style={{ flexGrow: 1 }} />
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
                    color: 'var(--qs-brand-accent)',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '4px'
                  }}
                >
                  View More <ArrowRight style={{ width: '16px', height: '16px' }} />
                </span>
              </div>
            </a>

            {/* Ticketing Module */}
            <a 
              href="#/product/ticketing"
              className="no-underline-hover"
              style={{
                backgroundColor: '#FFFFFF',
                padding: '32px',
                borderRadius: '12px',
                border: '1px solid rgba(0, 0, 0, 0.1)',
                boxShadow: '0 4px 12px 0 rgba(0, 0, 0, 0.08)',
                cursor: 'pointer',
                position: 'relative',
                display: 'flex',
                flexDirection: 'column',
                textDecoration: 'none',
                color: 'inherit',
                transition: 'box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1)'
              }}
              onMouseEnter={(e) => e.currentTarget.style.boxShadow = '0 6px 12px 0 rgba(0, 0, 0, 0.25)'}
              onMouseLeave={(e) => e.currentTarget.style.boxShadow = '0 4px 12px 0 rgba(0, 0, 0, 0.08)'}
            >
              <div style={{ 
                width: '56px', 
                height: '56px', 
                backgroundColor: 'var(--qs-brand-accent-20)', 
                borderRadius: '10px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '20px'
              }}>
                <Ticket style={{ width: '28px', height: '28px', color: 'var(--qs-brand-accent)' }} />
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
                    color: 'var(--qs-text-secondary)',
                    backgroundColor: 'rgba(43, 94, 156, 0.06)',
                    padding: '6px 12px',
                    borderRadius: '999px',
                    border: '1px solid rgba(43, 94, 156, 0.12)',
                    transition: 'background-color 150ms ease, border-color 150ms ease'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = 'rgba(43, 94, 156, 0.1)';
                    e.currentTarget.style.borderColor = 'rgba(43, 94, 156, 0.2)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = 'rgba(43, 94, 156, 0.06)';
                    e.currentTarget.style.borderColor = 'rgba(43, 94, 156, 0.12)';
                  }}
                >
                  Priority Routing
                </span>
                <span 
                  className="tag-pill"
                  style={{
                    fontSize: '14px',
                    fontWeight: 500,
                    color: 'var(--qs-text-secondary)',
                    backgroundColor: 'rgba(43, 94, 156, 0.06)',
                    padding: '6px 12px',
                    borderRadius: '999px',
                    border: '1px solid rgba(43, 94, 156, 0.12)',
                    transition: 'background-color 150ms ease, border-color 150ms ease'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = 'rgba(43, 94, 156, 0.1)';
                    e.currentTarget.style.borderColor = 'rgba(43, 94, 156, 0.2)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = 'rgba(43, 94, 156, 0.06)';
                    e.currentTarget.style.borderColor = 'rgba(43, 94, 156, 0.12)';
                  }}
                >
                  Auto-assign
                </span>
              </div>
              {/* Spacer - pushes button to bottom */}
              <div style={{ flexGrow: 1 }} />
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
                    color: 'var(--qs-brand-accent)',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '4px'
                  }}
                >
                  View More <ArrowRight style={{ width: '16px', height: '16px' }} />
                </span>
              </div>
            </a>

            {/* Panic Button Module */}
            <a 
              href="#/product/panic"
              className="no-underline-hover"
              style={{
                backgroundColor: '#FFFFFF',
                padding: '32px',
                borderRadius: '12px',
                border: '1px solid rgba(0, 0, 0, 0.1)',
                boxShadow: '0 4px 12px 0 rgba(0, 0, 0, 0.08)',
                cursor: 'pointer',
                position: 'relative',
                display: 'flex',
                flexDirection: 'column',
                textDecoration: 'none',
                color: 'inherit',
                transition: 'box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1)'
              }}
              onMouseEnter={(e) => e.currentTarget.style.boxShadow = '0 6px 12px 0 rgba(0, 0, 0, 0.25)'}
              onMouseLeave={(e) => e.currentTarget.style.boxShadow = '0 4px 12px 0 rgba(0, 0, 0, 0.08)'}
            >
              <div style={{ 
                width: '56px', 
                height: '56px', 
                backgroundColor: 'var(--qs-brand-accent-20)', 
                borderRadius: '10px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '20px'
              }}>
                <Smartphone style={{ width: '28px', height: '28px', color: 'var(--qs-brand-accent)' }} />
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
                    color: 'var(--qs-text-secondary)',
                    backgroundColor: 'rgba(43, 94, 156, 0.06)',
                    padding: '6px 12px',
                    borderRadius: '999px',
                    border: '1px solid rgba(43, 94, 156, 0.12)',
                    transition: 'background-color 150ms ease, border-color 150ms ease'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = 'rgba(43, 94, 156, 0.1)';
                    e.currentTarget.style.borderColor = 'rgba(43, 94, 156, 0.2)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = 'rgba(43, 94, 156, 0.06)';
                    e.currentTarget.style.borderColor = 'rgba(43, 94, 156, 0.12)';
                  }}
                >
                  GPS Location
                </span>
                <span 
                  className="tag-pill"
                  style={{
                    fontSize: '14px',
                    fontWeight: 500,
                    color: 'var(--qs-text-secondary)',
                    backgroundColor: 'rgba(43, 94, 156, 0.06)',
                    padding: '6px 12px',
                    borderRadius: '999px',
                    border: '1px solid rgba(43, 94, 156, 0.12)',
                    transition: 'background-color 150ms ease, border-color 150ms ease'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = 'rgba(43, 94, 156, 0.1)';
                    e.currentTarget.style.borderColor = 'rgba(43, 94, 156, 0.2)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = 'rgba(43, 94, 156, 0.06)';
                    e.currentTarget.style.borderColor = 'rgba(43, 94, 156, 0.12)';
                  }}
                >
                  911 Integration
                </span>
              </div>
              {/* Spacer - pushes button to bottom */}
              <div style={{ flexGrow: 1 }} />
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
                    color: 'var(--qs-brand-accent)',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '4px'
                  }}
                >
                  View More <ArrowRight style={{ width: '16px', height: '16px' }} />
                </span>
              </div>
            </a>

            {/* Visitor Management Module */}
            <div 
              style={{
                backgroundColor: '#FFFFFF',
                padding: '32px',
                borderRadius: '12px',
                border: '1px solid rgba(0, 0, 0, 0.1)',
                boxShadow: '0 4px 12px 0 rgba(0, 0, 0, 0.08)',
                position: 'relative',
                display: 'flex',
                flexDirection: 'column',
                transition: 'box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1)'
              }}
              onMouseEnter={(e) => e.currentTarget.style.boxShadow = '0 6px 12px 0 rgba(0, 0, 0, 0.25)'}
              onMouseLeave={(e) => e.currentTarget.style.boxShadow = '0 4px 12px 0 rgba(0, 0, 0, 0.08)'}
            >
              <div style={{ 
                width: '56px', 
                height: '56px', 
                backgroundColor: 'var(--qs-brand-accent-20)', 
                borderRadius: '10px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '20px'
              }}>
                <UserCheck style={{ width: '28px', height: '28px', color: 'var(--qs-brand-accent)' }} />
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
                    color: 'var(--qs-text-secondary)',
                    backgroundColor: 'rgba(43, 94, 156, 0.06)',
                    padding: '6px 12px',
                    borderRadius: '999px',
                    border: '1px solid rgba(43, 94, 156, 0.12)',
                    transition: 'background-color 150ms ease, border-color 150ms ease'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = 'rgba(43, 94, 156, 0.1)';
                    e.currentTarget.style.borderColor = 'rgba(43, 94, 156, 0.2)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = 'rgba(43, 94, 156, 0.06)';
                    e.currentTarget.style.borderColor = 'rgba(43, 94, 156, 0.12)';
                  }}
                >
                  Background Check
                </span>
                <span 
                  className="tag-pill"
                  style={{
                    fontSize: '14px',
                    fontWeight: 500,
                    color: 'var(--qs-text-secondary)',
                    backgroundColor: 'rgba(43, 94, 156, 0.06)',
                    padding: '6px 12px',
                    borderRadius: '999px',
                    border: '1px solid rgba(43, 94, 156, 0.12)',
                    transition: 'background-color 150ms ease, border-color 150ms ease'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = 'rgba(43, 94, 156, 0.1)';
                    e.currentTarget.style.borderColor = 'rgba(43, 94, 156, 0.2)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = 'rgba(43, 94, 156, 0.06)';
                    e.currentTarget.style.borderColor = 'rgba(43, 94, 156, 0.12)';
                  }}
                >
                  Digital Badges
                </span>
              </div>
              {/* Spacer - pushes button to bottom */}
              <div style={{ flexGrow: 1 }} />
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
                    color: 'var(--qs-brand-accent)',
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
            {/* AI-Powered Gunshot Detection Module */}
            <div 
              style={{
                backgroundColor: '#FFFFFF',
                padding: '32px',
                borderRadius: '12px',
                border: '1px solid rgba(0, 0, 0, 0.1)',
                boxShadow: '0 4px 12px 0 rgba(0, 0, 0, 0.08)',
                position: 'relative',
                display: 'flex',
                flexDirection: 'column',
                transition: 'box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1)'
              }}
              onMouseEnter={(e) => e.currentTarget.style.boxShadow = '0 6px 12px 0 rgba(0, 0, 0, 0.25)'}
              onMouseLeave={(e) => e.currentTarget.style.boxShadow = '0 4px 12px 0 rgba(0, 0, 0, 0.08)'}
            >
                <div style={{ 
                  width: '56px', 
                  height: '56px', 
                  backgroundColor: 'var(--qs-brand-accent-20)', 
                  borderRadius: '10px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '20px'
                }}>
                  <Mic style={{ width: '28px', height: '28px', color: 'var(--qs-brand-accent)' }} />
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
                      color: 'var(--qs-text-secondary)',
                      backgroundColor: 'rgba(43, 94, 156, 0.06)',
                      padding: '6px 12px',
                      borderRadius: '999px',
                      border: '1px solid rgba(43, 94, 156, 0.12)',
                      transition: 'background-color 150ms ease, border-color 150ms ease'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = 'rgba(43, 94, 156, 0.1)';
                      e.currentTarget.style.borderColor = 'rgba(43, 94, 156, 0.2)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = 'rgba(43, 94, 156, 0.06)';
                      e.currentTarget.style.borderColor = 'rgba(43, 94, 156, 0.12)';
                    }}
                  >
                    AI Detection
                  </span>
                  <span 
                    className="tag-pill"
                    style={{
                      fontSize: '14px',
                      fontWeight: 500,
                      color: 'var(--qs-text-secondary)',
                      backgroundColor: 'rgba(43, 94, 156, 0.06)',
                      padding: '6px 12px',
                      borderRadius: '999px',
                      border: '1px solid rgba(43, 94, 156, 0.12)',
                      transition: 'background-color 150ms ease, border-color 150ms ease'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = 'rgba(43, 94, 156, 0.1)';
                      e.currentTarget.style.borderColor = 'rgba(43, 94, 156, 0.2)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = 'rgba(43, 94, 156, 0.06)';
                      e.currentTarget.style.borderColor = 'rgba(43, 94, 156, 0.12)';
                    }}
                  >
                    Instant Response
                  </span>
                </div>
                {/* Spacer - pushes button to bottom */}
                <div style={{ flexGrow: 1 }} />
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
                      color: 'var(--qs-brand-accent)',
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

            {/* Mass Notifications Module */}
            <div 
              style={{
                backgroundColor: '#FFFFFF',
                padding: '32px',
                borderRadius: '12px',
                border: '1px solid rgba(0, 0, 0, 0.1)',
                boxShadow: '0 4px 12px 0 rgba(0, 0, 0, 0.08)',
                position: 'relative',
                display: 'flex',
                flexDirection: 'column',
                transition: 'box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1)'
              }}
              onMouseEnter={(e) => e.currentTarget.style.boxShadow = '0 6px 12px 0 rgba(0, 0, 0, 0.25)'}
              onMouseLeave={(e) => e.currentTarget.style.boxShadow = '0 4px 12px 0 rgba(0, 0, 0, 0.08)'}
            >
                <div style={{ 
                  width: '56px', 
                  height: '56px', 
                  backgroundColor: 'var(--qs-brand-accent-20)', 
                  borderRadius: '10px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '20px'
                }}>
                  <Radio style={{ width: '28px', height: '28px', color: 'var(--qs-brand-accent)' }} />
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
                      color: 'var(--qs-text-secondary)',
                      backgroundColor: 'rgba(43, 94, 156, 0.06)',
                      padding: '6px 12px',
                      borderRadius: '999px',
                      border: '1px solid rgba(43, 94, 156, 0.12)',
                      transition: 'background-color 150ms ease, border-color 150ms ease'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = 'rgba(43, 94, 156, 0.1)';
                      e.currentTarget.style.borderColor = 'rgba(43, 94, 156, 0.2)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = 'rgba(43, 94, 156, 0.06)';
                      e.currentTarget.style.borderColor = 'rgba(43, 94, 156, 0.12)';
                    }}
                  >
                    Multi-Channel
                  </span>
                  <span 
                    className="tag-pill"
                    style={{
                      fontSize: '14px',
                      fontWeight: 500,
                      color: 'var(--qs-text-secondary)',
                      backgroundColor: 'rgba(43, 94, 156, 0.06)',
                      padding: '6px 12px',
                      borderRadius: '999px',
                      border: '1px solid rgba(43, 94, 156, 0.12)',
                      transition: 'background-color 150ms ease, border-color 150ms ease'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = 'rgba(43, 94, 156, 0.1)';
                      e.currentTarget.style.borderColor = 'rgba(43, 94, 156, 0.2)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = 'rgba(43, 94, 156, 0.06)';
                      e.currentTarget.style.borderColor = 'rgba(43, 94, 156, 0.12)';
                    }}
                  >
                    Real-Time Broadcast
                  </span>
                </div>
                {/* Spacer - pushes button to bottom */}
                <div style={{ flexGrow: 1 }} />
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
                      color: 'var(--qs-brand-accent)',
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

            {/* AI Anonymous Tip Line Module */}
            <div 
              style={{
                backgroundColor: '#FFFFFF',
                padding: '32px',
                borderRadius: '12px',
                border: '1px solid rgba(0, 0, 0, 0.1)',
                boxShadow: '0 4px 12px 0 rgba(0, 0, 0, 0.08)',
                position: 'relative',
                display: 'flex',
                flexDirection: 'column',
                transition: 'box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1)'
              }}
              onMouseEnter={(e) => e.currentTarget.style.boxShadow = '0 6px 12px 0 rgba(0, 0, 0, 0.25)'}
              onMouseLeave={(e) => e.currentTarget.style.boxShadow = '0 4px 12px 0 rgba(0, 0, 0, 0.08)'}
            >
                <div style={{ 
                  width: '56px', 
                  height: '56px', 
                  backgroundColor: 'var(--qs-brand-accent-20)', 
                  borderRadius: '10px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '20px'
                }}>
                  <PhoneCall style={{ width: '28px', height: '28px', color: 'var(--qs-brand-accent)' }} />
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
                      color: 'var(--qs-text-secondary)',
                      backgroundColor: 'rgba(43, 94, 156, 0.06)',
                      padding: '6px 12px',
                      borderRadius: '999px',
                      border: '1px solid rgba(43, 94, 156, 0.12)',
                      transition: 'background-color 150ms ease, border-color 150ms ease'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = 'rgba(43, 94, 156, 0.1)';
                      e.currentTarget.style.borderColor = 'rgba(43, 94, 156, 0.2)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = 'rgba(43, 94, 156, 0.06)';
                      e.currentTarget.style.borderColor = 'rgba(43, 94, 156, 0.12)';
                    }}
                  >
                    AI Filtering
                  </span>
                  <span 
                    className="tag-pill"
                    style={{
                      fontSize: '14px',
                      fontWeight: 500,
                      color: 'var(--qs-text-secondary)',
                      backgroundColor: 'rgba(43, 94, 156, 0.06)',
                      padding: '6px 12px',
                      borderRadius: '999px',
                      border: '1px solid rgba(43, 94, 156, 0.12)',
                      transition: 'background-color 150ms ease, border-color 150ms ease'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = 'rgba(43, 94, 156, 0.1)';
                      e.currentTarget.style.borderColor = 'rgba(43, 94, 156, 0.2)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = 'rgba(43, 94, 156, 0.06)';
                      e.currentTarget.style.borderColor = 'rgba(43, 94, 156, 0.12)';
                    }}
                  >
                    Threat Detection
                  </span>
                </div>
                {/* Spacer - pushes button to bottom */}
                <div style={{ flexGrow: 1 }} />
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
                      color: 'var(--qs-brand-accent)',
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

            {/* Retrofit Lock Module */}
            <div 
              style={{
                backgroundColor: '#FFFFFF',
                padding: '32px',
                borderRadius: '12px',
                border: '1px solid rgba(0, 0, 0, 0.1)',
                boxShadow: '0 4px 12px 0 rgba(0, 0, 0, 0.08)',
                position: 'relative',
                display: 'flex',
                flexDirection: 'column',
                transition: 'box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1)'
              }}
              onMouseEnter={(e) => e.currentTarget.style.boxShadow = '0 6px 12px 0 rgba(0, 0, 0, 0.25)'}
              onMouseLeave={(e) => e.currentTarget.style.boxShadow = '0 4px 12px 0 rgba(0, 0, 0, 0.08)'}
            >
                <div style={{ 
                  width: '56px', 
                  height: '56px', 
                  backgroundColor: 'var(--qs-brand-accent-20)', 
                  borderRadius: '10px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '20px'
                }}>
                  <LockKeyhole style={{ width: '28px', height: '28px', color: 'var(--qs-brand-accent)' }} />
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
                  Modern retrofit solutions for manual and electronic door locks.
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
                      color: 'var(--qs-text-secondary)',
                      backgroundColor: 'rgba(43, 94, 156, 0.06)',
                      padding: '6px 12px',
                      borderRadius: '999px',
                      border: '1px solid rgba(43, 94, 156, 0.12)',
                      transition: 'background-color 150ms ease, border-color 150ms ease'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = 'rgba(43, 94, 156, 0.1)';
                      e.currentTarget.style.borderColor = 'rgba(43, 94, 156, 0.2)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = 'rgba(43, 94, 156, 0.06)';
                      e.currentTarget.style.borderColor = 'rgba(43, 94, 156, 0.12)';
                    }}
                  >
                    Smart Access
                  </span>
                  <span 
                    className="tag-pill"
                    style={{
                      fontSize: '14px',
                      fontWeight: 500,
                      color: 'var(--qs-text-secondary)',
                      backgroundColor: 'rgba(43, 94, 156, 0.06)',
                      padding: '6px 12px',
                      borderRadius: '999px',
                      border: '1px solid rgba(43, 94, 156, 0.12)',
                      transition: 'background-color 150ms ease, border-color 150ms ease'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = 'rgba(43, 94, 156, 0.1)';
                      e.currentTarget.style.borderColor = 'rgba(43, 94, 156, 0.2)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = 'rgba(43, 94, 156, 0.06)';
                      e.currentTarget.style.borderColor = 'rgba(43, 94, 156, 0.12)';
                    }}
                  >
                    Remote Control
                  </span>
                </div>
                {/* Spacer - pushes button to bottom */}
                <div style={{ flexGrow: 1 }} />
                <div style={{ 
                  display: 'flex', 
                  justifyContent: 'flex-end', 
                  marginTop: '24px'
                }}>
                  <button 
                    onClick={(e) => { e.stopPropagation(); onNavigate?.('electroniclock'); }}
                    style={{
                      fontFamily: 'Inter, sans-serif',
                      fontSize: '16px',
                      fontWeight: 500,
                      color: 'var(--qs-brand-accent)',
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

/* ========================================
   SOLUTIONS TEMPLATE
   ======================================== */

export function SolutionsTemplate() {
  return (
    <div className="scroll-reveal" data-section="section-solutions">
      <section style={{ padding: '80px 80px', backgroundColor: '#F7F9FA' }}>
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
              Built for Every Role
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
              QuickSecure adapts to your district's unique needs with role-specific dashboards and workflows.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* District Leaders */}
            <div 
              className="interactive-hover"
              style={{
                backgroundColor: '#FFFFFF',
                padding: '40px 32px',
                borderRadius: '16px',
                boxShadow: '0 4px 12px rgba(0, 0, 0, 0.05)',
                cursor: 'pointer',
                textAlign: 'center'
              }}
            >
              <div style={{ 
                width: '80px', 
                height: '80px', 
                backgroundColor: 'var(--qs-brand-accent)', 
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 24px'
              }}>
                <Shield style={{ width: '40px', height: '40px', color: '#FFFFFF' }} />
              </div>
              <h3 style={{ 
                fontFamily: 'Inter, sans-serif',
                fontWeight: 600,
                fontSize: '24px',
                color: '#1E1E1E',
                marginBottom: '12px'
              }}>
                District Leaders
              </h3>
              <p style={{ 
                fontFamily: 'Inter, sans-serif',
                fontWeight: 400,
                fontSize: '16px',
                lineHeight: 1.6,
                color: '#4A4A4A',
                marginBottom: '0'
              }}>
                Unified dashboard with district-wide visibility, compliance tracking, and strategic insights for decision-making.
              </p>
            </div>

            {/* Building Principals */}
            <div 
              className="interactive-hover"
              style={{
                backgroundColor: '#FFFFFF',
                padding: '40px 32px',
                borderRadius: '16px',
                boxShadow: '0 4px 12px rgba(0, 0, 0, 0.05)',
                cursor: 'pointer',
                textAlign: 'center'
              }}
            >
              <div style={{ 
                width: '80px', 
                height: '80px', 
                backgroundColor: 'var(--qs-brand-accent)', 
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 24px'
              }}>
                <UserCheck style={{ width: '40px', height: '40px', color: '#FFFFFF' }} />
              </div>
              <h3 style={{ 
                fontFamily: 'Inter, sans-serif',
                fontWeight: 600,
                fontSize: '24px',
                color: '#1E1E1E',
                marginBottom: '12px'
              }}>
                Building Principals
              </h3>
              <p style={{ 
                fontFamily: 'Inter, sans-serif',
                fontWeight: 400,
                fontSize: '16px',
                lineHeight: 1.6,
                color: '#4A4A4A',
                marginBottom: '0'
              }}>
                Streamlined drill scheduling, incident management, and communication tools for efficient campus operations.
              </p>
            </div>

            {/* Safety Staff */}
            <div 
              className="interactive-hover"
              style={{
                backgroundColor: '#FFFFFF',
                padding: '40px 32px',
                borderRadius: '16px',
                boxShadow: '0 4px 12px rgba(0, 0, 0, 0.05)',
                cursor: 'pointer',
                textAlign: 'center'
              }}
            >
              <div style={{ 
                width: '80px', 
                height: '80px', 
                backgroundColor: 'var(--qs-brand-accent)', 
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 24px'
              }}>
                <AlertTriangle style={{ width: '40px', height: '40px', color: '#FFFFFF' }} />
              </div>
              <h3 style={{ 
                fontFamily: 'Inter, sans-serif',
                fontWeight: 600,
                fontSize: '24px',
                color: '#1E1E1E',
                marginBottom: '12px'
              }}>
                Safety Staff
              </h3>
              <p style={{ 
                fontFamily: 'Inter, sans-serif',
                fontWeight: 400,
                fontSize: '16px',
                lineHeight: 1.6,
                color: '#4A4A4A',
                marginBottom: '0'
              }}>
                Rapid incident response, real-time coordination, and detailed documentation for comprehensive safety coverage.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

/* ========================================
   PRICING TEMPLATE
   ======================================== */

export function PricingTemplate() {
  return (
    <div className="scroll-reveal" data-section="section-pricing">
      <section style={{ padding: '80px 80px', backgroundColor: '#FFFFFF' }}>
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
              Simple, Transparent Pricing
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
              Choose the plan that's right for your district
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Essential Plan */}
            <div 
              className="pricing-tier-card"
              style={{
                backgroundColor: '#FFFFFF',
                padding: '40px 32px',
                borderRadius: '16px',
                border: '2px solid rgba(0, 0, 0, 0.1)',
                position: 'relative'
              }}
            >
              <div style={{ marginBottom: '24px' }}>
                <h3 style={{ 
                  fontFamily: 'Inter, sans-serif',
                  fontWeight: 600,
                  fontSize: '24px',
                  color: '#1E1E1E',
                  marginBottom: '8px'
                }}>
                  Essential
                </h3>
                <p style={{ 
                  fontFamily: 'Inter, sans-serif',
                  fontWeight: 400,
                  fontSize: '14px',
                  color: '#4A4A4A'
                }}>
                  For small schools
                </p>
              </div>
              <div style={{ marginBottom: '32px' }}>
                <div style={{ display: 'flex', alignItems: 'baseline', gap: '8px' }}>
                  <span style={{ 
                    fontFamily: 'Inter, sans-serif',
                    fontWeight: 700,
                    fontSize: '48px',
                    color: '#1E1E1E'
                  }}>
                    $299
                  </span>
                  <span style={{ 
                    fontFamily: 'Inter, sans-serif',
                    fontWeight: 400,
                    fontSize: '16px',
                    color: '#4A4A4A'
                  }}>
                    /month
                  </span>
                </div>
              </div>
              <button
                className="interactive-hover"
                style={{
                  width: '100%',
                  height: '48px',
                  borderRadius: '8px',
                  backgroundColor: '#FFFFFF',
                  color: 'var(--qs-brand-accent)',
                  fontFamily: 'Inter, sans-serif',
                  fontWeight: 600,
                  fontSize: '16px',
                  border: '2px solid var(--qs-brand-accent)',
                  cursor: 'pointer',
                  marginBottom: '32px'
                }}
              >
                Start Free Trial
              </button>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                {[
                  'Up to 5 buildings',
                  'Drill management',
                  'Emergency alerts',
                  'Basic ticketing',
                  'Email support',
                  'Mobile app access'
                ].map((feature, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                    <CheckCircle2 style={{ width: '20px', height: '20px', color: 'var(--qs-brand-accent)', flexShrink: 0, marginTop: '2px' }} />
                    <span style={{ 
                      fontFamily: 'Inter, sans-serif',
                      fontWeight: 400,
                      fontSize: '14px',
                      color: '#4A4A4A',
                      lineHeight: 1.5
                    }}>
                      {feature}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Professional Plan - Most Popular */}
            <div 
              className="pricing-tier-card"
              style={{
                backgroundColor: '#FFFFFF',
                padding: '40px 32px',
                borderRadius: '16px',
                border: '2px solid var(--qs-brand-accent)',
                position: 'relative',
                boxShadow: '0 8px 24px rgba(43, 94, 156, 0.12)'
              }}
            >
              <div 
                style={{
                  position: 'absolute',
                  top: '-12px',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  backgroundColor: 'var(--qs-brand-accent)',
                  color: '#FFFFFF',
                  padding: '4px 16px',
                  borderRadius: '12px',
                  fontFamily: 'Inter, sans-serif',
                  fontWeight: 600,
                  fontSize: '12px',
                  letterSpacing: '0.5px'
                }}
              >
                MOST POPULAR
              </div>
              <div style={{ marginBottom: '24px' }}>
                <h3 style={{ 
                  fontFamily: 'Inter, sans-serif',
                  fontWeight: 600,
                  fontSize: '24px',
                  color: '#1E1E1E',
                  marginBottom: '8px'
                }}>
                  Professional
                </h3>
                <p style={{ 
                  fontFamily: 'Inter, sans-serif',
                  fontWeight: 400,
                  fontSize: '14px',
                  color: '#4A4A4A'
                }}>
                  For growing districts
                </p>
              </div>
              <div style={{ marginBottom: '32px' }}>
                <div style={{ display: 'flex', alignItems: 'baseline', gap: '8px' }}>
                  <span style={{ 
                    fontFamily: 'Inter, sans-serif',
                    fontWeight: 700,
                    fontSize: '48px',
                    color: '#1E1E1E'
                  }}>
                    $799
                  </span>
                  <span style={{ 
                    fontFamily: 'Inter, sans-serif',
                    fontWeight: 400,
                    fontSize: '16px',
                    color: '#4A4A4A'
                  }}>
                    /month
                  </span>
                </div>
              </div>
              <button
                className="interactive-hover"
                style={{
                  width: '100%',
                  height: '48px',
                  borderRadius: '8px',
                  backgroundColor: 'var(--qs-brand-accent)',
                  color: '#FFFFFF',
                  fontFamily: 'Inter, sans-serif',
                  fontWeight: 600,
                  fontSize: '16px',
                  border: 'none',
                  cursor: 'pointer',
                  marginBottom: '32px'
                }}
              >
                Start Free Trial
              </button>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                {[
                  'Up to 20 buildings',
                  'All Essential features',
                  'Visitor management',
                  'AI-powered insights',
                  'Priority support',
                  'Advanced reporting',
                  'API access',
                  'Custom workflows'
                ].map((feature, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                    <CheckCircle2 style={{ width: '20px', height: '20px', color: 'var(--qs-brand-accent)', flexShrink: 0, marginTop: '2px' }} />
                    <span style={{ 
                      fontFamily: 'Inter, sans-serif',
                      fontWeight: 400,
                      fontSize: '14px',
                      color: '#4A4A4A',
                      lineHeight: 1.5
                    }}>
                      {feature}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Enterprise Plan */}
            <div 
              className="pricing-tier-card"
              style={{
                backgroundColor: '#FFFFFF',
                padding: '40px 32px',
                borderRadius: '16px',
                border: '2px solid rgba(0, 0, 0, 0.1)',
                position: 'relative'
              }}
            >
              <div style={{ marginBottom: '24px' }}>
                <h3 style={{ 
                  fontFamily: 'Inter, sans-serif',
                  fontWeight: 600,
                  fontSize: '24px',
                  color: '#1E1E1E',
                  marginBottom: '8px'
                }}>
                  Enterprise
                </h3>
                <p style={{ 
                  fontFamily: 'Inter, sans-serif',
                  fontWeight: 400,
                  fontSize: '14px',
                  color: '#4A4A4A'
                }}>
                  For large districts
                </p>
              </div>
              <div style={{ marginBottom: '32px' }}>
                <div style={{ display: 'flex', alignItems: 'baseline', gap: '8px' }}>
                  <span style={{ 
                    fontFamily: 'Inter, sans-serif',
                    fontWeight: 700,
                    fontSize: '48px',
                    color: '#1E1E1E'
                  }}>
                    Custom
                  </span>
                </div>
              </div>
              <button
                className="interactive-hover"
                onClick={() => { window.location.hash = '/contact'; }}
                style={{
                  width: '100%',
                  height: '48px',
                  borderRadius: '8px',
                  backgroundColor: '#FFFFFF',
                  color: 'var(--qs-brand-accent)',
                  fontFamily: 'Inter, sans-serif',
                  fontWeight: 600,
                  fontSize: '16px',
                  border: '2px solid var(--qs-brand-accent)',
                  cursor: 'pointer',
                  marginBottom: '32px'
                }}
              >
                Contact Sales
              </button>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                {[
                  'Unlimited buildings',
                  'All Professional features',
                  'Dedicated account manager',
                  '24/7 phone support',
                  'Custom integrations',
                  'On-site training',
                  'SLA guarantees',
                  'White-label options'
                ].map((feature, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                    <CheckCircle2 style={{ width: '20px', height: '20px', color: 'var(--qs-brand-accent)', flexShrink: 0, marginTop: '2px' }} />
                    <span style={{ 
                      fontFamily: 'Inter, sans-serif',
                      fontWeight: 400,
                      fontSize: '14px',
                      color: '#4A4A4A',
                      lineHeight: 1.5
                    }}>
                      {feature}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

/* ========================================
   RESOURCES TEMPLATE
   ======================================== */

export function ResourcesTemplate() {
  return (
    <div className="scroll-reveal" data-section="section-resources">
      <section style={{ padding: '80px 80px', backgroundColor: '#F7F9FA' }}>
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
              Resources & Insights
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
              Expert guidance and best practices for school safety excellence
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {/* Featured Article */}
            <div 
              className="article-card"
              style={{
                backgroundColor: '#FFFFFF',
                padding: '32px',
                borderRadius: '16px',
                border: '1px solid rgba(0, 0, 0, 0.1)',
                cursor: 'pointer',
                gridColumn: 'span 2'
              }}
            >
              <div style={{
                display: 'inline-block',
                backgroundColor: 'rgba(43, 94, 156, 0.1)',
                color: 'var(--qs-brand-accent)',
                padding: '4px 12px',
                borderRadius: '12px',
                fontFamily: 'Inter, sans-serif',
                fontWeight: 600,
                fontSize: '12px',
                marginBottom: '16px',
                letterSpacing: '0.5px'
              }}>
                FEATURED GUIDE
              </div>
              <h3 style={{ 
                fontFamily: 'Inter, sans-serif',
                fontWeight: 600,
                fontSize: '32px',
                color: '#1E1E1E',
                marginBottom: '16px',
                lineHeight: 1.3
              }}>
                The Complete Guide to Modern School Safety Operations
              </h3>
              <p style={{ 
                fontFamily: 'Inter, sans-serif',
                fontWeight: 400,
                fontSize: '16px',
                lineHeight: 1.6,
                color: '#4A4A4A',
                marginBottom: '24px'
              }}>
                A comprehensive 50-page guide covering everything from drill management to emergency response protocols. Learn how leading districts are transforming their safety operations.
              </p>
              <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
                <button
                  className="interactive-hover download-button"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    height: '44px',
                    padding: '0 24px',
                    borderRadius: '8px',
                    backgroundColor: 'var(--qs-brand-accent)',
                    color: '#FFFFFF',
                    fontFamily: 'Inter, sans-serif',
                    fontWeight: 600,
                    fontSize: '16px',
                    border: 'none',
                    cursor: 'pointer'
                  }}
                >
                  <Download className="w-5 h-5 download-icon-rotate" />
                  Download Guide
                </button>
                <span style={{
                  fontFamily: 'Inter, sans-serif',
                  fontWeight: 400,
                  fontSize: '14px',
                  color: '#4A4A4A'
                }}>
                  PDF • 4.2 MB • 50 pages
                </span>
              </div>
            </div>

            {/* Case Study 1 */}
            <div 
              className="article-card"
              style={{
                backgroundColor: '#FFFFFF',
                padding: '32px',
                borderRadius: '16px',
                border: '1px solid rgba(0, 0, 0, 0.1)',
                cursor: 'pointer'
              }}
            >
              <FileText style={{ width: '32px', height: '32px', color: 'var(--qs-brand-accent)', marginBottom: '16px' }} />
              <h4 style={{ 
                fontFamily: 'Inter, sans-serif',
                fontWeight: 600,
                fontSize: '20px',
                color: '#1E1E1E',
                marginBottom: '12px',
                lineHeight: 1.4
              }}>
                How Lincoln District Reduced Response Time by 60%
              </h4>
              <p style={{ 
                fontFamily: 'Inter, sans-serif',
                fontWeight: 400,
                fontSize: '14px',
                lineHeight: 1.6,
                color: '#4A4A4A',
                marginBottom: '16px'
              }}>
                Case study on implementing unified emergency protocols across 45 schools.
              </p>
              <div style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                fontFamily: 'Inter, sans-serif',
                fontWeight: 600,
                fontSize: '14px',
                color: 'var(--qs-brand-accent)'
              }}>
                Read Case Study <ArrowRight style={{ width: '16px', height: '16px' }} />
              </div>
            </div>

            {/* Whitepaper */}
            <div 
              className="article-card"
              style={{
                backgroundColor: '#FFFFFF',
                padding: '32px',
                borderRadius: '16px',
                border: '1px solid rgba(0, 0, 0, 0.1)',
                cursor: 'pointer'
              }}
            >
              <FileText style={{ width: '32px', height: '32px', color: 'var(--qs-brand-accent)', marginBottom: '16px' }} />
              <h4 style={{ 
                fontFamily: 'Inter, sans-serif',
                fontWeight: 600,
                fontSize: '20px',
                color: '#1E1E1E',
                marginBottom: '12px',
                lineHeight: 1.4
              }}>
                2025 School Safety Technology Report
              </h4>
              <p style={{ 
                fontFamily: 'Inter, sans-serif',
                fontWeight: 400,
                fontSize: '14px',
                lineHeight: 1.6,
                color: '#4A4A4A',
                marginBottom: '16px'
              }}>
                Industry trends and benchmarks from 500+ school districts nationwide.
              </p>
              <div style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                fontFamily: 'Inter, sans-serif',
                fontWeight: 600,
                fontSize: '14px',
                color: 'var(--qs-brand-accent)'
              }}>
                Download Report <ArrowRight style={{ width: '16px', height: '16px' }} />
              </div>
            </div>

            {/* Webinar */}
            <div 
              className="article-card"
              style={{
                backgroundColor: '#FFFFFF',
                padding: '32px',
                borderRadius: '16px',
                border: '1px solid rgba(0, 0, 0, 0.1)',
                cursor: 'pointer'
              }}
            >
              <FileText style={{ width: '32px', height: '32px', color: 'var(--qs-brand-accent)', marginBottom: '16px' }} />
              <h4 style={{ 
                fontFamily: 'Inter, sans-serif',
                fontWeight: 600,
                fontSize: '20px',
                color: '#1E1E1E',
                marginBottom: '12px',
                lineHeight: 1.4
              }}>
                Best Practices for Drill Management
              </h4>
              <p style={{ 
                fontFamily: 'Inter, sans-serif',
                fontWeight: 400,
                fontSize: '14px',
                lineHeight: 1.6,
                color: '#4A4A4A',
                marginBottom: '16px'
              }}>
                On-demand webinar with safety coordinators from top-rated districts.
              </p>
              <div style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                fontFamily: 'Inter, sans-serif',
                fontWeight: 600,
                fontSize: '14px',
                color: 'var(--qs-brand-accent)'
              }}>
                Watch Webinar <ArrowRight style={{ width: '16px', height: '16px' }} />
              </div>
            </div>

            {/* Blog Post */}
            <div 
              className="article-card"
              style={{
                backgroundColor: '#FFFFFF',
                padding: '32px',
                borderRadius: '16px',
                border: '1px solid rgba(0, 0, 0, 0.1)',
                cursor: 'pointer'
              }}
            >
              <FileText style={{ width: '32px', height: '32px', color: 'var(--qs-brand-accent)', marginBottom: '16px' }} />
              <h4 style={{ 
                fontFamily: 'Inter, sans-serif',
                fontWeight: 600,
                fontSize: '20px',
                color: '#1E1E1E',
                marginBottom: '12px',
                lineHeight: 1.4
              }}>
                AI in School Safety: What You Need to Know
              </h4>
              <p style={{ 
                fontFamily: 'Inter, sans-serif',
                fontWeight: 400,
                fontSize: '14px',
                lineHeight: 1.6,
                color: '#4A4A4A',
                marginBottom: '16px'
              }}>
                Understanding predictive analytics and pattern detection for proactive safety.
              </p>
              <div style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                fontFamily: 'Inter, sans-serif',
                fontWeight: 600,
                fontSize: '14px',
                color: 'var(--qs-brand-accent)'
              }}>
                Read Article <ArrowRight style={{ width: '16px', height: '16px' }} />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

/* ========================================
   ABOUT TEMPLATE
   ======================================== */

export function AboutTemplate() {
  return (
    <div className="scroll-reveal" data-section="section-about">
      <section style={{ padding: '80px 80px', backgroundColor: '#FFFFFF' }}>
        <div className="max-w-[1200px] mx-auto">
          {/* Values Section */}
          <div style={{ 
            backgroundColor: '#F7F9FA', 
            padding: '56px 48px',
            borderRadius: '16px'
          }}>
            <h3 style={{ 
              fontFamily: 'Inter, sans-serif',
              fontWeight: 600,
              fontSize: '32px',
              color: '#1E1E1E',
              marginBottom: '32px',
              textAlign: 'center'
            }}>
              Our Core Values
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  title: 'Safety First',
                  description: 'Every feature we build starts with one question: Does this make schools safer? We never compromise on security or reliability.'
                },
                {
                  title: 'Simplicity',
                  description: 'Complex problems don\'t require complex solutions. We believe powerful safety tools should be intuitive and easy to use.'
                },
                {
                  title: 'Partnership',
                  description: 'We\'re not just a vendor—we\'re your partner in safety. Our team is dedicated to your success, every step of the way.'
                },
                {
                  title: 'Innovation',
                  description: 'We continuously invest in research and development to stay ahead of emerging threats and safety challenges.'
                }
              ].map((value, i) => (
                <div key={i} style={{ display: 'flex', gap: '16px' }}>
                  <div style={{ 
                    width: '8px', 
                    height: '8px', 
                    backgroundColor: 'var(--qs-brand-accent)', 
                    borderRadius: '50%',
                    marginTop: '8px',
                    flexShrink: 0
                  }}></div>
                  <div>
                    <h4 style={{ 
                      fontFamily: 'Inter, sans-serif',
                      fontWeight: 600,
                      fontSize: '20px',
                      color: '#1E1E1E',
                      marginBottom: '8px'
                    }}>
                      {value.title}
                    </h4>
                    <p style={{ 
                      fontFamily: 'Inter, sans-serif',
                      fontWeight: 400,
                      fontSize: '16px',
                      lineHeight: 1.6,
                      color: '#4A4A4A'
                    }}>
                      {value.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

/* ========================================
   CONTACT TEMPLATE
   ======================================== */

export function ContactTemplate() {
  return (
    <div data-section="section-contact">
      <section id="section-contact" style={{ padding: '80px 80px', backgroundColor: '#F7F9FA' }}>
        <div className="max-w-[1200px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            {/* Left Column - Contact Form */}
            <div>
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
                Get in Touch
              </h2>
              <p 
                style={{ 
                  fontFamily: 'Inter, sans-serif',
                  fontWeight: 400,
                  fontSize: '18px',
                  lineHeight: 1.6,
                  color: '#4A4A4A',
                  marginBottom: '32px'
                }}
              >
                Ready to make your district safer? Our team is here to help you get started.
              </p>

              <form style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                {/* Name Field */}
                <div>
                  <label 
                    style={{ 
                      fontFamily: 'Inter, sans-serif',
                      fontWeight: 600,
                      fontSize: '14px',
                      color: '#1E1E1E',
                      marginBottom: '8px',
                      display: 'block'
                    }}
                  >
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    className="contact-form-field"
                    style={{
                      width: '100%',
                      height: '48px',
                      padding: '0 16px',
                      fontFamily: 'Inter, sans-serif',
                      fontSize: '16px',
                      backgroundColor: '#FFFFFF',
                      borderRadius: '8px'
                    }}
                    placeholder="John Smith"
                  />
                </div>

                {/* Email Field */}
                <div>
                  <label 
                    style={{ 
                      fontFamily: 'Inter, sans-serif',
                      fontWeight: 600,
                      fontSize: '14px',
                      color: '#1E1E1E',
                      marginBottom: '8px',
                      display: 'block'
                    }}
                  >
                    Work Email *
                  </label>
                  <input
                    type="email"
                    required
                    className="contact-form-field"
                    style={{
                      width: '100%',
                      height: '48px',
                      padding: '0 16px',
                      fontFamily: 'Inter, sans-serif',
                      fontSize: '16px',
                      backgroundColor: '#FFFFFF',
                      borderRadius: '8px'
                    }}
                    placeholder="john.smith@district.edu"
                  />
                </div>

                {/* District Field */}
                <div>
                  <label 
                    style={{ 
                      fontFamily: 'Inter, sans-serif',
                      fontWeight: 600,
                      fontSize: '14px',
                      color: '#1E1E1E',
                      marginBottom: '8px',
                      display: 'block'
                    }}
                  >
                    District Name *
                  </label>
                  <input
                    type="text"
                    required
                    className="contact-form-field"
                    style={{
                      width: '100%',
                      height: '48px',
                      padding: '0 16px',
                      fontFamily: 'Inter, sans-serif',
                      fontSize: '16px',
                      backgroundColor: '#FFFFFF',
                      borderRadius: '8px'
                    }}
                    placeholder="Lincoln Unified School District"
                  />
                </div>

                {/* Message Field */}
                <div>
                  <label 
                    style={{ 
                      fontFamily: 'Inter, sans-serif',
                      fontWeight: 600,
                      fontSize: '14px',
                      color: '#1E1E1E',
                      marginBottom: '8px',
                      display: 'block'
                    }}
                  >
                    Message
                  </label>
                  <textarea
                    className="contact-form-field"
                    rows={4}
                    style={{
                      width: '100%',
                      padding: '12px 16px',
                      fontFamily: 'Inter, sans-serif',
                      fontSize: '16px',
                      backgroundColor: '#FFFFFF',
                      borderRadius: '8px',
                      resize: 'vertical'
                    }}
                    placeholder="Tell us about your safety needs..."
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="interactive-hover"
                  style={{
                    width: '100%',
                    height: '56px',
                    borderRadius: '8px',
                    backgroundColor: 'var(--qs-brand-accent)',
                    color: '#FFFFFF',
                    fontFamily: 'Inter, sans-serif',
                    fontWeight: 600,
                    fontSize: '16px',
                    border: 'none',
                    cursor: 'pointer',
                    marginTop: '8px'
                  }}
                >
                  Send Message
                </button>
              </form>
            </div>

            {/* Right Column - Contact Info */}
            <div>
              <div 
                style={{
                  backgroundColor: '#FFFFFF',
                  padding: '40px',
                  borderRadius: '16px',
                  height: '100%'
                }}
              >
                <h3 
                  style={{ 
                    fontFamily: 'Inter, sans-serif',
                    fontWeight: 600,
                    fontSize: '24px',
                    color: '#1E1E1E',
                    marginBottom: '24px'
                  }}
                >
                  Contact Information
                </h3>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', marginBottom: '40px' }}>
                  {/* Email */}
                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: '16px' }}>
                    <div style={{ 
                      width: '48px', 
                      height: '48px', 
                      backgroundColor: 'rgba(43, 94, 156, 0.1)', 
                      borderRadius: '50%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0
                    }}>
                      <Mail style={{ width: '24px', height: '24px', color: 'var(--qs-brand-accent)' }} />
                    </div>
                    <div>
                      <div style={{ 
                        fontFamily: 'Inter, sans-serif',
                        fontWeight: 600,
                        fontSize: '16px',
                        color: '#1E1E1E',
                        marginBottom: '4px'
                      }}>
                        Email
                      </div>
                      <a 
                        href="mailto:sales@quicksecure.com"
                        style={{ 
                          fontFamily: 'Inter, sans-serif',
                          fontWeight: 400,
                          fontSize: '16px',
                          color: 'var(--qs-brand-accent)',
                          textDecoration: 'none'
                        }}
                      >
                        sales@quicksecure.com
                      </a>
                    </div>
                  </div>

                  {/* Phone */}
                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: '16px' }}>
                    <div style={{ 
                      width: '48px', 
                      height: '48px', 
                      backgroundColor: 'rgba(43, 94, 156, 0.1)', 
                      borderRadius: '50%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0
                    }}>
                      <Phone style={{ width: '24px', height: '24px', color: 'var(--qs-brand-accent)' }} />
                    </div>
                    <div>
                      <div style={{ 
                        fontFamily: 'Inter, sans-serif',
                        fontWeight: 600,
                        fontSize: '16px',
                        color: '#1E1E1E',
                        marginBottom: '4px'
                      }}>
                        Phone
                      </div>
                      <a 
                        href="tel:+18005551234"
                        style={{ 
                          fontFamily: 'Inter, sans-serif',
                          fontWeight: 400,
                          fontSize: '16px',
                          color: 'var(--qs-brand-accent)',
                          textDecoration: 'none'
                        }}
                      >
                        1-800-555-1234
                      </a>
                    </div>
                  </div>

                  {/* Office */}
                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: '16px' }}>
                    <div style={{ 
                      width: '48px', 
                      height: '48px', 
                      backgroundColor: 'rgba(43, 94, 156, 0.1)', 
                      borderRadius: '50%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0
                    }}>
                      <MapPin style={{ width: '24px', height: '24px', color: 'var(--qs-brand-accent)' }} />
                    </div>
                    <div>
                      <div style={{ 
                        fontFamily: 'Inter, sans-serif',
                        fontWeight: 600,
                        fontSize: '16px',
                        color: '#1E1E1E',
                        marginBottom: '4px'
                      }}>
                        Office
                      </div>
                      <div style={{ 
                        fontFamily: 'Inter, sans-serif',
                        fontWeight: 400,
                        fontSize: '16px',
                        color: '#4A4A4A',
                        lineHeight: 1.6
                      }}>
                        123 Education Way<br />
                        Suite 400<br />
                        Austin, TX 78701
                      </div>
                    </div>
                  </div>
                </div>

                {/* Business Hours */}
                <div 
                  style={{
                    padding: '20px',
                    backgroundColor: '#F7F9FA',
                    borderRadius: '12px'
                  }}
                >
                  <div style={{ 
                    fontFamily: 'Inter, sans-serif',
                    fontWeight: 600,
                    fontSize: '14px',
                    color: '#1E1E1E',
                    marginBottom: '8px'
                  }}>
                    Business Hours
                  </div>
                  <div style={{ 
                    fontFamily: 'Inter, sans-serif',
                    fontWeight: 400,
                    fontSize: '14px',
                    color: '#4A4A4A',
                    lineHeight: 1.6
                  }}>
                    Monday - Friday: 8:00 AM - 6:00 PM CST<br />
                    Saturday - Sunday: Closed
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

/* ========================================
   FOOTER COMPONENT
   ======================================== */

// Removed old Footer function - now using canonical QS/Footer
// See export at top of file: export { Footer } from './qs/Footer';
