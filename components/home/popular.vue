<template>
  <div class="lg:w-4/12" :class="customClass">
    <div class="my-5 flex flex-col gap-2">
      <h3 class="m-0 text-light text-base">Lainnya</h3>
      <hr />
      <div class="flex flex-col gap-5 mt-5">
        <div
          v-for="(popular, index) in posts"
          :key="index"
          @click="toBlog(popular.permalink)"
          @mouseenter="hoverCard(index)"
          @mouseleave="hoverCard(index)"
          class="cursor-pointer"
        >
          <div class="relative">
            <img
              class="object-cover w-full h-40 sm:h-30"
              :src="`https://rnjqyqiohdhnlcidizdw.supabase.co/storage/v1/object/public/post/${popular.image}`"
              :alt="popular.title"
            />
            <p
              id="tagPost"
              class="text-light text-xs absolute -mt-7 ml-3 bg-primary py-2 px-3 rounded z-10 transition-all duration-300 ease-linear"
            >
              {{ popular.tag }}
            </p>
          </div>
          <div class="mt-2">
            <h2
              id="titlePostPopular"
              class="text-light text-lg transition-all duration-300 ease-linear"
            >
              {{ popular.title }}
            </h2>
            <p class="text-light/40 mt-3">
              {{ popular.description.slice(0, 80) }}...
            </p>
            <div class="flex flex-row gap-2 mt-3">
              <div class="flex items-center gap-1">
                <div class="i-carbon:user-filled w-1.2em"></div>
                <p class="text-light text-sm text-light/60">{{ popular.author }}</p>
              </div>
              <div class="flex items-center gap-1">
                <div class="i-carbon:array-dates w-1.2em"></div>
                <p class="text-light text-sm text-light/60">
                  {{ popular.created_at }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import axios from "axios";
import { ref, onBeforeMount } from "vue";

const posts: any = ref([]);
const apiKey = process.env.NUXT_PUBLIC_MY_API_KEY;

const shuffleArray = (array: any[]) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

const fetchPost = async () => {
  await axios
    .get("/api/post", {
      headers: {
        "X-Api-Key": apiKey,
      },
    })
    .then((res) => {
      posts.value = shuffleArray(res.data).slice(0, 3);
    })
    .catch((error) => {
      console.error(error);
    });
};

// Fungsi menuju link post
function toBlog(link: String) {
  location.href = `/post/${link}`;
}

// Fungsi hover card
function hoverCard(index: number) {
  const titlePost = document.querySelectorAll("#titlePostPopular");

  titlePost[index].classList.toggle("text-light");
  titlePost[index].classList.toggle("text-bright");
}

onBeforeMount(() => {
  fetchPost();
});

const props = defineProps({
  // Define your prop here
  customClass: {
    type: String,
    default: "",
  },
});
</script>

<style></style>
