<template>
   <div>
      <h4 class="overview-title-other">other projects</h4>
      <div class="recent-projects">
         <!-- <FilterMenu /> -->
         <ContentList path="/" v-slot="{ list }">
            <NuxtLink
               class="recent-projects-project"
               v-for="(post, index) in list"
               :key="post.title"
               :to="post._path"
            >
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
               <div
                  class="recent-projects-project-title"
                  v-if="(index != 0) | !isFirstProject"
               >
                  {{ post.title }}
               </div>
               <img
                  v-if="(index != 0) | !isFirstProject"
                  :src="post.preview_img"
                  class="recent-projects-project-preview-img"
                  alt="post.title"
                  :style="{ opacity: 0.5 }"
               />
            </NuxtLink>
         </ContentList>
      </div>
   </div>
</template>

<script setup lang="ts">
import { reactive, computed } from "vue";
// import FilterMenu from "./FilterMenu.vue";

const { posts } = await useAsyncData("home", () =>
   queryContent()
      .only(["title", "preview_img", "year", "tags"])
      .sort({ year: -1 })
      .find()
);

const props = defineProps(["currentOpenPost"]);

const currentPost = computed(() => {
   return posts.map((post) => post.title).indexOf(props.currentOpenPost);
});

const isFirstProject = computed(() => {
   return currentPost == 0;
});

const filteredPosts = computed(() => {
   //edge cases
   let lastPost = currentPost - 1;
   console.log(currentPost);
   if (lastPost < 0 || lastPost >= posts.length - 1 || lastPost == undefined)
      lastPost = posts.length - 1;

   let nextPost = currentPost + 1;
   if (nextPost < 0 || nextPost >= posts.length - 1 || nextPost == undefined)
      nextPost = 0;

   //get indexes of post before and after
   let indices = [lastPost, nextPost];
   let filtered = indices.map((index) => posts[index]);
   return filtered;
});
</script>

<style>
</style>