import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react({
      // Optional: Configure React plugin settings
      jsxRuntime: "automatic", // Default modern runtime
      // Add fast refresh for development
      fastRefresh: true,
    }),
  ],
  // Base public path when served in development or production
  base: "/",
  // Development server configuration
  server: {
    port: 3000,
    open: true, // Automatically opens browser
    host: true, // Allows access from network
  },
  // Build configuration
  build: {
    outDir: "dist", // Output directory
    sourcemap: true, // Generate source maps
    // Minify options: 'esbuild' (default), 'terser', or false
    minify: "esbuild",
  },
  // Resolve aliases
  resolve: {
    alias: {
      // Add any custom aliases you might need
      "@": "/src",
    },
  },
});
