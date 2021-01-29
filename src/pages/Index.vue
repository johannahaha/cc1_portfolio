<template>
  <Layout>

    <!-- Learn how to use images here: https://gridsome.org/docs/images -->
    <section class = "home">
      <h2>My name ist</h2>
      <h1 class = "home_name">Johanna <span class="home_name--last">Hartmann</span></h1>
      <h2>Creative Technologist</h2>

      <p> 
        all my great projects go here
      </p>

      <ul> 
        <li v-for="post in $page.posts.edges" :key="post.id">
          <g-link :to="post.node.path"> {{post.node.title}}</g-link>
        </li>
      </ul>
      </section>
  </Layout>
</template>

<page-query>
query Posts{
	posts: allPost{
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

export default {
  metaInfo: {
    title: 'Portfolio'
  }
}
</script>

<style>
.home-links a {
  margin-right: 1rem;
}
</style>
