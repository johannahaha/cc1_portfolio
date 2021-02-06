<template>
  <Layout>
    <section class="cv">
      <div class="cv_bio-image">
        <div class="cv_bio">
          <h2 class="text-secondary">CV BIO</h2>
          <p>this is what I did</p>
        </div>
      </div>
      <h1>Education and Academic Career</h1>
      <div class="jobs">
        <div class="jobs_item" v-for="edge in $page.jobsEducation.edges" :key="edge.node.id">
            <h2 class="text-secondary">{{ edge.node.year }}</h2>
            <h3>{{ edge.node.content }}</h3>
        </div>   
      </div>
      <h1>Professional Experience</h1>
      <div class="jobs">
        <div class="jobs_item" v-for="edge in $page.jobsPaid.edges" :key="edge.node.id">
            <h2 class="text-secondary">{{ edge.node.year }}</h2>
            <h3>{{ edge.node.content }}</h3>
        </div>   
      </div>
      <h1>Voluntary Services</h1>
      <div class="jobs">
        <div class="jobs_item" v-for="edge in $page.jobsVoluntary.edges" :key="edge.node.id">
            <h2 class="text-secondary">{{ edge.node.year }}</h2>
            <h3>{{ edge.node.content }}</h3>
        </div>   
      </div>
    </section>
  </Layout>
</template>

<page-query>
query Jobs{
	jobsEducation: allJobs (filter: {category: {eq: "education"}}){
    edges{
      node{
        id
        year
        content
        category
      }
    }
  } 
  jobsPaid: allJobs (filter: {category: {eq: "paid"}}){
    edges{
      node{
        id
        year
        content
        category
      }
    }
  }
  jobsVoluntary: allJobs (filter: {category: {eq: "voluntary"}}){
    edges{
      node{
        id
        year
        content
        category
      }
    }
  }    
}
</page-query>

<script>

export default {
  metaInfo: {
    title: 'CV'
  }
}
</script>
