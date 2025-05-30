import type { TaskType } from '@/types/taskType'
import { defineStore } from 'pinia'
import { v4 as uuidv4 } from 'uuid'
import { ref, watch } from 'vue'

export const useTodoListStore = defineStore('todoList', () => {
  const storedTasks = localStorage.getItem('todoList')
  const todoList = ref<TaskType[]>(storedTasks ? JSON.parse(storedTasks) : [])
  const pending = ref({
    add: false,
    delete: false,
  })

  const delay = () => new Promise((resolve) => setTimeout(resolve, 1000))

  const addTask = async (name: string) => {
    pending.value.add = true
    await delay()
    const randomId = uuidv4()
    todoList.value.push({ name, id: randomId, status: 'pending' })
    pending.value.add = false
  }

  const deleteTask = async (id: string) => {
    pending.value.delete = true
    await delay()
    todoList.value = todoList.value.filter((task) => task.id !== id)
    pending.value.delete = false
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
    pending,
    addTask,
    deleteTask,
    updateTask,
  }
})
