/**
 * QuickSecure Logo Component
 * Shield with keyhole design
 * Supports multiple color variants
 */

interface LogoProps {
  color?: string;
  className?: string;
  style?: React.CSSProperties;
}

export function Logo({ 
  color = 'var(--qs-brand-primary)', 
  className = '',
  style = {}
}: LogoProps) {
  return (
    <svg
      width="160"
      height="auto"
      viewBox="0 0 120 140"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={{
        maxWidth: '160px',
        height: 'auto',
        display: 'block',
        ...style
      }}
    >
      {/* Outer shield */}
      <path
        d="M60 10L15 30V65C15 92.614 35.147 115.228 60 130C84.853 115.228 105 92.614 105 65V30L60 10Z"
        stroke={color}
        strokeWidth="8"
        fill="none"
      />
      
      {/* Inner shield */}
      <path
        d="M60 25L27.5 40V65C27.5 86.539 42.386 103.386 60 115C77.614 103.386 92.5 86.539 92.5 65V40L60 25Z"
        stroke={color}
        strokeWidth="6"
        fill="none"
      />
      
      {/* Keyhole circle */}
      <circle
        cx="60"
        cy="62"
        r="12"
        fill={color}
      />
      
      {/* Keyhole slot */}
      <rect
        x="54"
        y="70"
        width="12"
        height="24"
        rx="2"
        fill={color}
      />
    </svg>
  );
}
