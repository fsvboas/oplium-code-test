<script setup lang="ts">
import { NCheckbox, NButton, NIcon } from 'naive-ui'
import { Trash } from 'lucide-vue-next'
import { ref } from 'vue'

const isTaskCompleted = ref<boolean>(false)
</script>

<template>
  <div
    :class="[
      'flex justify-between items-center w-full p-2 rounded',
      isTaskCompleted ? 'bg-neutral-100' : ' bg-white',
    ]"
  >
    <div class="flex items-center space-x-2">
      <n-checkbox v-model:checked="isTaskCompleted" />

      <p
        :class="[
          'transition-colors duration-200',
          isTaskCompleted ? 'line-through text-neutral-400' : 'text-black',
        ]"
      >
        Tarefa Teste
      </p>
    </div>

    <n-button quaternary type="error" class="hover:!bg-red-100">
      <template #icon>
        <n-icon>
          <Trash />
        </n-icon>
      </template>
    </n-button>
  </div>
</template>
