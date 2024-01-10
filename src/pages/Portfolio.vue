<template>
   <Layout>
      <section class="projects">
         <!-- <div class="projects_title">
          <h1>Portfolio</h1>
          <p>all projects</p>
        </div> -->
         <div class="projects_filter">
            <div
               class="tag"
               :class="`${this.post_filter === 'all' ? 'selected' : ''}`"
               @click.stop="set_filter('all')"
            >
               all
            </div>
            <div
               class="tag"
               v-for="edge in $page.tags.edges"
               :key="edge.node.id"
               :class="`${post_filter === edge.node.title ? 'selected' : ''}`"
               @click.stop="set_filter(edge.node.title)"
            >
               {{ edge.node.title }}
            </div>
         </div>
         <div class="projects_items">
            <ProjectPreview
               v-for="edge in getFilteredPosts"
               :key="edge.node.title"
               :post="edge.node"
            />
         </div>
      </section>
   </Layout>
</template>

<page-query>
query Posts{
	posts: allPost(sortBy: "year"){
    edges{
      node{
        id
        title
    	  preview_img (width: 1000)
        path
        year
        phrase
        location
        tags{
          id
          title
          path
        }
      }
    }
  }
  tags:allTag(sortBy:"title",order:ASC){
        edges{
            node{
                id
                title
                path  
            }
        }
    }      
}
</page-query>

<script>
import ProjectPreview from "@/components/ProjectPreview.vue";

export default {
   components: {
      ProjectPreview,
   },
   metaInfo: {
      title: "Portfolio",
   },
   data() {
      return {
         post_filter: "all",
      };
   },
   computed: {
      getFilteredPosts() {
         console.log("get filtered post:", this.post_filter);
         let filteredPosts = this.$page.posts.edges.filter((post) =>
            this.is_included(post.node.tags)
         );
         return filteredPosts;
      },
   },
   methods: {
      set_filter: function (title) {
         console.log(title);
         //check if in tag list
         const all_tags = this.$page.tags.edges.map((x) =>
            x.node.title.toLowerCase()
         );
         if (all_tags.includes(title.toLowerCase())) {
            this.post_filter = title.toLowerCase();
         } else {
            this.post_filter = "all";
         }
      },
      is_included: function (tags) {
         const tag_titles = tags.map((x) => x.title.toLowerCase());
         //if all projects, return true for all
         if (this.post_filter == "all") {
            return true;
         }
         //matches current filter?
         else if (tag_titles.includes(this.post_filter)) {
            return true;
         }
         //otherwise falls
         else {
            return false;
         }
      },
   },
};
</script>