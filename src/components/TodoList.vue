<script setup lang="ts">
import TodoTaskCard from './TodoTaskCard.vue'

const mockData = Array.from({ length: 10 }, (_, index) => index)
</script>

<template>
  <div class="w-full space-y-1 h-100 overflow-y-auto pr-0">
    <TodoTaskCard v-for="index in mockData" :key="index" />
  </div>
</template>
