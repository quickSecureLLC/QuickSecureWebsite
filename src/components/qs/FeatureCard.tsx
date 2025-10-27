/**
 * QS/FeatureCard - Horizontal feature card component
 * 96×96 icon slot left, title + body text right
 * Hover: subtle lift + shadow-2
 * 
 * Uses QS design tokens for consistency
 */

import { ReactNode } from "react";

interface FeatureCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  className?: string;
}

export function FeatureCard({ icon, title, description, className = "" }: FeatureCardProps) {
  return (
    <div
      className={className}
      style={{
        display: 'flex',
        alignItems: 'flex-start',
        gap: '32px',
        padding: '40px',
        backgroundColor: 'var(--qs-surface)',
        border: '1px solid #EAEAEA',
        borderRadius: '16px',
        boxShadow: '0 2px 8px 0 rgba(0, 0, 0, 0.04)',
        transition: 'transform 200ms ease, box-shadow 200ms ease',
        cursor: 'default'
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'translateY(-4px)';
        e.currentTarget.style.boxShadow = 'var(--qs-shadow-2)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'translateY(0)';
        e.currentTarget.style.boxShadow = '0 2px 8px 0 rgba(0, 0, 0, 0.04)';
      }}
    >
      {/* Icon Container - 96×96 */}
      <div style={{
        width: '96px',
        height: '96px',
        minWidth: '96px',
        backgroundColor: '#EAF7F7',
        borderRadius: '16px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexShrink: 0
      }}>
        {icon}
      </div>

      {/* Content */}
      <div style={{ flex: 1 }}>
        <h3 style={{
          fontFamily: 'Inter, sans-serif',
          fontWeight: 600,
          fontSize: '24px',
          lineHeight: 1.4,
          color: '#1E1E1E',
          marginBottom: '12px'
        }}>
          {title}
        </h3>
        <p style={{
          fontFamily: 'Inter, sans-serif',
          fontWeight: 400,
          fontSize: '16px',
          lineHeight: 1.6,
          color: '#4A4A4A',
          margin: 0
        }}>
          {description}
        </p>
      </div>
    </div>
  );
}
