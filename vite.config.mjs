  // import react from '@vitejs/plugin-react'
  // import ssr from 'vite-plugin-ssr/plugin'
  // import path from 'path';

  // export default {
  //   plugins: [react(), ssr()],

  //   alias: {
  //       '@': path.resolve(__dirname, './src')
  //     }
      
  // }
  
// vite.config.mjs
import { defineConfig } from 'vite';
import ssr from 'vite-plugin-ssr/plugin';
import react from '@vitejs/plugin-react-swc';
import { fileURLToPath, URL } from 'node:url';

export default defineConfig({
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  plugins: [
    react(),
    ssr(), // keep ssr() after react() if using JSX plugin
  ],
});

// import path from 'path';
// import { fileURLToPath } from 'url';
// import { dirname } from 'path';
// import react from '@vitejs/plugin-react';
// import ssr from 'vite-plugin-ssr/plugin';

// const __filename = fileURLToPath(import.meta.url);
// const __dirname = dirname(__filename);

// export default {
//   plugins: [react(), ssr()],
//    build: {
//     outDir: 'dist',
//     // rollupOptions: {
//     //   input: './server/index.js', // <-- must point to your server entry
//     // },
//   resolve: {
//     alias: {
//       '@': path.resolve(__dirname, './src'),
//     },
//   },
// }
// };
