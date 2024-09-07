import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
// import node from '@astrojs/node';
// import vercel from '@astrojs/vercel';

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()],
  /* output: 'server',
  adapter: vercel({
    mode: 'standalone', // Especifica 'standalone' o 'middleware' según tus necesidades
  }), */
});