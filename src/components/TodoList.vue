<script setup lang="ts">
import TodoItem from './TodoItem.vue'
import EmptyTodoListState from '../components/EmptyTodoListState.vue'
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
  <div class="w-full h-100 overflow-y-auto overflow-x-hidden pr-0 flex flex-col">
    <EmptyTodoListState v-show="!filteredTasks.length" />
    <TransitionGroup
      v-show="filteredTasks.length"
      tag="ul"
      class="space-y-1"
      enter-active-class="transition-all duration-300 ease-in-out"
      leave-active-class="transition-all duration-300 ease-in-out"
      enter-from-class="opacity-0
      translate-x-8"
      enter-to-class="opacity-100 translate-x-0"
      leave-from-class="opacity-100
      translate-x-0"
      leave-to-class="opacity-0 translate-x-8"
    >
      <TodoItem v-for="task in filteredTasks" :key="task.id" :task="task" />
    </TransitionGroup>
  </div>
</template>
