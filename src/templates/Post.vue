<template>
   <Layout>
      <div class="outer-post">
         <!-- <div class="projects_title_post">
                <g-link to="/portfolio/">Back to all projects</g-link>
            </div> -->
         <div class="post">
            <div class="post-content">
               <g-image
                  :src="$page.post.preview_img"
                  class="post-img"
                  alt="post.title"
               />
               <div v-html="$page.post.content"></div>
            </div>
            <div class="post-overview">
               <a
                  v-if="$page.post.link !== ''"
                  class="post-overview-link"
                  :href="$page.post.link"
                  target="_blank"
                  title="Project Link"
               >
                  <LinkIcon />
                  <p>{{ $page.post.link }}</p>
               </a>
               <p>{{ $page.post.year }}</p>
               <p>{{ $page.post.location }}</p>
               <p class="post-overview-phrase">{{ $page.post.phrase }}</p>
               <div class="projects_item_details_tags">
                  <div class="tag" v-for="tag in $page.post.tags" :key="tag.id">
                     {{ tag.title }}
                  </div>
               </div>
            </div>
         </div>
         <RecentProjects
            :posts="$page.posts"
            :currentOpenPost="$page.post.title"
         />
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
    posts: allPost(sortBy: "year", limit:10){
        edges{
            node{
               id
               title
               preview_img (width: 1000)
               path
               year
            }
        }
    }   
}
</page-query>

<script>
import LinkIcon from "vue-material-design-icons/Link";

import RecentProjects from "@/components/RecentProjects.vue";

export default {
   components: {
      LinkIcon,
      RecentProjects,
   },
   metaInfo() {
      return {
         this: this.$page.post.title,
      };
   },
   methods: {
      open: function (path) {
         console.log(path);
         window.location.href = path;
      },
   },
};
</script>
