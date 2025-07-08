import React, { useEffect, useContext } from "react";
import { useParams, useLocation } from "react-router-dom";
import Navbar from "@/components/layout/Navbar";
import SEO from "@/components/layout/SEO";
import { blogPosts } from "@/components/data/blogPosts";
import Footer from "@/components/layout/Footer";
import { LanguageContext, Language } from "@/lib/i18n";

const BlogPostPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const location = useLocation();
  const { language } = useContext(LanguageContext);

  // Determine language from route for finding the correct post
  const isEnglishRoute = location.pathname.startsWith("/en/blog");

  // Remove URL-based language routing - use global language state instead
  useEffect(() => {
    // No need to set language based on URL - it's handled by the LanguageProvider
    // The language state is managed globally and will update the content automatically
  }, []);

  // Scroll to top when component mounts, slug changes, or language changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug, language]);

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
