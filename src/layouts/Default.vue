<template>
  <div>
    <header>
      <!-- <strong>
        <g-link to="/">{{ $static.metaData.siteName }}</g-link>
      </strong> -->
      <div class = "menu-btn">
      <span class="menu-btn_burger"> </span>
      </div>
      <nav class="nav">
        <ul class="menu-nav">
          <li class="menu-nav_item"> 
            <g-link class="menu-nav_link" to="/">Portfolio</g-link></li>
          <li class="menu-nav_item"> 
            <g-link class="menu-nav_link" to="/cv/">CV</g-link></li>
          <li class="menu-nav_item"> 
            <g-link class="menu-nav_link" to="/about/">About</g-link></li>
        </ul>
      </nav>
    </header>
    <slot> </slot>
    <footer> &copy; Copyright 2021</footer>
  </div>
</template>

<static-query>
query{
  metaData{
    siteName
  }
}
</static-query>

<style>
/*
body {
  font-family: -apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;
  margin:0;
  padding:0;
  line-height: 1.5;
}

.layout {
  max-width: 760px;
  margin: 0 auto;
  padding-left: 20px;
  padding-right: 20px;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  height: 80px;
}

.nav__link {
  margin-left: 20px;
}
*/
</style>
