<template>
  <div class="bg-primary h-full">
    <AdsTop />
    <div class="flex flex-col lg:flex-row gap-5">
      <HomeTerbaru />
      <HomePopular customClass="px-5 lg:px-0 order-first lg:order-last lg:pr-30" />
    </div>
  </div>
</template>
<script setup>
useSeoMeta({
  title: "Blobal",
  description: "This is the home page",
  image: "https://example.com/image.jpg",
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
<style lang=""></style>
