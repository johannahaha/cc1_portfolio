
<template>
   <main class="outer-post">
      <!-- ContentDoc returns content for `$route.path` by default or you can pass a `path` prop -->
      <ContentDoc v-slot="{ doc }">
         <ContentRenderer :value="doc">
            <div class="post">
               <ContentRendererMarkdown class="post-content" :value="doc" />
               <div class="post-overview">
                  <h4 class="overview-title-this">this project</h4>
                  <div class="post-overview-text">
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
                  <RecentProjects id="recents-below-overview" :currentOpenPost="doc.title" />
               </div>
            </div>
            <RecentProjects id="recents-below-post" :currentOpenPost="doc.title" />
         </ContentRenderer>
      </ContentDoc>
   </main>
</template>

