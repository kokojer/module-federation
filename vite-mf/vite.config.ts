import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { federation } from "@module-federation/vite";

// https://vite.dev/config/
export default defineConfig({
  server: {
    port: 3001,
    hmr: true,
  },
  plugins: [
    react(),
    federation({
      name: "vite-mf",
      manifest: true,
      exposes: {
        "./vite-mf": "./src/App.tsx",
      },
      filename: "remoteEntry.js",
      shared: {
        react: {
          singleton: true,
        },
        "react/": {
          singleton: true,
        },
      },
    }),
  ],
  build: {
    target: "esnext",
  },
});
