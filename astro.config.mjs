import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// For rendering math in markdown files
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";

// https://astro.build/config
export default defineConfig({
  site: 'https://gradgeomtopo.web.illinois.edu',
  
  markdown: {
    remarkPlugins: [ remarkMath ],
    rehypePlugins: [rehypeKatex],
  },

  integrations: [
      mdx({
        syntaxHighlight: "prism",
        remarkPlugins: [remarkMath],
        rehypePlugins: [rehypeKatex],
      }),
      sitemap(),
  ],

  vite: {
    plugins: [tailwindcss()]
  }
});