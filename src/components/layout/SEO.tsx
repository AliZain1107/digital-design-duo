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
  title = "STYLY - AI Design Tool for Modern Spaces",
  description = "Redesign empty rooms into styled, market-ready interiors for real estate, renovation, and retail. No tools, no downloads. Just results.",
  keywords = "AI design, interior design, room design, real estate visualization, renovation planning, AI home design",
  ogImage = "https://cdn.builder.io/api/v1/image/assets/a22916bd9acc4a4986d78d713f5de3db/f99e29783a6ec2e80cc53da0266b73b066b99df2",
  ogUrl = "https://styly.io",
  structuredData,
}) => {
  const defaultStructuredData = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": "STYLY",
    "applicationCategory": "DesignApplication",
    "operatingSystem": "Web",
    "description": description,
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD",
      "availability": "https://schema.org/InStock"
    },
    "screenshot": ogImage,
    "featureList": "AI interior design, Real estate visualization, Home renovation planning",
    "url": ogUrl
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