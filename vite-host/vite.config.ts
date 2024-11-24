import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { federation } from "@module-federation/vite";

// https://vite.dev/config/
export default defineConfig({
  server: {
    port: 3000,
  },
  plugins: [
    react(),
    federation({
      name: "vite-host",
      remotes: {
        "vite-mf": {
          type: "module",
          name: "vite-mf",
          entry: "http://localhost:3001/remoteEntry.js",
        },
        webpack_mf_host: {
          type: "var",
          name: "webpack_mf_host",
          entry: "http://localhost:3002/remoteEntry.js",
        },
      },
      shared: {
        react: {
          singleton: true,
        },
        "react-dom": {
          singleton: true,
        },
        "react-error-boundary": {
          singleton: true,
        },
      },
    }),
  ],
});
