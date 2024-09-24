import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
// import { pluginLineNumbers } from "@expressive-code/plugin-line-numbers";

// https://astro.build/config
export default defineConfig({
  markdown: {
    remarkPlugins: [remarkMath],
    rehypePlugins: [rehypeKatex],
  },
  integrations: [
    starlight({
      title: "BCSC",
      customCss: ["./src/styles/custom.css", "./src/styles/katex.min.css"],
      components: {
        Head: "./src/components/Head.astro",
      },
      social: {
        github: "https://github.com/0xdeis",
        discord: "https://discord.gg/sT7J97rDQ4",
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
        },
        {
          label: "Reference",
          autogenerate: { directory: "reference" },
        },
        {
          label: "writeups",
          autogenerate: { directory: "write-ups", collapsed: true },
          badge: { text: "New", variant: "tip" },
        },
        {
          label: "Meta",
          autogenerate: { directory: "meta" },
        },
      ],
      editLink: {
        baseUrl: "https://github.com/0xdeis/0xdeis.com/edit/main/",
      },
      expressiveCode: {
        // plugins: [pluginShiki()],
      },
    }),
  ],
});
