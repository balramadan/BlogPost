<template>
  <div class="px-5 lg:pl-30 lg:w-8/12">
    <div class="my-5 flex flex-col gap-2">
      <h3 class="m-0 text-light text-base">Postingan Terbaru</h3>
      <hr />
    </div>
    <div class="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5">
      <div
        id="cardPost"
        v-for="(item, index) in posts"
        @click="toBlog(item.permalink)"
        @mouseenter="hoverCardPost(index)"
        @mouseleave="hoverCardPost(index)"
        :key="index"
        class="flex flex-col gap-5 py-5 sm:py-2 cursor-pointer rounded transition-all duration-300 ease-linear"
      >
        <div class="relative">
          <img
            class="object-cover w-full h-40 sm:h-30"
            :src="`https://rnjqyqiohdhnlcidizdw.supabase.co/storage/v1/object/public/post/${item.image}`"
            :alt="item.title"
          />
          <p
            id="tagPost"
            class="text-light text-xs absolute -mt-7 ml-3 bg-primary py-2 px-3 rounded z-10 transition-all duration-300 ease-linear"
          >
            {{ item.tag }}
          </p>
        </div>
        <div class="">
          <h2
            id="titlePost"
            class="text-light text-lg transition-all duration-300 ease-linear"
          >
            {{ item.title }}
          </h2>
          <p class="text-light/40 mt-3">
            {{ item.description.slice(0, 80) }}...
          </p>
          <div class="flex flex-col gap-2 mt-3">
            <div class="flex items-center gap-1">
              <div class="i-carbon:user-filled w-1.2em"></div>
              <p class="text-light text-sm text-light/60">{{ item.author }}</p>
            </div>
            <div class="flex items-center gap-1">
              <div class="i-carbon:array-dates w-1.2em"></div>
              <p class="text-light text-sm text-light/60">
                {{ item.created_at }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import axios from "axios";
import { ref, onMounted } from "vue";

const posts = ref([]);
const apiKey = process.env.NUXT_PUBLIC_MY_API_KEY;

const fetchPost = async () => {
  await axios
    .get("/api/post", {
      setHeaders: {
        "X-Api-Key": apiKey,
      },
    })
    .then((res) => {
      posts.value = res.data
        .sort((a, b) => {
          return new Date(b.created_at) - new Date(a.created_at);
        })
        .slice(0, 18);
    })
    .catch((error) => {
      console.error(error);
    });
};

function hoverCardPost(index) {
  const cardPost = document.querySelectorAll("#cardPost");
  const tagPost = document.querySelectorAll("#tagPost");
  const titlePost = document.querySelectorAll("#titlePost");

  cardPost[index].classList.toggle("bg-light/10");
  cardPost[index].classList.toggle("px-2");
  cardPost[index].classList.toggle("border");
  cardPost[index].classList.toggle("border-solid");
  cardPost[index].classList.toggle("border-light");
  tagPost[index].classList.toggle("bg-primary");
  tagPost[index].classList.toggle("bg-bright");
  tagPost[index].classList.toggle("font-bold");
  titlePost[index].classList.toggle("text-light");
  titlePost[index].classList.toggle("text-bright");
}

function toBlog(link) {
  location.href = `/post/${link}`;
}

onMounted(() => {
  fetchPost();
});
</script>

<style></style>
