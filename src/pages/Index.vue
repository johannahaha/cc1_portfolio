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
                  <div>
                     <p>
                        I am currently studying Creative Technologies (MA) at
                        the Filmuniversity Babelsberg Konrad Wolf. I have a
                        Bachelor of Science in Digital Media, at University of
                        Bremen. My main topic of interests are data
                        visualization, creative web development and the role of
                        algorithms and tech for society.
                     </p>
                     <div>contact: johanna.hartmann@gmx.de</div>
                  </div>
               </div>
            </div>
            <Social />
            <div class="home_infos-section">
               <h4 class="home_infos-section-title projects-section-title">
                  latest projects
               </h4>
               <Portfolio />
            </div>
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
import Sketch from "@/components/Sketch.vue";
import Social from "@/components/Social.vue";
import Portfolio from "@/components/Portfolio.vue";

export default {
   metaInfo: {
      title: "Home",
   },
   components: {
      Sketch,
      Social,
      Portfolio,
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
