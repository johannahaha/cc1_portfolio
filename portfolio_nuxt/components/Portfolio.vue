<template>
   <section class="projects">
      <!-- <div class="projects_title">
          <h1>Portfolio</h1>
          <p>all projects</p>
        </div> -->
      <div class="projects_items">
         <ContentList path="/" v-slot="{ list }">
            <ProjectPreview
               v-for="article in list"
               :key="article._path"
               :post="article"
            />
         </ContentList>
      </div>
   </section>
</template>

<script>
import ProjectPreview from "@/components/ProjectPreview.vue";

export default {
   components: {
      ProjectPreview,
   },
   props: {
      filteredPosts: Array,
   },
   // metaInfo: {
   //    title: "Portfolio",
   // },
};
</script>