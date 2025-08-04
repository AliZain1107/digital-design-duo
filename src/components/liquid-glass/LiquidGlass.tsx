import React, { useEffect, useRef, useState } from 'react';
import { cn } from '@/lib/utils';

interface LiquidGlassProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'default' | 'card' | 'button' | 'modal' | 'sheet';
  intensity?: 'light' | 'medium' | 'strong';
  interactive?: boolean;
  adaptiveTheme?: boolean;
  children?: React.ReactNode;
}

export const LiquidGlass = React.forwardRef<HTMLDivElement, LiquidGlassProps>(
  ({ 
    className, 
    variant = 'default', 
    intensity = 'medium',
    interactive = true,
    adaptiveTheme = true,
    children,
    ...props 
  }, ref) => {
    const localRef = useRef<HTMLDivElement>(null);
    const combinedRef = ref || localRef;
    const [mousePosition, setMousePosition] = useState({ x: 50, y: 50 });
    const [isHovered, setIsHovered] = useState(false);
    const [tilt, setTilt] = useState({ x: 0, y: 0 });

    // Intensity mappings
    const intensityStyles = {
      light: {
        blur: '10px',
        bgOpacity: '0.05',
        borderOpacity: '0.1',
        saturation: '150%'
      },
      medium: {
        blur: '20px',
        bgOpacity: '0.1',
        borderOpacity: '0.18',
        saturation: '180%'
      },
      strong: {
        blur: '30px',
        bgOpacity: '0.15',
        borderOpacity: '0.25',
        saturation: '200%'
      }
    };

    const currentIntensity = intensityStyles[intensity];

    // Handle mouse movement for specular highlights
    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
      if (!interactive) return;
      
      const element = combinedRef as React.RefObject<HTMLDivElement>;
      if (!element.current) return;

      const rect = element.current.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 100;
      const y = ((e.clientY - rect.top) / rect.height) * 100;
      
      setMousePosition({ x, y });

      // Calculate tilt
      const tiltX = (y - 50) / 10;
      const tiltY = (x - 50) / -10;
      setTilt({ x: tiltX, y: tiltY });
    };

    const handleMouseEnter = () => setIsHovered(true);
    const handleMouseLeave = () => {
      setIsHovered(false);
      setTilt({ x: 0, y: 0 });
    };

    // Variant-specific styles
    const variantStyles = {
      default: 'rounded-xl p-6',
      card: 'rounded-2xl p-8 min-h-[200px]',
      button: 'rounded-lg px-6 py-3 cursor-pointer active:scale-95',
      modal: 'rounded-3xl p-8 max-w-2xl w-full',
      sheet: 'rounded-t-3xl p-8 w-full'
    };

    // Dynamic CSS variables
    const style = {
      '--mouse-x': `${mousePosition.x}%`,
      '--mouse-y': `${mousePosition.y}%`,
      '--blur-amount': currentIntensity.blur,
      '--bg-opacity': currentIntensity.bgOpacity,
      '--border-opacity': currentIntensity.borderOpacity,
      '--saturation': currentIntensity.saturation,
      transform: interactive && isHovered 
        ? `perspective(1000px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg) translateZ(10px)`
        : 'perspective(1000px) rotateX(0) rotateY(0) translateZ(0)',
      transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)'
    } as React.CSSProperties;

    return (
      <div
        ref={combinedRef}
        className={cn(
          'liquid-glass relative overflow-hidden',
          variantStyles[variant],
          'bg-white/[var(--bg-opacity)]',
          'backdrop-blur-[var(--blur-amount)]',
          'backdrop-saturate-[var(--saturation)]',
          'border border-white/[var(--border-opacity)]',
          'transition-all duration-300',
          interactive && 'hover:scale-[1.02] hover:shadow-2xl',
          adaptiveTheme && 'dark:bg-black/[var(--bg-opacity)] dark:border-white/10',
          className
        )}
        style={style}
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        {...props}
      >
        {/* Specular highlight layer */}
        {interactive && (
          <div
            className={cn(
              'absolute inset-0 pointer-events-none',
              'bg-[radial-gradient(circle_at_var(--mouse-x)_var(--mouse-y),rgba(255,255,255,0.2)_0%,rgba(255,255,255,0.1)_20%,transparent_60%)]',
              'opacity-0 transition-opacity duration-300',
              isHovered && 'opacity-100'
            )}
          />
        )}

        {/* Animated border gradient */}
        {variant === 'card' && (
          <div
            className={cn(
              'absolute -inset-[2px] rounded-2xl',
              'bg-gradient-to-r from-transparent via-white/10 to-transparent',
              'opacity-0 transition-opacity duration-300',
              isHovered && 'opacity-100 animate-shimmer'
            )}
          />
        )}

        {/* Content */}
        <div className="relative z-10">
          {children}
        </div>
      </div>
    );
  }
);

LiquidGlass.displayName = 'LiquidGlass';

// Additional component exports
export const LiquidGlassButton = React.forwardRef<
  HTMLButtonElement,
  React.ButtonHTMLAttributes<HTMLButtonElement> & Omit<LiquidGlassProps, 'variant'>
>(({ className, children, ...props }, ref) => (
  <button
    ref={ref}
    className={cn('inline-block', className)}
    {...props}
  >
    <LiquidGlass variant="button" className="h-full">
      {children}
    </LiquidGlass>
  </button>
));

LiquidGlassButton.displayName = 'LiquidGlassButton';

export const LiquidGlassCard = React.forwardRef<
  HTMLDivElement,
  Omit<LiquidGlassProps, 'variant'>
>(({ className, ...props }, ref) => (
  <LiquidGlass
    ref={ref}
    variant="card"
    className={cn('group', className)}
    {...props}
  />
));

LiquidGlassCard.displayName = 'LiquidGlassCard';

// Layered glass component for depth effects
export const LiquidGlassLayers: React.FC<{
  children: React.ReactNode;
  layers?: number;
  className?: string;
}> = ({ children, layers = 3, className }) => {
  return (
    <div className={cn('relative', className)}>
      {Array.from({ length: layers }).map((_, index) => (
        <div
          key={index}
          className={cn(
            'absolute inset-0 rounded-2xl',
            'backdrop-blur-sm bg-white/[0.03]',
            'border border-white/5'
          )}
          style={{
            transform: `translateZ(${index * 10}px)`,
            transformStyle: 'preserve-3d'
          }}
        />
      ))}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};