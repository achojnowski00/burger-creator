import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/burger-creator/',
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
          @import "assets/styles/variables.scss"; 
        `,
      },
    },
  },
  resolve: {
    alias: {
      src: path.resolve('./src', ''),
      CONSTANTS: path.resolve('./src/', 'CONSTANTS.ts'),
      assets: path.resolve('./src/', 'assets'),
      components: path.resolve('./src/', 'components'),
      pages: path.resolve('./src/', 'pages'),
      // core: path.resolve('./src/', 'core'),
      // hooks: path.resolve('./src/', 'hooks'),
      // utils: path.resolve('./src/', 'utils'),
    },
  },
});
