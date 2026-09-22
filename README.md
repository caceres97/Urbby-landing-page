# Urbby — sitio de verificación de Meta

Sitio institucional del marketplace **Urbby**, operado por Urbby El Salvador S.A.
de C.V. Su objetivo es completar la **Verificación de Negocio** y la verificación
de dominio en Meta Business Manager.

Astro 5 + Tailwind 4, salida estática.

## Comandos

| Comando           | Qué hace                                      |
| ----------------- | --------------------------------------------- |
| `npm install`     | Instala dependencias                          |
| `npm run dev`     | Servidor de desarrollo en `localhost:4321`    |
| `npm run build`   | Genera el sitio estático en `dist/`           |
| `npm run preview` | Sirve `dist/` para revisarlo antes de subirlo |

## Páginas

| Ruta              | Archivo                          | Contenido                                            |
| ----------------- | -------------------------------- | ---------------------------------------------------- |
| `/`               | `src/pages/index.astro`          | Landing: cómo comprar, Urbby Pay, envíos, derechos   |
| `/terminos`       | `src/pages/terminos.astro`       | Términos y Condiciones de Uso (Compradores)          |
| `/privacidad`     | `src/pages/privacidad.astro`     | Declaración de Privacidad                            |
| `/eliminar-datos` | `src/pages/eliminar-datos.astro` | Instrucciones de eliminación de datos                |

## Antes de publicar

### 1. Datos legales — ya cargados

Todos viven en **`src/data/empresa.ts`**: razón social, domicilio, correo y
teléfono. Están completos con los datos reales y deben mantenerse **idénticos**
a los documentos de registro de la sociedad en El Salvador, porque Meta los
coteja durante la verificación.

El correo y el teléfono tienen que poder **recibir el código de verificación**
que Meta envía.

### 2. Pegar el código de verificación de dominio

En `src/data/empresa.ts`, reemplazar `metaDomainVerification`:

```ts
export const metaDomainVerification = 'el-codigo-que-da-business-manager';
```

Business Manager lo entrega en **Configuración del negocio › Seguridad de la
marca › Dominios**. El layout lo inyecta en el `<head>` de todas las páginas.

### 3. Subir

`npm run build` y subir el **contenido** de `dist/` a la raíz del dominio, de
modo que `urbby.app/` sirva `dist/index.html`. Meta busca el meta tag en la raíz;
si el sitio queda en un subdirectorio, la verificación falla.

## Estructura

```
src/
  data/empresa.ts          ← datos legales, un solo lugar
  layouts/Base.astro       ← <head>, meta de verificación, scripts de animación
  layouts/Legal.astro      ← envoltorio de los documentos legales
  components/              ← Header, Footer, BackgroundArt
  pages/                   ← una página por ruta
  styles/global.css        ← tokens de marca (@theme) y animaciones
public/assets/             ← logo y formas de marca
reference/                 ← versión anterior de una sola página, sólo consulta
```

## Checklist de verificación en Meta

Verificado contra la documentación oficial de Meta (septiembre 2026). Cada punto lleva su fuente.

### Requisitos del sitio — confirmados como obligatorios

