import React, { useState } from "react";
import { useLanguage } from "@/lib/i18n";

interface CookieSettingsProps {
  isOpen: boolean;
  onClose: () => void;
}

const CookieSettings: React.FC<CookieSettingsProps> = ({ isOpen, onClose }) => {
  const { t } = useLanguage();
  
  const [cookiePreferences, setCookiePreferences] = useState({
    essential: true, // Always true, cannot be disabled
    analytics: false,
    marketing: false,
  });

  const handleToggle = (type: 'analytics' | 'marketing') => {
    setCookiePreferences(prev => ({
      ...prev,
      [type]: !prev[type]
    }));
  };

  const handleAcceptAll = () => {
    setCookiePreferences({
      essential: true,
      analytics: true,
      marketing: true,
    });
    // Here you would typically save preferences to localStorage or send to backend
    localStorage.setItem('cookiePreferences', JSON.stringify({
      essential: true,
      analytics: true,
      marketing: true,
    }));
    onClose();
  };

  const handleAcceptSelected = () => {
    // Save current preferences
    localStorage.setItem('cookiePreferences', JSON.stringify(cookiePreferences));
    onClose();
  };

  const handleRejectAll = () => {
    setCookiePreferences({
      essential: true, // Essential cookies cannot be disabled
      analytics: false,
      marketing: false,
    });
    localStorage.setItem('cookiePreferences', JSON.stringify({
      essential: true,
      analytics: false,
      marketing: false,
    }));
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg shadow-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <h2 className="text-2xl font-bold text-[rgba(51,51,51,1)]">
            {t.cookieSettingsTitle}
          </h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 transition-colors"
            aria-label={t.close}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Content */}
        <div className="p-6">
          <p className="text-base text-[rgba(102,102,102,1)] mb-6 leading-relaxed">
            {t.cookieSettingsDescription}
          </p>

          {/* Cookie Categories */}
          <div className="space-y-6">
            {/* Essential Cookies */}
            <div className="border border-gray-200 rounded-lg p-4">
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-lg font-semibold text-[rgba(51,51,51,1)]">
                  {t.essentialCookies}
                </h3>
                <div className="flex items-center">
                  <span className="text-sm text-gray-500 mr-2">Always Active</span>
                  <div className="w-12 h-6 bg-[rgba(250,111,64,1)] rounded-full relative">
                    <div className="w-5 h-5 bg-white rounded-full absolute top-0.5 right-0.5 shadow-sm"></div>
                  </div>
                </div>
              </div>
              <p className="text-sm text-[rgba(102,102,102,1)] leading-relaxed">
                {t.essentialCookiesDescription}
              </p>
            </div>

            {/* Analytics Cookies */}
            <div className="border border-gray-200 rounded-lg p-4">
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-lg font-semibold text-[rgba(51,51,51,1)]">
                  {t.analyticsCookies}
                </h3>
                <button
                  onClick={() => handleToggle('analytics')}
                  className={`w-12 h-6 rounded-full relative transition-colors ${
                    cookiePreferences.analytics ? 'bg-[rgba(250,111,64,1)]' : 'bg-gray-300'
                  }`}
                >
                  <div className={`w-5 h-5 bg-white rounded-full absolute top-0.5 transition-transform shadow-sm ${
                    cookiePreferences.analytics ? 'translate-x-6' : 'translate-x-0.5'
                  }`}></div>
                </button>
              </div>
              <p className="text-sm text-[rgba(102,102,102,1)] leading-relaxed">
                {t.analyticsCookiesDescription}
              </p>
            </div>

            {/* Marketing Cookies */}
            <div className="border border-gray-200 rounded-lg p-4">
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-lg font-semibold text-[rgba(51,51,51,1)]">
                  {t.marketingCookies}
                </h3>
                <button
                  onClick={() => handleToggle('marketing')}
                  className={`w-12 h-6 rounded-full relative transition-colors ${
                    cookiePreferences.marketing ? 'bg-[rgba(250,111,64,1)]' : 'bg-gray-300'
                  }`}
                >
                  <div className={`w-5 h-5 bg-white rounded-full absolute top-0.5 transition-transform shadow-sm ${
                    cookiePreferences.marketing ? 'translate-x-6' : 'translate-x-0.5'
                  }`}></div>
                </button>
              </div>
              <p className="text-sm text-[rgba(102,102,102,1)] leading-relaxed">
                {t.marketingCookiesDescription}
              </p>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="flex flex-col sm:flex-row gap-3 p-6 border-t border-gray-200">
          <button
            onClick={handleRejectAll}
            className="flex-1 px-4 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors font-medium"
          >
            {t.rejectAll}
          </button>
          <button
            onClick={handleAcceptSelected}
            className="flex-1 px-4 py-3 border border-[rgba(250,111,64,1)] text-[rgba(250,111,64,1)] rounded-lg hover:bg-orange-50 transition-colors font-medium"
          >
            {t.acceptSelected}
          </button>
          <button
            onClick={handleAcceptAll}
            className="flex-1 px-4 py-3 bg-[rgba(250,111,64,1)] text-white rounded-lg hover:opacity-90 transition-opacity font-medium"
          >
            {t.acceptAll}
          </button>
        </div>
      </div>
    </div>
  );
};

export default CookieSettings;
