import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import { LanguageProvider } from "./lib/LanguageProvider";
import Blog from "./pages/Blog";
import BlogPostPage from "./pages/BlogPostPage";
import Terms from "./pages/Terms";
import Privacy from "./pages/Privacy";
import VideoGuide from "./pages/VideoGuide";
import Collaborators from "./pages/Collaborators";
import ServicesAPI from "./pages/ServicesAPI";
import Upload from "./pages/Upload";
import Pricing from "./pages/Pricing";
import CookieBanner from "./components/layout/CookieBanner";
import TrailingSlashRedirect from "./components/TrailingSlashRedirect";

import '@fontsource/baloo-2/600.css';
import '@fontsource/inter/400.css';
import '@fontsource/inter/600.css';

import "@fontsource/montagu-slab"; // Defaults to weight 400
import "@fontsource/montagu-slab/700.css"; // Bold variant


const queryClient = new QueryClient();
const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <LanguageProvider>
          <BrowserRouter>
            <TrailingSlashRedirect>
              <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/fr" element={<Index />} />

              {/* Pricing routes - redirect to external */}
              <Route path="/pricing" element={<Pricing />} />
              <Route path="/pricing/" element={<Pricing />} />
              <Route path="/en/pricing" element={<Pricing />} />
              <Route path="/en/pricing/" element={<Pricing />} />
              <Route path="/fr/pricing" element={<Pricing />} />
              <Route path="/fr/pricing/" element={<Pricing />} />

              {/* English routes */}
              <Route path="/en" element={<Index />} />
              <Route path="/en/" element={<Index />} />

              {/* French blog routes */}
              <Route path="/fr/blog" element={<Blog />} />
              <Route path="/fr/blog/" element={<Blog />} />
              <Route path="/fr/blog/:slug" element={<BlogPostPage />} />
              <Route path="/fr/blog/:slug/" element={<BlogPostPage />} />

              {/* Legacy blog routes for backward compatibility (French) */}
              <Route path="/blog" element={<Blog />} />
              <Route path="/blog/" element={<Blog />} />
              <Route path="/blog/:slug" element={<BlogPostPage />} />
              <Route path="/blog/:slug/" element={<BlogPostPage />} />

              {/* English blog routes */}
              <Route path="/en/blog" element={<Blog />} />
              <Route path="/en/blog/" element={<Blog />} />
              <Route path="/en/blog/:slug" element={<BlogPostPage />} />
              <Route path="/en/blog/:slug/" element={<BlogPostPage />} />

              {/* French legal pages */}
              <Route path="/fr/conditions" element={<Terms />} />
              <Route path="/fr/conditions/" element={<Terms />} />
              <Route path="/fr/confidentialite" element={<Privacy />} />
              <Route path="/fr/confidentialite/" element={<Privacy />} />

              {/* English legal pages */}
              <Route path="/en/terms" element={<Terms />} />
              <Route path="/en/terms/" element={<Terms />} />
              <Route path="/en/privacy" element={<Privacy />} />
              <Route path="/en/privacy/" element={<Privacy />} />

              {/* French video guide pages */}
              <Route path="/fr/video" element={<VideoGuide />} />
              <Route path="/fr/video/" element={<VideoGuide />} />

              {/* French collaborators pages */}
              <Route path="/fr/collaborateurs" element={<Collaborators />} />
              <Route path="/fr/collaborateurs/" element={<Collaborators />} />

              {/* English collaborators pages */}
              <Route path="/en/collaborateurs" element={<Collaborators />} />
              <Route path="/en/collaborateurs/" element={<Collaborators />} />
              <Route path="/en/styly-pro" element={<Collaborators />} />
              <Route path="/en/styly-pro/" element={<Collaborators />} />

              {/* French services API pages */}
              <Route path="/fr/services-api" element={<ServicesAPI />} />
              <Route path="/fr/services-api/" element={<ServicesAPI />} />

              {/* English services API pages */}
              <Route path="/en/services-api" element={<ServicesAPI />} />
              <Route path="/en/services-api/" element={<ServicesAPI />} />

              {/* Legacy routes for backward compatibility */}
              <Route path="/conditions" element={<Terms />} />
              <Route path="/conditions/" element={<Terms />} />
              <Route path="/privacy" element={<Privacy />} />
              <Route path="/privacy/" element={<Privacy />} />
              <Route path="/confidentialite" element={<Privacy />} />
              <Route path="/confidentialite/" element={<Privacy />} />
              <Route path="/terms" element={<Terms />} />
              <Route path="/terms/" element={<Terms />} />
              <Route path="/video" element={<VideoGuide />} />
              <Route path="/video/" element={<VideoGuide />} />
              <Route path="/collaborateurs" element={<Collaborators />} />
              <Route path="/collaborateurs/" element={<Collaborators />} />
              <Route path="/styly-pro" element={<Collaborators />} />
              <Route path="/styly-pro/" element={<Collaborators />} />
              <Route path="/services-api" element={<ServicesAPI />} />
              <Route path="/services-api/" element={<ServicesAPI />} />
              <Route path="/services-api-fr" element={<ServicesAPI />} />
              <Route path="/services-api-fr/" element={<ServicesAPI />} />

              {/* Upload routes */}
              <Route path="/upload" element={<Upload />} />
              <Route path="/upload/" element={<Upload />} />
              <Route path="/en/upload" element={<Upload />} />
              <Route path="/en/upload/" element={<Upload />} />
              <Route path="/fr/upload" element={<Upload />} />
              <Route path="/fr/upload/" element={<Upload />} />

              {/* Get started routes */}
              <Route path="/get-started" element={<Index />} />
              <Route path="/get-started/" element={<Index />} />
              <Route path="/en/get-started" element={<Index />} />
              <Route path="/en/get-started/" element={<Index />} />
              <Route path="/fr/get-started" element={<Index />} />
              <Route path="/fr/get-started/" element={<Index />} />

              {/* External service redirects */}
              <Route path="/signin" element={<NotFound />} />
              <Route path="/login" element={<NotFound />} />
              <Route path="/signup" element={<NotFound />} />
              <Route path="/social/:platform" element={<NotFound />} />
              <Route path="/video-guide" element={<VideoGuide />} />

              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
              </Routes>

              {/* Cookie Banner - appears on all pages */}
              <CookieBanner />
            </TrailingSlashRedirect>
          </BrowserRouter>
      </LanguageProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
