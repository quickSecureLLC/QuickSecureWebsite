/**
 * PlaceholderImage Component
 * Standardized image placeholder with centered label
 * 
 * Usage: <PlaceholderImage name="QuickSecure-Nexus-1" />
 */

interface PlaceholderImageProps {
  name: string;
  width?: string | number;
  height?: string | number;
  aspectRatio?: string;
  resolution?: string; // e.g., "1920×1080px"
  style?: React.CSSProperties;
  className?: string;
}

export function PlaceholderImage({ 
  name, 
  width, 
  height, 
  aspectRatio,
  resolution,
  style = {},
  className = ''
}: PlaceholderImageProps) {
  // Calculate suggested resolution based on aspect ratio if not provided
  const getResolution = () => {
    if (resolution) return resolution;
    
    if (aspectRatio === '16/9') return '1920×1080px';
    if (aspectRatio === '4/3') return '1600×1200px';
    if (aspectRatio === '1/1') return '1200×1200px';
    
    return '1200×800px'; // default
  };

  return (
    <div
      className={className}
      style={{
        width: width || '100%',
        height: height || 'auto',
        aspectRatio: aspectRatio,
        backgroundColor: '#E5E7EB',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        overflow: 'hidden',
        gap: '8px',
        ...style
      }}
    >
      <span
        style={{
          fontFamily: 'var(--qs-type-family-body)',
          fontSize: '18px',
          fontWeight: 'var(--qs-type-weight-semibold)',
          lineHeight: 'auto',
          color: 'var(--qs-text-muted)',
          opacity: 0.8,
          textAlign: 'center',
          userSelect: 'none',
          pointerEvents: 'none'
        }}
      >
        {name}
      </span>
      
      {/* Aspect Ratio and Resolution Info */}
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '4px'
        }}
      >
        {aspectRatio && (
          <span
            style={{
              fontFamily: 'var(--qs-type-family-body)',
              fontSize: '14px',
              fontWeight: 'var(--qs-type-weight-medium)',
              lineHeight: 'auto',
              color: 'var(--qs-text-muted)',
              opacity: 0.7,
              textAlign: 'center',
              userSelect: 'none',
              pointerEvents: 'none'
            }}
          >
            {aspectRatio.replace('/', ':')}
          </span>
        )}
        <span
          style={{
            fontFamily: 'var(--qs-type-family-body)',
            fontSize: '12px',
            fontWeight: 'var(--qs-type-weight-regular)',
            lineHeight: 'auto',
            color: 'var(--qs-text-muted)',
            opacity: 0.6,
            textAlign: 'center',
            userSelect: 'none',
            pointerEvents: 'none'
          }}
        >
          {getResolution()}
        </span>
      </div>
    </div>
  );
}
