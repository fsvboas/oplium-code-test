import type { TaskType } from '@/types/taskType'
import { defineStore } from 'pinia'
import { v4 as uuidv4 } from 'uuid'
import { ref, watch } from 'vue'

export const useTodoListStore = defineStore('todoList', () => {
  const storedTasks = localStorage.getItem('todoList')
  const todoList = ref<TaskType[]>(storedTasks ? JSON.parse(storedTasks) : [])

  const addTask = (name: string) => {
    const randomId = uuidv4()
    todoList.value.push({ name, id: randomId, status: 'pending' })
  }

  const deleteTask = (id: string) => {
    todoList.value = todoList.value.filter((task) => task.id !== id)
  }

  const updateTask = (id: string) => {
    const task = todoList.value.find((task) => task.id === id)
    if (!task) return
    const newStatus = task.status === 'pending' ? 'completed' : 'pending'
    task.status = newStatus
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
    addTask,
    deleteTask,
    updateTask,
  }
})
