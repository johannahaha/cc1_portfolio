<template>
   <div>
      <h4 class="overview-title-other">other projects</h4>
      <FilterMenu />
      <div class="recent-projects">
         <NuxtLink class="recent-projects-project" v-for="(post, index) in neighborPosts" :key="post.title"
            :to="post._path">
            <font-awesome-icon v-if="index == 0 && !isFirstProject" class="angle" icon="fa-solid fa-angle-left"
               size="xl" />
            <font-awesome-icon v-if="index != 0" class="angle" icon="fa-solid fa-angle-right" size="xl" />
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

//STATE
import { useFilterStore } from '@/stores/filters'
const filterStore = useFilterStore();

//PROPS
const props = defineProps(["currentOpenPost"]);

//QUERIES
const { data: posts } = await useAsyncData('posts', async () => {
   const posts = await queryContent("portfolio")
      .only(["title", "preview_img", "year", "tags", "date", "published", "_path"])
      .sort({ date: -1 })
      .where({ published: true })
      .find()

   return posts
})

//COMPUTED
const filteredPosts = computed(() => {
   return posts.value.filter((post) =>
      useCheckProjectTag(post.tags, filterStore.getFilter))
})

//get index of current post
const currentPost = computed(() => {
   return filteredPosts.value.map((post) => post.title).indexOf(props.currentOpenPost);
});

const isFirstProject = computed(() => {
   return currentPost.value === 0;
});

const neighborPosts = computed(() => {
   if (currentPost.value !== undefined && filteredPosts !== undefined && filteredPosts !== null) {
      let lastPost = currentPost.value - 1;
      let nextPost = currentPost.value + 1;

      //edge cases
      if (lastPost < 0 || lastPost >= filteredPosts.length - 1 || lastPost == undefined)
         lastPost = filteredPosts.value.length - 1;
      if (nextPost < 0 || nextPost >= filteredPosts.length - 1 || nextPost == undefined)
         nextPost = 0;

      //get indexes of post before and after
      let indices = [lastPost, nextPost];
      console.log(indices)
      let neighbors = indices.map((index) => filteredPosts.value[index]);
      console.log(neighbors)
      return neighbors;
   }


});
</script>

<style></style>