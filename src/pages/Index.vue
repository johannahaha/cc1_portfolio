<template>
  <Layout>
    <Sketch></Sketch>
    <!-- Learn how to use images here: https://gridsome.org/docs/images -->
    <section class = "home">
      <div class="home_title"></div>
      <div class="home_infos">
        <h1 class = "home_infos_name">Johanna Hartmann</h1>
        <p> 
          currently doing? M. A. Creative Technologies, Filmuniversity Babelsberg Konrad Wolf
        </p>
        <p> 
          bachelor? B. Sc. Digital Media, University of Bremen
        </p>
        <p> 
          contact? via Mail: johanna7270@googlemail.com
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
