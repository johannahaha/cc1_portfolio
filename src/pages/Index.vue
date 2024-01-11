<template>
   <!-- <Sketch></Sketch> -->
   <section class="home">
      <!-- <div class="home_title">
            <h1 class="home_infos_name">Johanna Hartmann</h1>
         </div> -->
      <div class="home_infos">
         <div class="home_infos-section">
            <h4 class="home_infos-section-title">about me</h4>
            <div class="about">
               <g-image src="/img/portraet_bw.jpg" id="portraet"></g-image>
               <div>
                  <p>
                     Hi, I am a freelance Creative Technologist and Data
                     Visualization Designer & Developer based in Berlin.
                     Currently, I am studying Creative Technologies (M. A.) at
                     the Filmuniversity Babelsberg Konrad Wolf. I have a
                     Bachelor in Digital Media (B. Sc.), at University of
                     Bremen. My main topics of interests are data visualization,
                     creative web development and the role of algorithms and
                     tech for society.
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
            <FilterMenu
               @filterUpdated="emitChangeFilter"
               :post_filter="post_filter"
            />
            <Portfolio :filtered-posts="getFilteredPosts" />
         </div>
      </div>
   </section>
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
import FilterMenu from "@/components/FilterMenu.vue";

export default {
   metaInfo: {
      title: "Home",
   },
   components: {
      Sketch,
      Social,
      Portfolio,
      FilterMenu,
   },
   emits: ["changeFilter"],
   props: {
      post_filter: String,
   },
   computed: {
      getFilteredPosts() {
         let filteredPosts = this.$page.posts.edges.filter((post) =>
            this.is_included(post.node.tags)
         );
         return filteredPosts;
      },
   },
   methods: {
      open: function (path) {
         window.location.href = path;
      },
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
      emitChangeFilter: function (event) {
         this.$emit("changeFilter", event);
      },
   },
};
</script>

<style>
.home-links a {
   margin-right: 1rem;
}
</style>
