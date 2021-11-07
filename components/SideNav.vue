<template>
    <aside class="h-screen lg:sticky lg:top-16 overflow-y-auto lg:h-auto lg:max-h-(screen-16)">
        <ul class="p-4 lg:py-8 lg:pl-0 lg:pr-8">
            <NuxtLink v-for="article, index in articles"
            :key="index"
            :to="'/articles/' + article.slug"
            class="py-1"
            >
                <h3 class="text-md text-blue-600 dark:text-blue-300">{{
                    article.unit
                }}</h3>
                <h4 class="p-2 text-sm font-light">{{ article.title }}</h4>
                
            </NuxtLink>
        </ul>
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