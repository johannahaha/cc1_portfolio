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
                     <NuxtLink class="menu-nav_link" activeClass="manual-active"
                        :class="{ 'manual-active': isRouteActive }" to="/">portfolio</NuxtLink>
                  </div>
                  <div class="menu-nav_item">
                     <NuxtLink class="menu-nav_link" activeClass="manual-active" to="/about">
                        about
                     </NuxtLink>
                  </div>
               </div>
            </div>
         </nav>
         <Social></Social>
      </div>
   </header>
</template>




<script>

export default {
   computed: {
      isRouteActive: function () {
         if (this.$route.path.includes("portfolio")) {
            return true
         } else {
            return false
         }
      },
   }
}

</script>