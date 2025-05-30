<script setup lang="ts">
import TodoTaskCard from './TodoTaskCard.vue'
import { useTodoListStore } from '../stores/useTodoListStore.ts'
import { storeToRefs } from 'pinia'

const todoListStore = useTodoListStore()
const { todoList } = storeToRefs(todoListStore)
</script>

<template>
  <div class="w-full space-y-1 h-100 overflow-y-auto pr-0">
    <TodoTaskCard v-for="todo in todoList" :key="todo.id" :task="todo" />
  </div>
</template>
