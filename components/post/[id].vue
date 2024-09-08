<template>
  <div class="lg:w-8/12">
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
        class="mt-5 w-full h-50 lg:h-80 object-cover"
        :src="`https://rnjqyqiohdhnlcidizdw.supabase.co/storage/v1/object/public/post/${post.image}`"
        :alt="post.title"
      />
    </div>
    <AdsTop customClass="" />
    <div class="flex flex-col mt-5 gap-5">
      <p
        v-html="post.description"
        class="text-light/90 lg:text-16px line-height-normal"
      ></p>
      <div v-for="content in post.content" :key="content" class="">
        <h3 v-if="content.sub" class="text-light mb-3 text-xl lg:text-2xl">
          {{ content.sub }}
        </h3>
        <p
          v-html="content.text"
          class="text-light/90 text-16px line-height-normal"
        ></p>
      </div>
    </div>
    <div class="flex items-center mt-5 bg-light/10 w-auto rounded">
      <div class="text-light text-sm px-3 py-2">Share:</div>
      <div class="flex gap-4 px-3 py-2 items-center">
        <a
          href="https://www.facebook.com/sharer/sharer.php?u=https://example.com"
          target="_blank"
          rel="noopener noreferrer"
          class="text-light"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1.5em"
            height="1.5em"
            viewBox="0 0 512 512"
          >
            <path
              fill="currentColor"
              d="M512 256C512 114.6 397.4 0 256 0S0 114.6 0 256c0 120 82.7 220.8 194.2 248.5V334.2h-52.8V256h52.8v-33.7c0-87.1 39.4-127.5 125-127.5c16.2 0 44.2 3.2 55.7 6.4V172c-6-.6-16.5-1-29.6-1c-42 0-58.2 15.9-58.2 57.2V256h83.6l-14.4 78.2H287v175.9C413.8 494.8 512 386.9 512 256"
            />
          </svg>
        </a>
        <a
          href="https://twitter.com/intent/tweet?url=https://example.com&text=Check%20out%20this%20awesome%20post!"
          target="_blank"
          rel="noopener noreferrer"
          class="text-light"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1.5em"
            height="1.5em"
            viewBox="0 0 512 512"
          >
            <path
              fill="currentColor"
              d="M389.2 48h70.6L305.6 224.2L487 464H345L233.7 318.6L106.5 464H35.8l164.9-188.5L26.8 48h145.6l100.5 132.9zm-24.8 373.8h39.1L151.1 88h-42z"
            />
          </svg>
        </a>
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
