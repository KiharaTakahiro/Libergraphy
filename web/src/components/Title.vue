<script setup lang="ts">
  defineProps<{
    blogTitle: String;
  }>();
  
</script>

<template>
  <div class="mb-10 md:mb-16">
    <h2 class="mb-12 text-center text-5xl font-extrabold" data-testid="title-label">{{ blogTitle }}</h2>
  </div>
</template>