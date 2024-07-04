import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: 'https://airpioa.github.io',
  base: 'AstroPost-Docs',
  integrations: [starlight({
    title: 'AstroPost Docs',
    social: {
      github: 'https://github.com/airpioa/AstroPost-Docs',
      youtube: 'https://www.youtube.com/@dzoofop1',
      discord: 'https://discord.gg/dmCwTQDfXh',
    },
    sidebar: [{
      label: 'Guides',
      items: [
      // Each item here is one entry in the navigation menu.
      {
        label: 'Guide',
        link: '/guides/example/'
      }]
    }, {
      label: 'Reference',
      autogenerate: {
        directory: 'reference'
      }
    }]
  }), tailwind()]
});