# Urbby-landing-page

Sitio institucional estático de Urbby El Salvador S.A. de C.V. Existe para la verificación de negocio y de dominio en Meta Business Manager (páginas de privacidad, términos, contacto y eliminación de datos).

## Stack

- Astro 5 (`output: 'static'`, `site: https://urbby.app`) con Tailwind v4 vía plugin de Vite.
- npm (hay `package-lock.json`). Sin base de datos ni API.

## Cómo arrancar

- `npm install`
- `npm run dev` → http://localhost:4321 (`.claude/launch.json`, entrada `urbby-dev`)
- `npm run build` genera `dist/`; `npm run preview` lo sirve para revisarlo.
- Publicación: se sube el **contenido** de `dist/` a la raíz del dominio (ahí Meta busca la verificación).

## Puertos

4321 (Astro, puerto por defecto). Registro general de puertos de la máquina: `~/Proyectos/PUERTOS.md`.

## Variables de entorno

Ninguna. El código de verificación de dominio de Meta se pega en el layout base `src/layouts/Base.astro` (ver README, sección "Antes de publicar").

## Estructura

- `src/pages/`: `index`, `privacidad`, `terminos` (y `terminos/`), `contacto`, `eliminar-datos`.
- `src/components/`, `src/layouts/`, `src/data/empresa.ts` (datos legales), `src/styles/`.
- `public/`: archivos estáticos que se publican tal cual.
- `README.md`: checklist de verificación en Meta y notas de publicación; léelo antes de tocar contenido legal.

## Convenciones

- Commits en Conventional Commits con la descripción en español (`feat(paginas): agrega términos de Kurbby`).
- Sin atribución de IA ni `Co-Authored-By` en commits.
- Textos de UI y comentarios en español.
- Los datos legales viven en `src/data/empresa.ts`; no los dupliques dentro de las páginas.
