<template>
  <div class="bg-gray-100 dark:bg-gray-200 rounded-md p-8 m-1 max-w-max">
    <img :src="src"/>
  </div>
</template>

<script>
export default {
    props: {
      src: {
        type: String,
        default: () => null
      }
    }
  }
</script>

<style>

</style>
