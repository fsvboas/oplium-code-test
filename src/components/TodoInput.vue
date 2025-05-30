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
      v-model:value="inputValue"
      type="text"
      placeholder="Adicione uma nova tarefa"
      class="w-full"
    />
    <n-button
      attr-type="submit"
      type="primary"
      :disabled="isSubmitFormDisabled"
      :loading="pending.add"
      >Adicionar</n-button
    >
  </form>
</template>
