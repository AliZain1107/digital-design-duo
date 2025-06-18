import React, { useEffect } from "react";
import { SITE_CONFIG } from "@/lib/config";

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  ogImage?: string;
  ogUrl?: string;
  structuredData?: any;
  datePublished?: string;
  dateModified?: string;
  category?: string;
  tags?: string[];
  language?: "en" | "fr";
  alternateUrls?: {
    en?: string;
    fr?: string;
  };
}

/**
 * Advanced SEO Component for optimal search engine optimization
 * Implements comprehensive meta tags, structured data, and Open Graph protocol
 */
const SEO: React.FC<SEOProps> = ({
  title = "STYLY - AI-Powered Interior & Exterior Design Platform",
  description = "STYLY is an AI-powered interior and exterior design platform that transforms empty spaces into beautifully furnished, realistic visuals. Upload a photo or describe your desired space without complex prompting or technical expertise. Ideal for real estate, renovations, and retail.",
  keywords = "AI interior design, AI exterior design, virtual staging, real estate visualization, AI home design, interior design app, styly, styly.fr, renovation planning, AI-powered design, property marketing, interior design tool, real estate marketing, B2B design solutions, B2C design solutions",
  ogImage = "https://cdn.builder.io/api/v1/image/assets/a22916bd9acc4a4986d78d713f5de3db/f99e29783a6ec2e80cc53da0266b73b066b99df2",
  ogUrl = SITE_CONFIG.baseUrl,
  structuredData,
  datePublished = "2024-01-01",
  dateModified = "2024-08-01",
  category = "Interior Design",
  tags = ["AI design", "interior design", "real estate", "virtual staging"],
  language = "en",
  alternateUrls
}) => {
  const defaultStructuredData = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "STYLY",
    "applicationCategory": "DesignApplication",
    "operatingSystem": "Web, iOS, Android",
    "description": description,
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD",
      "availability": "https://schema.org/InStock"
    },
    "screenshot": ogImage,
    "featureList": "AI interior design, Virtual staging, Real estate visualization, WhatsApp integration, Mobile app, Web platform",
    "url": ogUrl,
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "ratingCount": "256",
      "bestRating": "5",
      "worstRating": "1"
    },
    "author": {
      "@type": "Organization",
      "name": "STYLY",
      "url": ogUrl
    }
  };

  const jsonLd = structuredData || defaultStructuredData;

  useEffect(() => {
    // Set document title with optimized format
    document.title = title;

    // Helper function to create or update meta tags
    const setMetaTag = (name: string, content: string, property?: string) => {
      // Try to find existing tag first
      let element = property
        ? document.querySelector(`meta[property="${property}"]`)
        : document.querySelector(`meta[name="${name}"]`);

      // If tag doesn't exist, create it
      if (!element) {
        element = document.createElement('meta');
        if (property) {
          element.setAttribute('property', property);
        } else {
          element.setAttribute('name', name);
        }
        document.head.appendChild(element);
      }

      // Set the content
      element.setAttribute('content', content);
    };

    // Set basic meta tags
    setMetaTag('description', description);
    setMetaTag('keywords', keywords);
    setMetaTag('viewport', 'width=device-width, initial-scale=1.0, maximum-scale=5.0');

    // Set Open Graph tags
    setMetaTag('og:title', title, 'og:title');
    setMetaTag('og:description', description, 'og:description');
    setMetaTag('og:image', ogImage, 'og:image');
    setMetaTag('og:image:width', '1200', 'og:image:width');
    setMetaTag('og:image:height', '630', 'og:image:height');
    setMetaTag('og:image:alt', 'STYLY.fr AI Interior Design Platform Screenshot', 'og:image:alt');
    setMetaTag('og:url', ogUrl, 'og:url');
    setMetaTag('og:type', 'website', 'og:type');
    setMetaTag('og:site_name', 'STYLY.fr', 'og:site_name');

    // Set locale based on language
    const locale = language === "fr" ? "fr_FR" : "en_US";
    setMetaTag('og:locale', locale, 'og:locale');

    // Add alternate locale
    const alternateLocale = language === "fr" ? "en_US" : "fr_FR";
    setMetaTag('og:locale:alternate', alternateLocale, 'og:locale:alternate');

    // Set Twitter Card tags
    setMetaTag('twitter:card', 'summary_large_image');
    setMetaTag('twitter:site', '@StylyDesign');
    setMetaTag('twitter:creator', '@StylyDesign');
    setMetaTag('twitter:title', title);
    setMetaTag('twitter:description', description);
    setMetaTag('twitter:image', ogImage);
    setMetaTag('twitter:image:alt', 'STYLY.fr AI Interior Design Platform');

    // Set canonical URL
    let canonicalLink = document.querySelector('link[rel="canonical"]');
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.setAttribute('href', ogUrl);

    // Set hreflang attributes for multilingual support
    if (alternateUrls) {
      // Remove existing hreflang links
      const existingHreflangs = document.querySelectorAll('link[hreflang]');
      existingHreflangs.forEach(link => link.remove());

      // Add new hreflang links
      Object.entries(alternateUrls).forEach(([lang, url]) => {
        if (url) {
          const hreflangLink = document.createElement('link');
          hreflangLink.rel = 'alternate';
          hreflangLink.hreflang = lang;
          hreflangLink.href = url;
          document.head.appendChild(hreflangLink);
        }
      });

      // Add x-default hreflang (usually points to English version)
      if (alternateUrls.en) {
        const defaultLink = document.createElement('link');
        defaultLink.rel = 'alternate';
        defaultLink.hreflang = 'x-default';
        defaultLink.href = alternateUrls.en;
        document.head.appendChild(defaultLink);
      }
    }

    // Set structured data
    let scriptElement = document.querySelector('script[type="application/ld+json"]');
    if (!scriptElement) {
      scriptElement = document.createElement('script');
      scriptElement.setAttribute('type', 'application/ld+json');
      document.head.appendChild(scriptElement);
    }
    scriptElement.textContent = JSON.stringify(jsonLd);

    // Set additional meta tags
    setMetaTag('robots', 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1');
    setMetaTag('language', language === "fr" ? "French" : "English");
    setMetaTag('author', 'STYLY');
    setMetaTag('theme-color', '#593286');
    setMetaTag('application-name', 'STYLY');
    setMetaTag('apple-mobile-web-app-title', 'STYLY');
    setMetaTag('apple-mobile-web-app-capable', 'yes');

    // Improved SEO tags for discovery
    setMetaTag('msapplication-TileColor', '#593286');
    setMetaTag('msapplication-config', '/browserconfig.xml');
    setMetaTag('format-detection', 'telephone=no');

    // Improved mobile experience tags
    setMetaTag('mobile-web-app-capable', 'yes');
    setMetaTag('apple-mobile-web-app-status-bar-style', 'default');

    // Add article-specific tags if applicable
    setMetaTag('article:publisher', 'https://facebook.com/StylyDesign', 'article:publisher');
    setMetaTag('article:published_time', datePublished, 'article:published_time');
    setMetaTag('article:modified_time', dateModified, 'article:modified_time');

    // Add category and tags
    setMetaTag('article:section', category, 'article:section');
    tags.forEach((tag, index) => {
      setMetaTag(`article:tag:${index}`, tag, `article:tag:${index}`);
    });

    // Add alternate language versions if available
    const addAlternateLanguageLink = (lang: string, url: string) => {
      let linkElement = document.querySelector(`link[hreflang="${lang}"]`);
      if (!linkElement) {
        linkElement = document.createElement('link');
        linkElement.setAttribute('rel', 'alternate');
        linkElement.setAttribute('hreflang', lang);
        document.head.appendChild(linkElement);
      }
      linkElement.setAttribute('href', url);
    };

    // Clear existing hreflang links to avoid duplicates
    const existingHreflangs = document.querySelectorAll('link[hreflang]');
    existingHreflangs.forEach(link => link.remove());

    // Add hreflang links for current page
    if (alternateUrls) {
      if (alternateUrls.en) {
        addAlternateLanguageLink('en', alternateUrls.en);
      }
      if (alternateUrls.fr) {
        addAlternateLanguageLink('fr', alternateUrls.fr);
      }
    } else {
      // Default hreflang for homepage and other pages
      const baseUrl = ogUrl.replace(/\/(en|fr)$/, '');
      addAlternateLanguageLink('en', `${baseUrl}/en`);
      addAlternateLanguageLink('fr', `${baseUrl}/fr`);
    }

    // Add x-default hreflang (points to default language)
    addAlternateLanguageLink('x-default', alternateUrls?.en || `${ogUrl.replace(/\/(en|fr)$/, '')}/en`);

    // Add link preconnect for performance optimization
    const addPreconnect = (url: string, crossorigin: boolean = false) => {
      let linkElement = document.querySelector(`link[rel="preconnect"][href="${url}"]`);
      if (!linkElement) {
        linkElement = document.createElement('link');
        linkElement.setAttribute('rel', 'preconnect');
        linkElement.setAttribute('href', url);
        if (crossorigin) {
          linkElement.setAttribute('crossorigin', '');
        }
        document.head.appendChild(linkElement);
      }
    };

    // Common domains to preconnect for performance
    addPreconnect('https://cdn.builder.io');
    addPreconnect('https://fonts.googleapis.com');
    addPreconnect('https://fonts.gstatic.com', true);

    // Cleanup function when component unmounts
    return () => {
      // We don't actually remove meta tags on cleanup as it may affect other pages
      // This is intentional to avoid flickering when navigating between pages
    };
  }, [title, description, keywords, ogImage, ogUrl, jsonLd, datePublished, dateModified, category, tags, language, alternateUrls]);

  // This component doesn't render anything visible
  return null;
};

export default SEO;