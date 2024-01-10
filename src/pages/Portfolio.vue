<template>
   <Layout>
      <section class="projects">
         <!-- <div class="projects_title">
          <h1>Portfolio</h1>
          <p>all projects</p>
        </div> -->
         <div class="projects_filter">
            <div class="tags">
               <div
                  class="tag"
                  v-for="edge in $page.tags.edges"
                  :key="edge.node.id"
                  @click.stop="open(edge.node.path)"
               >
                  {{ edge.node.title }}
               </div>
            </div>
         </div>
         <div class="projects_items">
            <ProjectPreview
               v-for="edge in $page.posts.edges"
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
   methods: {
      open: function (path) {
         console.log(path);
         window.location.href = path;
      },
   },
};
</script>