<template>
  <div class="container mx-auto flex flex-col px-5 py-24 justify-center items-center">
    <img class="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded" alt="hero" :src="article.articleImageUrl">
    <div class="w-full md:w-2/3 flex flex-col mb-16 items-center text-center">
      <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">{{article.articleTitle}}</h1>
      <p class="mb-8 leading-relaxed">{{article.articleOverView}}</p>
      <div class="sm:text-3xl text-3xl mb-4 font-medium text-gray-900">
        {{article.articleDetai}}
      </div>
    </div>
  </div>
</template>

<script setup lang='ts'>
  import Title from '../components/Title.vue';
  import {callApi} from '../utils';

  const article = await callApi("/get/article_detail");

</script>
