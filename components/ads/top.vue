<template>
  <div
    class="w-full rounded" :class="customClass"
  >
    <div class="w-full flex justify-center items-center mt-5 h-20 bg-light/20">
      <p class="text-light/50">Ads</p>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  customClass: {
    type: String,
    default: ''
  }
})
</script>

<style></style>
