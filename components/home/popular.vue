<template>
  <div class="lg:w-4/12" :class="customClass">
    <div class="my-5 flex flex-col gap-2">
      <h2 class="m-0 text-light text-base">Popular</h2>
      <hr />
    </div>
  </div>
</template>

<script setup>
import { defineProps } from 'vue';

const props = defineProps({
  // Define your prop here
  customClass: {
    type: String,
    default: '',
  },
});
</script>

<style>

</style>