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
               v-if="index == 0 && !isFirstProject"
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
            <div
               class="recent-projects-project-title"
               v-if="(index != 0) | !isFirstProject"
            >
               {{ edge.node.title }}
            </div>
            <img
               v-if="(index != 0) | !isFirstProject"
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
      currentPost: function () {
         return this.posts.edges
            .map((edge) => edge.node.title)
            .indexOf(this.currentOpenPost);
      },
      isFirstProject: function () {
         if (this.currentPost == 0) return true;
         else return false;
      },
      filteredPosts: function () {
         //edge cases
         let lastPost = this.currentPost - 1;
         if (
            (lastPost < 0) |
            (lastPost >= this.posts.edges.length - 1) |
            (lastPost == undefined)
         )
            lastPost = this.posts.edges.length - 1;

         let nextPost = this.currentPost + 1;
         if (
            (nextPost < 0) |
            (nextPost >= this.posts.edges.length - 1) |
            (nextPost == undefined)
         )
            nextPost = 0;

         //get indexes of post before and after
         let indices = [lastPost, nextPost];
         let filtered = indices.map((index) => this.posts.edges[index]);
         return filtered;
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