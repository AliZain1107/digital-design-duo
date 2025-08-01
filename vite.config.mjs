// // import react from '@vitejs/plugin-react'
// // import ssr from 'vite-plugin-ssr/plugin'
// // import path from 'path';

// // export default {
// //   plugins: [react(), ssr()],
// //   alias: {
// //       '@': path.resolve(__dirname, './src')
// //     }
// // }

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
//     rollupOptions: {
//       input: './server/index.js', // <-- must point to your server entry
//     },
//   },
//   resolve: {
//     alias: {
//       '@': path.resolve(__dirname, './src'),
//     },
//   },
// };


// vite.config.mjs
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import react from '@vitejs/plugin-react';
import ssr from 'vite-plugin-ssr/plugin';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export default {
  plugins: [react(), ssr()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
};
