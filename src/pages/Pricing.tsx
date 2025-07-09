import { useEffect } from 'react';

const Pricing = () => {
  useEffect(() => {
    // Redirect to external pricing page
    window.location.href = 'https://app.styly.io/pricing';
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="text-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-600 mx-auto mb-4"></div>
        <p className="text-gray-600">Redirecting to pricing page...</p>
      </div>
    </div>
  );
};

export default Pricing;
