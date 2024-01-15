<template>
   <Layout>
      <router-view :post_filter="post_filter" @changeFilter="setFilter" />
   </Layout>
</template>

<static-query>
query {
  metadata {
    siteName
    siteDescription
  }
}
</static-query>

<script>
import Layout from "~/layouts/Default.vue";


export default {
   components: {
      Layout,
   },
   methods: {
      setFilter: function (updated_filter) {
         this.post_filter = updated_filter;
      },
   },
   data() {
      return {
         post_filter: "all",
      };
   },
   metaInfo() {
      return {
         title: this.$static.metadata.siteName,
         meta: [
            {
               key: "description",
               name: "description",
               content: this.$static.metadata.siteDescription,
            },
         ],
      };
   },
};
</script>
