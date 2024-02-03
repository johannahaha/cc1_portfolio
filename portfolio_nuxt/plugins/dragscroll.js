import VueDragscroll from "vue-dragscroll";

export default defineNuxtPlugin((nuxtApp) => {
   //nuxtApp.vueApp.component("vue-dragscroll", VueDragscroll, {});

   nuxtApp.vueApp.use(VueDragscroll, {
      defaultProps: {
         arrow: true,
      },
      flipDuration: 0,
   });
});
