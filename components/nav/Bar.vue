<template>
  <div
    class="
      fixed
      w-full
      p-2
      bg-gray-100
      dark:bg-gray-800 dark:bg-opacity-75
      bg-opacity-75
      backdrop-filter backdrop-blur-sm
      
      border-b-2
      border-gray-200
      dark:border-gray-700
      border-opacity-30
    "
  >
  <div class="container
      mx-auto flex
      justify-center
      px-4
      lg:px-8">
    <NuxtLink to="/">
    <h4 class="text-gray-600 dark:text-gray-200 text-2xl font-extrabold p-4 ">
      Revision site
    </h4>
    </NuxtLink>
    <SearchComponent class="self-center w-96 mr-auto" />

    <ToggleDarkmode class=" ml-2 mr-2 self-center" />
    </div>
  </div>
</template>

<script>
export default {}
</script>
