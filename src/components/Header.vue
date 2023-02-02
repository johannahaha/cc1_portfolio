<template>
   <header>
      <!-- <div class="menu-btn" @click="toggleMenu">
         <span class="menu-btn_burger"> </span>
      </div> -->
      <div class="navbar" ref="navbarRef">
         <strong>
            <g-link to="/" class="logo">{{ $static.metadata.siteName }}</g-link>
         </strong>
         <nav class="nav" :class="{ open: showMenu }">
            <div class="menu-nav" :class="{ open: showMenu }">
               <div class="menu-nav-main">
                  <div class="menu-nav_item" :class="{ open: showMenu }">
                     <g-link
                        class="menu-nav_link"
                        v-bind:active-class="
                           $route.path === '/' &&
                           $route.path !== '/portfolio/**'
                              ? 'manual-active'
                              : ''
                        "
                        to="/"
                        >Home</g-link
                     >
                  </div>
                  <div class="menu-nav_item" :class="{ open: showMenu }">
                     <g-link
                        class="menu-nav_link"
                        v-bind:active-class="
                           $route.path !== '/portfolio/**'
                              ? 'manual-active'
                              : ''
                        "
                        to="/portfolio/"
                        >Portfolio</g-link
                     >
                  </div>
               </div>
               <div class="menu-nav-sub">
                  <div class="menu-nav_item" :class="{ open: showMenu }">
                     <g-link
                        class="menu-nav_link_subpage portfolio"
                        to="/portfolio/"
                        :class="[
                           $route.path == '/portfolio/' ? 'manual-active' : '',
                        ]"
                        >all projects</g-link
                     >
                  </div>
                  <div v-if="$static.posts !== undefined">
                     <div
                        class="menu-nav_item"
                        :class="{ open: showMenu }"
                        v-for="edge in $static.posts.edges"
                        :key="edge.node.title"
                        :post="edge.node"
                     >
                        <g-link
                           class="menu-nav_link_subpage"
                           v-if="$route.path === edge.node.path"
                           v-bind:active-class="
                              $route.path === edge.node.path
                                 ? 'manual-active'
                                 : ''
                           "
                           to="/portfolio/"
                           >{{ edge.node.title }}</g-link
                        >
                     </div>
                  </div>
                  <div v-if="$static.tags !== undefined">
                     <div
                        class="menu-nav_item"
                        :class="{ open: showMenu }"
                        v-for="edge in $static.tags.edges"
                        :key="edge.node.title"
                        :post="edge.node"
                     >
                        <g-link
                           class="menu-nav_link_subpage"
                           v-if="$route.path === edge.node.path"
                           v-bind:active-class="
                              $route.path === edge.node.path
                                 ? 'manual-active'
                                 : ''
                           "
                           to="/portfolio/"
                           >{{ edge.node.title }} projects</g-link
                        >
                     </div>
                  </div>
               </div>
               <!-- <div class="menu-nav_item"
                            :class='{open:showMenu}' > 
                            <g-link class="menu-nav_link" to="/cv/">CV</g-link></div> -->
            </div>
         </nav>
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
export default {
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