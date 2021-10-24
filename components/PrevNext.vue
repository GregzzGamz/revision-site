<template>
  <div class="flex justify-between p-2">
    <NuxtLink
        v-if="prev"
        :to="prev.slug"
        class="hover:underline flex font-light text-gray-700 dark:text-gray-300 uppercase text-sm"
        >
        <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 self-center text-gray-700 dark:text-gray-300" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clip-rule="evenodd" />
        </svg>
        <a class="self-center">{{prev.unit}} - {{ prev.title }}</a>
    </NuxtLink>
    <span v-else>&nbsp;</span>
        <NuxtLink
        v-if="next"
        :to="next.slug"
        class="hover:underline flex font-light text-gray-700 dark:text-gray-300 uppercase text-sm"
        >
    
        <a class="self-center">{{next.unit}} - {{ next.title }}</a>
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 self-center text-gray-700 dark:text-gray-300" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd" />
        </svg>
    </NuxtLink>
    <span v-else>&nbsp;</span>
  </div>
</template>

<script>
  export default {
    props: {
      prev: {
        type: Object,
        default: () => null
      },
      next: {
        type: Object,
        default: () => null
      }
    }
  }
</script>