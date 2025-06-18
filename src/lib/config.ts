/**
 * Centralized configuration for domain and URL management
 */

export const SITE_CONFIG = {
  // Primary domain configuration
  domain: 'www.styly.fr',
  baseUrl: 'https://www.styly.fr',
  
  // Application URLs
  appUrl: 'https://app.styly.io', // Keep app on styly.io for now
  
  // Social media
  twitter: '@StylyDesign',
  facebook: 'https://facebook.com/StylyDesign',
  
  // Site metadata
  siteName: 'STYLY',
  siteDescription: 'STYLY is an AI-powered interior and exterior design platform that transforms empty spaces into beautifully furnished, realistic visuals.',
  
  // Generate full URLs for pages
  getPageUrl: (path: string = '', language?: string) => {
    const cleanPath = path.startsWith('/') ? path.slice(1) : path;
    const langPrefix = language && language !== 'en' ? `/${language}` : '';
    return `${SITE_CONFIG.baseUrl}${langPrefix}${cleanPath ? `/${cleanPath}` : ''}`;
  },
  
  // Generate alternate language URLs
  getAlternateUrls: (path: string = '') => {
    const cleanPath = path.startsWith('/') ? path.slice(1) : path;
    return {
      en: `${SITE_CONFIG.baseUrl}${cleanPath ? `/${cleanPath}` : ''}`,
      fr: `${SITE_CONFIG.baseUrl}/fr${cleanPath ? `/${cleanPath}` : ''}`
    };
  }
};

export default SITE_CONFIG;
