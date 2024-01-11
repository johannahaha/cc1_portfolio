<template>
   <div class="projects_filter">
      <div
         class="tag"
         :class="`${this.post_filter === 'all' ? 'selected' : ''}`"
         @click.stop="$emit('filterUpdated', 'all')"
      >
         all
      </div>
      <div
         class="tag"
         v-for="edge in $page.tags.edges"
         :key="edge.node.id"
         :class="`${this.post_filter === edge.node.title ? 'selected' : ''}`"
         @click.stop="$emit('filterUpdated', check_filter(edge.node.title))"
      >
         {{ edge.node.title }}
      </div>
   </div>
</template>

<script>
export default {
   props: {
      post_filter: String,
   },
   emits: ["filterUpdated"],
   methods: {
      check_filter: function (title) {
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
      },
   },
};
</script>

<style>
</style>