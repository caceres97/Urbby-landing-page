// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://urbby.app',
  // Sitio estático: se sube el contenido de dist/ a la raíz del dominio,
  // que es donde Meta busca la verificación de dominio.
  output: 'static',
  trailingSlash: 'ignore',
  vite: {
    plugins: [tailwindcss()],
  },
});
