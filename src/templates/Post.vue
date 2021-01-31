<template>
    <Layout>
        <div>
            <div v-html="$page.post.content" class ="post-content">
        </div>
        </div>
    </Layout>
</template>

<page-query> 
query Post ($path: String!){
  post: post(path: $path){
    	title
        keywords
    	preview_img (width: 720)
        content
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
