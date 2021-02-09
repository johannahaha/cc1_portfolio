<template>
    <Layout>
    <section class="projects">
        <div class="projects_items">
            <ProjectPreview v-for="edge in $page.posts.edges" :key="edge.node.id" :post="edge.node"/>
            <!-- <div class="projects_item">
                <img src="/philipp-pilz-iQRKBNKyRpo-unsplash.jpg" alt="My project">
                <div class="projects_btns">
                    <a href="#!" class="project-button">
                        <font-awesome :icon="['fas', 'eye']"/> Preview
                    </a>
                    <a href="#!" class="project-button">
                        <font-awesome :icon="['fab', 'github']"/> Github
                    </a>
                </div>
            </div> -->
        </div>
    </section>
    </Layout>    
</template>

<page-query>
query Posts{
	posts: allPost{
    edges{
      node{
        id
        title
        tags
    	preview_img (width: 720)
        path
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
    }
    
}
</script>