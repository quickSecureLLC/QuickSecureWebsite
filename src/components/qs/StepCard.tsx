/**
 * QS/StepCard - Step card for "How QuickSecure Works" timeline
 * Number badge top, title, short paragraph
 * Interactive with active state support
 * 
 * Uses QS design tokens for consistency
 */

import { ReactNode } from "react";

interface StepCardProps {
  number: number;
  icon: ReactNode;
  title: string;
  description: string;
  isActive?: boolean;
  onClick?: () => void;
  className?: string;
}

export function StepCard({ 
  number, 
  icon, 
  title, 
  description, 
  isActive = false, 
  onClick,
  className = "" 
}: StepCardProps) {
  return (
    <div
      onClick={onClick}
      className={className}
      style={{
        minWidth: '320px',
        padding: '32px',
        backgroundColor: isActive ? '#EAF7F7' : 'var(--qs-surface)',
        border: isActive ? '2px solid #006E6E' : '1px solid #EAEAEA',
        borderRadius: '16px',
        boxShadow: isActive ? '0 4px 12px 0 rgba(0, 110, 110, 0.12)' : '0 2px 8px 0 rgba(0, 0, 0, 0.04)',
        cursor: onClick ? 'pointer' : 'default',
        transition: 'all 200ms ease',
        scrollSnapAlign: 'start'
      }}
      onMouseEnter={(e) => {
        if (!isActive && onClick) {
          e.currentTarget.style.borderColor = '#006E6E';
        }
      }}
      onMouseLeave={(e) => {
        if (!isActive && onClick) {
          e.currentTarget.style.borderColor = '#EAEAEA';
        }
      }}
    >
      {/* Number Badge */}
      <div style={{
        width: '48px',
        height: '48px',
        backgroundColor: isActive ? '#006E6E' : '#F7F9FA',
        color: isActive ? '#FFFFFF' : '#006E6E',
        borderRadius: '50%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontFamily: 'Inter, sans-serif',
        fontWeight: 700,
        fontSize: '24px',
        marginBottom: '16px'
      }}>
        {number}
      </div>

      {/* Icon */}
      <div style={{
        color: isActive ? '#006E6E' : '#4A4A4A',
        marginBottom: '16px'
      }}>
        {icon}
      </div>

      {/* Title */}
      <h4 style={{
        fontFamily: 'Inter, sans-serif',
        fontWeight: 600,
        fontSize: '20px',
        lineHeight: 1.4,
        color: '#1E1E1E',
        marginBottom: '12px'
      }}>
        {title}
      </h4>

      {/* Description */}
      <p style={{
        fontFamily: 'Inter, sans-serif',
        fontWeight: 400,
        fontSize: '14px',
        lineHeight: 1.6,
        color: '#4A4A4A',
        margin: 0
      }}>
        {description}
      </p>
    </div>
  );
}
