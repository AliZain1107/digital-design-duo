import React, { useEffect } from "react";
import { useParams, useLocation } from "react-router-dom";
import Navbar from "@/components/layout/Navbar";
import SEO from "@/components/layout/SEO";
import { blogPosts } from "@/components/data/blogPosts";
import Footer from "@/components/layout/Footer";
import { LanguageContext, translations } from "@/lib/i18n";

const BlogPostPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const location = useLocation();

  // Determine language from route
  const isEnglishRoute = location.pathname.startsWith("/en/blog");
  const language = isEnglishRoute ? "en" : "fr";

  useEffect(() => {
    // This effect can be used for any side effects when route changes
    // Currently just ensuring the component re-renders when needed
  }, [location.pathname, slug]);

  // Scroll to top when component mounts or slug changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  // Find the blog post by slug for the correct language
  // Try both French and English slugs to handle any routing issues
  const post = blogPosts.find((post) => {
    if (isEnglishRoute) {
      return post.slug === slug;
    } else {
      // For French routes, try both slugFr and slug as fallback
      return post.slugFr === slug || post.slug === slug;
    }
  });



  if (!post) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-8">
        <h1>Blog post not found</h1>
        <p>Looking for slug: {slug}</p>
        <p>Is English route: {isEnglishRoute.toString()}</p>
        <p>Language: {language}</p>
        <p>Available posts:</p>
        <ul>
          {blogPosts.map(p => (
            <li key={p.id}>
              EN: {p.slug} | FR: {p.slugFr}
            </li>
          ))}
        </ul>
      </div>
    );
  }



  // Create proper canonical URL based on language
  const canonicalUrl = isEnglishRoute
    ? `https://www.styly.fr/en/blog/${post.slug}`
    : `https://www.styly.fr/blog/${post.slugFr || post.slug}`;

  // Create proper alternate URLs for hreflang
  const alternateUrls = {
    en: `https://www.styly.fr/en/blog/${post.slug}`,
    fr: `https://www.styly.fr/blog/${post.slugFr || post.slug}`
  };

  // Basic SEO metadata with correct domain
  const seoTitle = `${post.title} | Styly.fr`;
  const seoDescription = `${post.title} - Styly.fr blog post.`;

  return (
    <LanguageContext.Provider value={{
      language,
      setLanguage: () => {},
      t: translations[language]
    }}>
      <div>
        <SEO
          title={seoTitle}
          description={seoDescription}
          ogUrl={canonicalUrl}
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
    </LanguageContext.Provider>
  );
};

export default BlogPostPage;
