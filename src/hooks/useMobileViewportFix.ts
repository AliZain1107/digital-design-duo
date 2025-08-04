import { useEffect } from 'react';

/**
 * Hook to fix viewport height issues on mobile devices
 * Handles the dynamic viewport height changes when browser UI shows/hides
 */
export const useMobileViewportFix = () => {
  useEffect(() => {
    // Function to update CSS custom property with actual viewport height
    const updateViewportHeight = () => {
      const vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty('--vh', `${vh}px`);
    };

    // Initial update
    updateViewportHeight();

    // Update on resize (handles orientation changes and browser UI changes)
    window.addEventListener('resize', updateViewportHeight);
    window.addEventListener('orientationchange', updateViewportHeight);

    // Cleanup
    return () => {
      window.removeEventListener('resize', updateViewportHeight);
      window.removeEventListener('orientationchange', updateViewportHeight);
    };
  }, []);
};