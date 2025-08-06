import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { ssr } from 'vite-plugin-ssr/plugin';
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
    ssr({
      prerender: false // Disable prerendering for SSR
    }),
  ],
  build: {
    outDir: 'dist',
    manifest: true,
    rollupOptions: {
      output: {
        manualChunks: undefined
      }
    }
  },
  ssr: {
    noExternal: [
      '@radix-ui/react-slot',
      'lucide-react',
      // Add other problematic dependencies here
    ]
  }
});