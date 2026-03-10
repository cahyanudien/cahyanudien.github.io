import { defineConfig } from "vite";
import { resolve } from "path";

export default defineConfig({
  // Important for Vercel sub-pages
  base: "./",

  build: {
    outDir: "dist",
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        stillness: resolve(__dirname, "stillness-that-walks/index.html"),
        hening: resolve(__dirname, "hening-yang-berjalan/index.html"),
        ache_en: resolve(
          __dirname,
          "ache-what-kind-of-life-is-this/index.html"
        ),
        ache_id: resolve(__dirname, "ache-hidup-seperti-apa-ini/index.html"),
      },
    },
  },
});
