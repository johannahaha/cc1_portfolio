<template>
   <section class="projects">
      <div class="projects_items">
         <div v-for="post in filteredPosts" :key="post.title">
            <ProjectPreview v-if="isIncluded(post.tags) && post.published" :post="post" />
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

const filteredPosts = posts.value.filter((post) =>
   isIncluded(post.tags))


//METHODS
function isIncluded(tags: Array<string>) {
   const tag_titles = tags.map((x: any) => x.toLowerCase());
   //if all projects, return true for all
   if (filterStore.getFilter === "all") {
      return true;
   }
   //matches current filter?
   else if (tag_titles.includes(filterStore.getFilter)) {
      return true;
   }
   //otherwise false
   else {
      return false;
   }
}
</script>
