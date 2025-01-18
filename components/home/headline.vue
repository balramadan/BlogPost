<template>
  <div class="mt-5 mx-5 lg:mx-30">
    <h2 class="text-base text-light">Pin Post</h2>
    <div
      class="flex flex-col sm:flex-row items-center gap-5 mt-2"
      @click.prevent="toPost(pinPost.permalink)"
    >
      <img
        class="w-full sm:w-4/10 object-cover h-50 cursor-pointer"
        :src="`https://rnjqyqiohdhnlcidizdw.supabase.co/storage/v1/object/public/post/${pinPost.image}`"
        :alt="pinPost.title"
      />
      <div class="sm:w-6/10">
        <h2
          class="text-light text-xl font-bold transition-all duration-300 ease-linear cursor-pointer"
          hover="text-bright"
          @click.prevent="toPost(pinPost.permalink)"
        >
          {{ pinPost.title }}
        </h2>
        <p class="text-light/60 mt-2">{{ description }}...</p>
        <div class="flex flex-row gap-2 mt-3">
          <div class="flex items-center gap-1">
            <div class="i-carbon:user-filled w-1.2em"></div>
            <p class="text-light text-sm text-light/60">{{ pinPost.author }}</p>
          </div>
          <div class="flex items-center gap-1">
            <div class="i-carbon:array-dates w-1.2em"></div>
            <p class="text-light text-sm text-light/60">
              {{ pinPost.created_at }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import axios from "axios";
import { ref, onBeforeMount } from "vue";

const pinPost = ref([]);
const description = ref("");

function toPost(link) {
  location.href = `/post/${link}`;
}

onBeforeMount(async () => {
  await axios.get("/api/post").then((res) => {
    pinPost.value = res.data
      .filter((post) => post.pin === true)
      .sort((a, b) => {
        return new Date(b.created_at) - new Date(a.created_at);
      })[0];
  });

  if (pinPost.value && pinPost.value.description) {
    description.value = pinPost.value.description.slice(0, 220);
  }
});
</script>

<style></style>
