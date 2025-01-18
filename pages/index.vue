<template>
  <div class="bg-primary h-full min-h-screen">
    <!-- <AdsTop customClass="pt-20 px-5 lg:px-30" /> -->
    <HomeHeadline class="pt-20" />
    <div class="flex flex-col lg:flex-row gap-5 pb-5">
      <HomeTerbaru />
      <HomePopular customClass="px-5 lg:px-0 order-first lg:order-last lg:pr-30" />
    </div>
  </div>
</template>
<script setup>
useSeoMeta({
  title: "Inspire",
  description: "This is the home page",
  image: "https://example.com/image.jpg",
  url: "https://example.com",
  type: "website",
  site_name: "Inspire",
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
<style lang=""></style>
