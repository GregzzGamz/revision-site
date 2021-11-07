<template>
    <aside class=" pt-12 h-screen lg:sticky lg:top-16 overflow-y-auto lg:h-auto lg:max-h-(screen-16)">
        <div class="p-4 space-y-2 lg:py-8 lg:pl-0 lg:pr-8">
            <NuxtLink v-for="article, index in articles"
            :key="index"
            :to="'/articles/' + article.slug"
            class="py-4 mb-2"
            >
                <h3 class="text-md text-blue-600 dark:text-blue-300">{{
                    article.unit
                }}<a class="p-2 text-gray-800 dark:text-gray-200 text-sm ">{{ article.title }}</a></h3>


            </NuxtLink>
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
