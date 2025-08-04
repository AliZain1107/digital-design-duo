import React, { createContext, useContext, useEffect, useState } from 'react';

interface LiquidGlassConfig {
  quality: 'ultra' | 'standard' | 'reduced' | 'fallback';
  prefersReducedMotion: boolean;
  prefersReducedTransparency: boolean;
  isDarkMode: boolean;
  devicePixelRatio: number;
  supportsBackdropFilter: boolean;
  gpuTier: 'high' | 'standard' | 'low';
}

interface LiquidGlassContextType {
  config: LiquidGlassConfig;
  updateConfig: (updates: Partial<LiquidGlassConfig>) => void;
}

const LiquidGlassContext = createContext<LiquidGlassContextType | null>(null);

export const useLiquidGlass = () => {
  const context = useContext(LiquidGlassContext);
  if (!context) {
    throw new Error('useLiquidGlass must be used within LiquidGlassProvider');
  }
  return context;
};

export const LiquidGlassProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [config, setConfig] = useState<LiquidGlassConfig>(() => {
    // Detect initial capabilities
    const supportsBackdropFilter = CSS.supports('backdrop-filter', 'blur(1px)') ||
                                   CSS.supports('-webkit-backdrop-filter', 'blur(1px)');
    
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const prefersReducedTransparency = window.matchMedia('(prefers-reduced-transparency: reduce)').matches;
    const isDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const devicePixelRatio = window.devicePixelRatio || 1;
    
    // Simple GPU tier detection
    const gpuTier = detectGPUTier();
    
    // Determine quality based on capabilities
    let quality: LiquidGlassConfig['quality'] = 'standard';
    
    if (!supportsBackdropFilter) {
      quality = 'fallback';
    } else if (prefersReducedMotion || prefersReducedTransparency) {
      quality = 'reduced';
    } else if (gpuTier === 'high' && devicePixelRatio >= 2) {
      quality = 'ultra';
    } else if (gpuTier === 'low') {
      quality = 'reduced';
    }
    
    return {
      quality,
      prefersReducedMotion,
      prefersReducedTransparency,
      isDarkMode,
      devicePixelRatio,
      supportsBackdropFilter,
      gpuTier
    };
  });

  useEffect(() => {
    // Listen for theme changes
    const darkModeQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    const transparencyQuery = window.matchMedia('(prefers-reduced-transparency: reduce)');

    const handleDarkModeChange = (e: MediaQueryListEvent) => {
      setConfig(prev => ({ ...prev, isDarkMode: e.matches }));
    };

    const handleMotionChange = (e: MediaQueryListEvent) => {
      setConfig(prev => ({ 
        ...prev, 
        prefersReducedMotion: e.matches,
        quality: e.matches ? 'reduced' : determineQuality(prev)
      }));
    };

    const handleTransparencyChange = (e: MediaQueryListEvent) => {
      setConfig(prev => ({ 
        ...prev, 
        prefersReducedTransparency: e.matches,
        quality: e.matches ? 'reduced' : determineQuality(prev)
      }));
    };

    darkModeQuery.addEventListener('change', handleDarkModeChange);
    motionQuery.addEventListener('change', handleMotionChange);
    transparencyQuery.addEventListener('change', handleTransparencyChange);

    return () => {
      darkModeQuery.removeEventListener('change', handleDarkModeChange);
      motionQuery.removeEventListener('change', handleMotionChange);
      transparencyQuery.removeEventListener('change', handleTransparencyChange);
    };
  }, []);

  const updateConfig = (updates: Partial<LiquidGlassConfig>) => {
    setConfig(prev => ({ ...prev, ...updates }));
  };

  return (
    <LiquidGlassContext.Provider value={{ config, updateConfig }}>
      <style>
        {generateGlobalStyles(config)}
      </style>
      {children}
    </LiquidGlassContext.Provider>
  );
};

// Utility functions
function detectGPUTier(): 'high' | 'standard' | 'low' {
  try {
    const canvas = document.createElement('canvas');
    const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
    
    if (!gl) return 'low';
    
    const debugInfo = (gl as WebGLRenderingContext).getExtension('WEBGL_debug_renderer_info');
    if (!debugInfo) return 'standard';
    
    const renderer = (gl as WebGLRenderingContext).getParameter(debugInfo.UNMASKED_RENDERER_WEBGL);
    const vendor = (gl as WebGLRenderingContext).getParameter(debugInfo.UNMASKED_VENDOR_WEBGL);
    
    // High-end GPUs
    if (/RTX|M1|M2|M3|A1[4-7]|Radeon RX 6|Radeon RX 7/i.test(renderer)) {
      return 'high';
    }
    
    // Low-end GPUs
    if (/Intel|Mali|PowerVR|Adreno [1-5]/i.test(renderer)) {
      return 'low';
    }
    
    return 'standard';
  } catch {
    return 'standard';
  }
}

function determineQuality(config: LiquidGlassConfig): LiquidGlassConfig['quality'] {
  if (!config.supportsBackdropFilter) return 'fallback';
  if (config.prefersReducedMotion || config.prefersReducedTransparency) return 'reduced';
  if (config.gpuTier === 'high' && config.devicePixelRatio >= 2) return 'ultra';
  if (config.gpuTier === 'low') return 'reduced';
  return 'standard';
}

function generateGlobalStyles(config: LiquidGlassConfig): string {
  const qualities = {
    ultra: {
      blur: '30px',
      saturation: '200%',
      contrast: '0.9',
      animationDuration: '0.3s'
    },
    standard: {
      blur: '20px',
      saturation: '180%',
      contrast: '1',
      animationDuration: '0.3s'
    },
    reduced: {
      blur: '10px',
      saturation: '150%',
      contrast: '1',
      animationDuration: '0.1s'
    },
    fallback: {
      blur: '0px',
      saturation: '100%',
      contrast: '1',
      animationDuration: '0s'
    }
  };

  const current = qualities[config.quality];

  return `
    :root {
      --liquid-glass-blur: ${current.blur};
      --liquid-glass-saturation: ${current.saturation};
      --liquid-glass-contrast: ${current.contrast};
      --liquid-glass-animation-duration: ${current.animationDuration};
      --liquid-glass-quality: ${config.quality};
    }

    @media (prefers-color-scheme: dark) {
      :root {
        --liquid-glass-bg-opacity: 0.1;
        --liquid-glass-border-opacity: 0.15;
      }
    }

    @media (prefers-color-scheme: light) {
      :root {
        --liquid-glass-bg-opacity: 0.7;
        --liquid-glass-border-opacity: 0.3;
      }
    }

    /* Quality-specific styles */
    [data-liquid-glass-quality="ultra"] .liquid-glass {
      backdrop-filter: blur(var(--liquid-glass-blur)) saturate(var(--liquid-glass-saturation)) contrast(var(--liquid-glass-contrast));
      -webkit-backdrop-filter: blur(var(--liquid-glass-blur)) saturate(var(--liquid-glass-saturation)) contrast(var(--liquid-glass-contrast));
    }

    [data-liquid-glass-quality="fallback"] .liquid-glass {
      backdrop-filter: none;
      background: rgba(255, 255, 255, 0.9);
      box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
    }

    /* Animation for shimmer effect */
    @keyframes shimmer {
      0% { transform: translateX(-100%); }
      100% { transform: translateX(100%); }
    }

    .animate-shimmer {
      animation: shimmer 2s infinite;
    }

    /* Reduced motion styles */
    @media (prefers-reduced-motion: reduce) {
      .liquid-glass {
        transition: none !important;
        animation: none !important;
      }
    }
  `;
}