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
               "Noto+Sans": true,
            },
         },
      ],
   ],
   css: ["~/assets/main.scss"],
});
