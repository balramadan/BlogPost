<template>
  <div
    class="pt-20 pb-5 px-5 sm:px-10 md:px-12 lg:px-30 bg-primary h-full min-h-screen font-nunito"
  >
    <div class="flex flex-col lg:flex-row gap-5">
      <Post[id] />
      <HomePopular customClass="lg:pr-0" />
    </div>
  </div>
</template>

<script setup>
import axios from "axios";
import { useRoute } from "#app";
import { ref, onBeforeMount } from "vue";
import removeHyphen from "~/utils/removeHyphen";

const route = useRoute();
const id = route.params.id;
const namePost = removeHyphen(id);
const post = ref([]);
const desPost = ref("");
const imgPost = ref("");

onBeforeMount(async () => {
  await axios.get(`/api/post/${id}`).then((res) => {
    post.value = res.data[0];
  });
  desPost.value = post.description;
  imgPost.value = post.image;
});

useSeoMeta({
  title: `${namePost} | Inspire`,
  description: `${desPost}`,
  image: `https://rnjqyqiohdhnlcidizdw.supabase.co/storage/v1/object/public/post/${imgPost}`,
  url: `/${id}`,
  type: "website",
  site_name: "Inspire",
  twitter: {
    card: "summary_large_image",
    site: "@example",
    creator: "@example",
  },
  og: {
    title: `${namePost} | Inspire`,
    description: "This is the home page",
    image: `https://rnjqyqiohdhnlcidizdw.supabase.co/storage/v1/object/public/post/${imgPost}`,
    url: "https://example.com",
    type: "website",
    site_name: "Inspire",
  },
});
</script>

<style></style>
