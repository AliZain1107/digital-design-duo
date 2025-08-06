import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import vike from 'vike/plugin';
import { fileURLToPath, URL } from 'node:url';

export default defineConfig({
  server: {
    host: "::",
    port: 3000,
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  plugins: [
    react(),
    vike({
      prerender: false // Disable prerendering for SSR
    }),
  ],
  build: {
    outDir: 'dist',
    manifest: true,
    ssrManifest: true,
    rollupOptions: {
      output: {
        manualChunks: undefined // Let Vite handle chunking
      }
    }
  },
  ssr: {
    noExternal: ['@radix-ui/react-slot'] // Add any problematic dependencies here
  }
});