<template>
   <div class="recent-projects">
      <FilterMenu />
      <div
         class="recent-projects-project"
         v-for="edge in this.filteredPosts"
         :key="edge.node.title"
         :post="edge.node"
      >
         <div class="recent-projects-project-title">
            {{ edge.node.title }}
         </div>
         <g-image
            :src="edge.node.preview_img"
            class="recent-projects-project-preview-img"
            alt="post.title"
            @click="open(edge.node.path)"
            :style="{ opacity: 0.5 }"
         />
      </div>
   </div>
</template>

<script>
import FilterMenu from "./FilterMenu.vue";
export default {
   components: {
      FilterMenu,
   },
   props: {
      posts: {},
      currentOpenPost: "",
   },
   computed: {
      filteredPosts: function () {
         return this.posts.edges.filter(
            (edge) => edge.node.title !== this.currentOpenPost
         );
      },
   },
   methods: {
      open: function (path) {
         console.log(path);
         window.location.href = path;
      },
   },
};
</script>

<style>
</style>