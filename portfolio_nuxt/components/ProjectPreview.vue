<template>
   <div class="projects_item">
      <NuxtLink :to="post._path">
         <img :src="post.preview_img" class="projects_item-preview-img" alt="post.title" @mouseover="showDetails = true"
            @mouseleave="showDetails = true" :style="{ opacity: imgOpacity }" />
      </NuxtLink>
      <NuxtLink :to="post._path">
         <div class="projects_item_details" v-show="showDetails" @mouseover="showDetails = true"
            @mouseleave="showDetails = true">
            <div class="projects_item_details_infos">
               <p>{{ post.year }}</p>
               <h4>{{ post.title }}</h4>
               <p>{{ post.phrase }}</p>
            </div>
         </div>
      </NuxtLink>
   </div>
</template>

<script>
export default {
   computed: {
      imgOpacity: function () {
         if (this.showDetails) return 0.5;
         else return 1.0;
      },
   },
   props: {
      post: {},
   },
   data: function () {
      return {
         showDetails: true,
      };
   },
   methods: {
      open: function (path) {
         window.location.href = path;
      },
   },
};
</script>