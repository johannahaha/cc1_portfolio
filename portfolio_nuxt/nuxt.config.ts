// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
   devtools: { enabled: true },
   modules: [
      "@nuxt/content",
      "@pinia/nuxt",
      [
         "@nuxtjs/google-fonts",
         {
            families: {
               Archivo: true,
               ArchivoVariable: true,
               "Noto + Sans": true,
            },
         },
      ],
   ],
   css: ["~/assets/main.scss"],
   content: {
      markdown: {
         anchorLinks: false,
      },
   },
   build: {
      transpile: [
         "lite-youtube",
         "@fortawesome/fontawesome-svg-core",
         "@fortawesome/pro-solid-svg-icons",
         "@fortawesome/free-brands-svg-icons",
         "@fortawesome/vue-fontawesome",
      ],
   },
   vue: {
      compilerOptions: {
         isCustomElement: (tag) => ["lite-youtube"].includes(tag),
      },
   },
   router: {
      options: {
         scrollBehaviorType: "smooth",
      },
   },
});
