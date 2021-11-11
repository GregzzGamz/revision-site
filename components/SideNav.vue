<template>
    <aside class=" pt-12 h-screen lg:sticky lg:top-16 overflow-y-auto lg:h-auto lg:max-h-(screen-16)">
        <div class="lg:pl-0 lg:pr-8">
          <p class="mb-3 lg:mb-2 text-gray-500 uppercase tracking-wider font-bold text-sm lg:text-xs">Website Content</p>
          <ul class="scrollactive-nav ">
            <NuxtLink v-for="article, index in articles"
            :key="index"
            :to="'/articles/' + article.slug"
            class="py-4 mb-2 "
            >
                <h3 class="text-sm text-blue-600 dark:text-blue-300">{{
                    article.unit
                }}<a class="p-2 text-gray-800 dark:text-gray-200 text-sm ">{{ article.title }}</a></h3>


            </NuxtLink>
          </ul>
        </div>
    </aside>
</template>




<script>
export default {
  data () {
    return {
      articles: []
    }
  },
  methods: {
    async performSearch () {
      this.articles = await this.$content(`articles`)
        .only(['title', 'slug', 'unit', 'description'])
        .sortBy('unit')
        .fetch()
        console.log("doing")
    }
  },
  mounted () {
      this.performSearch()

  }
}
</script>
