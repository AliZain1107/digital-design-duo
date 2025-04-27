import React, { useContext, useState, useEffect } from "react";
import { Language, Translations, translations, LanguageContext } from "./i18n";

// Create a hook to use the language context
export const useLanguage = () => useContext(LanguageContext);

// Create a provider component
export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // Try to get the stored language preference or default to 'en'
  const [language, setLanguageState] = useState<Language>(() => {
    const storedLanguage = localStorage.getItem('language');
    return (storedLanguage === 'en' || storedLanguage === 'fr') ? storedLanguage as Language : 'en';
  });

  // Debug log for initial language
  console.log("[LanguageProvider] Initial language:", language);
  console.log("[LanguageProvider] Initial translations:", translations[language]);

  // Function to update the language
  const setLanguage = (lang: Language) => {
    console.log("[LanguageProvider] Setting language to:", lang);
    console.log("[LanguageProvider] New translations will be:", translations[lang]);
    
    // Force a re-render by setting state
    setLanguageState(lang);
    
    // Additional logging for debugging
    console.log("[LanguageProvider] Language change initiated");
    
    // Force document re-render by triggering a custom event
    window.dispatchEvent(new CustomEvent('language-changed', { detail: lang }));
  };

  // Store the language preference and log updates
  useEffect(() => {
    console.log("[LanguageProvider] useEffect - language changed to:", language);
    console.log("[LanguageProvider] Current translations:", translations[language]);
    localStorage.setItem('language', language);
    
    // Log all current translation keys for debugging
    console.log("[LanguageProvider] All translation keys:", Object.keys(translations[language]));
    
    // This would trigger a full re-render when language changes
    document.documentElement.setAttribute('lang', language);
  }, [language]);

  // Check if all translation keys are valid
  useEffect(() => {
    console.log("[LanguageProvider] Checking translation completeness");
    const englishKeys = Object.keys(translations.en);
    const frenchKeys = Object.keys(translations.fr);
    
    const missingInFrench = englishKeys.filter(key => !frenchKeys.includes(key));
    if (missingInFrench.length > 0) {
      console.warn("[LanguageProvider] Missing translation keys in French:", missingInFrench);
    }
    
    const extraInFrench = frenchKeys.filter(key => !englishKeys.includes(key));
    if (extraInFrench.length > 0) {
      console.warn("[LanguageProvider] Extra keys in French not in English:", extraInFrench);
    }
    
    // Add additional check for nested translation objects
    englishKeys.forEach(key => {
      const enValue = (translations.en as any)[key];
      const frValue = (translations.fr as any)[key];
      
      if (typeof enValue === 'object' && enValue !== null && !Array.isArray(enValue)) {
        console.log(`[LanguageProvider] Checking nested object: ${key}`);
        const enSubKeys = Object.keys(enValue);
        const frSubKeys = frValue ? Object.keys(frValue) : [];
        
        const missingSubkeys = enSubKeys.filter(subkey => !frSubKeys.includes(subkey));
        if (missingSubkeys.length > 0) {
          console.warn(`[LanguageProvider] Missing nested keys in French for ${key}:`, missingSubkeys);
        }
      }
    });
  }, []);

  // Listen for language change events
  useEffect(() => {
    const handleLanguageChange = (event: Event) => {
      const customEvent = event as CustomEvent<Language>;
      console.log("[LanguageProvider] Received language change event:", customEvent.detail);
    };
    
    window.addEventListener('language-changed', handleLanguageChange);
    return () => {
      window.removeEventListener('language-changed', handleLanguageChange);
    };
  }, []);

  // Create a value object
  const value = {
    language,
    setLanguage,
    t: translations[language],
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}; 