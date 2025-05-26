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
              <Route path="/blog" element={<Blog />} />
              <Route path="/blog/:slug" element={<BlogPostPage />} />
              <Route path="/signin" element={<NotFound />} />
              <Route path="/login" element={<NotFound />} />
              <Route path="/signup" element={<NotFound />} />
              <Route path="/social/:platform" element={<NotFound />} />
              <Route path="/video-guide" element={<NotFound />} />
              <Route path="/conditions" element={<Terms />} />
              <Route path="/privacy" element={<Privacy />} />
              <Route path="/confidentialite" element={<Privacy />} />
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
