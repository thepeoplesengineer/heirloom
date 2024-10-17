import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  assetsInclude: ['**/*.svg'], // Ensures Vite includes SVG files as assets

  base: '/', // Ensures assets are served correctly (you can adjust this if needed)
  build: {
    outDir: 'dist', // This is where the build will go, should be 'dist' which your backend serves
    emptyOutDir: true, // Ensure previous builds are cleared
  },
  css: {
    postcss: './postcss.config.js', // PostCSS config for CSS transformations
  },
  server: {
    port: 5173, // The dev server port (useful for local dev)
  },
});
