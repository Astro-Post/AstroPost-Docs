import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import tailwind from "@astrojs/tailwind";
import netlify from "@astrojs/netlify";

import markdoc from "@astrojs/markdoc";

// https://astro.build/config
export default defineConfig({
  output: 'server',
  adapter: netlify({
    edgeMiddleware: true
  }),
  site: 'https://airpioa.github.io',
  base: 'AstroPost-Docs',
  integrations: [starlight({
    title: 'AstroPost Docs',
    social: {
      github: 'https://github.com/airpioa/AstroPost-Docs',
      youtube: 'https://www.youtube.com/@dzoofop1',
      discord: 'https://discord.gg/dmCwTQDfXh'
    },
    sidebar: [{
      label: 'Pages',
      items: [
      // Each item here is one entry in the navigation menu.
      {
        label: 'Release-Notes',
        link: '/AstroPost-Docs/Release-Notes/'
      }]
    }, {
      label: 'Reference',
      autogenerate: {
        directory: 'reference'
      }
    }]
  }), tailwind(), markdoc()],
  output: "server",
  adapter: netlify()
});