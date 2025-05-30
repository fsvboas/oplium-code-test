<script setup lang="ts">
import TodoInput from './components/TodoInput.vue'
import TodoTaskCard from './components/TodoTaskCard.vue'
</script>

<template>
  <div class="min-h-screen bg-neutral-50 flex justify-center items-center p-2">
    <div
      class="flex flex-col space-y-2 items-center bg-neutral-200 max-w-3xl w-full justify-center p-4 md:p-12 rounded border"
    >
      <TodoInput />
      <TodoTaskCard />
    </div>
  </div>
</template>
