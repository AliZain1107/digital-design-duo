import { useEffect, useRef, useState, useCallback } from 'react';

interface MousePosition {
  x: number;
  y: number;
}

interface DeviceOrientation {
  alpha: number | null;
  beta: number | null;
  gamma: number | null;
}

// Hook for specular highlight tracking
export const useSpecularHighlight = (enabled = true) => {
  const [mousePosition, setMousePosition] = useState<MousePosition>({ x: 50, y: 50 });
  const [isHovered, setIsHovered] = useState(false);
  const elementRef = useRef<HTMLElement>(null);

  const handleMouseMove = useCallback((e: MouseEvent) => {
    if (!enabled || !elementRef.current) return;

    const rect = elementRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;

    setMousePosition({ x, y });
  }, [enabled]);

  const handleMouseEnter = useCallback(() => {
    if (enabled) setIsHovered(true);
  }, [enabled]);

  const handleMouseLeave = useCallback(() => {
    if (enabled) {
      setIsHovered(false);
      setMousePosition({ x: 50, y: 50 });
    }
  }, [enabled]);

  useEffect(() => {
    const element = elementRef.current;
    if (!element || !enabled) return;

    element.addEventListener('mousemove', handleMouseMove);
    element.addEventListener('mouseenter', handleMouseEnter);
    element.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      element.removeEventListener('mousemove', handleMouseMove);
      element.removeEventListener('mouseenter', handleMouseEnter);
      element.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [enabled, handleMouseMove, handleMouseEnter, handleMouseLeave]);

  return {
    ref: elementRef,
    mousePosition,
    isHovered,
    specularStyle: {
      '--specular-x': `${mousePosition.x}%`,
      '--specular-y': `${mousePosition.y}%`,
      '--specular-opacity': isHovered ? 1 : 0,
    } as React.CSSProperties,
  };
};

// Hook for 3D tilt effect
export const use3DTilt = (enabled = true, sensitivity = 10) => {
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const elementRef = useRef<HTMLElement>(null);

  const handleMouseMove = useCallback((e: MouseEvent) => {
    if (!enabled || !elementRef.current) return;

    const rect = elementRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;

    const tiltX = ((y - 50) / 100) * sensitivity;
    const tiltY = ((x - 50) / 100) * -sensitivity;

    setTilt({ x: tiltX, y: tiltY });
  }, [enabled, sensitivity]);

  const handleMouseLeave = useCallback(() => {
    if (enabled) setTilt({ x: 0, y: 0 });
  }, [enabled]);

  useEffect(() => {
    const element = elementRef.current;
    if (!element || !enabled) return;

    element.addEventListener('mousemove', handleMouseMove);
    element.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      element.removeEventListener('mousemove', handleMouseMove);
      element.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [enabled, handleMouseMove, handleMouseLeave]);

  return {
    ref: elementRef,
    tilt,
    tiltStyle: {
      transform: `perspective(1000px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
      transition: 'transform 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
    } as React.CSSProperties,
  };
};

// Hook for adaptive glass based on background
export const useAdaptiveGlass = () => {
  const [luminance, setLuminance] = useState(0.5);
  const [dominantColor, setDominantColor] = useState<string | null>(null);
  const elementRef = useRef<HTMLElement>(null);

  const calculateLuminance = useCallback((r: number, g: number, b: number) => {
    // Relative luminance formula
    return (0.299 * r + 0.587 * g + 0.114 * b) / 255;
  }, []);

  const sampleBackground = useCallback(async () => {
    if (!elementRef.current) return;

    try {
      // Create a temporary canvas to sample the background
      const canvas = document.createElement('canvas');
      const ctx = canvas.getContext('2d');
      if (!ctx) return;

      // Take a screenshot of the element's background area
      canvas.width = 1;
      canvas.height = 1;

      // For demo purposes, we'll use a simple approach
      // In production, you might use html2canvas or similar
      const computedStyle = window.getComputedStyle(elementRef.current.parentElement || document.body);
      const bgColor = computedStyle.backgroundColor;

      if (bgColor && bgColor !== 'transparent') {
        const match = bgColor.match(/\d+/g);
        if (match && match.length >= 3) {
          const [r, g, b] = match.map(Number);
          const lum = calculateLuminance(r, g, b);
          setLuminance(lum);
          setDominantColor(`rgba(${r}, ${g}, ${b}, 0.05)`);
        }
      }
    } catch (error) {
      console.error('Error sampling background:', error);
    }
  }, [calculateLuminance]);

  useEffect(() => {
    sampleBackground();

    // Resample on window resize
    window.addEventListener('resize', sampleBackground);
    return () => window.removeEventListener('resize', sampleBackground);
  }, [sampleBackground]);

  const adaptiveStyle = {
    '--glass-opacity': luminance > 0.5 ? '0.15' : '0.08',
    '--glass-blur': luminance > 0.5 ? '15px' : '25px',
    '--glass-tint': dominantColor || 'rgba(0, 0, 0, 0)',
  } as React.CSSProperties;

  return {
    ref: elementRef,
    luminance,
    dominantColor,
    adaptiveStyle,
    resample: sampleBackground,
  };
};

// Hook for device orientation (mobile)
export const useDeviceOrientation = (enabled = true) => {
  const [orientation, setOrientation] = useState<DeviceOrientation>({
    alpha: null,
    beta: null,
    gamma: null,
  });
  const [isSupported, setIsSupported] = useState(false);

  useEffect(() => {
    if (!enabled) return;

    const checkSupport = () => {
      setIsSupported('DeviceOrientationEvent' in window);
    };

    checkSupport();

    const handleOrientation = (event: DeviceOrientationEvent) => {
      setOrientation({
        alpha: event.alpha,
        beta: event.beta,
        gamma: event.gamma,
      });
    };

    if (isSupported) {
      window.addEventListener('deviceorientation', handleOrientation);
    }

    return () => {
      if (isSupported) {
        window.removeEventListener('deviceorientation', handleOrientation);
      }
    };
  }, [enabled, isSupported]);

  const tiltFromOrientation = {
    x: orientation.beta ? orientation.beta / 180 * 15 : 0,
    y: orientation.gamma ? orientation.gamma / 90 * 15 : 0,
  };

  return {
    orientation,
    isSupported,
    tiltFromOrientation,
    orientationStyle: {
      transform: `perspective(1000px) rotateX(${tiltFromOrientation.x}deg) rotateY(${tiltFromOrientation.y}deg)`,
    } as React.CSSProperties,
  };
};

// Hook for parallax scrolling effect
export const useParallaxGlass = (speed = 0.5) => {
  const [offset, setOffset] = useState(0);
  const elementRef = useRef<HTMLElement>(null);
  const ticking = useRef(false);

  const updateParallax = useCallback(() => {
    if (!elementRef.current) return;

    const rect = elementRef.current.getBoundingClientRect();
    const centerY = rect.top + rect.height / 2;
    const windowCenterY = window.innerHeight / 2;
    const diff = centerY - windowCenterY;
    
    setOffset(diff * speed);
    ticking.current = false;
  }, [speed]);

  useEffect(() => {
    const handleScroll = () => {
      if (!ticking.current) {
        requestAnimationFrame(updateParallax);
        ticking.current = true;
      }
    };

    window.addEventListener('scroll', handleScroll);
    updateParallax(); // Initial calculation

    return () => window.removeEventListener('scroll', handleScroll);
  }, [updateParallax]);

  return {
    ref: elementRef,
    offset,
    parallaxStyle: {
      transform: `translateY(${offset}px)`,
      willChange: 'transform',
    } as React.CSSProperties,
  };
};

// Hook for performance monitoring
export const useGlassPerformance = () => {
  const [fps, setFps] = useState(60);
  const [shouldReduceEffects, setShouldReduceEffects] = useState(false);
  const frameCount = useRef(0);
  const lastTime = useRef(performance.now());

  useEffect(() => {
    let animationId: number;

    const measureFPS = (currentTime: number) => {
      frameCount.current++;

      if (currentTime >= lastTime.current + 1000) {
        const currentFPS = Math.round(frameCount.current * 1000 / (currentTime - lastTime.current));
        setFps(currentFPS);
        
        // Reduce effects if FPS drops below 30
        setShouldReduceEffects(currentFPS < 30);

        frameCount.current = 0;
        lastTime.current = currentTime;
      }

      animationId = requestAnimationFrame(measureFPS);
    };

    animationId = requestAnimationFrame(measureFPS);

    return () => cancelAnimationFrame(animationId);
  }, []);

  return {
    fps,
    shouldReduceEffects,
    performanceClass: shouldReduceEffects ? 'reduced-performance' : 'full-performance',
  };
};

// Hook for ambient light detection (experimental)
export const useAmbientLight = () => {
  const [illuminance, setIlluminance] = useState<number | null>(null);
  const [isSupported, setIsSupported] = useState(false);

  useEffect(() => {
    const checkSupport = async () => {
      if ('AmbientLightSensor' in window) {
        try {
          // Request permission if needed
          if ('permissions' in navigator) {
            const result = await navigator.permissions.query({ name: 'ambient-light-sensor' as PermissionName });
            setIsSupported(result.state === 'granted');
          }
        } catch {
          setIsSupported(false);
        }
      }
    };

    checkSupport();

    if (isSupported && 'AmbientLightSensor' in window) {
      try {
        const sensor = new (window as any).AmbientLightSensor();
        sensor.addEventListener('reading', () => {
          setIlluminance(sensor.illuminance);
        });
        sensor.start();

        return () => sensor.stop();
      } catch (error) {
        console.error('Error with AmbientLightSensor:', error);
      }
    }
  }, [isSupported]);

  const lightLevel = illuminance !== null ? (
    illuminance < 50 ? 'dark' :
    illuminance < 500 ? 'normal' :
    'bright'
  ) : 'normal';

  return {
    illuminance,
    isSupported,
    lightLevel,
    ambientStyle: {
      '--ambient-light': illuminance ? Math.min(illuminance / 500, 1) : 0.5,
    } as React.CSSProperties,
  };
};