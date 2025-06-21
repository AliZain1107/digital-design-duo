import React from "react";
import { Link } from "react-router-dom";
import { useLanguage } from "@/lib/i18n";
import { blogPosts } from "@/components/data/blogPosts";
import type { BlogPost } from "@/components/data/blogPosts";

const BlogPostCard: React.FC<{ post: BlogPost }> = ({ post }) => {
  const { t, language } = useLanguage();

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
    if (post.slug === "designing-future-workspace-ai-powered-office-interiors") {
      return t.futureWorkspaceAIOfficeInteriorsTitle;
    }
    if (post.slug === "futuristic-interior-design-styles-styly-ai") {
      return t.futuristicInteriorDesignStylesTitle;
    }
    if (post.slug === "room-planner-ai-sarah-johnson-styly-evaluations") {
      return t.roomPlannerAISarahJohnsonEvaluationsTitle;
    }
    if (post.slug === "designing-ai-interior-staging-aws-styly") {
      return t.newBlog2Title;
    }
    if (post.slug === "ai-driven-customization-future-interior-design") {
      return t.aiDrivenCustomizationFutureTitle;
    }
    if (post.slug === "residential-interior-design-guide-planning-spaces") {
      return t.residentialInteriorDesignGuideTitle;
    }
    if (post.slug === "innovative-interior-stair-railing-ideas-styly-ai") {
      return t.innovativeStairRailingIdeasTitle;
    }
    if (post.slug === "design-living-room-like-pro-styly") {
      return t.designLivingRoomLikeProTitle;
    }
    if (post.slug === "how-generative-ai-revolutionizing-interior-design") {
      return t.generativeAIRevolutionizingDesignTitle;
    }
    if (post.slug === "ai-assistant-interior-design-chatgpt-prompts") {
      return t.aiAssistantInteriorDesignPromptsTitle;
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

  // Get the appropriate slug based on language
  const getSlug = () => {
    if (language === "fr" && post.slugFr) {
      return post.slugFr;
    }
    return post.slug;
  };

  // Generate language-specific URL
  const getBlogUrl = () => {
    const slug = getSlug();
    if (language === "fr") {
      return `/blog/${slug}`;
    } else {
      return `/en/blog/${slug}`;
    }
  };

  return (
    <Link
      to={getBlogUrl()}
      className="bg-white shadow-sm rounded-[16px] w-full max-w-[380px] overflow-hidden flex flex-col hover:shadow-md transition-shadow duration-300"
    >
      {/* Smaller, responsive image container */}
      <div className="h-[160px] sm:h-[180px] w-full bg-white flex items-center justify-center p-3">
        <img
          src={post.image}
          alt={getTranslatedTitle()}
          className="w-full h-[140px] sm:h-[160px] object-cover rounded-[8px]"
          />
      </div>

      {/* Text content */}
      <div className="flex flex-col px-3 py-3">
        <h3 className="text-[18px] sm:text-[20px] font-bold text-[#333] leading-[1.4] line-clamp-2">
          {getTranslatedTitle()}
        </h3>
        <p className="text-[10px] sm:text-[11px] text-[#999] tracking-wide mt-2">{post.date}</p>
      </div>
    </Link>
  );
};

interface BlogSectionProps {
  maxPosts?: number; // Optional prop to limit number of posts shown
}

const BlogSection: React.FC<BlogSectionProps> = ({ maxPosts }) => {
  const { t, language } = useLanguage();

  // Function to parse date string and convert to Date object for sorting
  const parseDate = (dateString: string): Date => {
    // Handle different date formats
    const date = new Date(dateString);
    return date;
  };

  // Sort blog posts by date (most recent first) and optionally limit the number
  const sortedBlogPosts = [...blogPosts]
    .sort((a, b) => parseDate(b.date).getTime() - parseDate(a.date).getTime());

  const displayedBlogPosts = maxPosts ? sortedBlogPosts.slice(0, maxPosts) : sortedBlogPosts;

  return (
    <section className="relative pt-0 pb-0 bg-white overflow-hidden -mt-2" key={`blog-section-${language}`}> 
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Premium Header - match AgencyShowcase */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-baloo font-extrabold tracking-tight leading-tight text-gray-900 mb-4 text-center font-baloo">
            <span className="bg-gradient-to-r from-[#593286] via-purple-400 to-[#FA6F40] bg-[length:200%_200%] bg-clip-text text-transparent animate-gradient-x">
              {t.blogTrends}
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed font-baloo">
            {t.blogDescription}
          </p>
        </div>
        <div className="flex items-center justify-center mt-0 mb-0">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-5 md:gap-6 w-full max-w-6xl px-4">
            {displayedBlogPosts.map((post) => (
              <BlogPostCard key={post.id} post={post} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
