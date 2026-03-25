import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://gradgeomtopo.web.illinois.edu',

  integrations: [
      mdx(),
      sitemap(),
      //tailwind({
      //  applyBaseStyles: false
      //})
  ],

  vite: {
    plugins: [tailwindcss()]
  }
});