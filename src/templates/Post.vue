<template>
    <Layout>
        <div class="post">
            <!-- <div class="projects_title_post">
                <g-link to="/portfolio/">Back to all projects</g-link>
            </div> -->
            <div class ="post-content">
                <g-image
                    :src="$page.post.preview_img"
                    class="post-img"
                    alt="post.title"
                />
                <div v-html="$page.post.content"></div> 
            </div>
            <div class="post-overview">
                <a v-if="$page.post.link !== '' "
                    class="post-overview-link"       
                    :href="$page.post.link"
                    target="_blank"
                    title="Project Link">
                    <LinkIcon/>
                    <p>{{$page.post.link}} </p>
                </a>
                <p>{{$page.post.year}} </p>
                <p>{{$page.post.location}} </p>
                <p class="post-overview-phrase">{{$page.post.phrase}} </p>
                <div class="projects_item_details_tags">
                    <div class="tag" v-for="tag in $page.post.tags" :key="tag.id" @click.stop="open(tag.path)">
                        {{ tag.title }}
                    </div>
                </div>
            </div>
            
        </div>
    </Layout>
</template>

<page-query> 
query Post ($path: String!){
  post: post(path: $path){
    	title
    	preview_img
        content
        year
        location
        phrase
        link
        tags{
          id
          title
          path
        }
    }
}
</page-query>

<script>
import LinkIcon from "vue-material-design-icons/Link";

export default {
    components: {
        LinkIcon
    },
    metaInfo(){
        return{
            this: this.$page.post.title
        }
    }
}
</script>
