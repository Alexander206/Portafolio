import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { VitePWA } from "vite-plugin-pwa";
import image from "@rollup/plugin-image";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react(), image(), VitePWA()],
    resolve: {
        alias: {
            "@": path.resolve(__dirname, "./src"),
            "@styles": path.resolve(__dirname, "./src/styles/"),
        },
    },
    base: "./",
});
