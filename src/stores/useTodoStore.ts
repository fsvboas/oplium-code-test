import type { TaskType } from '@/types/taskType'
import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useTodoListStore = defineStore('todoList', () => {
  const todos = ref<TaskType[]>([])
  const id = ref(0)

  const addTask = (name: string) => {
    todos.value.push({ name, id: id.value++, status: 'pending' })
  }

  return {
    todos,
    id,
    addTask,
  }
})
