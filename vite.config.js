import { defineConfig } from 'vite';
import { resolve } from 'path';
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
        // eslint-disable-next-line no-undef
        main: resolve(__dirname, "index.html"),
      },
    },
  },
  plugins: [react()],
});