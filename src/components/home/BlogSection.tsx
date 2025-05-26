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
    return `/${language}/blog/${slug}`;
  };

  return (
    <Link
      to={getBlogUrl()}
      className="bg-white shadow-md rounded-[20px] w-[431px] overflow-hidden flex flex-col max-md:max-w-full"
    >
      {/* Fixed-height image container with padding */}
      <div className="h-[220px] w-full bg-white flex items-center justify-center p-4">
        <img
          src={post.image}
          alt={getTranslatedTitle()}
          className="w-full h-[200px] object-fit rounded-[10px] max-md:max-w-full"
          />
      </div>

      {/* Text content */}
      <div className="flex flex-col px-4 py-3">
        <h3 className="text-[21px] font-bold text-[#333] leading-[1.4]">
          {getTranslatedTitle()}
        </h3>
        <p className="text-[11px] text-[#999] tracking-wide mt-2">{post.date}</p>
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
    <section className="bg-white w-full py-20 px-4 sm:px-6 md:px-8" key={`blog-section-${language}`}>
      <div className="w-full max-w-[1800px] mx-auto">
        <div className="text-black font-semibold px-8 max-md:max-w-full max-md:px-5">
          <div className="flex w-full flex-col items-center max-md:max-w-full">
            <div className="flex w-[768px] max-w-full flex-col items-center">
              <div className="w-[34px] text-base text-[rgba(250,111,64,1)] whitespace-nowrap pb-px">
                {t.blog}
              </div>
              <h2 className="w-full text-4xl text-center tracking-[-0.72px] leading-none mt-[19px]">
                <div className="w-full pb-px max-md:max-w-full">{t.blogTrends}</div>
              </h2>
              <div className="w-full text-xl font-normal text-center mt-[19px]">
                <div className="w-full pb-px max-md:max-w-full">
                  {t.blogDescription}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-center overflow-hidden justify-center mt-[9px] py-10">
          <div className="self-stretch flex justify-between min-w-60 min-h-[488px] w-full items-stretch px-6 gap-6 flex-wrap flex-1 shrink basis-[0%] my-auto max-md:max-w-full">
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
