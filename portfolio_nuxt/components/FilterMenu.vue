<template>
   <div class="projects_filter">
      <div class="tag" :class="`${filter === 'all' ? 'selected' : ''}`" @click.stop="$emit('filterUpdated', 'all')">
         all
      </div>
      <div class="tag" v-for="tag in uniqueTags" :key="tag" :class="`${filter === tag ? 'selected' : ''}`"
         @click.stop="updateFilter(tag)">
         {{ tag }}
      </div>
   </div>
</template>

<script setup lang="ts">

//QUERIES
const tags = await useAsyncData("home", () =>
   queryContent().only("tags").find()
);

const uniqueTags = tags.data.value.map(tagList => tagList.tags.map(tag => tag))
   .flat(2)
   //unique
   .filter((value, index, array) => array.indexOf(value) === index);
console.log(uniqueTags)

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

function updateFilter(tag) {
   if (checkFilter(tag)) {
      console.log(tag)
   }
}


</script>

<style></style>