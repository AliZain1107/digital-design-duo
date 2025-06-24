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
  const post = blogPosts.find((post) =>
    (isEnglishRoute && post.slug === slug) || (!isEnglishRoute && post.slugFr === slug)
  );



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

  // Always use /blog/:slug for both languages
  const currentSlug = post.slugFr && slug === post.slugFr ? post.slugFr : post.slug;
  const currentUrl = `https://www.styly.fr/blog/${currentSlug}`;
  const alternateUrls = undefined;

  // Basic SEO metadata (individual blog posts may override this with their own Helmet)
  const seoTitle = `${post.title} | Styly.io`;
  const seoDescription = `${post.title} - Styly.io blog post.`;

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
    </LanguageContext.Provider>
  );
};

export default BlogPostPage;
