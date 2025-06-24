import React, { useEffect } from "react";
import { useParams, useLocation } from "react-router-dom";
import Navbar from "@/components/layout/Navbar";
import SEO from "@/components/layout/SEO";
import { blogPosts } from "@/components/data/blogPosts";
import Footer from "@/components/layout/Footer";
import { LanguageContext, Language } from "@/lib/i18n";

const BlogPostPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const location = useLocation();

  // Determine language from route
  const isEnglishRoute = location.pathname.startsWith("/en/blog");
  const language = isEnglishRoute ? "en" : "fr";

  useEffect(() => {
    // Detect language from URL path, but do not redirect for English
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
  }, [location.pathname, slug]);

  // Scroll to top when component mounts or slug changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  // Find the blog post by slug for the correct language
  const post = blogPosts.find((post) =>
    (isEnglishRoute && post.slug === slug) || (!isEnglishRoute && post.slugFr === slug)
  );

  if (!post) {
    return <div>Blog post not found.</div>;
  }

  // Always use /blog/:slug for both languages
  const currentSlug = post.slugFr && slug === post.slugFr ? post.slugFr : post.slug;
  const currentUrl = `https://www.styly.fr/blog/${currentSlug}`;
  const alternateUrls = undefined;

  // Basic SEO metadata (individual blog posts may override this with their own Helmet)
  const seoTitle = `${post.title} | Styly.io`;
  const seoDescription = `${post.title} - Styly.io blog post.`;

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
        <post.Component />
      </div>
      <Footer />
    </div>
  );
};

export default BlogPostPage;
