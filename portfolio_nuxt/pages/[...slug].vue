
<template>
   <main class="outer-post">
      <!-- ContentDoc returns content for `$route.path` by default or you can pass a `path` prop -->
      <ContentDoc v-slot="{ doc }">
         <ContentRenderer :value="doc">
            <div class="post">
               <div class="post-content">
                  <img :src="doc.preview_img" class="post-img" alt="post.title" />
                  <h1>{{ doc.title }}</h1>
                  <h4>{{ doc.phrase }}</h4>
                  <ContentRendererMarkdown :value="doc" />
               </div>
               <div class="post-overview">
                  <h4 class="overview-title-this">this project</h4>
                  <div class="post-overview-text">
                     <NuxtLink v-if="doc.link !== '' && doc.link !== null" class="post-overview-text-link" to="doc.link"
                        title="Project Link">
                        <font-awesome-icon icon="fa-solid fa-link" size="l" />
                        <p>{{ doc.link }}</p>
                     </NuxtLink>
                     <p>{{ doc.year }}</p>
                     <p>{{ doc.location }}</p>
                     <p class="post-overview-text-phrase">{{ doc.phrase }}</p>
                     <div class="post-overview-text-tags">
                        <div class="tag">skills: </div>
                        <div class="tag" v-for="(tag, index) in doc.tags" :key="index">
                           <div v-if="index == doc.tags.length - 1">
                              {{ tag }}
                           </div>
                           <div v-else>{{ tag }}, </div>
                        </div>
                     </div>
                  </div>
                  <RecentProjects id="recents-below-overview" :openPostTitle="doc.title" />
               </div>
            </div>
            <RecentProjects id="recents-below-post" :openPostTitle="doc.title" />
         </ContentRenderer>
      </ContentDoc>
   </main>
</template>

<script setup lang="ts">

import { useScrollPosStore } from "@/stores/filters";


definePageMeta({
   middleware: [
      function (to, from) {
         // Custom inline middleware   
         if (document) {
            const el = document.querySelector("#scroll-element");
            if (el) {
               const scrollPosStore = useScrollPosStore();
               scrollPosStore.setScroll(el.scrollTop, el.scrollLeft);
            }

         }
      },
      'storescroll',
   ],
});
</script>

