<template>
   <div class="projects_item">
      <g-image
         :src="post.preview_img"
         class="projects_item-preview-img"
         alt="post.title"
         @click="open(post.path)"
         @mouseover="showDetails = true"
         @mouseleave="showDetails = true"
         :style="{ opacity: imgOpacity }"
      />
      <div
         class="projects_item_details"
         v-show="showDetails"
         @mouseover="showDetails = true"
         @mouseleave="showDetails = true"
         @click="open(post.path)"
      >
         <div class="projects_item_details_infos">
            <p>{{ post.year }}</p>
            <h4>{{ post.title }}</h4>
            <p>{{ post.phrase }}</p>
         </div>
      </div>
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
         console.log(path);
         window.location.href = path;
      },
   },
};
</script>