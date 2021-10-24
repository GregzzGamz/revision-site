<template>
    <div class="bg-gray-200 dark:bg-gray-800 rounded-xl">
        <div class="grid p-4 divide-y-2 divide-gray-300 dark:divide-gray-700 overflow-y-scroll">
            <NuxtLink v-for="article, index in articles"
            :key="index"
            :to="'/articles/' + article.slug"
            class="py-1"
            >
                <h3 class="text-xs uppercase"><a class="text-blue-600 dark:text-blue-300">{{
                    article.unit
                }}</a> > {{ article.title }}</h3>
                
            </NuxtLink>
        </div>
    </div>
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