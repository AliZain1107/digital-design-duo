import { useEffect } from 'react';

const Upload = () => {
  useEffect(() => {
    // Redirect to external upload page
    window.location.href = 'https://app.styly.io/upload';
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="text-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-600 mx-auto mb-4"></div>
        <p className="text-gray-600">Redirecting to upload page...</p>
      </div>
    </div>
  );
};

export default Upload;
