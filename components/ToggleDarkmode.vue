<template>
  <div class="flex flex-grid-cols-2 border-2 border-gray-300 dark:border-gray-700 dark:bg-gray-900 rounded-xl ">
    <button @click="setDarkmodeFalse"  class=" col-span-1 m-1 p-1 self-center rounded-lg text-gray-300 bg-blue-600 dark:bg-transparent" :class="darkmode ? '' : ' '">
      <svg xmlns="http://www.w3.org/2000/svg" class="p-1 h-7 w-10 text-gray-50 dark:text-gray-300" viewBox="0 0 20 20" fill="currentColor">
        <path fill-rule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clip-rule="evenodd" />
      </svg>
    </button>
    <button @click="setDarkmodeTrue" class="col-span-1 m-1 p-1 col-start-2 self-center  rounded-lg dark:bg-gray-800">
      <svg xmlns="http://www.w3.org/2000/svg" class="p-1 h-7 w-10 text-gray-600" fill="currentColor" viewBox="0 0 24 24">>
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
      </svg>
    </button>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  computed: {
    darkmode () {
      return this.$store.state.theme.darkmode
    }
  },
  methods: {
    ...mapActions(
      {
        setDarkmodeTrue: 'theme/setDarkmodeTrue',
        setDarkmodeFalse: 'theme/setDarkmodeFalse'
      })
  }
}
</script>
