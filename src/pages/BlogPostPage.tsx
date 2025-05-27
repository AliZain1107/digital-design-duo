import React, { useEffect, useContext } from "react";
import { useParams, useLocation } from "react-router-dom";
import Navbar from "@/components/layout/Navbar";
import SEO from "@/components/layout/SEO";
import { blogPosts } from "@/components/data/blogPosts";
import { LanguageContext, Language } from "@/lib/i18n";

const BlogPostPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const { language, setLanguage, t } = useContext(LanguageContext);
  const location = useLocation();

  useEffect(() => {
    // Detect language from URL path
    let pathLang: Language;
    if (location.pathname.startsWith("/fr/blog") || location.pathname.startsWith("/fr")) {
      pathLang = "fr";
    } else if (location.pathname.startsWith("/en/blog") || location.pathname.startsWith("/en")) {
      pathLang = "en";
    } else {
      // For legacy /blog routes, detect language from slug
      const foundPost = blogPosts.find((post) => post.slug === slug || post.slugFr === slug);
      if (foundPost && foundPost.slugFr === slug) {
        pathLang = "fr";
      } else {
        pathLang = "en";
      }
    }
    setLanguage(pathLang);
  }, [location.pathname, slug, setLanguage]);

  // Find the blog post by slug (check both English and French slugs)
  const post = blogPosts.find((post) =>
    post.slug === slug || post.slugFr === slug
  );

  if (!post) {
    return <div>Blog post not found.</div>;
  }

  // Get the translated title for specific blog posts
  const getTranslatedTitle = () => {
    if (post.slug === "revolutionizing-architecture-engineering-construction-ai") {
      return t.revolutionizingArchitectureTitle;
    }
    if (post.slug === "2025-interior-design-trends") {
      return t.interiorTrends2025Title;
    }
    if (post.slug === "free-ai-interior-design-software") {
      return t.freeAIDesignTitle;
    }
    if (post.slug === "real-estate-agents-ai-virtual-staging") {
      return t.realEstateAgentsAIVirtualStagingTitle;
    }
    if (post.slug === "gen-z-instagram-worthy-interiors") {
      return t.genZInstagramWorthyInteriorsTitle;
    }
    if (post.slug === "build-house-ai-tools-porch-design") {
      return t.buildHouseAIToolsPorchDesignTitle;
    }
    if (post.slug === "ultimate-guide-AI") {
      return t.ultimateGuideAIInteriorDesignTitle;
    }
    if (post.slug === "AI-Bedroom") {
      return t.eightStunningAIBedroomDesignsTitle;
    }
    if (post.slug === "AI-Interior") {
      return t.expertTipsHomeInteriorsTitle;
    }
    if (post.slug === "6-viral-ai-room-design-prompts-create-dream-bedroom-styly") {
      return t.viralAIRoomDesignPromptsTitle;
    }
    // For other blog posts, use the original title
    return post.title;
  };

  // Generate SEO data for the blog post
  const currentSlug = language === "fr" && post.slugFr ? post.slugFr : post.slug;
  const alternateSlug = language === "fr" ? post.slug : post.slugFr;

  const currentUrl = language === "fr"
    ? `https://styly.io/fr/blog/${currentSlug}`
    : `https://styly.io/en/blog/${currentSlug}`;

  const alternateUrls = {
    en: `https://styly.io/en/blog/${post.slug}`,
    fr: post.slugFr ? `https://styly.io/fr/blog/${post.slugFr}` : undefined
  };

  // Basic SEO metadata (individual blog posts may override this with their own Helmet)
  const seoTitle = `${getTranslatedTitle()} | Styly.io`;
  const seoDescription = language === "fr"
    ? `Découvrez ${getTranslatedTitle().toLowerCase()} avec Styly.io. Conseils et tendances en design intérieur IA.`
    : `Discover ${getTranslatedTitle().toLowerCase()} with Styly.io. AI interior design tips and trends.`;

  return (
    <div>
      <SEO
        title={seoTitle}
        description={seoDescription}
        ogUrl={currentUrl}
        language={language}
        alternateUrls={alternateUrls}
        ogImage={post.image}
      />
      <Navbar />
      <div className="max-w-5xl mx-auto p-4 sm:p-6 lg:p-10">
        <h1 className="text-xl text-center text-gray-800 font-semibold mb-4 mt-10">
          {getTranslatedTitle()}
        </h1>
        <p className="text-xl text-center text-gray-800 mb-5">
          {post.date}
        </p>
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-[350px] rounded-3xl mb-4 block rounded-inherit object-center object-cover p-4"
        />
        <post.Component />
      </div>
    </div>
  );
};

export default BlogPostPage;
