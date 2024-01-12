<template>
   <section class="projects">
      <!-- <div class="projects_title">
          <h1>Portfolio</h1>
          <p>all projects</p>
        </div> -->
      <div class="projects_items">
         <ProjectPreview
            v-for="edge in filteredPosts"
            :key="edge.node.title"
            :post="edge.node"
         />
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
   metaInfo: {
      title: "Portfolio",
   },
};
</script>