import React, { useEffect } from "react";

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  ogImage?: string;
  ogUrl?: string;
  structuredData?: any;
}

const SEO: React.FC<SEOProps> = ({
  title = "STYLY - AI-Powered Interior & Exterior Design Platform",
  description = "STYLY is an AI-powered interior and exterior design platform that transforms empty spaces into beautifully furnished, realistic visuals. Upload a photo or describe your desired space without complex prompting or technical expertise. Ideal for real estate, renovations, and retail.",
  keywords = "AI interior design, AI exterior design, virtual staging, real estate visualization, AI home design, interior design app, styly, styly.io, renovation planning, AI-powered design, property marketing, interior design tool, real estate marketing, B2B design solutions, B2C design solutions",
  ogImage = "https://cdn.builder.io/api/v1/image/assets/a22916bd9acc4a4986d78d713f5de3db/f99e29783a6ec2e80cc53da0266b73b066b99df2",
  ogUrl = "https://styly.io",
  structuredData,
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
    // Set document title
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
    setMetaTag('viewport', 'width=device-width, initial-scale=1.0');
    
    // Set Open Graph tags
    setMetaTag('og:title', title, 'og:title');
    setMetaTag('og:description', description, 'og:description');
    setMetaTag('og:image', ogImage, 'og:image');
    setMetaTag('og:url', ogUrl, 'og:url');
    setMetaTag('og:type', 'website', 'og:type');
    
    // Set Twitter Card tags
    setMetaTag('twitter:card', 'summary_large_image');
    setMetaTag('twitter:title', title);
    setMetaTag('twitter:description', description);
    setMetaTag('twitter:image', ogImage);
    
    // Set canonical URL
    let canonicalLink = document.querySelector('link[rel="canonical"]');
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.setAttribute('href', ogUrl);
    
    // Set structured data
    let scriptElement = document.querySelector('script[type="application/ld+json"]');
    if (!scriptElement) {
      scriptElement = document.createElement('script');
      scriptElement.setAttribute('type', 'application/ld+json');
      document.head.appendChild(scriptElement);
    }
    scriptElement.textContent = JSON.stringify(jsonLd);
    
    // Set additional meta tags
    setMetaTag('robots', 'index, follow');
    setMetaTag('language', 'English');
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
    
    // Cleanup function when component unmounts
    return () => {
      // We don't actually remove meta tags on cleanup as it may affect other pages
      // This is intentional to avoid flickering when navigating between pages
    };
  }, [title, description, keywords, ogImage, ogUrl, jsonLd]);

  // This component doesn't render anything visible
  return null;
};

export default SEO; 