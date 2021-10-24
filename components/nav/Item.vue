<template>
  <span class="p-1">
    <NuxtLink :to="to" class="h-auto text-md bg-500 text-gray-700 text-sm dark:text-gray-400 dark:bg-gray-800  bg-gray-200 rounded-xl p-3 "><slot /></NuxtLink>
  </span>
</template>

<script>
export default {
  props: {
    to: {
      type: String,
      required: true
    }
  }
}
</script>
