import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],

  server: {
    port: 5174,
    proxy: {
      "/api": {
        target: "https://app.emireq.com",
        changeOrigin: true,
        secure: false,
        ws: true,
        rewrite: (path) => path,   // No unnecessary replacement
      },
    },
  },
});
