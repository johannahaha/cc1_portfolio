<template>
   <header>
      <!-- <div class="menu-btn" @click="toggleMenu">
         <span class="menu-btn_burger"> </span>
      </div> -->
      <div class="navbar" ref="navbarRef">
         <strong>
            <g-link to="/" class="logo">{{ $static.metadata.siteName }}</g-link>
         </strong>
         <nav class="nav">
            <div class="menu-nav">
               <div class="menu-nav-main">
                  <div class="menu-nav_item">
                     <g-link class="menu-nav_link" v-bind:active-class="$route.path === '/' ? 'manual-active' : ''
                        " to="/">Home</g-link>
                  </div>
                  <div class="menu-nav_item">
                     <g-link class="menu-nav_link" v-bind:active-class="$route.path !== '/' ? 'manual-active' : ''
                        " to="/portfolio/post/klimakarten">Portfolio</g-link>
                  </div>
               </div>
            </div>
         </nav>
         <Social></Social>
      </div>
   </header>
</template>


<static-query>
query{
  metadata{
    siteName
  }
  posts: allPost(sortBy: "year"){
    edges{
      node{
        id
        path
        title
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
</static-query>



<script>
import Social from "./Social.vue";

export default {
   components: {
      Social,
   },
   data: function () {
      return {
         showMenu: false,
      };
   },
   methods: {
      toggleMenu(event) {
         event.target.classList.toggle("open");
         console.log(this.$refs);
         this.$refs.navbarRef.classList.toggle("open");
         this.showMenu = event.target.classList.contains("open");
      },
   },
};
</script>