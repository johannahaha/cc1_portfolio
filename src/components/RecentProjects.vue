<template>
   <div>
      <h4 class="overview-title-other">other projects</h4>
      <div class="recent-projects">
         <!-- <FilterMenu /> -->
         <div
            class="recent-projects-project"
            v-for="(edge, index) in this.filteredPosts"
            :key="edge.node.title"
            :post="edge.node"
         >
            <font-awesome
               v-if="index == 0"
               class="angle"
               :icon="['fas', 'angle-left']"
               size="1x"
            />
            <font-awesome
               v-if="index != 0"
               class="angle"
               :icon="['fas', 'angle-right']"
               size="1x"
            />
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
         let filtered = this.posts.edges.filter(
            (edge) => edge.node.title !== this.currentOpenPost
         );
         return filtered.slice(0, 2);
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