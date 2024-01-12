<template>
   <div class="projects_filter">
      <div class="tag" :class="`${filter === 'all' ? 'selected' : ''}`" @click.stop="$emit('filterUpdated', 'all')">
         all
      </div>
      <div class="tag" v-for="tag in tags" :key="tag" :class="`${filter === tag ? 'selected' : ''}`"
         @click.stop="$emit('filterUpdated', checkFilter(tag))">
         {{ tag }}
      </div>
   </div>
</template>

<script setup lang="ts">

//QUERIES
const { posts } = await useAsyncData("home", () => queryContent().find());
const { tags } = await useAsyncData("home", () =>
   queryContent().only("id").find()
);
console.info(tags);

//STATES
const filter = useFilter();
//METHODS

function checkFilter(title) {
   title = title.toLowerCase();
   let updated_filter = "";
   //check if in tag list
   // const all_tags = this.$page.tags.edges.map((x) =>
   //    x.node.title.toLowerCase()
   // );
   const all_tags = ["all"];
   if (all_tags.includes(title)) {
      updated_filter = title;
   } else {
      updated_filter = "all";
   }
   return updated_filter;
}


</script>

<style></style>