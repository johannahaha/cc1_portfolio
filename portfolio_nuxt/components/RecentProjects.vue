<template>
   <div>
      <h4 class="overview-title-other">other projects</h4>
      <FilterMenu />
      <div class="recent-projects">
         <NuxtLink class="recent-projects-project" v-for="(post, index) in previewPosts" :key="post.title">
            <div class="recent-projects-project-title">
               {{ post.title }}
            </div>
            <img :src="post.preview_img" class="recent-projects-project-preview-img" alt="post.title"
               :style="{ opacity: 0.5 }" />
         </NuxtLink>
      </div>
      <font-awesome-icon v-show="!rightIsFirstProject" class="angle" icon="fa-solid fa-angle-left" size="xl"
         @click="previousPost" />
      <font-awesome-icon v-show="!leftIsLastProject" class="angle" icon="fa-solid fa-angle-right" size="xl"
         @click="nextPost" />
   </div>
</template>

<script setup lang="ts">
import { reactive, computed } from "vue";

//STATE
import { useFilterStore, useLeftPostStore } from '@/stores/filters'
const filterStore = useFilterStore();
const leftPostStore = useLeftPostStore();


//PROPS
const props = defineProps(["openPostTitle"]);

//QUERIES
const { data: posts } = await useAsyncData('posts', async () => {
   const posts = await queryContent("portfolio")
      .only(["title", "preview_img", "year", "tags", "date", "published", "_path"])
      .sort({ date: -1 })
      .where({ published: true })
      .find()

   return posts
})

//METHODS
const nextPost = function () {
   console.log("Next?", !leftIsLastProject.value)
   if (!leftIsLastProject.value) {
      leftPostStore.increment();
   }
}

const previousPost = function () {
   if (!rightIsFirstProject.value) {
      leftPostStore.decrement();
   }
}

//COMPUTED
const filteredPosts = computed(() => {
   return posts.value.filter((post) =>
      useCheckProjectTag(post.tags, filterStore.getFilter))
})

//get index of current post
const openPostID = computed(() => {
   console.log(props.openPostTitle)
   console.log("current", filteredPosts.value.map((post) => post.title).indexOf(props.openPostTitle))
   return filteredPosts.value.map((post) => post.title).indexOf(props.openPostTitle);
});

// const leftPostID = computed(() => { return 0 })

const rightIsFirstProject = computed(() => {
   return leftPostStore.getLeftPost <= 0;
});

const leftIsLastProject = computed(() => {
   console.log(filteredPosts.value.length - 1)
   return leftPostStore.getLeftPost >= filteredPosts.value.length - 2;
});


const rightPostID = computed(() => {
   console.log("left", leftPostStore.getLeftPost)
   console.log("right", leftPostStore.getLeftPost + 1)
   return leftPostStore.getLeftPost + 1;
});

const previewPosts = computed(() => {
   let indices = [leftPostStore.getLeftPost, rightPostID.value]
   console.log(indices)
   if (filteredPosts !== undefined && filteredPosts !== null) {
      console.log(indices.map((index) => filteredPosts.value[index]))
      return indices.map((index) => filteredPosts.value[index]);
   }

})

const neighborPosts = computed(() => {
   if (openPostID.value !== undefined && filteredPosts !== undefined && filteredPosts !== null) {
      let lastPost = openPostID.value - 1;
      let nextPost = openPostID.value + 1;

      //edge cases
      if (lastPost < 0 || lastPost >= filteredPosts.value.length || lastPost == undefined)
         lastPost = filteredPosts.value.length - 1;
      if (nextPost < 0 || nextPost >= filteredPosts.value.length - 1 || nextPost == undefined)
         nextPost = 0;

      // console.log("left", lastPost)
      // console.log("right", nextPost)

      //get indexes of post before and after
      let indices = [lastPost, nextPost];
      let neighbors = indices.map((index) => filteredPosts.value[index]);
      // console.log(neighbors)
      return neighbors;
   }


});
</script>

<style></style>