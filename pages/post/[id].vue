<template>
  <div
    class="pt-20 pb-5 px-5 sm:px-10 md:px-12 lg:px-30 bg-primary h-full min-h-screen font-nunito"
  >
    <div class="flex flex-col lg:flex-row gap-5">
      <Post[id] />
      <HomePopular customClass="lg:pr-0" />
    </div>
    <div class="">
      <div class="flex gap-4">
        <a
          href="https://www.facebook.com/sharer/sharer.php?u=https://example.com"
          target="_blank"
          rel="noopener noreferrer"
          class="text-light"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            class="w-6 h-6"
          >
            <path
              fill-rule="evenodd"
              d="M12 2C6.48 2 2 6.48 2 12c0 5.28 4.48 10 10 10s10-4.48 10-10c0-5.52-4.48-10-10-10zm5 7h-3V6c0-.55-.45-1-1-1H9c-.55 0-1 .45-1 1v3H5c-.55 0-1 .45-1 1v3c0 .55.45 1 1 1h3v6c0 .55.45 1 1 1h3c.55 0 1-.45 1-1v-6h3c.55 0 1-.45 1-1v-3c0-.55-.45-1-1-1z"
            />
          </svg>
        </a>
        <a
          href="https://twitter.com/intent/tweet?url=https://example.com&text=Check%20out%20this%20awesome%20post!"
          target="_blank"
          rel="noopener noreferrer"
          class="text-primary hover:text-primary-dark"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            class="w-6 h-6"
          >
            <path
              fill-rule="evenodd"
              d="M22.46 5.5c-.8.36-1.66.6-2.56.71.92-.55 1.62-1.42 1.95-2.46-.86.5-1.82.86-2.84 1.06-.82-.88-2-1.43-3.3-1.43-2.5 0-4.52 2.02-4.52 4.52 0 .36.04.72.12 1.06C6.3 9.1 3.36 7.3 1.4 4.82c-.4.68-.63 1.47-.63 2.32 0 1.57.8 2.95 2.02 3.76-.74-.02-1.44-.22-2.05-.55v.06c0 2.2 1.56 4.03 3.64 4.45-.38.1-.78.16-1.2.16-.3 0-.6-.03-.88-.1.6 1.85 2.32 3.2 4.36 3.24-1.6 1.25-3.62 2-5.82 2-.38 0-.76-.02-1.14-.07 2.08 1.33 4.54 2.1 7.18 2.1 8.62 0 13.36-7.15 13.36-13.36 0-.2 0-.4-.02-.6.92-.66 1.72-1.5 2.36-2.44l-.03-.02z"
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
const namePost = id.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());
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
  title: `Blobal | ${namePost}`,
  description: `${desPost}`,
  image: `https://rnjqyqiohdhnlcidizdw.supabase.co/storage/v1/object/public/post/${imgPost}`,
  url: "https://example.com",
  type: "website",
  site_name: "Blobal",
  twitter: {
    card: "summary_large_image",
    site: "@example",
    creator: "@example",
  },
  og: {
    title: "Home",
    description: "This is the home page",
    image: "https://example.com/image.jpg",
    url: "https://example.com",
    type: "website",
    site_name: "Example",
  },
});
</script>

<style></style>
