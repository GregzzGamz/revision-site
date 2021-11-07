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
          <li class="list-disc" v-for="link of article.toc" :key="link.id">
            <NuxtLink  class="font-light" :class="{ 'text-lg font-medium py-2': link.depth === 2, 'text-md font-thin py-0 pl-2': link.depth === 3 }" :to="`#${link.id}`">{{ link.text }}</NuxtLink>
          </li>
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
