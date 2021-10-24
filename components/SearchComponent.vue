<template>
  <div class="lg:relative">
    <input
      type="text"
      placeholder="Search"
      class="
        w-full
        bg-gray-100
        dark:bg-gray-800
        dark:bg-opacity-60
        bg-opacity-70
        border border-gray-400
        dark:border-gray-700
        rounded-xl
        shadow-sm

        focus:shadow-sm
        focus:outline-none focus:ring
        px-5
        py-2
        outline-none
        focus:border-blue-400
      "
      v-model="search"
      @blur="closeSearchResults"
      @focus="searchResultsVisible = true"
      @keyup="performSearch"
    />
    <transition name="dropdown">
      <div
        v-if="search.length > 0 && searchResultsVisible"
        class="
          w-screen
          lg:w-full
          overflow-y-scroll
          left-0
          absolute
          bg-gray-50
          dark:bg-gray-700
          border
          mt-2
          p-2
          rounded-xl
          z-10
          divide-y
          border-none
          lg:max-h-52
          max-h-72
          shadow-md
          bg-opacity-90
        "
      >
        <NuxtLink
          v-for="(article, index) in searchResults"
          :key="index"
          :to="'/articles/' + article.slug"
          class="
          border-none
            cursor-pointer
            p-4
            rounded-xl
            hover:bg-blue-50
            dark:hover:bg-gray-800 dark:text-gray-50
            text-gray-900
            flex flex-col
            bg-opacity-95
          "
        >
        
          <h3 class="text-xl"><a class="text-blue-600 dark:text-blue-300">{{
            article.unit
          }}</a> {{ article.title }}</h3>

          <p class="font-normal text-sm my-1">
            {{ article.description }}
          </p>
        </NuxtLink>

        <div
          v-if="searchResults.length == 0"
          class="font-normal w-full border-b cursor-pointer p-4"
        >
          <p class="my-0">
            No results for '<strong>{{ search }}</strong
            >'
          </p>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  data () {
    return {
      searchResultsVisible: true,
      search: '',
      searchResults: []
    }
  },
  methods: {
    async closeSearchResults () {
      setTimeout(() => (this.searchResultsVisible = false), 100)
    },
    async performSearch () {
      const searchQuery = this.search.toLowerCase()
      
      if (!searchQuery) {
        this.articles = []
        return
      }
      this.searchResults = await this.$content(`articles`)
        .search(searchQuery)
        .only(['title', 'slug', 'unit', 'description'])
        .sortBy('unit')
        .fetch()
        console.log(this.searchResults)
    }
  }
}
</script>



