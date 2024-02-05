<template>
   <div @click.prevent.self="">
      <h4 class="overview-title-other">other projects</h4>
      <FilterMenu />
      <div class="recent-projects" id="scroll-element" ref="scrollElement">
         <NuxtLink
            class="recent-projects-project"
            v-for="(post, index) in filteredPosts"
            :key="post.title"
            :to="{ path: post._path }"
         >
            <div
               class="recent-projects-project-title"
               :class="{ active: post.title == openPostTitle }"
            >
               {{ post.title }}
            </div>
            <img
               :src="post.preview_img"
               class="recent-projects-project-preview-img"
               alt="post.title"
               :class="{ active: post.title == openPostTitle }"
            />
         </NuxtLink>
      </div>
      <!-- <div class="arrows" @click.prevent>
         <button
            class="arrows-icon"
            @click.prevent="previousPost"
            v-show="!isFirst"
         >
            <font-awesome-icon
               class="angle"
               icon="fa-solid fa-angle-left"
               size="xl"
            />
         </button>
         <button class="arrows-icon" @click.prevent="nextPost" v-show="!isLast">
            <font-awesome-icon
               class="angle"
               icon="fa-solid fa-angle-right"
               size="xl"
            />
         </button>
      </div> -->
   </div>
</template>

<script setup lang="ts">
import { reactive, computed } from "vue";

//STATE
import {
   useFilterStore,
   useLeftPostStore,
   useScrollPosStore,
} from "@/stores/filters";
const filterStore = useFilterStore();
const leftPostStore = useLeftPostStore();
const scrollPosStore = useScrollPosStore();

const isLast = useState("isLast", () => false);
const isFirst = useState("isFirst", () => false);

//PROPS
const props = defineProps(["openPostTitle"]);

//QUERIES
const { data: posts } = await useAsyncData("posts", async () => {
   const posts = await queryContent("portfolio")
      .only([
         "title",
         "preview_img",
         "year",
         "tags",
         "date",
         "published",
         "_path",
      ])
      .sort({ date: -1 })
      .where({ published: true })
      .find();

   return posts;
});

//REFS
const scrollElement = ref<HTMLElement | null>(null);

onMounted(() => {
   //scroll in bar to correct posisition
   if (scrollElement && scrollElement.value) {
      scrollElement.value.scrollTo(
         scrollPosStore.getLeft,
         scrollPosStore.getTop
      );

      checkScrollPosition(scrollPosStore.getLeft);
   }
});

//METHODS
const nextPost = function () {
   if (
      scrollElement &&
      scrollElement.value &&
      scrollElement.value.firstElementChild &&
      scrollElement.value.firstElementChild
   ) {
      const width = scrollElement.value.firstElementChild.offsetWidth * 2;
      const currentScroll = scrollElement.value.scrollLeft;
      scrollElement.value.scrollTo({
         top: 0,
         left: currentScroll + width,
         behavior: "smooth",
      });

      checkScrollPosition(currentScroll + width);
   }
};

const previousPost = function () {
   if (
      scrollElement &&
      scrollElement.value &&
      scrollElement.value.firstElementChild &&
      scrollElement.value.firstElementChild
   ) {
      const width = scrollElement.value.firstElementChild.offsetWidth * 2;
      const currentScroll = scrollElement.value.scrollLeft;
      scrollElement.value.scrollTo({
         top: 0,
         left: currentScroll - width,
         behavior: "smooth",
      });
      checkScrollPosition(currentScroll - width);
   }
};

const checkScrollPosition = function (scroll: number) {
   if (scrollElement && scrollElement.value) {
      console.log("scroll:", scroll);
      console.log("width:", scrollElement.value.scrollLeftMax);
      if (scroll >= scrollElement.value.scrollLeftMax) {
         console.log("first:", scroll);
         isLast.value = true;
      } else {
         isLast.value = false;
      }
   }
   if (scroll <= 0) {
      console.log("first:", scroll);
      isFirst.value = true;
   } else {
      console.log("not first:", scroll);
      isFirst.value = false;
   }
};

//COMPUTED
const filteredPosts = computed(() => {
   return posts.value.filter((post) =>
      useCheckProjectTag(post.tags, filterStore.getFilter)
   );
});

//get index of current post
const openPostID = computed(() => {
   return filteredPosts.value
      .map((post) => post.title)
      .indexOf(props.openPostTitle);
});

// const leftPostID = computed(() => { return 0 })

const rightIsFirstProject = computed(() => {
   return leftPostStore.getLeftPost <= 0;
});

const leftIsLastProject = computed(() => {
   if (scrollElement && scrollElement.value) {
      const width = scrollElement.value.offsetWidth;
      const currentScroll = scrollElement.value.scrollLeft;
   }
});

const rightPostID = computed(() => {
   return leftPostStore.getLeftPost + 1;
});

const previewPosts = computed(() => {
   let indices = [leftPostStore.getLeftPost, rightPostID.value];
   //console.log(indices)
   if (filteredPosts !== undefined && filteredPosts !== null) {
      console.log(indices.map((index) => filteredPosts.value[index]));
      return indices.map((index) => filteredPosts.value[index]);
   }
});

const neighborPosts = computed(() => {
   if (
      openPostID.value !== undefined &&
      filteredPosts !== undefined &&
      filteredPosts !== null
   ) {
      let lastPost = openPostID.value - 1;
      let nextPost = openPostID.value + 1;

      //edge cases
      if (
         lastPost < 0 ||
         lastPost >= filteredPosts.value.length ||
         lastPost == undefined
      )
         lastPost = filteredPosts.value.length - 1;
      if (
         nextPost < 0 ||
         nextPost >= filteredPosts.value.length - 1 ||
         nextPost == undefined
      )
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
