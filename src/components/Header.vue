<template>
    <header>
      <!-- <strong>
        <g-link to="/">{{ $static.metaData.siteName }}</g-link>
      </strong> -->
      <div
        class = "menu-btn" 
        @click = "toggleMenu"
        >
      <span class="menu-btn_burger"> </span>
      </div>
      <nav 
        class="nav"
        :class='{open:showMenu}' >
        <ul class="menu-nav"
        :class='{open:showMenu}'>
          <li class="menu-nav_item"
          :class='{open:showMenu}' > 
            <g-link class="menu-nav_link" to="/">Home</g-link></li>
            <li class="menu-nav_item"
          :class='{open:showMenu}' > 
            <g-link class="menu-nav_link" to="/portfolio/">Portfolio</g-link></li>
          <li class="menu-nav_item"
            :class='{open:showMenu}' > 
            <g-link class="menu-nav_link" to="/cv/">CV</g-link></li>
        </ul>
      </nav>
    </header>
</template>

<script>
export default {
    data: function() {
      return {
        showMenu: false
      }
    },
    methods:{
      toggleMenu(event){
          event.target.classList.toggle('open')
          this.showMenu = event.target.classList.contains('open')
      }
    }    
    
}




</script>