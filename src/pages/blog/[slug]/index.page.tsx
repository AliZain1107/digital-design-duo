import React, { useEffect } from "react";

import Navbar from "../../../components/layout/Navbar";
import SEO from "../../../components/layout/SEO";
import { blogPosts } from "../../../components/data/blogPosts";
import Footer from "../../../components/layout/Footer";
import { LanguageContext, translations } from "../../../lib/i18n";

type BlogPostPageProps = {
  slug: string;
  language: "en" | "fr";
};

const BlogPostPage: React.FC<BlogPostPageProps> = ({ slug, language }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  const isEnglishRoute = language === "en";

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

  const canonicalUrl = isEnglishRoute
    ? `https://www.styly.fr/en/blog/${post.slug}`
    : `https://www.styly.fr/blog/${post.slugFr || post.slug}`;

  const alternateUrls = {
    en: `https://www.styly.fr/en/blog/${post.slug}`,
    fr: `https://www.styly.fr/blog/${post.slugFr || post.slug}`
  };

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
