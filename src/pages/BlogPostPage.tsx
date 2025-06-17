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
      // Redirect English blog post routes to external site
      console.log("English blog post route detected, redirecting to external site");
      window.location.href = `https://www.styly.io/blog/${slug}`;
      return;
    } else {
      // For legacy /blog routes, detect language from slug
      const foundPost = blogPosts.find((post) => post.slug === slug || post.slugFr === slug);
      if (foundPost && foundPost.slugFr === slug) {
        pathLang = "fr";
      } else {
        // If it's an English slug, redirect to external site
        console.log("English blog post slug detected, redirecting to external site");
        window.location.href = `https://www.styly.io/blog/${slug}`;
        return;
      }
    }
    setLanguage(pathLang);
  }, [location.pathname, slug, setLanguage]);

  // Additional effect to handle language changes via language switcher
  useEffect(() => {
    // If language is switched to English while on blog post page, redirect to external blog
    if (language === "en") {
      console.log("Language switched to English on blog post page, redirecting to external blog");
      window.location.href = `https://www.styly.io/blog/${slug}`;
    }
  }, [language, slug]);

  // Scroll to top when component mounts or slug changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

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
    if (post.slug === "impact-ai-role-interior-designer") {
      return t.impactAIInteriorDesignerTitle;
    }
    if (post.slug === "intersection-ai-virtual-reality-design") {
      return t.aiVirtualRealityDesignTitle;
    }
    if (post.slug === "ai-accessible-design-inclusive-spaces") {
      return t.aiAccessibleDesignTitle;
    }
    if (post.slug === "role-data-ai-powered-design") {
      return t.dataAIPoweredDesignTitle;
    }
    if (post.slug === "modern-family-design-ai-functional-homes") {
      return t.modernFamilyDesignTitle;
    }
    if (post.slug === "sustainable-design-ai-eco-friendly-spaces") {
      return t.sustainableDesignAITitle;
    }
    if (post.slug === "ai-space-planning-optimization-small-apartments") {
      return t.aiSpacePlanningSmallApartmentsTitle;
    }
    if (post.slug === "creating-biophilic-interior-designs-styly-ai") {
      return t.biophilicDesignAITitle;
    }
    if (post.slug === "science-color-design-ai-perfect-palette") {
      return t.scienceColorDesignTitle;
    }
    if (post.slug === "reducing-carbon-footprints-sustainable-landscapes-ai") {
      return t.sustainableLandscapesAITitle;
    }
    if (post.slug === "ai-landscape-design-outdoor-spaces-styly") {
      return t.aiLandscapeDesignTitle;
    }
    if (post.slug === "cultural-interior-design-ai-sensitive-spaces") {
      return t.culturalDesignAITitle;
    }
    if (post.slug === "texture-importance-interior-design-styly") {
      return t.textureImportanceDesignTitle;
    }
    if (post.slug === "top-5-challenges-interior-design-ai-solutions") {
      return t.top5ChallengesInteriorDesignTitle;
    }
    if (post.slug === "ai-future-commercial-interior-design") {
      return t.commercialInteriorDesignAITitle;
    }
    if (post.slug === "creating-outdoor-spaces-ai-design-guide") {
      return t.creatingOutdoorSpacesAITitle;
    }
    if (post.slug === "cost-effectiveness-ai-design-styly-savings") {
      return t.costEffectivenessAIDesignTitle;
    }
    if (post.slug === "transforming-small-living-spaces-design-solutions") {
      return t.transformingSmallLivingSpacesTitle;
    }
    if (post.slug === "ai-driven-customization-future-interior-design") {
      return t.aiDrivenCustomizationFutureTitle;
    }
    if (post.slug === "residential-interior-design-guide-planning-spaces") {
      return t.residentialInteriorDesignGuideTitle;
    }
    if (post.slug === "futuristic-interior-design-styles-styly-ai") {
      return t.futuristicInteriorDesignStylesTitle;
    }
    if (post.slug === "room-planner-ai-sarah-johnson-styly-evaluations") {
      return t.roomPlannerAISarahJohnsonEvaluationsTitle;
    }
    if (post.slug === "innovative-interior-stair-railing-ideas-styly-ai") {
      return t.innovativeStairRailingIdeasTitle;
    }
    if (post.slug === "design-living-room-like-pro-styly") {
      return t.designLivingRoomLikeProTitle;
    }
    if (post.slug === "designing-future-workspace-ai-powered-office-interiors") {
      return t.futureWorkspaceAIOfficeInteriorsTitle;
    }
    if (post.slug === "futuristic-interior-design-styles-styly-ai") {
      return t.futuristicInteriorDesignStylesTitle;
    }
    if (post.slug === "room-planner-ai-sarah-johnson-styly-evaluations") {
      return t.roomPlannerAISarahJohnsonEvaluationsTitle;
    }
    if (post.slug === "transforming-small-living-spaces-design-solutions") {
      return t.transformingSmallLivingSpacesTitle;
    }
    if (post.slug === "designing-ai-interior-staging-aws-styly") {
      return t.newBlog2Title;
    }
    if (post.slug === "styly-viva-technology-future-ai-design") {
      return t.stylyVivaTechPartnershipTitle;
    }
    if (post.slug === "can-chatgpt-design-your-home-ai-interior-design") {
      return t.chatGPTInteriorDesignTitle;
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

        <post.Component />
      </div>
    </div>
  );
};

export default BlogPostPage;
