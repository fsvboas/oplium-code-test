<script setup lang="ts">
import TodoTaskCard from './TodoTaskCard.vue'
import { useTodoListStore } from '../stores/useTodoListStore.ts'
import { useTodoListFilterStore } from '../stores/useTodoListFilterStore.ts'
import { storeToRefs } from 'pinia'
import { computed } from 'vue'

const todoListStore = useTodoListStore()
const { todoList } = storeToRefs(todoListStore)

const filterStore = useTodoListFilterStore()
const { activeFilter } = storeToRefs(filterStore)

const filterMap = {
  all: () => todoList.value,
  pending: () => todoList.value.filter((task) => task.status === 'pending'),
  completed: () => todoList.value.filter((task) => task.status === 'completed'),
}
const filteredTasks = computed(() => filterMap[activeFilter.value]?.(todoList.value) ?? [])
</script>

<template>
  <div class="w-full space-y-1 h-100 overflow-y-auto pr-0">
    <TodoTaskCard v-for="task in filteredTasks" :key="task.id" :task="task" />
  </div>
</template>
