/**
 * QS/Modal/ResourceViewer - Full-width modal for viewing resources
 * Title bar, scrollable content, close × button
 * Used by Docs and Case Studies
 * 
 * Uses QS design tokens for consistency
 */

import { ReactNode, useEffect } from "react";
import { X } from "lucide-react";

interface ResourceViewerProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: ReactNode;
  className?: string;
}

export function ResourceViewer({ 
  isOpen, 
  onClose, 
  title, 
  children,
  className = "" 
}: ResourceViewerProps) {
  // Close on Escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };

    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, [isOpen, onClose]);

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        onClick={onClose}
        style={{
          position: 'fixed',
          inset: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          zIndex: 9998,
          animation: 'modal-fade-in 200ms ease-out forwards'
        }}
      />

      {/* Modal Container */}
      <div
        style={{
          position: 'fixed',
          inset: 0,
          zIndex: 9999,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '24px'
        }}
      >
        {/* Modal Content */}
        <div
          className={className}
          style={{
            position: 'relative',
            width: '100%',
            maxWidth: '1200px',
            maxHeight: '90vh',
            backgroundColor: 'var(--qs-surface)',
            borderRadius: '16px',
            boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
            display: 'flex',
            flexDirection: 'column',
            overflow: 'hidden',
            animation: 'modal-content-in 200ms ease-out forwards'
          }}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close Button - Floating */}
          <button
            onClick={onClose}
            aria-label="Close modal"
            style={{
              position: 'absolute',
              top: '24px',
              right: '24px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '40px',
              height: '40px',
              borderRadius: '8px',
              border: 'none',
              backgroundColor: 'rgba(0, 0, 0, 0.5)',
              color: '#FFFFFF',
              cursor: 'pointer',
              transition: 'background-color 150ms ease',
              zIndex: 10001
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = 'rgba(0, 0, 0, 0.7)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
            }}
          >
            <X style={{ width: '24px', height: '24px' }} />
          </button>

          {/* Scrollable Content */}
          <div style={{
            flex: 1,
            overflowY: 'auto',
            padding: '72px 64px 48px',
            backgroundColor: '#FFFFFF',
            fontFamily: 'Inter, sans-serif',
            lineHeight: 1.8
          }}>
            {children}
          </div>
        </div>
      </div>
    </>
  );
}
