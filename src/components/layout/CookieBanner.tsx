import React, { useState, useEffect } from "react";
import { useLanguage } from "@/lib/i18n";
import CookieSettings from "./CookieSettings";

const CookieBanner: React.FC = () => {
  const { t } = useLanguage();
  const [isVisible, setIsVisible] = useState(false);
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    // Check if user has already made a cookie choice
    const cookiePreferences = localStorage.getItem('cookiePreferences');
    const cookieChoiceMade = localStorage.getItem('cookieChoiceMade');
    
    if (cookieChoiceMade) {
      return; // Don't show banner if user already made a choice
    }

    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      
      // Show banner when user scrolls down 50% of viewport height
      if (scrollPosition > windowHeight * 0.5 && !hasScrolled) {
        setHasScrolled(true);
        setIsVisible(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [hasScrolled]);

  const handleAcceptAll = () => {
    const preferences = {
      essential: true,
      analytics: true,
      marketing: true,
    };
    localStorage.setItem('cookiePreferences', JSON.stringify(preferences));
    localStorage.setItem('cookieChoiceMade', 'true');
    setIsVisible(false);
  };

  const handleRejectAll = () => {
    const preferences = {
      essential: true,
      analytics: false,
      marketing: false,
    };
    localStorage.setItem('cookiePreferences', JSON.stringify(preferences));
    localStorage.setItem('cookieChoiceMade', 'true');
    setIsVisible(false);
  };

  const handleCustomize = () => {
    setIsSettingsOpen(true);
  };

  const handleSettingsClose = () => {
    setIsSettingsOpen(false);
    localStorage.setItem('cookieChoiceMade', 'true');
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <>
      {/* Cookie Banner */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 shadow-lg z-40 p-4 md:p-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row items-start lg:items-center gap-4">
            {/* Content */}
            <div className="flex-1">
              <h3 className="text-lg font-semibold text-[rgba(51,51,51,1)] mb-2">
                {t.cookieSettingsTitle}
              </h3>
              <p className="text-sm text-[rgba(102,102,102,1)] leading-relaxed">
                {t.cookieSettingsDescription}
              </p>
            </div>

            {/* Actions */}
            <div className="flex flex-col sm:flex-row gap-3 w-full lg:w-auto lg:min-w-[400px]">
              <button
                onClick={handleRejectAll}
                className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors font-medium text-sm"
              >
                {t.rejectAll}
              </button>
              <button
                onClick={handleCustomize}
                className="px-4 py-2 border border-[rgba(250,111,64,1)] text-[rgba(250,111,64,1)] rounded-lg hover:bg-orange-50 transition-colors font-medium text-sm"
              >
                {t.footerCookieSettings}
              </button>
              <button
                onClick={handleAcceptAll}
                className="px-4 py-2 bg-[rgba(250,111,64,1)] text-white rounded-lg hover:opacity-90 transition-opacity font-medium text-sm"
              >
                {t.acceptAll}
              </button>
            </div>

            {/* Close button */}
            <button
              onClick={() => setIsVisible(false)}
              className="absolute top-2 right-2 lg:relative lg:top-0 lg:right-0 text-gray-400 hover:text-gray-600 transition-colors p-1"
              aria-label={t.close}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Cookie Settings Modal */}
      <CookieSettings 
        isOpen={isSettingsOpen} 
        onClose={handleSettingsClose} 
      />
    </>
  );
};

export default CookieBanner;
