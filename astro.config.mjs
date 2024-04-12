import { defineConfig } from "astro/config";

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: "https://dublininquirer.github.io",
  base: "/voter-guide-2024",
  build: {
    format: "file",
  },
  integrations: [
    tailwind({
      applyBaseStyles: false,
      nesting: true,
    }),
  ],
});