- [x] **HTTPS, el sitio carga y no hay enlaces rotos.** Es la **única** causa de rechazo relacionada
      con el sitio web que Meta documenta explícitamente. Los enlaces internos están auditados (0
      rotos); el HTTPS depende del hosting — verificalo después de publicar.
      → [Por qué se rechazó mi solicitud](https://es-la.facebook.com/business/help/2342133782492969)
- [x] **Meta tag de verificación en el HTML estático del home.** El rastreador de Facebook **no
      ejecuta JavaScript**, así que la etiqueta debe venir en el HTML servido. Astro la genera en el
      build, no en el cliente. Está en las cuatro páginas; el mínimo que Meta exige es el home.
      → [Verifying your domain](https://developers.facebook.com/documentation/sharing/domain-verification/verifying-your-domain)
- [x] **Política de privacidad publicada y accesible.**
      → [WhatsApp Business Messaging Policy](https://whatsappbusiness.com/policy/)
- [x] **Ruta de escalamiento a un humano**, declarada en el sitio y en el anexo. Meta la exige dentro
      de la ventana de atención de 24 horas. → [WhatsApp Business Messaging Policy](https://whatsappbusiness.com/policy/)
- [x] **Instrucciones de eliminación de datos con URL propia** (`/eliminar-datos`).

### Al publicar

- [ ] Servir el sitio por **HTTPS** con certificado válido. Un certificado vencido bloquea al
      rastreador de Facebook.
- [ ] En Business Settings → Brand Safety → Domains, cargar el dominio **raíz y sin prefijo**:
      `urbby.app` — no `www.urbby.app` ni `https://urbby.app`.
      → [Verificación de dominio](https://www.facebook.com/business/help/321167023127050)
- [ ] Meta solo tolera redirecciones **apex ↔ www** y **http ↔ https**. Cualquier otra (por
      geolocalización, idioma, un middleware) rompe la verificación.
      → [Solución de problemas](https://www.facebook.com/business/help/340070217802345)
- [ ] Si falla, usar el [Depurador de contenido compartido](https://developers.facebook.com/tools/debug)
      para ver el HTML que realmente vio el rastreador.
- [ ] El teléfono y el correo del negocio deben poder **recibir el código de verificación** de Meta.
      → [Información sobre la verificación del negocio](https://facebook.com/business/help/1095661473946872)
- [ ] Los datos que cargues en Business Manager deben coincidir **exactamente** con los documentos de
      registro. → [Verificar tu negocio](https://es-la.facebook.com/business/help/2058515294227817)

### Documentos para la verificación de negocio

Meta no publica una lista por país; usa categorías genéricas. Para El Salvador encajan la **escritura
de constitución** y el **registro de comercio**, siempre que lleven sello o firma de la autoridad
emisora (no autodeclarados) y estén vigentes. El **español es idioma admitido**, así que no hace falta
traducción. Una factura de servicios sirve para validar dirección y teléfono, **nunca el nombre legal**.
→ [Subir documentos oficiales](https://es-la.facebook.com/business/help/159334372093366)

### Pendientes de decisión (no son de código)

- [ ] **¿Tech Provider o negocio estándar?** El Tech Provider Program es para quien gestiona los
      WhatsApp Business Accounts **de terceros**. Si Urbby solo opera su propio número, probablemente
      alcanza con ser un negocio estándar en Cloud API, que pide bastante menos.
      → [Become a Tech Provider](https://developers.facebook.com/documentation/business-messaging/whatsapp/solution-providers/get-started-for-tech-providers)
- [ ] **Declaración de IA en el primer mensaje.** Hay reportes de terceros sobre lineamientos de Meta
      de 2026 que obligarían a declarar que se habla con IA en el primer mensaje. **No se pudo
      confirmar la redacción oficial**: verificar en
      [faq.whatsapp.com/6485307734928964](https://faq.whatsapp.com/6485307734928964).
- [ ] **Opt-in explícito.** Meta exige que el usuario haya dado su número y consentido recibir
      mensajes, con el nombre del negocio y el propósito claros. Conviene reflejarlo en el anexo.
      → [Getting opt-in](https://developers.facebook.com/documentation/business-messaging/whatsapp/getting-opt-in)

## Notas

- Las animaciones (aparición al hacer scroll, parallax del fondo, conversación
  del bot) respetan `prefers-reduced-motion` y degradan a contenido estático sin
  JavaScript. El texto legal siempre es legible aunque las animaciones fallen.
- `npm audit` reporta vulnerabilidades en `esbuild` y `sharp`, ambas
  dependencias **de build**. No viajan al sitio publicado, que es HTML y CSS
  estáticos. Resolverlas exige subir a Astro 7 (cambio mayor).
