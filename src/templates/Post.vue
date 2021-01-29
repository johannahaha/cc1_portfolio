<template>
    <Layout>
        <div v-html="$page.post.content" class ="home">
        </div>
    </Layout>
</template>

<page-query> 
query Post ($path: String!){
  post: post(path: $path){
    	title
        keywords
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
