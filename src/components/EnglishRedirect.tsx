import { useEffect } from 'react';

/**
 * Component that redirects English language requests to the external website
 * This is a temporary solution until English content migration is complete
 */
const EnglishRedirect = () => {
  useEffect(() => {
    console.log("EnglishRedirect: Redirecting to external English site");
    // Redirect to the external English website
    window.location.href = "https://www.styly.io";
  }, []);

  // Show a loading message while redirecting
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="text-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-600 mx-auto mb-4"></div>
        <p className="text-gray-600">Redirecting to English site...</p>
        <p className="text-sm text-gray-500 mt-2">You will be redirected to www.styly.io</p>
      </div>
    </div>
  );
};

export default EnglishRedirect;
