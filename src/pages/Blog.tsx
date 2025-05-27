import React, { useEffect, useContext } from "react";
import { useLocation } from "react-router-dom";
import BlogSection from "@/components/home/BlogSection";
import Navbar from "@/components/layout/Navbar";
import SEO from "@/components/layout/SEO";
import { LanguageContext, Language } from "@/lib/i18n";

const Blog = () => {
  const { language, setLanguage } = useContext(LanguageContext);
  const location = useLocation();

  useEffect(() => {
    // Detect language from URL path
    let pathLang: Language;
    if (location.pathname.startsWith("/fr/blog") || location.pathname.startsWith("/fr")) {
      pathLang = "fr";
    } else if (location.pathname.startsWith("/en/blog") || location.pathname.startsWith("/en")) {
      pathLang = "en";
    } else {
      // Default to French for legacy /blog routes
      pathLang = "fr";
    }
    setLanguage(pathLang);
  }, [location.pathname, setLanguage]);

  // SEO metadata based on language
  const seoMeta = {
    en: {
      title: "AI Interior Design Blog - Latest Trends & Tips | Styly.io",
      description: "Discover the latest AI interior design trends, tips, and insights. Learn how to transform your space with artificial intelligence and modern design techniques.",
      keywords: "AI interior design blog, design trends, interior design tips, AI home design, virtual staging, design inspiration"
    },
    fr: {
      title: "Blog Design Intérieur IA - Tendances & Conseils | Styly.io",
      description: "Découvrez les dernières tendances en design intérieur IA, conseils et insights. Apprenez à transformer votre espace avec l'intelligence artificielle.",
      keywords: "blog design intérieur IA, tendances design, conseils décoration, design maison IA, staging virtuel, inspiration design"
    }
  };

  const currentMeta = language === "fr" ? seoMeta.fr : seoMeta.en;
  const currentUrl = language === "fr" ? "https://styly.io/fr/blog" : "https://styly.io/en/blog";

  const alternateUrls = {
    en: "https://styly.io/en/blog",
    fr: "https://styly.io/fr/blog"
  };

  return (
    <div>
      <SEO
        title={currentMeta.title}
        description={currentMeta.description}
        keywords={currentMeta.keywords}
        ogUrl={currentUrl}
        language={language}
        alternateUrls={alternateUrls}
      />
      <Navbar />
      <BlogSection />
    </div>
  );
};

export default Blog;
