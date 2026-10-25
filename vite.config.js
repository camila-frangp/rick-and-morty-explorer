import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  // GitHub Pages publica la app en /rick-and-morty-explorer/; en local y en Vercel va en la raíz
  base: process.env.GITHUB_PAGES ? '/rick-and-morty-explorer/' : '/',
});
