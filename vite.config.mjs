// vite.config.mjs
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
    vike(),
  ],
  build: {
    outDir: 'dist',
    manifest: true,
    ssrManifest: true
  }
});
