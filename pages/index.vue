<template>
  <div>
    <Hero class="h-screen"/>
    <div class="container mx-auto mb-32" id="all-content">
      <h4 class="h2 text-gray-700 dark:text-gray-300">All content</h4>
      <div
        class="
          grid
          space-y-8 
        "
      >
        <div
          v-for="(article, index) in articles"
          :key="index"
          
          class="py-1"
        >
          <h4 class="h4 "><a class="text-blue-600 dark:text-blue-300">{{article.unit}} </a> {{ article.title }}</h4>
          <p class="mb-2 text-gray-700 dark:text-gray-200 font-light">{{article.description}}</p>
        </div>
      </div>
    </div>
  </div>
</template>
  <!-- Start hero -->


<script>
export default {
  data () {
    return {
      articles: []
    }
  },
  methods: {
    async getAll () {
      this.articles = await this.$content(`articles`)
        .only(['title', 'slug', 'unit', 'description'])
        .sortBy('unit')
        .fetch()
        console.log("doing")
    }
  },
  mounted () {
      this.getAll()
      
  }
}
</script>
