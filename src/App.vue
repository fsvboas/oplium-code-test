<script setup lang="ts">
import TodoInput from './components/TodoInput.vue'
import TodoList from './components/TodoList.vue'
import TodoFilters from './components/TodoFilters.vue'
import SwitchThemeButton from './components/SwitchThemeButton.vue'
</script>

<template>
  <div
    class="min-h-screen bg-neutral-100 dark:bg-neutral-950 flex flex-col justify-center items-center p-2"
  >
    <SwitchThemeButton />
    <div
      class="flex flex-col space-y-2 items-center bg-neutral-200 dark:bg-neutral-900 max-w-3xl w-full justify-center p-4 rounded border border-white dark:border-neutral-700"
    >
      <TodoInput />
      <TodoFilters />
      <TodoList />
    </div>
  </div>
</template>
