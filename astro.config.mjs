// astro.config.mjs
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://grow-n-glow-la.vercel.app',
  output: 'static',              // ✅ static output
  integrations: [sitemap()],
  vite: { plugins: [tailwindcss()] }
});
