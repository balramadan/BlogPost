<template>
  <div
    class="transition-all ease-in-out duration-300 px-2.5 py-5"
    hover="bg-light/10 cursor-pointer border border-solid border-white"
    @click="toPermalink(post?.permalink)"
    @mouseenter="hoverCard()"
    @mouseleave="hoverCard()"
  >
    <img
      class="object-cover w-full h-40 sm:h-60 rounded"
      :src="`https://rnjqyqiohdhnlcidizdw.supabase.co/storage/v1/object/public/post/${post?.image}`"
      :alt="post?.title"
    />
    <div v-show="tagVisibility" class="flex mt-5">
      <p
        class="text-center text-light text-sm font-semibold bg-light/20 rounded-full px-3 py-1 m-0 mx-auto"
        sm="mx-0 mr-auto"
      >
        {{ post?.tag }}
      </p>
    </div>
    <div
      class="flex flex-row gap-4 justify-center items-center text-sm"
      sm="justify-left"
    >
      <div class="text-light flex flex-row items-center gap-1">
        <div class="i-carbon:user-filled w-1.2em"></div>
        <p class="my-3">{{ post?.author }}</p>
      </div>
      <div class="text-light flex flex-row items-center gap-1">
        <div class="i-carbon:array-dates w-1.2em"></div>
        <p class="my-3">{{ post?.created_at }}</p>
      </div>
    </div>
    <div class="">
      <h2 id="titlePost" class="text-base lg:text-lg font-bold">
        {{ post?.title }}
      </h2>
    </div>
  </div>
</template>

<script lang="ts" setup>
// Link to article
const toPermalink = (link: string) => {
  location.href = `/post/${link}`;
};

const hoverCard = () => {
  const titlePost = document.querySelector("#titlePost");

  titlePost?.classList.toggle("text-bright");
  titlePost?.classList.toggle("text-white");
};

interface Post {
  id: string;
  title: string;
  description: string;
  image: string;
  permalink: string;
  content: Array<{
    sub: string;
    text: string;
  }>;
  author: string;
  tag: string;
  pin: boolean;
  created_at: Date;
}

const props = defineProps({
  post: {
    type: Object as PropType<Post>,
    default: () => [
      {
        id: "",
        title: "Title",
        description: "",
        image: "",
        permalink: "",
        content: [],
        author: "Iqbal Ramadan",
        tag: "",
        pin: false,
        created_at: new Date(),
      },
    ],
  },
  index: {
    type: Number,
    default: 0,
  },
  tagVisibility: {
    type: Boolean,
    default: false,
  }
});
</script>

<style></style>
