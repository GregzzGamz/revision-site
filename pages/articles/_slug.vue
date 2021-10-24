<template >
  <article>
    <PrevNext class="container mx-auto my-8" :prev="prev" :next="next" />
    <div class="grid lg:grid-cols-5 container px-4 md:mx-auto mt-4 md:mt-16">
      <SideNav  class=" w-4/5 hidden lg:block lg:col-span-1"/>
      <div class=" lg:col-span-4">
        
        <div class="my-8">
          <h1 class="h1">
            <a class="text-blue-600 dark:text-blue-300">{{
              article.unit
            }}</a>
            {{ article.title }}
          </h1>

          <li class="list-disc" v-for="link of article.toc" :key="link.id">
            <NuxtLink class="font-light" :class="{ 'py-2': link.depth === 2, 'ml-2 pb-2': link.depth === 3 }" :to="`#${link.id}`">{{ link.text }}</NuxtLink>
          </li>
        </div>
    
        <p></p>
        <img :src="article.img" :alt="article.alt" />

        <nuxt-content :document="article" />
        
       
      </div>
    </div>
  </article>
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
        @apply text-5xl font-extrabold leading-tight tracking-tighter;
    }

    h2 {
        @apply text-2xl lg:text-4xl font-extrabold leading-tight tracking-tighter;
    }

    h3 {
        @apply text-3xl font-bold leading-tight;
    }

    h4 {
        @apply text-2xl font-bold leading-snug tracking-tight;
    }
  }

</style>