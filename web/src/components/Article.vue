
<script setup lang="ts">
  defineProps<{
      articleImageUrl: String;
      articleTitle: String;
      articleOverView: String;
      articleDetailUrl: String;
  }>();

</script>

<template>
  <div class="flex flex-col bg-white border rounded-lg overflow-hidden">
    <a :href="articleDetailUrl" class="group h-48 md:h-64 block bg-gray-100 overflow-hidden relative">
      <img :src="articleImageUrl" loading="lazy" alt="Photo by Minh Pham" class="w-full h-full object-cover object-center absolute inset-0 transform group-hover:scale-110 transition duration-200" />
    </a>

    <div class="flex flex-col flex-1 p-4 sm:p-6">
      <h2 class="text-gray-800 text-lg font-semibold mb-2">
        <a :href="articleDetailUrl" class="hover:text-indigo-500 active:text-indigo-600 transition duration-100">{{ articleTitle }}</a>
      </h2>

      <p class="text-gray-500 mb-8">{{ articleOverView }}</p>

    </div>
  </div>

</template>