<template>
  <div>
    <div :class="`p-4 border border-gray-600 rounded-lg flex justify-between items-center ${ show ? 'rounded-b-none' : ''}`" @click="show = !show">
      <h3 class="font-semibold text-xl">
        <slot name="header" />
      </h3>
      <transition name="rotate" mode="out-in">
        <ChevronUp v-if="show" class="w-8 h-8" />
        <ChevronDown v-else class="w-8 h-8" />
      </transition>
    </div>
    <transition name="dropdown">
      <div class="rounded-b-lg border border-t-0 border-gray-600 p-4" v-if="show">
        <slot name="content" />
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
  }
}
</script>
