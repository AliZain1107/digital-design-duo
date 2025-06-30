import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

/**
 * Component that handles trailing slash redirects
 * Redirects URLs with trailing slashes to URLs without trailing slashes
 * This ensures consistent URL structure without trailing slashes
 * Maintains SEO consistency and prevents duplicate content issues
 */
const TrailingSlashRedirect = ({ children }: { children: React.ReactNode }) => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    // If the URL has a trailing slash and it's not the root path, redirect to remove it
    if (location.pathname !== '/' && location.pathname.endsWith('/')) {
      const newPath = location.pathname.slice(0, -1);
      // Use replace to avoid adding to browser history and maintain clean URLs
      navigate(newPath + location.search + location.hash, { replace: true });
    }
  }, [location, navigate]);

  return <>{children}</>;
};

export default TrailingSlashRedirect;
