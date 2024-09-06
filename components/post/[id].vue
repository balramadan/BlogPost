<template>
  <div
    class="lg:w-8/12"
  >
    <nav class="mt-5" aria-label="breadcrumb">
      <ul class="flex flex-row gap-2">
        <li class="">
          <a
            class="text-light/70 transition-all duration-300 ease-linear"
            href="/"
            hover="text-bright/70"
            >Home</a
          >
        </li>
        <li class="text-light/90">/</li>
        <li class="">
          <a
            class="text-light/90 transition-all duration-300 ease-linear"
            :href="post.tag"
            hover="text-bright"
            >{{ post.tag }}</a
          >
        </li>
      </ul>
    </nav>
    <div class="mt-5">
      <h2 class="text-light text-xl lg:text-3xl">
        {{ post.title }}
      </h2>
      <div class="flex flex-row mt-5 gap-2">
        <p class="text-light/80 text-sm">{{ post.author }},</p>
        <p class="text-light/80 text-sm">on {{ post.created_at }}</p>
      </div>
      <img
        class="mt-5 w-full h-50 lg:h-100 object-cover"
        :src="`https://rnjqyqiohdhnlcidizdw.supabase.co/storage/v1/object/public/post/${post.image}`"
        :alt="post.title"
      />
    </div>
    <div class="flex flex-col mt-5 gap-5">
      <p class="text-light/90 lg:text-16px line-height-normal">{{post.description}}</p>
      <div v-for="content in post.content" :key="content" class="">
        <h3 v-if="content.sub" class="text-light mb-3 text-xl lg:text-2xl">{{ content.sub }}</h3>
        <p v-html="content.text" class="text-light/90 text-16px line-height-normal"></p>
      </div>
    </div>
  </div>
</template>

<script setup>
import axios from "axios";
import { useRoute } from "#app";
import { ref, onBeforeMount } from "vue";

const route = useRoute();
const id = route.params.id;
const post = ref([]);

onBeforeMount(async () => {
  await axios.get(`/api/post/${id}`).then((res) => {
    post.value = res.data[0];
  });
});
</script>

<style></style>
