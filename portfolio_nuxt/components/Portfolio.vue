<template>
   <section class="projects">
      <div class="projects_items">
         <ContentList v-slot="{ list }" :query="query">
            <div v-for="article in list" :key="article._path">
               <ProjectPreview v-if="isIncluded(article.tags)" :post="article" />
            </div>
         </ContentList>
      </div>
   </section>
</template>

<script setup lang ="ts">
import ProjectPreview from "./ProjectPreview.vue";

//QUERY PARAM
import type { QueryBuilderParams } from "@nuxt/content/dist/runtime/types";
const query: QueryBuilderParams = { sort: [{ year: -1 }] };

//STATE
const filter = useFilter();

//METHODS
function isIncluded(tags) {
   const tag_titles = tags.map((x: any) => x.toLowerCase());
   //if all projects, return true for all
   if (filter.value === "all") {
      return true;
   }
   //matches current filter?
   else if (tag_titles.includes(filter.value)) {
      return true;
   }
   //otherwise false
   else {
      return false;
   }
}
</script>
