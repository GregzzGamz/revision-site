<template >
  <div class="flex flex-wrap relative ">
    <SideNav  class="max-h-screen w-full lg:w-1/5 lg:block fixed lg:relative inset-0 mt-16 lg:mt-0 z-30 bg-white dark:bg-gray-900 lg:bg-transparent lg:dark:bg-transparent hidden"/>

    <div class="flex flex-wrap-reverse w-full lg:w-4/5 pt-20 min-h-[100vh]">

      <div class="w-full py-4 lg:pt-8 lg:pb-4 dark:border-gray-800 lg:w-3/4 lg:border-l lg:border-r">

        <article class="prose dark:prose-dark max-w-none lg:px-8">
          <PrevNext class="container mx-auto mb-4" :prev="prev" :next="next" />
          <div class="my-1">
            <h1 class="h1 leading-none">
              <a class="text-blue-600 dark:text-blue-300">{{
                article.unit
              }}</a>
              {{ article.title }}
            </h1>
            <p class="my-8">{{article.description}}</p>
            <div class="my-8 py-4 border-b-2 border-t-2 border-gray-200 dark:border-gray-800">
              <h4 class="h4">Table of contents</h4>
              <ul class="" v-for="link of article.toc" :key="link.id">
                <NuxtLink class="dark:text-gray-200" :class="{ 'text-xl pt-4': link.depth === 2, 'list-disc font-light ml-2 pb-2': link.depth === 3 }" :to="`#${link.id}`">{{ link.text }}</NuxtLink>
              </ul>
            </div>
          </div>

          <p></p>
          <img :src="article.img" :alt="article.alt" />

          <nuxt-content :document="article" />
        </article>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  async asyncData({ $content, params }) {
    const articles = await $content('articles')
          .only(['title', 'slug'])
          .sortBy('slug')
          .fetch()

    const article = await $content('articles', params.slug).fetch()

    const [prev, next] = await $content('articles')
      .only(['title', 'slug', 'unit'])
      .sortBy('createdAt', 'asc')
      .surround(params.slug)
      .fetch()

    return {
      articles,
      article,
      prev,
      next
    }
  },
  methods: {
    formatDate(date) {
      const options = { year: "numeric", month: "long", day: "numeric" };
      return new Date(date).toLocaleDateString("en", options);
    },
  },
};
</script>

<style lang="scss">

  .nuxt-content {

    h1 {
        @apply text-3xl font-extrabold leading-tight tracking-tighter;
    }

    h2 {
        @apply text-3xl font-extrabold leading-tight tracking-tighter;
    }

    h3 {
        @apply text-xl font-bold leading-tight;
    }

    h4 {
        @apply text-xl font-bold leading-snug tracking-tight;
    }

    p {
      @apply text-gray-700 dark:text-gray-100
    }
  }

</style>
