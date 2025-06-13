import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import LanguageForceUpdate from "./lib/LanguageForceUpdate";
import { LanguageProvider } from "./lib/LanguageProvider";
import Blog from "./pages/Blog";
import BlogPostPage from "./pages/BlogPostPage";
import Terms from "./pages/Terms";
import Privacy from "./pages/Privacy";
import VideoGuide from "./pages/VideoGuide";
import Collaborators from "./pages/Collaborators";
import ServicesAPI from "./pages/ServicesAPI";
import CookieBanner from "./components/layout/CookieBanner";
import EnglishRedirect from "./components/EnglishRedirect";
import EnglishBlogRedirect from "./components/EnglishBlogRedirect";

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
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/fr" element={<Index />} />
              <Route path="/pricing" element={<NotFound />} />

              {/* English blog routes - redirect to external blog */}
              <Route path="/en/blog" element={<EnglishBlogRedirect />} />
              <Route path="/en/blog/:slug" element={<EnglishBlogRedirect />} />

              {/* English routes - now stay on site instead of redirecting */}
              <Route path="/en" element={<Index />} />
              <Route path="/en/*" element={<Index />} />

              {/* French blog routes */}
              <Route path="/fr/blog" element={<Blog />} />
              <Route path="/fr/blog/:slug" element={<BlogPostPage />} />

              {/* Legacy blog routes for backward compatibility (French) */}
              <Route path="/blog" element={<Blog />} />
              <Route path="/blog/:slug" element={<BlogPostPage />} />

              {/* French legal pages */}
              <Route path="/fr/conditions" element={<Terms />} />
              <Route path="/fr/confidentialite" element={<Privacy />} />

              {/* French video guide pages */}
              <Route path="/fr/video" element={<VideoGuide />} />

              {/* French collaborators pages */}
              <Route path="/fr/collaborateurs" element={<Collaborators />} />

              {/* English collaborators pages */}
              <Route path="/en/collaborateurs" element={<Collaborators />} />

              {/* French services API pages */}
              <Route path="/fr/services-api" element={<ServicesAPI />} />

              {/* English services API pages */}
              <Route path="/en/services-api" element={<ServicesAPI />} />

              {/* Legacy legal routes for backward compatibility */}
              <Route path="/conditions" element={<Terms />} />
              <Route path="/privacy" element={<Privacy />} />
              <Route path="/confidentialite" element={<Privacy />} />
              <Route path="/video" element={<VideoGuide />} />
              <Route path="/collaborateurs" element={<Collaborators />} />
              <Route path="/services-api" element={<ServicesAPI />} />
              <Route path="/services-api-fr" element={<ServicesAPI />} />

              <Route path="/signin" element={<NotFound />} />
              <Route path="/login" element={<NotFound />} />
              <Route path="/signup" element={<NotFound />} />
              <Route path="/social/:platform" element={<NotFound />} />
              <Route path="/video-guide" element={<VideoGuide />} />
              <Route path="/get-started" element={<Index />} />
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>

            {/* Cookie Banner - appears on all pages */}
            <CookieBanner />
          </BrowserRouter>
      </LanguageProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
