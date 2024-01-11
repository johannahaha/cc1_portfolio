<template>
   <section class="projects">
      <div class="projects_items">
         <ContentList v-slot="{ list }" :query="query">
            <ProjectPreview
               v-for="article in list"
               :key="article._path"
               :post="article"
            />
         </ContentList>
      </div>
   </section>
</template>

<script setup lang ="ts">
import ProjectPreview from "./ProjectPreview.vue";

import type { QueryBuilderParams } from "@nuxt/content/dist/runtime/types";

const query: QueryBuilderParams = { sort: [{ year: -1 }] };
</script>
