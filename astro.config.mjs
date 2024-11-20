import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";
// import { pluginLineNumbers } from "@expressive-code/plugin-line-numbers";

// https://astro.build/config
export default defineConfig({
  publicDir: "./public",
  markdown: {
    remarkPlugins: [remarkMath],
    rehypePlugins: [rehypeKatex],
  },
  integrations: [
    starlight({
      title: "HACK",
      customCss: ["./src/styles/custom.css", "./src/styles/katex.min.css"],
      components: {
        Head: "./src/components/Head.astro",
      },
      social: {
        github: "https://github.com/0xdeis",
        discord: "https://discord.gg/32c7VFWCP6",
      },
      sidebar: [
        {
          label: "Fundamentals",
          autogenerate: { directory: "fundamentals" },
        },
        {
          label: "Guides",
          autogenerate: { directory: "guides" },
          // items: [
          //   // Each item here is one entry in the navigation menu.
          //   { label: "Example Guide", link: "/guides/example/" },
          // ],
          badge: { text: "New", variant: "tip" },
        },
        {
          label: "Reference",
          autogenerate: { directory: "reference" },
        },
        {
          label: "writeups",
          autogenerate: { directory: "write-ups", collapsed: true },
        },
        {
          label: "Meta",
          autogenerate: { directory: "meta" },
        },
        {
          label: "External",
          autogenerate: { directory: "external" },
        },
      ],
      editLink: {
        baseUrl: "https://github.com/0xdeis/0xdeis.com/edit/main/",
      },
      expressiveCode: {
        // plugins: [pluginShiki()],
      },
    }),
    react(),
    tailwind(),
  ],
});

