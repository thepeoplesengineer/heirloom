import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ mode }) => {
  return {
    plugins: [react()],
    css: {
      postcss: './postcss.config.js', // Ensures PostCSS is picked up
    },
    build: {
      outDir: 'dist', // This is the directory where the production build will be generated
      sourcemap: mode === 'development', // Include source maps only in development mode
    },
    base: mode === 'production' ? './' : '/', // Adjust base path for production builds
    server: {
      port: 5173, // The local port where Vite will serve the dev build
      proxy: {
        '/api': {
          target: 'http://localhost:3001', // Proxy requests to the backend API in development mode
          changeOrigin: true,
          secure: false,
        },
      },
    },
  };
});
