<template>
   <div class="projects_filter">
      <div class="tag" v-for="tag in uniqueTags" :key="tag" :class="`${filterStore.getFilter === tag ? 'selected' : ''}`"
         @click.stop="updateFilter(tag)">
         {{ tag }}
      </div>
   </div>
</template>

<script setup lang="ts">
import { useFilterStore } from '@/stores/filters'

//QUERIES
const tags = await useAsyncData("home", () =>
   queryContent().only("tags").find()
);

let uniqueTags = tags.data.value.map(tagList => tagList.tags.map(tag => tag))
   .flat(2)
   //unique
   .filter((value, index, array) => array.indexOf(value) === index)

//add "all" to the front
uniqueTags.unshift("all");


//STATES 
const filterStore = useFilterStore();
//METHODS

function checkFilter(title) {
   title = title.toLowerCase();
   let updated_filter = "";
   if (uniqueTags.includes(title)) {
      updated_filter = title;
   } else {
      updated_filter = "all";
   }
   console.log(updated_filter)
   return updated_filter;
}

function updateFilter(tag) {
   if (checkFilter(tag)) {
      filterStore.setFilter(checkFilter(tag));
   }
}


</script>

<style></style>