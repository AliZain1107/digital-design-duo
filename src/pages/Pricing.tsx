import { useEffect } from 'react';
import { Helmet } from 'react-helmet';

const Pricing = () => {
  useEffect(() => {
    // Redirect to external pricing page
    window.location.href = 'https://app.styly.fr/pricing';
  }, []);

  return (
    <>
      <Helmet>
        <title>Pricing - Styly.fr | AI Interior Design Plans</title>
        <meta name="description" content="Discover Styly.fr pricing plans for AI interior design. Choose the perfect plan for your design needs with our AI-powered platform." />
        <meta name="keywords" content="Styly pricing, AI design pricing, interior design plans, Styly.fr pricing" />
        <link rel="canonical" href="https://www.styly.fr/pricing" />
        <meta http-equiv="refresh" content="0; url=https://app.styly.fr/pricing" />
      </Helmet>
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="text-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-600 mx-auto mb-4"></div>
        <p className="text-gray-600">Redirecting to pricing page...</p>
      </div>
    </div>
    </>
  );
};

export default Pricing;
