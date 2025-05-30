import type { TaskType } from '@/types/taskType'
import { defineStore } from 'pinia'
import { ref, watch } from 'vue'

export const useTodoListStore = defineStore('todoList', () => {
  const storedTasks = localStorage.getItem('todoList')
  const todoList = ref<TaskType[]>(storedTasks ? JSON.parse(storedTasks) : [])
  const id = ref(0)

  const addTask = (name: string) => {
    todoList.value.push({ name, id: id.value++, status: 'pending' })
  }

  watch(
    todoList,
    (newTasks) => {
      localStorage.setItem('todoList', JSON.stringify(newTasks))
    },
    { deep: true },
  )

  return {
    todoList,
    id,
    addTask,
  }
})
