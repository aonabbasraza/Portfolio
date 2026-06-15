import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import path from "node:path";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "@": path.resolve(import.meta.dirname, "client", "src"),
      "@shared": path.resolve(import.meta.dirname, "shared"),
    },
  },
  envDir: path.resolve(import.meta.dirname),
  root: path.resolve(import.meta.dirname, "client"),
  build: {
    outDir: path.resolve(import.meta.dirname, "dist"),
    emptyOutDir: true,
    target: "ES2020",
    minify: "esbuild",
    cssMinify: true,
    sourcemap: false,
    chunkSizeWarningLimit: 1000,
    reportCompressedSize: false,
    rollupOptions: {
      output: {
        manualChunks: (id) => {
          // Separate chunks for better caching
          if (id.includes('node_modules')) {
            if (id.includes('react')) return 'vendor-react';
            if (id.includes('three')) return 'vendor-three';
            if (id.includes('@radix-ui')) return 'vendor-ui';
            if (id.includes('@emailjs')) return 'vendor-email';
            return 'vendor';
          }
        },
      },
    },
  },
  server: {
    port: 3000,
    strictPort: false,
    host: true,
  },
  // Performance optimizations
  define: {
    'process.env.NODE_ENV': JSON.stringify('production'),
  },
});
