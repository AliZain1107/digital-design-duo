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
import CookieBanner from "./components/layout/CookieBanner";

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
              <Route path="/en" element={<Index />} />
              <Route path="/fr" element={<Index />} />
              <Route path="/pricing" element={<NotFound />} />

              {/* Language-specific blog routes */}
              <Route path="/en/blog" element={<Blog />} />
              <Route path="/en/blog/:slug" element={<BlogPostPage />} />
              <Route path="/fr/blog" element={<Blog />} />
              <Route path="/fr/blog/:slug" element={<BlogPostPage />} />

              {/* Legacy blog routes for backward compatibility */}
              <Route path="/blog" element={<Blog />} />
              <Route path="/blog/:slug" element={<BlogPostPage />} />

              {/* Language-specific legal pages */}
              <Route path="/en/terms" element={<Terms />} />
              <Route path="/en/privacy" element={<Privacy />} />
              <Route path="/fr/conditions" element={<Terms />} />
              <Route path="/fr/confidentialite" element={<Privacy />} />

              {/* Language-specific video guide pages */}
              <Route path="/en/video" element={<VideoGuide />} />
              <Route path="/fr/video" element={<VideoGuide />} />

              {/* Legacy legal routes for backward compatibility */}
              <Route path="/conditions" element={<Terms />} />
              <Route path="/privacy" element={<Privacy />} />
              <Route path="/confidentialite" element={<Privacy />} />
              <Route path="/video" element={<VideoGuide />} />

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
