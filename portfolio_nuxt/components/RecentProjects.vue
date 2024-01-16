<template>
   <div>
      <h4 class="overview-title-other">other projects</h4>
      <!-- <FilterMenu /> -->
      <div class="recent-projects">
         <NuxtLink class="recent-projects-project" v-for="(post, index) in filteredPosts" :key="post.title"
            :to="post._path">
            <!-- <font-awesome
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
            /> -->
            <div class="recent-projects-project-title" v-if="(index != 0) || !isFirstProject">
               {{ post.title }}
            </div>
            <img v-if="(index != 0) || !isFirstProject" :src="post.preview_img" class="recent-projects-project-preview-img"
               alt="post.title" :style="{ opacity: 0.5 }" />
         </NuxtLink>
      </div>
   </div>
</template>

<script setup lang="ts">
import { reactive, computed } from "vue";
// import FilterMenu from "./FilterMenu.vue";


const { data: posts } = await useAsyncData('posts', async () => {
   const posts = await queryContent("portfolio")
      .only(["title", "preview_img", "year", "tags", "date", "published", "_path"])
      .sort({ date: -1 })
      .where({ published: true })
      .find()

   return posts
})

const props = defineProps(["currentOpenPost"]);

//get index of current post
const currentPost = computed(() => {
   if (posts != null && posts.value !== null) {
      return posts.value.map((post) => post.title).indexOf(props.currentOpenPost);
   }
});

const isFirstProject = computed(() => {
   return currentPost.value === 0;
});

const filteredPosts = computed(() => {

   if (currentPost.value !== undefined && posts.value !== undefined && posts.value !== null) {
      let lastPost = currentPost.value - 1;
      let nextPost = currentPost.value + 1;

      //edge cases
      if (lastPost < 0 || lastPost >= posts.value.length - 1 || lastPost == undefined)
         lastPost = posts.value.length - 1;
      if (nextPost < 0 || nextPost >= posts.value.length - 1 || nextPost == undefined)
         nextPost = 0;

      //get indexes of post before and after
      let indices = [lastPost, nextPost];
      let filtered = indices.map((index) => posts.value[index]);
      return filtered;
   }


});
</script>

<style></style>