<script setup lang="ts">
</script>

<template>
  <header class="text-gray-600 body-font">
    <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
      <a href="/" class="flex items-center" data-testid="logo-link">
          <img src="../assets/logo.png" class="mr-3 h-6 sm:h-9" alt="Blog Logo" data-testid="logo-img" />
      </a>
      <nav class="md:ml-auto flex flex-wrap items-center text-base justify-center">
        <a href="/" class="mr-5 hover:text-gray-900" data-testid="home-link" >ホーム</a>
        <a href="/article-list" class="mr-5 hover:text-gray-900" data-testid="article-list-link" >記事一覧</a>
        <a href="/write-article" class="mr-5 hover:text-gray-900" data-testid="write-article-link">記事作成</a>
        <a href="/contact" class="mr-5 hover:text-gray-900" data-testid="contact-link">お問い合わせ</a>
      </nav>
    </div>
  </header>
</template>