<script setup lang="ts">
import TodoInput from './components/TodoInput.vue'
</script>
<template>
  <div class="min-h-screen bg-neutral-50 flex justify-center items-center">
    <div
      class="flex items-center space-x-2 bg-neutral-200 max-w-3xl w-full justify-center p-4 md:p-12 rounded-md border"
    >
      <TodoInput />
    </div>
  </div>
</template>
