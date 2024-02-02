<template>
   <div>
      <NuxtLayout>
         <NuxtPage />
      </NuxtLayout>
   </div>
</template>

<script setup lang="ts">
// const nuxtApp = useNuxtApp()

// nuxtApp.hook("page:finish", () => {
//    window.scrollTo(0, 0)
// })

// <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png">
// <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png">
// <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png">
// <link rel="manifest" href="/site.webmanifest">
// <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#073bc0">
// <meta name="msapplication-TileColor" content="#da532c">
//<meta name="theme-color" content="#ffffff">

useHead({
   title: "Johanna Hartmann",
   meta: [
      {
         name: "description",
         content:
            "Portfolio website of Johanna Hartmann, a Creative Technologist, Web Developer and Data Visualization Designer & Developer based in Berlin.",
      },
   ],
   link: [
      { rel: "icon", type: "image/png", sizes: "16x16", href: "/favicon.ico" },
      { rel: "icon", type: "image/png", sizes: "32x32", href: "/favicon.ico" },
      {
         rel: "apple-touch-icon",
         sizes: "180x180",
         href: "/apple-touch-icon.png",
      },
      { rel: "mask-icon", color: "#073bc0", href: "/safari-pinned-tab.svg" },
      { rel: "manifest", color: "#073bc0", href: "/site.webmanifest" },
   ],
});

useSeoMeta({
   title: "Johanna Hartmann",
   ogTitle: "Johanna Hartmann",
   description:
      "Portfolio website of Johanna Hartmann, a Creative Technologist, Web Developer and Data Visualization Designer & Developer based in Berlin.",
   ogDescription:
      "Portfolio website of Johanna Hartmann, a Creative Technologist, Web Developer and Data Visualization Designer & Developer based in Berlin.",
   ogImage: "https://img/klimakarten/klimakarten02.jpg",
   twitterCard: "summary_large_image",
});
</script>
