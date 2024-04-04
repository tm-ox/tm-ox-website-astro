import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import alpinejs from "@astrojs/alpinejs";
import partytown from '@astrojs/partytown'

import prefetch from "@astrojs/prefetch";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind({
    applyBaseStyles: false
  }), alpinejs(), prefetch(), partytown({
    config: {
      forward: ["dataLayer.push"],
    },
  }),]
});