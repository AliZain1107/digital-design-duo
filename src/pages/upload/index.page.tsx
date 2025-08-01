import { useEffect } from 'react';
import { Helmet } from 'react-helmet';

const Page: React.FC = () => {

  useEffect(() => {
    // Redirect to external upload page
    window.location.href = 'https://app.styly.fr/upload';
  }, []);

  return (
    <>
      <Helmet>
        <title>Upload - Styly.fr | AI Interior Design Upload</title>
        <meta name="description" content="Upload your images to Styly.fr for AI-powered interior design transformation. Start designing with our AI platform." />
        <meta name="keywords" content="upload images, AI design upload, Styly.fr upload, interior design upload" />
        <link rel="canonical" href="https://www.styly.fr/upload" />
        <meta http-equiv="refresh" content="0; url=https://app.styly.fr/upload" />
      </Helmet>
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="text-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-600 mx-auto mb-4"></div>
        <p className="text-gray-600">Redirecting to upload page...</p>
      </div>
    </div>
    </>
  );
};

export default {
  Page,
}
