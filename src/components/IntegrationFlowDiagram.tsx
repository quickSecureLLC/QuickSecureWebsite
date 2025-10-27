/**
 * Integration Flow Diagram - Merge.dev Inspired
 * Animated flow diagram showing QuickSecure Nexus as central hub
 * with inputs on the left and outputs on the right
 */

import { useState, useEffect } from 'react';
import {
  NexusSystemIcon,
  PanicButtonIcon,
  GunshotDetectionIcon,
  AnonymousTipLineIcon,
  DrillManagementIcon,
  MassNotificationsIcon,
  RetrofitLockIcon
} from '../icons';

interface FlowNode {
  id: string;
  label: string;
  icon: any;
  position: { x: number; y: number };
  type: 'input' | 'hub' | 'output';
}

export function IntegrationFlowDiagram() {
  // Define nodes with their positions (relative to center)
  const nodes: FlowNode[] = [
    // Left side - Inputs
    { id: 'panic', label: 'Panic Button', icon: PanicButtonIcon, position: { x: -400, y: -120 }, type: 'input' },
    { id: 'gunshot', label: 'Gunshot Detection', icon: GunshotDetectionIcon, position: { x: -400, y: 0 }, type: 'input' },
    { id: 'tipline', label: 'Anonymous Tip Line', icon: AnonymousTipLineIcon, position: { x: -400, y: 120 }, type: 'input' },
    
    // Center - Hub
    { id: 'nexus', label: 'QuickSecure Nexus', icon: NexusSystemIcon, position: { x: 0, y: 0 }, type: 'hub' },
    
    // Right side - Outputs
    { id: 'drill', label: 'Drill Management', icon: DrillManagementIcon, position: { x: 400, y: -120 }, type: 'output' },
    { id: 'notifications', label: 'Mass Notifications', icon: MassNotificationsIcon, position: { x: 400, y: 0 }, type: 'output' },
    { id: 'locks', label: 'Retrofit Locks', icon: RetrofitLockIcon, position: { x: 400, y: 120 }, type: 'output' },
  ];

  // SVG path generator for curved dashed lines
  const generateCurvePath = (from: { x: number; y: number }, to: { x: number; y: number }) => {
    const midX = (from.x + to.x) / 2;
    const controlOffset = Math.abs(to.x - from.x) * 0.3;
    
    return `M ${from.x} ${from.y} Q ${midX - controlOffset} ${from.y}, ${midX} ${(from.y + to.y) / 2} T ${to.x} ${to.y}`;
  };

  // Helper to calculate point along quadratic bezier curve
  const getPointAtProgress = (path: string, progress: number): { x: number; y: number } => {
    // Parse quadratic bezier path: M x0 y0 Q cx1 cy1, x1 y1 T x2 y2
    const match = path.match(/M ([-\d.]+) ([-\d.]+) Q ([-\d.]+) ([-\d.]+), ([-\d.]+) ([-\d.]+) T ([-\d.]+) ([-\d.]+)/);
    if (!match) return { x: 0, y: 0 };

    const [, sx, sy, cx1, cy1, mx, my, ex, ey] = match.map(Number);
    
    const t = progress;
    
    // For the first curve (M to midpoint via Q)
    if (t <= 0.5) {
      const t1 = t * 2; // Remap to 0-1 for first half
      // Quadratic bezier: B(t) = (1-t)^2*P0 + 2(1-t)t*P1 + t^2*P2
      const x = Math.pow(1 - t1, 2) * sx + 2 * (1 - t1) * t1 * cx1 + Math.pow(t1, 2) * mx;
      const y = Math.pow(1 - t1, 2) * sy + 2 * (1 - t1) * t1 * cy1 + Math.pow(t1, 2) * my;
      return { x, y };
    } else {
      const t2 = (t - 0.5) * 2; // Remap to 0-1 for second half
      // Second half uses reflected control point
      const cx2 = 2 * mx - cx1;
      const cy2 = 2 * my - cy1;
      const x = Math.pow(1 - t2, 2) * mx + 2 * (1 - t2) * t2 * cx2 + Math.pow(t2, 2) * ex;
      const y = Math.pow(1 - t2, 2) * my + 2 * (1 - t2) * t2 * cy2 + Math.pow(t2, 2) * ey;
      return { x, y };
    }
  };

  // Component to animate a dot along a path
  const AnimatedPathDot = ({ 
    path, 
    isInput, 
    delay 
  }: { 
    path: string; 
    isInput: boolean; 
    delay: number; 
  }) => {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
      let startTime: number | null = null;
      const duration = 3000; // 3 seconds

      const animate = (timestamp: number) => {
        if (!startTime) startTime = timestamp - (delay * 1000);
        const elapsed = timestamp - startTime;
        const newProgress = ((elapsed % duration) / duration);
        
        setProgress(isInput ? newProgress : 1 - newProgress);
        requestAnimationFrame(animate);
      };

      const animationId = requestAnimationFrame(animate);
      return () => cancelAnimationFrame(animationId);
    }, [delay, isInput]);

    // Calculate position along path
    const position = getPointAtProgress(path, progress);

    return (
      <circle
        cx={position.x}
        cy={position.y}
        r="5"
        fill="var(--qs-brand-accent)"
        style={{ 
          filter: 'url(#dot-glow)'
        }}
      />
    );
  };

  return (
    <div style={{
      width: '100%',
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '80px 40px',
      position: 'relative',
      minHeight: '600px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }}>
      <svg
        viewBox="-500 -250 1000 500"
        style={{
          width: '100%',
          height: 'auto',
          overflow: 'visible'
        }}
      >
        <defs>
          {/* Glow filter for hub pulse */}
          <filter id="hub-glow">
            <feGaussianBlur stdDeviation="4" result="coloredBlur"/>
            <feMerge>
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
          
          {/* Glow filter for dots */}
          <filter id="dot-glow">
            <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
            <feMerge>
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>

        {/* Connection Lines with animated dots */}
        {nodes
          .filter(node => node.type !== 'hub')
          .map((node, idx) => {
            const hubNode = nodes.find(n => n.id === 'nexus')!;
            const isInput = node.type === 'input';
            const path = generateCurvePath(node.position, hubNode.position);

            return (
              <g key={node.id}>
                {/* Dashed curved line */}
                <path
                  d={path}
                  stroke="var(--qs-brand-accent)"
                  strokeWidth="2"
                  strokeDasharray="8 8"
                  fill="none"
                  opacity="0.4"
                />

                {/* Animated dots traveling along the path */}
                <AnimatedPathDot path={path} isInput={isInput} delay={idx * 0.5} />
                <AnimatedPathDot path={path} isInput={isInput} delay={idx * 0.5 + 1.5} />
              </g>
            );
          })}

        {/* Node circles */}
        {nodes.map((node) => {
          const Icon = node.icon;
          const isHub = node.type === 'hub';
          const size = isHub ? 120 : 80;
          const iconSize = isHub ? 48 : 32;

          return (
            <g 
              key={node.id} 
              className={`flow-node ${isHub ? 'flow-node-hub' : ''}`}
            >


              {/* Node background */}
              <circle
                cx={node.position.x}
                cy={node.position.y}
                r={size / 2}
                fill={isHub ? 'var(--qs-brand-primary)' : '#FFFFFF'}
                stroke={isHub ? 'transparent' : '#E0E0E0'}
                strokeWidth={isHub ? 0 : 2}
                style={{
                  filter: isHub 
                    ? 'drop-shadow(0 8px 24px rgba(14, 28, 43, 0.3))' 
                    : 'drop-shadow(0 4px 12px rgba(0, 0, 0, 0.08))',
                  transition: 'transform 200ms ease, filter 200ms ease'
                }}
              />

              {/* Icon - centered precisely */}
              <foreignObject
                x={node.position.x - iconSize / 2}
                y={node.position.y - iconSize / 2}
                width={iconSize}
                height={iconSize}
                style={{ pointerEvents: 'none' }}
              >
                <div style={{
                  width: '100%',
                  height: '100%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  <Icon 
                    style={{ 
                      width: iconSize, 
                      height: iconSize, 
                      color: isHub ? '#FFFFFF' : '#2B5E9C',
                      strokeWidth: isHub ? 2 : 1.5
                    }} 
                  />
                </div>
              </foreignObject>
            </g>
          );
        })}
      </svg>

      {/* Responsive CSS and Animations */}
      <style>{`
        /* No hover interactions - circles are static */
        .flow-node circle {
          pointer-events: none;
        }

        /* Consistent animation speed for dots */
        circle[fill="var(--qs-brand-accent)"] {
          animation-timing-function: linear;
        }

        /* Responsive scaling */
        @media (max-width: 1024px) {
          svg {
            transform: scale(0.8);
          }
        }
        @media (max-width: 768px) {
          svg {
            transform: scale(0.6);
          }
        }
        @media (max-width: 480px) {
          svg {
            transform: scale(0.5);
          }
        }

        /* Respect prefers-reduced-motion */
        @media (prefers-reduced-motion: reduce) {
          .flow-node:hover circle {
            transform: none !important;
          }
        }
      `}</style>
    </div>
  );
}
