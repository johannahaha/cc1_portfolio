<template>
    <Layout>
        <div>
            <div class="projects_title_post">
                <g-link to="/portfolio/">Back to all projects</g-link>
            </div>
            <div v-html="$page.post.content" class ="post-content"> </div>
        </div>
    </Layout>
</template>

<page-query> 
query Post ($path: String!){
  post: post(path: $path){
    	title
    	preview_img (width: 720)
        content
        year
    }
}
</page-query>

<script>
export default {
    metaInfo(){
        return{
            this: this.$page.post.title
        }
    }
}
</script>
