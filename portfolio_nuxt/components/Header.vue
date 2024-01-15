<template>
   <header>
      <div class="navbar" ref="navbarRef">
         <strong>
            <NuxtLink to="/" class="logo"> Johanna Hartmann </NuxtLink>
         </strong>
         <nav class="nav">
            <div class="menu-nav">
               <div class="menu-nav-main">
                  <div class="menu-nav_item">
                     <NuxtLink class="menu-nav_link" v-bind:active-class="$route.path === '/' ? 'manual-active' : ''
                        " to="/">Home</NuxtLink>
                  </div>
                  <div class="menu-nav_item">
                     <NuxtLink class="menu-nav_link" v-bind:active-class="$route.path !== '/' ? 'manual-active' : ''
                        " to="/klimakarten">Portfolio</NuxtLink>
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
   setup() {
      const route = useRoute();
      return { route }
   }
};
</script>