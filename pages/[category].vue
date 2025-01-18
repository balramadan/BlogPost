<template>
  <div class="pt-20 px-5 sm:px-10 md:px-12 lg:px-30">
    <h3 class="text-center text-2xl font-600 mt-5">{{ title }}</h3>
    <div v-if="loading" class="text-center h-screen mt-10">Loading...</div>
    <div v-else class="my-10">
      <div class="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-2.5">
        <CardPost
          v-for="(item, index) in paginatedData"
          :key="index"
          :post="item"
          :index="index"
        />
      </div>

      <UPagination
        class="mt-10"
        v-model="currentPage"
        :page-count="perPage"
        :total="response.length"
        :active-button="{ color: 'orange' }"
        show-last
        show-first  
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import axios from "axios";
import CardPost from "~/components/reuseable/cardpost.vue";
import { ref, onBeforeMount, computed } from "vue";
import capitalizeword from "@/utils/capitalizeword";

// Mengambil params kategori
const route = useRoute();
const category = route.params.category;
const response = ref([]);
const loading = ref(true);

// Pagination state
const currentPage = ref(1);
const perPage = 6; // Jumlah item per halaman

// UI Pagination
const uiPagination = () => {
  return {
    default: {
      activeButton: {
        color: "#F97300",
      },
    },
  };
};

// Judul
const title = computed(() => capitalizeword(category as string));

// Ambil data dari API
const categoryPost = async () => {
  try {
    await axios
      .get(`/api/post/category/${category}`)
      .then((res) => {
        response.value = res.data.sort((a: any, b: any) => {
          return (
            new Date(b.created_at).getTime() - new Date(a.created_at).getTime()
          );
        });
      })
      .catch((error) => {
        console.error(error);
      });
  } catch (error) {
    console.error(error);
  } finally {
    loading.value = false;
  }
};

// Data yang ditampilkan berdasarkan halaman
const paginatedData = computed(() => {
  const start = (currentPage.value - 1) * perPage;
  const end = start + perPage;
  return response.value.slice(start, end);
});

onBeforeMount(() => {
  categoryPost();
});

useSeoMeta({
  title: `${title.value} | Inspire`,
  description: "This is the home page",
  ogImage: "https://example.com/image.jpg",
  ogUrl: `/${category}`,
  ogType: "website",
  ogSiteName: "Inspire",
})
</script>

<style scoped></style>
