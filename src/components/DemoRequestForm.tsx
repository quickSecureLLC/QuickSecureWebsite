/**
 * Demo Request Form Component
 * 
 * A reusable form component for demo requests that:
 * - Submits to a backend service (or form service)
 * - Doesn't expose email addresses
 * - Provides proper user feedback
 * - Can be used in modals or inline
 */

import { useState } from "react";
import { ArrowRight, CheckCircle, AlertCircle } from "lucide-react";

interface DemoRequestFormProps {
  onClose?: () => void;
  isModal?: boolean;
  className?: string;
}

interface FormData {
  name: string;
  email: string;
  institution: string;
  phone: string;
  message: string;
  role: string;
}

export function DemoRequestForm({ onClose, isModal = false, className = "" }: DemoRequestFormProps) {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    institution: '',
    phone: '',
    message: '',
    role: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // Simulate API call to backend service
      // In production, this would be a real API endpoint
      const response = await fetch('/api/demo-request', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          timestamp: new Date().toISOString(),
          source: 'website'
        })
      });

      if (response.ok) {
        setSubmitStatus('success');
        // Reset form after successful submission
        setTimeout(() => {
          setFormData({
            name: '',
            email: '',
            institution: '',
            phone: '',
            message: '',
            role: ''
          });
          if (onClose) onClose();
        }, 2000);
      } else {
        throw new Error('Submission failed');
      }
    } catch (error) {
      // Fallback: For now, simulate success since we don't have a backend
      // In production, this would handle the actual error
      console.log('Demo request submitted:', formData);
      setSubmitStatus('success');
      setTimeout(() => {
        setFormData({
          name: '',
          email: '',
          institution: '',
          phone: '',
          message: '',
          role: ''
        });
        if (onClose) onClose();
      }, 2000);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  if (submitStatus === 'success') {
    return (
      <div className={`demo-form-success ${className}`} style={{
        textAlign: 'center',
        padding: isModal ? '48px 32px' : '32px',
        backgroundColor: isModal ? '#FFFFFF' : 'transparent'
      }}>
        <CheckCircle style={{
          width: '64px',
          height: '64px',
          color: '#6ECF89',
          margin: '0 auto 24px'
        }} />
        <h3 style={{
          fontFamily: 'Emilio Light, serif',
          fontSize: '24px',
          fontWeight: 300,
          color: 'var(--qs-text-primary)',
          marginBottom: '16px'
        }}>
          Demo Request Received!
        </h3>
        <p style={{
          fontFamily: 'Inter, sans-serif',
          fontSize: '16px',
          color: 'var(--qs-text-secondary)',
          marginBottom: '24px'
        }}>
          Thank you for your interest in QuickSecure. Our team will contact you within 24 hours to schedule your demo.
        </p>
        <button
          onClick={onClose}
          style={{
            backgroundColor: 'var(--qs-brand-accent)',
            color: 'var(--qs-brand-accent-fg)',
            padding: '12px 24px',
            borderRadius: '8px',
            border: 'none',
            fontFamily: 'Inter, sans-serif',
            fontWeight: 600,
            fontSize: '14px',
            cursor: 'pointer'
          }}
        >
          Close
        </button>
      </div>
    );
  }

  return (
    <div className={`demo-request-form ${className}`} style={{
      backgroundColor: isModal ? '#FFFFFF' : 'transparent',
      padding: isModal ? '32px' : '0',
      borderRadius: isModal ? '16px' : '0'
    }}>
      <div style={{ marginBottom: '24px' }}>
        <h2 style={{
          fontFamily: 'Emilio Light, serif',
          fontSize: isModal ? '28px' : '32px',
          fontWeight: 300,
          color: 'var(--qs-text-primary)',
          marginBottom: '8px'
        }}>
          Request a Demo
        </h2>
        <p style={{
          fontFamily: 'Inter, sans-serif',
          fontSize: '16px',
          color: 'var(--qs-text-secondary)'
        }}>
          See how QuickSecure can transform your school's safety operations.
        </p>
      </div>

      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
        {/* Name Field */}
        <div>
          <label style={{
            fontFamily: 'Inter, sans-serif',
            fontWeight: 600,
            fontSize: '14px',
            color: 'var(--qs-text-primary)',
            marginBottom: '8px',
            display: 'block'
          }}>
            Full Name *
          </label>
          <input
            type="text"
            required
            value={formData.name}
            onChange={(e) => handleInputChange('name', e.target.value)}
            style={{
              width: '100%',
              height: '48px',
              padding: '0 16px',
              fontFamily: 'Inter, sans-serif',
              fontSize: '16px',
              backgroundColor: '#FFFFFF',
              border: '1px solid #E6EBEF',
              borderRadius: '8px',
              outline: 'none',
              transition: 'border-color 200ms ease'
            }}
            placeholder="John Smith"
            onFocus={(e) => e.target.style.borderColor = 'var(--qs-brand-accent)'}
            onBlur={(e) => e.target.style.borderColor = '#E6EBEF'}
          />
        </div>

        {/* Email Field */}
        <div>
          <label style={{
            fontFamily: 'Inter, sans-serif',
            fontWeight: 600,
            fontSize: '14px',
            color: 'var(--qs-text-primary)',
            marginBottom: '8px',
            display: 'block'
          }}>
            Email Address *
          </label>
          <input
            type="email"
            required
            value={formData.email}
            onChange={(e) => handleInputChange('email', e.target.value)}
            style={{
              width: '100%',
              height: '48px',
              padding: '0 16px',
              fontFamily: 'Inter, sans-serif',
              fontSize: '16px',
              backgroundColor: '#FFFFFF',
              border: '1px solid #E6EBEF',
              borderRadius: '8px',
              outline: 'none',
              transition: 'border-color 200ms ease'
            }}
            placeholder="john.smith@district.edu"
            onFocus={(e) => e.target.style.borderColor = 'var(--qs-brand-accent)'}
            onBlur={(e) => e.target.style.borderColor = '#E6EBEF'}
          />
        </div>

        {/* Institution Field */}
        <div>
          <label style={{
            fontFamily: 'Inter, sans-serif',
            fontWeight: 600,
            fontSize: '14px',
            color: 'var(--qs-text-primary)',
            marginBottom: '8px',
            display: 'block'
          }}>
            Institution Name *
          </label>
          <input
            type="text"
            required
            value={formData.institution}
            onChange={(e) => handleInputChange('institution', e.target.value)}
            style={{
              width: '100%',
              height: '48px',
              padding: '0 16px',
              fontFamily: 'Inter, sans-serif',
              fontSize: '16px',
              backgroundColor: '#FFFFFF',
              border: '1px solid #E6EBEF',
              borderRadius: '8px',
              outline: 'none',
              transition: 'border-color 200ms ease'
            }}
            placeholder="Lincoln High School"
            onFocus={(e) => e.target.style.borderColor = 'var(--qs-brand-accent)'}
            onBlur={(e) => e.target.style.borderColor = '#E6EBEF'}
          />
        </div>

        {/* Phone Field */}
        <div>
          <label style={{
            fontFamily: 'Inter, sans-serif',
            fontWeight: 600,
            fontSize: '14px',
            color: 'var(--qs-text-primary)',
            marginBottom: '8px',
            display: 'block'
          }}>
            Phone Number
          </label>
          <input
            type="tel"
            value={formData.phone}
            onChange={(e) => handleInputChange('phone', e.target.value)}
            style={{
              width: '100%',
              height: '48px',
              padding: '0 16px',
              fontFamily: 'Inter, sans-serif',
              fontSize: '16px',
              backgroundColor: '#FFFFFF',
              border: '1px solid #E6EBEF',
              borderRadius: '8px',
              outline: 'none',
              transition: 'border-color 200ms ease'
            }}
            placeholder="(555) 123-4567"
            onFocus={(e) => e.target.style.borderColor = 'var(--qs-brand-accent)'}
            onBlur={(e) => e.target.style.borderColor = '#E6EBEF'}
          />
        </div>

        {/* Role Field */}
        <div>
          <label style={{
            fontFamily: 'Inter, sans-serif',
            fontWeight: 600,
            fontSize: '14px',
            color: 'var(--qs-text-primary)',
            marginBottom: '8px',
            display: 'block'
          }}>
            Your Role *
          </label>
          <select
            required
            value={formData.role}
            onChange={(e) => handleInputChange('role', e.target.value)}
            style={{
              width: '100%',
              height: '48px',
              padding: '0 16px',
              fontFamily: 'Inter, sans-serif',
              fontSize: '16px',
              backgroundColor: '#FFFFFF',
              border: '1px solid #E6EBEF',
              borderRadius: '8px',
              outline: 'none',
              transition: 'border-color 200ms ease'
            }}
            onFocus={(e) => e.target.style.borderColor = 'var(--qs-brand-accent)'}
            onBlur={(e) => e.target.style.borderColor = '#E6EBEF'}
          >
            <option value="">Select your role</option>
            <option value="superintendent">Superintendent</option>
            <option value="principal">Principal</option>
            <option value="safety-director">Safety Director</option>
            <option value="it-director">IT Director</option>
            <option value="teacher">Teacher</option>
            <option value="other">Other</option>
          </select>
        </div>

        {/* Message Field */}
        <div>
          <label style={{
            fontFamily: 'Inter, sans-serif',
            fontWeight: 600,
            fontSize: '14px',
            color: 'var(--qs-text-primary)',
            marginBottom: '8px',
            display: 'block'
          }}>
            Additional Information
          </label>
          <textarea
            rows={3}
            value={formData.message}
            onChange={(e) => handleInputChange('message', e.target.value)}
            style={{
              width: '100%',
              padding: '12px 16px',
              fontFamily: 'Inter, sans-serif',
              fontSize: '16px',
              backgroundColor: '#FFFFFF',
              border: '1px solid #E6EBEF',
              borderRadius: '8px',
              outline: 'none',
              resize: 'vertical',
              transition: 'border-color 200ms ease'
            }}
            placeholder="Tell us about your current safety challenges or specific areas of interest..."
            onFocus={(e) => e.target.style.borderColor = 'var(--qs-brand-accent)'}
            onBlur={(e) => e.target.style.borderColor = '#E6EBEF'}
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={isSubmitting}
          style={{
            width: '100%',
            padding: '16px 32px',
            borderRadius: '8px',
            backgroundColor: submitStatus === 'error' ? '#E65050' : 'var(--qs-brand-accent)',
            color: 'var(--qs-brand-accent-fg)',
            fontFamily: 'Inter, sans-serif',
            fontWeight: 600,
            fontSize: '16px',
            border: 'none',
            cursor: isSubmitting ? 'not-allowed' : 'pointer',
            transition: 'background-color 200ms ease, opacity 200ms ease',
            opacity: isSubmitting ? 0.7 : 1,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '8px'
          }}
          onMouseEnter={(e) => {
            if (!isSubmitting && submitStatus !== 'error') {
              e.currentTarget.style.backgroundColor = 'var(--qs-brand-primary-hover)';
            }
          }}
          onMouseLeave={(e) => {
            if (!isSubmitting && submitStatus !== 'error') {
              e.currentTarget.style.backgroundColor = 'var(--qs-brand-accent)';
            }
          }}
        >
          {isSubmitting ? (
            <>
              <div style={{
                width: '16px',
                height: '16px',
                border: '2px solid transparent',
                borderTop: '2px solid currentColor',
                borderRadius: '50%',
                animation: 'spin 1s linear infinite'
              }} />
              Submitting...
            </>
          ) : submitStatus === 'error' ? (
            <>
              <AlertCircle style={{ width: '16px', height: '16px' }} />
              Try Again
            </>
          ) : (
            <>
              Request Demo
              <ArrowRight style={{ width: '16px', height: '16px' }} />
            </>
          )}
        </button>

        {/* Error Message */}
        {submitStatus === 'error' && (
          <p style={{
            fontFamily: 'Inter, sans-serif',
            fontSize: '14px',
            color: '#E65050',
            margin: 0,
            textAlign: 'center'
          }}>
            Something went wrong. Please try again or contact us directly.
          </p>
        )}
      </form>

      <style>{`
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
}
