<template>
  <div class="">
    <BurgerMenu class="md:hidden z-20" />
    <NavBar class="hidden md:flex z-10" />
    <Nuxt class="container mx-auto px-4 lg:px-8" />
    <Footer class="h-16 relative w-full border-t dark:border-gray-800 bg-gray-50 dark:bg-gray-900 z-20"/>
  </div>
</template>

<script>
export default {
  name: 'default',
  data () {
    return {
      sectionObserver: undefined,
      activeLink: ''
    }
  },

  head: {
    bodyAttrs: {
      class: 'bg-gray-50 dark:bg-gray-900 dark:darken'
    },
    meta: [{
      name: 'viewport',
      content: 'width=device-width,initial-scale=1.0,minimum-scale=1.0'
    }]
  },
  computed: {
    breakpoint () {
      if (process.client) {
        return this.$breakpoint
      }
      return { is: '' }
    }
  },
  beforeMount () {
    this.$store.dispatch('theme/fetchDarkmode')
  }
}
</script>
