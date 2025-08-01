// import React, { useContext, useState, useEffect } from "react";
// // import { useNavigate } from "react-router-dom";
// import { Language, Translations, translations, LanguageContext } from "./i18n";

// // Create a hook to use the language context
// export const useLanguage = () => useContext(LanguageContext);

// // Create a provider component
// export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
//   // Try to get the stored language preference or default to 'fr' (French)
//   const [language, setLanguageState] = useState<Language>(() => {
//     const storedLanguage = localStorage.getItem('language');

//     // Default to French if no stored language, otherwise use stored preference
//     return (storedLanguage === 'en' || storedLanguage === 'fr') ? storedLanguage as Language : 'fr';
//   });

//   // const navigate = useNavigate();

//   // Debug log for initial language
//   console.log("[LanguageProvider] Initial language:", language);
//   console.log("[LanguageProvider] Stored language:", localStorage.getItem('language'));

//   // Function to update the language
//   const setLanguage = (lang: Language) => {
//     // For both languages, use the current React application
//     setLanguageState(lang);
//     // const newPath = lang === 'en' ? '/en' : '/fr';
//     // navigate(newPath, { replace: true }); // replace: true avoids pushing to history
//   };


//   // Store the language preference and log updates
//   useEffect(() => {
//     console.log("[LanguageProvider] useEffect - language changed to:", language);
//     localStorage.setItem('language', language);

//     // Log all current translation keys for debugging
//     console.log("[LanguageProvider] All translation keys:", Object.keys(translations[language]));

//     // This would trigger a full re-render when language changes
//     document.documentElement.setAttribute('lang', language);
    
//   }, [language]);

//   // Check if all translation keys are valid
//   useEffect(() => {
//     console.log("[LanguageProvider] Checking translation completeness");
//     const englishKeys = Object.keys(translations.en);
//     const frenchKeys = Object.keys(translations.fr);

//     const missingInFrench = englishKeys.filter(key => !frenchKeys.includes(key));
//     if (missingInFrench.length > 0) {
//       console.warn("[LanguageProvider] Missing translation keys in French:", missingInFrench);
//     }

//     const extraInFrench = frenchKeys.filter(key => !englishKeys.includes(key));
//     if (extraInFrench.length > 0) {
//       console.warn("[LanguageProvider] Extra keys in French not in English:", extraInFrench);
//     }

//     // Add additional check for nested translation objects
//     englishKeys.forEach(key => {
//       const enValue = (translations.en as unknown)[key];
//       const frValue = (translations.fr as unknown)[key];

//       if (typeof enValue === 'object' && enValue !== null && !Array.isArray(enValue)) {
//         console.log(`[LanguageProvider] Checking nested object: ${key}`);
//         const enSubKeys = Object.keys(enValue);
//         const frSubKeys = frValue ? Object.keys(frValue) : [];

//         const missingSubkeys = enSubKeys.filter(subkey => !frSubKeys.includes(subkey));
//         if (missingSubkeys.length > 0) {
//           console.warn(`[LanguageProvider] Missing nested keys in French for ${key}:`, missingSubkeys);
//         }
//       }
//     });
//   }, []);

//   // Create a value object
//   const value = {
//     language,
//     setLanguage,
//     t: translations[language],
//   };

//   return (
//     <LanguageContext.Provider value={value}>
//       {children}
//     </LanguageContext.Provider>
//   );
// };
import React, { useContext, useState, useEffect } from "react";
import { Language, translations, LanguageContext } from "./i18n";

const COOKIE_NAME = "language";
const COOKIE_MAX_AGE = 60 * 60 * 24 * 365; // 1 year

// Helpers (client-side only)
function getLanguageFromCookie(): Language | null {
  if (typeof document === "undefined") return null;
  const match = document.cookie.match(new RegExp(`(?:^|; )${COOKIE_NAME}=(en|fr)(?=;|$)`));
  return match ? (match[1] as Language) : null;
}

function setLanguageCookie(lang: Language) {
  if (typeof document === "undefined") return;
  document.cookie = `${COOKIE_NAME}=${lang};path=/;max-age=${COOKIE_MAX_AGE};SameSite=lax`;
}

// Hook to consume
export const useLanguage = () => useContext(LanguageContext);

// Provider props allow injecting server-determined initialLanguage
export const LanguageProvider: React.FC<{
  children: React.ReactNode;
  initialLanguage?: Language;
}> = ({ children, initialLanguage }) => {
  // Initialize from (1) passed initialLanguage, (2) cookie, or fallback to 'fr'
  const [language, setLanguageState] = useState<Language>(() => {
    if (initialLanguage === "en" || initialLanguage === "fr") return initialLanguage;
    const fromCookie = getLanguageFromCookie();
    if (fromCookie === "en" || fromCookie === "fr") return fromCookie;
    return "fr";
  });

  // Sync changes: update cookie and html lang attribute
  useEffect(() => {
    setLanguageCookie(language);
    if (typeof document !== "undefined") {
      document.documentElement.setAttribute("lang", language);
    }

    // Debug (optional, can remove in production)
    console.log("[LanguageProvider] language set to:", language);
    console.log("[LanguageProvider] translation keys:", Object.keys(translations[language]));
  }, [language]);

  // One-time translation completeness check
  useEffect(() => {
    const englishKeys = Object.keys(translations.en);
    const frenchKeys = Object.keys(translations.fr);

    const missingInFrench = englishKeys.filter((key) => !frenchKeys.includes(key));
    if (missingInFrench.length > 0) {
      console.warn("[LanguageProvider] Missing translation keys in French:", missingInFrench);
    }

    const extraInFrench = frenchKeys.filter((key) => !englishKeys.includes(key));
    if (extraInFrench.length > 0) {
      console.warn("[LanguageProvider] Extra keys in French not in English:", extraInFrench);
    }

    // Nested object check
    englishKeys.forEach((key) => {
      const enValue = (translations.en as any)[key];
      const frValue = (translations.fr as any)[key];

      if (typeof enValue === "object" && enValue !== null && !Array.isArray(enValue)) {
        const enSubKeys = Object.keys(enValue);
        const frSubKeys = frValue ? Object.keys(frValue) : [];

        const missingSubkeys = enSubKeys.filter((subkey) => !frSubKeys.includes(subkey));
        if (missingSubkeys.length > 0) {
          console.warn(
            `[LanguageProvider] Missing nested keys in French for ${key}:`,
            missingSubkeys
          );
        }
      }
    });
  }, []);

  const setLanguage = (lang: Language) => {
    if (lang === "en" || lang === "fr") {
      setLanguageState(lang);
    }
  };

  const value = {
    language,
    setLanguage,
    t: translations[language] as any,
  };

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
};
