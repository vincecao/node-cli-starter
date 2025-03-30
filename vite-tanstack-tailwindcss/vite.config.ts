import { TanStackRouterVite } from "@tanstack/router-plugin/vite";
import basicSsl from "@vitejs/plugin-basic-ssl";
import react from "@vitejs/plugin-react-swc";
import { defineConfig } from "vitest/config";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), basicSsl(), TanStackRouterVite()],
  server: {
    host: true,
    strictPort: true,
    https: {},
  },
  css: {
    modules: {
      localsConvention: "camelCase",
    },
  },
});
