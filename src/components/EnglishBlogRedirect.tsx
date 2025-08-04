import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

/**
 * Component that redirects English blog requests to the external blog
 */
const EnglishBlogRedirect = () => {
  const { slug } = useParams();

  useEffect(() => {
    const targetUrl = slug 
      ? `https://www.styly.io/blog/${slug}`
      : 'https://www.styly.io/blog';
    

    
    // Force redirect to the external English blog
    window.location.href = targetUrl;
  }, [slug]);

  // Show a loading message while redirecting
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="text-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-600 mx-auto mb-4"></div>
        <p className="text-gray-600">Redirecting to English blog...</p>
        <p className="text-sm text-gray-500 mt-2">
          You will be redirected to {slug ? `www.styly.io/blog/${slug}` : 'www.styly.io/blog'}
        </p>
      </div>
    </div>
  );
};

export default EnglishBlogRedirect;
