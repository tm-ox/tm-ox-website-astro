import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import alpinejs from "@astrojs/alpinejs";

import prefetch from "@astrojs/prefetch";

// https://astro.build/config
export default defineConfig({
  experimental: {
    assets: true
  },
  integrations: [tailwind({
    applyBaseStyles: false
  }), alpinejs(), prefetch()]
});