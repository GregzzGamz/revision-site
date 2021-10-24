<template>
  <div>
    <BurgerMenu class="lg:hidden z-20" />
    <NavBar class="hidden lg:flex z-10" />
    <Nuxt class="pt-16 lg:pt-20" />
    <Footer/>
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
