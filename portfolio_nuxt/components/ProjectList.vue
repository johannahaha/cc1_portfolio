<template>
   <section class="projects">
      <div class="projects_items">
         <div v-for="post in filteredPosts" :key="post.title">
            <ProjectPreview v-if="post.published" :post="post" />
         </div>
      </div>
   </section>
</template>

<script setup lang ="ts">
import ProjectPreview from "./ProjectPreview.vue";

//STATE
import { useFilterStore } from '@/stores/filters'
const filterStore = useFilterStore();

//QUERIES
const { data: posts } = await useAsyncData('posts', async () => {
   const posts = await queryContent("portfolio")
      .only(["title", "preview_img", "year", "tags", "date", "published", "_path", "phrase"])
      .sort({ date: -1 })
      .where({ published: true })
      .find()
   return posts
})

const filteredPosts = computed(() => {
   return posts.value.filter((post) =>
      useCheckProjectTag(post.tags, filterStore.getFilter))
})

</script>
