<template>
  <Layout>
    <div class="outer-post">
      <!-- <div class="projects_title_post">
                <g-link to="/portfolio/">Back to all projects</g-link>
            </div> -->
      <div class="post">
        <div class="post-content">
          <g-image
            :src="$page.post.preview_img"
            class="post-img"
            alt="post.title"
          />
          <div v-html="$page.post.content"></div>
        </div>
        <div class="post-overview">
          <a
            v-if="$page.post.link !== ''"
            class="post-overview-link"
            :href="$page.post.link"
            target="_blank"
            title="Project Link"
          >
            <LinkIcon />
            <p>{{ $page.post.link }}</p>
          </a>
          <p>{{ $page.post.year }}</p>
          <p>{{ $page.post.location }}</p>
          <p class="post-overview-phrase">{{ $page.post.phrase }}</p>
          <div class="projects_item_details_tags">
            <div
              class="tag"
              v-for="tag in $page.post.tags"
              :key="tag.id"
              @click.stop="open(tag.path)"
            >
              {{ tag.title }}
            </div>
          </div>
        </div>
      </div>
      <div class="recent-projects">
        <div
          class="recent-projects-project"
          v-for="edge in $page.posts.edges"
          :key="edge.node.title"
          :post="edge.node"
        >
          <g-image
            :src="edge.node.preview_img"
            class="recent-projects-project-preview-img"
            alt="post.title"
            @click="open(edge.node.path)"
            :style="{ opacity: 0.5 }"
          />
          <div class="recent-projects-project-title">
            {{ edge.node.title }}
          </div>
        </div>
      </div>
    </div>
  </Layout>
</template>

<page-query> 
query Post ($path: String!){
  post: post(path: $path){
    	title
    	preview_img
        content
        year
        location
        phrase
        link
        tags{
          id
          title
          path
        }
    }
    posts: allPost(sortBy: "year", limit:5){
        edges{
            node{
            id
            title
            preview_img (width: 1000)
            path
            year
            }
        }
    }   
}
</page-query>

<script>
import LinkIcon from "vue-material-design-icons/Link";

export default {
  components: {
    LinkIcon,
  },
  metaInfo() {
    return {
      this: this.$page.post.title,
    };
  },
  methods: {
    open: function (path) {
      console.log(path);
      window.location.href = path;
    },
  },
};
</script>
