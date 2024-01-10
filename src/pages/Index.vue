<template>
   <Layout>
      <!-- <Sketch></Sketch> -->
      <section class="home">
         <!-- <div class="home_title">
            <h1 class="home_infos_name">Johanna Hartmann</h1>
         </div> -->
         <div class="home_infos">
            <div class="home_infos-section">
               <h4 class="home_infos-section-title">about</h4>
               <div class="about">
                  <g-image src="/img/portraet_bw.jpg" id="portraet"></g-image>
                  <p>
                     I am currently studying Creative Technologies (MA) at the
                     Filmuniversty Babelsberg Konrad Wolf. I have a Bachelor of
                     Science in Digital Media, at University of Bremen. My main
                     topic of interests are data visualization, creative web
                     development and the role of algorithms and tech for
                     society.
                  </p>
               </div>
            </div>
            <div class="home_infos-section">
               <h4 class="home_infos-section-title">contact</h4>
               <p>Mail: johanna7270@googlemail.com</p>
            </div>
            <div class="home_infos-section">
               <h4 class="home_infos-section-title">skills</h4>
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
            <div class="home_infos-section">
               <h4 class="home_infos-section-title">latest projects</h4>
               <RecentProjects :posts="$page.posts" />
            </div>
         </div>
      </section>
   </Layout>
</template>

<page-query> 
query Posts{
    posts: allPost(sortBy: "year", limit:10){
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
import Sketch from "@/components/Sketch.vue";
import RecentProjects from "@/components/RecentProjects.vue";

export default {
   metaInfo: {
      title: "Home",
   },
   components: {
      Sketch,
      RecentProjects,
   },
   methods: {
      open: function (path) {
         console.log(path);
         window.location.href = path;
      },
   },
};
</script>

<style>
.home-links a {
   margin-right: 1rem;
}
</style>
