<template>
  <Layout>
    <Sketch></Sketch>
    <section class = "home">
      <div class="home_title"></div>
      <div class="home_infos">
        <h1 class = "home_infos_name">Johanna Hartmann</h1>
        <p> 
          contact: johanna7270@googlemail.com
        </p>
      </div>
      </section>
  </Layout>
</template>

<script>
import Sketch from '@/components/Sketch.vue'

export default {
  metaInfo: {
    title: 'Portfolio'
  },
  components: {
      Sketch
  }
}
</script>

<style>
.home-links a {
  margin-right: 1rem;
}
</style>
