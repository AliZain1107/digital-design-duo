import React, { useEffect, useContext } from "react";
import { useLocation } from "react-router-dom";
import BlogSection from "@/components/home/BlogSection";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import SEO from "@/components/layout/SEO";
import { LanguageContext, Language } from "@/lib/i18n";

const Blog = () => {
  const { language } = useContext(LanguageContext);
  const location = useLocation();

  // Scroll to top when component mounts or language changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [language]);

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
  const currentUrl = language === "fr" ? "https://www.styly.fr/blog" : "https://www.styly.fr/en/blog";

  const alternateUrls = {
    en: "https://www.styly.fr/en/blog",
    fr: "https://www.styly.fr/blog"
  };

  return (
    <div key={`blog-${language}`}>
      <SEO
        title={currentMeta.title}
        description={currentMeta.description}
        keywords={currentMeta.keywords}
        ogUrl={currentUrl}
        language={language}
        alternateUrls={alternateUrls}
      />
      <Navbar />
      <div className="pb-16 md:pb-20 lg:pb-24">
        <BlogSection variant="blog-page" />
      </div>
      <Footer />
    </div>
  );
};

export default Blog;
