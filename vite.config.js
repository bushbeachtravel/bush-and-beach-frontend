/* eslint-disable no-undef */
import { defineConfig } from 'vite';
import path, { resolve } from 'path';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
// export default defineConfig({
//   base: './',
//   plugins: [react()],
//   define: {
//     global: 'window',
//   }
// })
export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
      },
    },
  },
  plugins: [react()],
  resolve: {
    alias: {
      '@features': path.resolve(__dirname, 'src/features'),
      '@beach-holidays' : path.resolve(__dirname, 'src/features/beach-holidays'),
      '@local-trips' : path.resolve(__dirname, 'src/features/local-trips'),
      '@blog': path.resolve(__dirname, 'src/features/blog'),
      '@international' : path.resolve(__dirname, 'src/features/international-trips'),
      '@utils': path.resolve(__dirname, 'src/utils'),
      '@data': path.resolve(__dirname, 'src/data'),

      '@home-page': path.resolve(__dirname, 'src/features/home-page'),
      '@state-management': path.resolve(__dirname, 'src/app'),
      '@images': path.resolve(__dirname, 'src/assets/images'),
      '@city-images': path.resolve(__dirname, 'src/assets/images/cities'),
      '@china-images': path.resolve(__dirname, 'src/assets/images/china'),
      '@dubai-images': path.resolve(__dirname, 'src/assets/images/dubai'),
      '@egypt-israel-images': path.resolve(__dirname, 'src/assets/images/israel'),
      '@mombasa-images': path.resolve(__dirname, 'src/assets/images/mombasa'),
      '@zanzibar-images': path.resolve(__dirname, 'src/assets/images/zanzibar'),

      '@authentication': path.resolve(__dirname, 'src/features/authentication'),
      '@joburg': path.resolve(__dirname, 'src/assets/images/joburg'),
      '@malaysia': path.resolve(__dirname, 'src/assets/images/malaysia-singapore'),
      '@pari-barca-italy': path.resolve(__dirname, 'src/assets/images/barca-italy-paris'),
      '@turkey-images': path.resolve(__dirname, 'src/assets/images/turkey'),
      '@mauritius': path.resolve(__dirname, 'src/assets/images/mauritius'),
      '@thailand-images': path.resolve(__dirname, 'src/assets/images/thailand'),
      '@styling': path.resolve(__dirname, 'src/assets/styles'),
    }
  }
});