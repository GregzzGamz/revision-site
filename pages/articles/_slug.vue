<template >
  <div class="flex flex-wrap relative ">
    <SideNav  class=" fixed max-h-screen w-full lg:w-1/5 lg:block lg:relative inset-0 mt-16 lg:mt-0 z-30 bg-white dark:bg-gray-900 lg:bg-transparent lg:dark:bg-transparent hidden"/>

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
              <h4 class="h4 -mb-4">Table of contents</h4>
              <ul class="scrollactive-nav" >
                <NuxtLink v-for="link of article.toc" :key="link.id" class="dark:text-gray-200" :class="{ 'text-xl pt-4': link.depth === 2, 'list-disc font-light ml-2 pb-2': link.depth === 3 }" :to="`#${link.id}`">
                  <a v-if="link.depth === 2"><br/></a>{{ link.text }}<a v-if="link.depth === 3">,</a><a v-if="link.depth === 2">:</a>
                  </NuxtLink>
              </ul>
            </div>
          </div>

          <p></p>
          <img :src="article.img" :alt="article.alt" />

          <nuxt-content :document="article" class="prose" />
        </article>
      </div>

      <div class="w-full lg:w-1/4 block relative">
        <div class="lg:sticky lg:top-16 overflow-y-auto h-full lg:h-auto lg:max-h-(screen-16)">
          <nav class="py-4 lg:py-8 lg:pl-8 lg:pr-2 ">
            <p class="mb-3 lg:mb-2 text-gray-500 uppercase tracking-wider font-bold text-sm lg:text-xs">On this page</p>
            <ul class="scrollactive-nav ">
              
              <li 
               v-for="link of article.toc" :key="link.id"
                class=" text-gray-700 dark:text-gray-300 border-t border-dashed dark:border-gray-800 first:border-t-0">
                <NuxtLink class=" block text-sm scrollactive-item transition-padding ease-in-out duration-300 py-2 text-primary-500" :class="{ 'pl-4': link.depth === 3, '': link.depth === 2}" :to="`#${link.id}`">{{link.text}}</NuxtLink>
              </li>
            </ul>
          </nav>
        </div>
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
        @apply text-3xl font-extrabold leading-tight tracking-tighter mt-8;
    }

    h3 {
        @apply text-xl font-bold leading-tight mt-6;
    }

    h4 {
        @apply text-xl font-bold leading-snug tracking-tight;
    }

    p {
      @apply text-gray-700 dark:text-gray-100
    }
  }

</style>
