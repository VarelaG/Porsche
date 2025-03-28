// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://VarelaG.github.io',
  base: 'Porsche',
  vite: {
    plugins: [tailwindcss()]
  }
});