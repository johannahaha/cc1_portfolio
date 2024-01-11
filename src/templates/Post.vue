<template>
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
            <h4 class="overview-title-this">this project</h4>
            <div class="post-overview-text">
               <a
                  v-if="$page.post.link !== ''"
                  class="post-overview-text-link"
                  :href="$page.post.link"
                  target="_blank"
                  title="Project Link"
               >
                  <LinkIcon />
                  <p>{{ $page.post.link }}</p>
               </a>
               <p>{{ $page.post.year }}</p>
               <p>{{ $page.post.location }}</p>
               <p class="post-overview-text-phrase">{{ $page.post.phrase }}</p>
               <div class="post-overview-text-tags">
                  <div class="tag">skills:</div>
                  <div
                     class="tag"
                     v-for="(tag, index) in $page.post.tags"
                     :key="tag.id"
                  >
                     <div v-if="index == $page.post.tags.length - 1">
                        {{ tag.title }}
                     </div>
                     <div v-else>{{ tag.title }},</div>
                  </div>
               </div>
            </div>
            <RecentProjects
               id="recents-below-overview"
               :posts="$page.posts"
               :currentOpenPost="$page.post.title"
            />
         </div>
      </div>
      <RecentProjects
         id="recents-below-post"
         :posts="$page.posts"
         :currentOpenPost="$page.post.title"
      />
   </div>
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
    posts: allPost(sortBy: "year"){
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
import LinkIcon from "vue-material-design-icons/Link";

import RecentProjects from "@/components/RecentProjects.vue";

export default {
   components: {
      LinkIcon,
      RecentProjects,
   },
   props: {
      post_filter: String,
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
      //TODO: this is dupliacted code!!
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
