<script setup lang="ts">
import { NCheckbox, NButton, NIcon } from 'naive-ui'
import { Trash } from 'lucide-vue-next'
import { ref } from 'vue'
import type { TaskType } from '@/types/taskType'
import { useTodoListStore } from '../stores/useTodoListStore.ts'

defineProps<{
  task: TaskType
}>()

const isTaskCompleted = ref<boolean>(false)
const todoListStore = useTodoListStore()

const handleDeleteTask = (id: string) => {
  todoListStore.deleteTask(id)
}
</script>

<template>
  <div
    :class="[
      'flex justify-between items-center w-full p-2 rounded',
      isTaskCompleted ? 'bg-neutral-100' : ' bg-white',
    ]"
  >
    <div class="flex items-center space-x-2">
      <n-checkbox v-model:checked="isTaskCompleted" size="large" />

      <p
        :class="[
          'transition-colors duration-200',
          isTaskCompleted ? 'line-through text-neutral-400' : 'text-black',
        ]"
      >
        {{ task.name }}
      </p>
    </div>

    <n-button quaternary type="error" class="hover:!bg-red-100" @click="handleDeleteTask(task.id)">
      <template #icon>
        <n-icon>
          <Trash />
        </n-icon>
      </template>
    </n-button>
  </div>
</template>
