<script setup lang="ts">
import { NCheckbox, NButton, NIcon } from 'naive-ui'
import { Trash } from 'lucide-vue-next'
import type { TaskType } from '@/types/taskType'
import { useTodoListStore } from '../stores/useTodoListStore.ts'
import { computed } from 'vue'
import { storeToRefs } from 'pinia'

const props = defineProps<{
  task: TaskType
}>()

const todoListStore = useTodoListStore()
const { pending } = storeToRefs(todoListStore)

const isTaskCompleted = computed(() => props.task.status === 'completed')

const handleDeleteTask = (id: string) => {
  todoListStore.deleteTask(id)
}

const handleUpdateTaskStatus = (id: string) => {
  todoListStore.updateTask(id)
}
</script>

<template>
  <div
    :class="[
      'flex justify-between items-center w-full p-2 rounded max-h-fit ',
      isTaskCompleted ? 'bg-neutral-100' : ' bg-white',
    ]"
  >
    <div class="flex items-center space-x-2">
      <n-checkbox
        v-model:checked="isTaskCompleted"
        size="large"
        @update:checked="handleUpdateTaskStatus(task.id)"
      />
      <p
        :class="[
          'transition-colors duration-200 line-clamp-2',
          isTaskCompleted ? 'line-through text-neutral-400' : 'text-black',
        ]"
      >
        {{ task.name }}
      </p>
    </div>

    <n-button
      quaternary
      type="error"
      class="hover:!bg-red-100"
      @click="handleDeleteTask(task.id)"
      :loading="pending.delete"
      :focusable="false"
    >
      <template #icon>
        <n-icon>
          <Trash />
        </n-icon>
      </template>
    </n-button>
  </div>
</template>
