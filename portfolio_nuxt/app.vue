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

useSeoMeta({
   title: 'Johanna Hartmann',
   ogTitle: 'Johanna Hartmann',
   description: 'Portfolio website of Johanna Hartmann, a Creative Technologist, Web Developer and Data Visualization Designer & Developer based in Berlin.',
   ogDescription: 'Portfolio website of Johanna Hartmann, a Creative Technologist, Web Developer and Data Visualization Designer & Developer based in Berlin.',
   ogImage: 'https://img/klimakarten/klimakarten02.jpg',
   twitterCard: 'summary_large_image',
})
</script>

