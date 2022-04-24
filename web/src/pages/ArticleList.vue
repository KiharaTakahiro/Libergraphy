<template>
  <Title
    blogTitle="記事一覧"
  />
  <div class="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6 xl:gap-8">
    <div v-for="article in articles" :key="article.index">
      <Article 
        :articleImageUrl=article.articleImageUrl
        :articleTitle=article.articleTitle
        :articleOverView=article.articleOverView
        :articleDetailUrl=article.articleDetailUrl
      />
    </div>
  </div>
</template>

<script setup lang='ts'>
  import Title from '../components/Title.vue';
  import Article from '../components/Article.vue';
  import {callApi} from '../utils'

  const articles = await callApi("/get/articles");

</script>
