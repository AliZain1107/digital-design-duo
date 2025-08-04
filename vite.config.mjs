
  
// vite.config.mjs
import { defineConfig } from 'vite';
import ssr from 'vite-plugin-ssr/plugin';
import react from '@vitejs/plugin-react';
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
    ssr(), // keep ssr() after react() if using JSX plugin
  ],
  build: {
    outDir: 'dist'
  }
});
