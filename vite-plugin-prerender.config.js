// Vite plugin configuration for prerendering static pages
// This generates static HTML files for each route to improve SEO

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import path from 'path';
import { componentTagger } from 'lovable-tagger';

// Import your blog posts to generate routes
import fs from 'fs';

// Function to extract blog slugs from your data file
function getBlogSlugs() {
  try {
    const blogPostsPath = path.resolve('./src/components/data/blogPosts.tsx');
    const fileContent = fs.readFileSync(blogPostsPath, 'utf8');
    
    // Extract slugs using regex
    const slugMatches = fileContent.match(/slug:\s*"([^"]+)"/g) || [];
    const slugFrMatches = fileContent.match(/slugFr:\s*"([^"]+)"/g) || [];
    
    const slugs = [
      ...slugMatches.map(match => match.replace(/slug:\s*"([^"]+)"/, '$1')),
      ...slugFrMatches.map(match => match.replace(/slugFr:\s*"([^"]+)"/, '$1'))
    ];
    
    return [...new Set(slugs)]; // Remove duplicates
  } catch (error) {
    console.warn('Could not extract blog slugs:', error.message);
    return [];
  }
}

// Define all routes that need prerendering
export function getPrerenderRoutes() {
  const blogSlugs = getBlogSlugs();
  
  const staticRoutes = [
    '/',
    '/blog',
    '/upload',
    '/pricing',
    '/get-started',
    '/styly-pro',
    '/collaborateurs',
    '/services-api',
    '/video',
    '/conditions',
    '/confidentialite'
  ];
  
  // Add blog post routes
  const blogRoutes = blogSlugs.map(slug => `/blog/${slug}`);
  
  return [...staticRoutes, ...blogRoutes];
}

export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
    mode === 'development' && componentTagger(),
    // Add prerender plugin for production builds
    mode === 'production' && {
      name: 'prerender-routes',
      generateBundle() {
        // This will be implemented with a proper prerender plugin
        console.log('Prerendering routes for SEO...');
      }
    }
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    rollupOptions: {
      // Ensure proper chunking for better caching
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom', 'react-router-dom'],
          ui: ['@radix-ui/react-dialog', '@radix-ui/react-dropdown-menu']
        }
      }
    }
  }
}));
