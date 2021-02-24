<template>
  <Layout>

    <section class="projects">
        <div class="projects_title">
          <g-link to="/portfolio/">Back to all projects</g-link>
          <h2>Portfolio</h2>
          <p>{{ $page.tag.title }}</p>
        </div>
        <div class="projects_items">
          <ProjectPreview
          v-for="edge in $page.tag.belongsTo.edges"
          :key="edge.node.id"
          :post="edge.node"/>  
    </div>
    </section>
  </Layout>
</template>

<page-query>
query Tag ($id: ID!) {
  tag(id: $id) {
    title
    belongsTo {
      edges {
        node {
       ... on Post {
            id
            title
            path
            preview_img (width: 720)
        	}
        }
      }
    }
  }
}
</page-query>

<script>
import ProjectPreview from "@/components/ProjectPreview.vue";

export default {
    components: {
        ProjectPreview
    }
}
</script>