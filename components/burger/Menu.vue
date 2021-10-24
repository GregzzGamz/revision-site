<template>
  <div class="m-1">
    <div
      v-if="!show"
      class="
        flex
        w-full
        p-2
        top-0
        left-0
        fixed
        bg-gray-100
        dark:bg-gray-800 dark:bg-opacity-75
        bg-opacity-75
        backdrop-filter backdrop-blur-sm
        items-center
      "
    >
      <Burger v-if="!show" @click.native="show = true" />
      <X v-if="show" @click.native="show = false" />
      <SearchComponent class="w-full" />
    </div>
    <transition name="slide">
      <div
        v-show="show"
        class="
          flex flex-col
          w-screen
          h-screen
          right-0
          top-0
          fixed
          items-center
          bg-gray-100
          dark:bg-gray-800 dark:bg-opacity-75
          bg-opacity-75
          backdrop-filter backdrop-blur-md
        "
      >
        <div class="flex w-full justify-between">
          <X @click.native="show = false" />
        </div>
        <div class="flex flex-col space-y-5 h-full py-8">
          <BurgerItem to="/" @click="show = false"> Home </BurgerItem>
          <SideNav class="w-full mx-4"/>
          <ToggleDarkmode class="ml-auto mr-2 self-center text-lg" />
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  data () {
    return {
      show: false
    }
  },
  computed: {
    currentDate () {
      return this.$store.state.ducks.currentDate
    },
    launchDate () {
      return this.$store.state.ducks.launchDate
    }
  },
  watch: {
    activeLink (val) {
      const links = document.querySelectorAll('span > a')
      links.forEach((link) => {
        link.classList.remove('nuxt-link-exact-active')
      })
      const link = document.querySelector(`span > a[href='/${val}']`)
      link.classList.add('nuxt-link-exact-active')
    }
  }
}
</script>

<style scoped>
.slide-enter-active,
.slide-leave-active {
  transition: all 0.35s ease-in-out;
}

.slide-enter,
.slide-leave-active {
  right: 100%;
}
</style>
