/**
 * QS/DocCard - Documentation card component
 * Icon top, doc title, short description, link icon
 * Clicking opens resource viewer modal
 * 
 * Uses QS design tokens for consistency
 */

import { ReactNode } from "react";
import { ArrowRight } from "lucide-react";

interface DocCardProps {
  icon: ReactNode;
  title: string;
  summary: string;
  onOpen?: () => void;
  href?: string;
  className?: string;
}

export function DocCard({ 
  icon, 
  title, 
  summary, 
  onOpen,
  href = "#",
  className = "" 
}: DocCardProps) {
  const handleClick = (e: React.MouseEvent) => {
    if (onOpen) {
      e.preventDefault();
      onOpen();
    }
  };

  return (
    <a
      href={href}
      onClick={handleClick}
      className={className}
      style={{
        display: 'block',
        padding: '32px',
        backgroundColor: 'var(--qs-surface)',
        border: '1px solid #EAEAEA',
        borderRadius: '12px',
        textDecoration: 'none',
        transition: 'all 200ms ease',
        boxShadow: '0 2px 4px 0 rgba(0, 0, 0, 0.04)',
        cursor: 'pointer'
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'translateY(-4px)';
        e.currentTarget.style.boxShadow = 'var(--qs-shadow-2)';
        e.currentTarget.style.borderColor = '#006E6E';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'translateY(0)';
        e.currentTarget.style.boxShadow = '0 2px 4px 0 rgba(0, 0, 0, 0.04)';
        e.currentTarget.style.borderColor = '#EAEAEA';
      }}
    >
      {/* Icon */}
      <div style={{ color: '#006E6E', marginBottom: '16px' }}>
        {icon}
      </div>

      {/* Title */}
      <h3 style={{
        fontFamily: 'Inter, sans-serif',
        fontWeight: 600,
        fontSize: '18px',
        lineHeight: 1.4,
        color: '#1E1E1E',
        marginBottom: '12px'
      }}>
        {title}
      </h3>

      {/* Summary */}
      <p style={{
        fontFamily: 'Inter, sans-serif',
        fontWeight: 400,
        fontSize: '14px',
        lineHeight: 1.6,
        color: '#4A4A4A',
        marginBottom: '16px'
      }}>
        {summary}
      </p>

      {/* Link */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        gap: '8px',
        color: '#006E6E',
        fontFamily: 'Inter, sans-serif',
        fontWeight: 500,
        fontSize: '14px'
      }}>
        Read More
        <ArrowRight style={{ width: '16px', height: '16px' }} />
      </div>
    </a>
  );
}
