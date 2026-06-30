// @ts-check
import { defineConfig, sessionDrivers } from 'astro/config';
import cloudflare from '@astrojs/cloudflare';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://www.eddhub.co.uk',
  adapter: cloudflare({
    imageService: 'passthrough'
  }),
  session: {
    driver: sessionDrivers.lruCache()
  },
  vite: {
    plugins: [tailwindcss()]
  }
});
