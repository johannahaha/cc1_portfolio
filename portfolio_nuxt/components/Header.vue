<template>
   <header>
      <div class="navbar" ref="navbarRef">
         <strong>
            <NuxtLink to="/" class="logo"> Johanna Hartmann </NuxtLink>
         </strong>
         <nav class="nav" :class="{ open: showMenu }">
            <div class="menu-nav" :class="{ open: showMenu }">
               <div class="menu-nav-main">
                  <div class="menu-nav_item" :class="{ open: showMenu }">
                     <NuxtLink
                        class="menu-nav_link"
                        v-bind:active-class="
                           $route.path === '/' ? 'manual-active' : ''
                        "
                        to="/"
                        >Home</NuxtLink
                     >
                  </div>
                  <div class="menu-nav_item" :class="{ open: showMenu }">
                     <NuxtLink
                        class="menu-nav_link"
                        v-bind:active-class="
                           $route.path !== '/' ? 'manual-active' : ''
                        "
                        to="/"
                        >Portfolio</NuxtLink
                     >
                  </div>
               </div>
            </div>
         </nav>
         <Social></Social>
      </div>
   </header>
</template>




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