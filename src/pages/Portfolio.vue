<template>
    <Layout>
    <section class="projects">
        <div class="projects_title">
          <h1>Portfolio</h1>
          <p>all projects</p>
        </div>
        <div class="projects_items">
            <ProjectPreview v-for="edge in $page.posts.edges" :key="edge.node.title" :post="edge.node"/>
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
        tags{
          id
          title
          path
        }
      }
    }
  }   
}
</page-query>

<script>
import ProjectPreview from "@/components/ProjectPreview.vue"

export default {
    components:{
        ProjectPreview
    },
    metaInfo: {
      title: 'Portfolio'
    },
    
}
</script>