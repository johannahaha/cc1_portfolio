<template>
  <Layout>
    <h1 class="title is-size-1 has-text-centered">
      # {{ $page.tag.title }}
    </h1>

     <section class="projects">
        <div class="projects_items">
      <ProjectPreview
        v-for="edge in $page.tag.belongsTo.edges"
        :key="edge.node.id"
        :post="edge.node"
      />
    </div>
  </Layout>
</template>

<page-query>
query Tag ($id: ID!) {
  tag(id: $id) {
    title
    belongsTo () {
      edges {
        node {
       ... on Post {
            id
            path
        	title
            preview_img(width: 700, height: 400, blur: 7, fit:cover )
        	}
        }
      }
    }
  }
}
</page-query>

<script>
import {ProjectPreview} from './ProjectPreview.vue'

export default {
    components: {
        ProjectPreview,
    }
}
</script>