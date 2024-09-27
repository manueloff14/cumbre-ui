import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import node from '@astrojs/node';
/* import vercel from '@astrojs/vercel/serverless'; */

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()],
  output: 'server',
  /* adapter: vercel(), */
  adapter: node({
    mode: 'standalone' // O también puede ser 'middleware' dependiendo de tus necesidades
  })
});
