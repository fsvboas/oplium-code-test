<script setup lang="ts">
import { NInput, NButton } from 'naive-ui'
import { ref, computed } from 'vue'
import { useTodoListStore } from '../stores/useTodoListStore.ts'
import { storeToRefs } from 'pinia'

const inputValue = ref<string>('')
const todoListStore = useTodoListStore()
const { pending } = storeToRefs(todoListStore)

const handleSubmit = () => {
  if (!inputValue.value.trim()) return
  todoListStore.addTask(inputValue.value)
  inputValue.value = ''
}

const isSubmitFormDisabled = computed(() => inputValue.value.trim() === '')
</script>

<template>
  <form class="flex items-center justify-center space-x-2 w-full" @submit.prevent="handleSubmit">
    <n-input
      data-testid="add-task-input"
      v-model:value="inputValue"
      type="text"
      placeholder="Adicione uma tarefa"
      class="w-full dark:!bg-neutral-800 dark:[--n-text-color:white!important] dark:[--n-border:none!important]"
    />
    <n-button
      data-testid="submit-task-button"
      attr-type="submit"
      type="primary"
      :disabled="isSubmitFormDisabled"
      :loading="pending.add"
      >Adicionar</n-button
    >
  </form>
</template>
