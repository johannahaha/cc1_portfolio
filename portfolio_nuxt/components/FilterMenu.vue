<template>
   <div class="projects_filter">
      <div class="tag" v-for="tag in uniqueTags" :key="tag" :class="`${filterStore.getFilter === tag ? 'selected' : ''}`"
         @click.stop="updateFilter(tag)">
         {{ tag }}
      </div>
   </div>
</template>

<script setup lang="ts">
import { useFilterStore, useLeftPostStore, useScrollPosStore } from '@/stores/filters'
//STATES 
const filterStore = useFilterStore();
const leftPostStore = useLeftPostStore();
const scrollPosStore = useScrollPosStore();

//QUERIES
const { data: tags } = await useAsyncData('tags', async () => {
   const tags = await queryContent().only("tags").find()
   return tags
})

let uniqueTags = ["all"]
//convert to unique array
if (tags != null && tags.value !== null) {
   uniqueTags = tags.value.map(tagList => tagList.tags.map((tag: string) => tag))
      .flat(2)
      //unique
      .filter((value, index, array) => array.indexOf(value) === index)

   //add "all" to the front
   uniqueTags.unshift("all");
}


//METHODS
function checkFilter(title: string) {
   title = title.toLowerCase();
   let updated_filter = "";
   if (uniqueTags.includes(title)) {
      updated_filter = title;
   } else {
      updated_filter = "all";
   }
   return updated_filter;
}

function updateFilter(tag: string) {
   leftPostStore.reset();
   scrollPosStore.reset(); //todo: rerender scrollto element position (watch pinia state)
   filterStore.setFilter(checkFilter(tag));
}



</script>

<style></style>