/**
 * QS/CaseStudyCard - Case study card component
 * 16:9 image background, overlay text
 * Hover: dim + lift effect
 * 
 * Uses QS design tokens for consistency
 */

import { ReactNode } from "react";
import { ArrowRight } from "lucide-react";

interface CaseStudyCardProps {
  title: string;
  subtitle: string;
  description: string;
  imageUrl?: string;
  icon?: ReactNode;
  onOpen?: () => void;
  href?: string;
  className?: string;
}

export function CaseStudyCard({ 
  title, 
  subtitle, 
  description, 
  imageUrl,
  icon,
  onOpen,
  href = "#",
  className = "" 
}: CaseStudyCardProps) {
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
        display: 'flex',
        height: '240px',
        backgroundColor: '#F7F9FA',
        borderRadius: '16px',
        overflow: 'hidden',
        cursor: 'pointer',
        transition: 'transform 200ms ease, box-shadow 200ms ease',
        boxShadow: '0 2px 8px 0 rgba(0, 0, 0, 0.04)',
        textDecoration: 'none'
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
      {/* Image Side - 16:9 aspect ratio */}
      <div style={{
        width: '40%',
        background: imageUrl 
          ? `url(${imageUrl}) center/cover` 
          : 'linear-gradient(135deg, #006E6E 0%, #33D9D9 100%)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: '#FFFFFF',
        position: 'relative',
        transition: 'filter 200ms ease'
      }}
      onMouseEnter={(e) => {
        if (imageUrl) {
          e.currentTarget.style.filter = 'brightness(0.85)';
        }
      }}
      onMouseLeave={(e) => {
        if (imageUrl) {
          e.currentTarget.style.filter = 'brightness(1)';
        }
      }}
      >
        {icon && (
          <div style={{ width: '80px', height: '80px' }}>
            {icon}
          </div>
        )}
      </div>

      {/* Text Side */}
      <div style={{
        flex: 1,
        padding: '40px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        backgroundColor: 'var(--qs-surface)'
      }}>
        {/* Subtitle */}
        <div style={{
          fontFamily: 'Inter, sans-serif',
          fontWeight: 500,
          fontSize: '14px',
          color: '#006E6E',
          marginBottom: '8px',
          textTransform: 'uppercase',
          letterSpacing: '0.5px'
        }}>
          {subtitle}
        </div>

        {/* Title */}
        <h3 style={{
          fontFamily: 'Inter, sans-serif',
          fontWeight: 700,
          fontSize: '28px',
          lineHeight: 1.3,
          color: '#1E1E1E',
          marginBottom: '16px'
        }}>
          {title}
        </h3>

        {/* Description */}
        <p style={{
          fontFamily: 'Inter, sans-serif',
          fontWeight: 400,
          fontSize: '16px',
          lineHeight: 1.6,
          color: '#4A4A4A',
          marginBottom: '20px'
        }}>
          {description}
        </p>

        {/* Link */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          color: '#006E6E',
          fontFamily: 'Inter, sans-serif',
          fontWeight: 600,
          fontSize: '14px'
        }}>
          Read Case Study
          <ArrowRight style={{ width: '16px', height: '16px' }} />
        </div>
      </div>
    </a>
  );
}
