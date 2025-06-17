// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import starlightImageZoom from 'starlight-image-zoom'

// https://astro.build/config
export default defineConfig({
  // i18n: {
  //   defaultLocale: "es",
  //   locales: ["es"],
  // },
  integrations: [
    starlight({
      plugins: [starlightImageZoom()],
      title: "Documentación",
      social: [
        {
          icon: "github",
          label: "GitHub",
          href: "https://github.com/juanparen15/IGAC-HACIENDA",
        },
      ],
      sidebar: [
        {
          label: "Introducción",
          items: [
            // Each item here is one entry in the navigation menu.
            {
              label: "Conozcamos el Proyecto IGAC",
              slug: "introduccion/proyecto-igac",
            },
          ],
        },
        {
          label: "Documentación técnica",
          items: [
            { label: "Arquitectura del sistema", slug: "tech/arquitectura" },
            { label: "Tecnologías utilizadas", slug: "tech/tecnologias" },
            { label: "Base de datos", slug: "tech/basedatos" },
            { label: "Despliegue", slug: "tech/despliegue" },
            { label: "Mantenimiento", slug: "tech/mantenimiento" },
          ],
        },
        {
          label: "Documentación de usuario",
          items: [
            { label: "Presentación de Inicio", slug: "usuario/acceso" },
            { label: "Presentación de Reclamo", slug: "usuario/reclamo" },
            { label: "Seguimiento de Reclamos", slug: "usuario/seguimiento" },
            { label: "Preguntas Frecuentes (FAQ)", slug: "usuario/faq" },
          ],
        },
        {
          label: "Créditos",
          items: [
            {
              label: "Glosario, contacto y créditos",
              slug: "creditos/glosario",
            },
          ],
        },
      ],
    }),
  ],
});
