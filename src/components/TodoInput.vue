<script setup lang="ts">
import { NInput, NButton } from 'naive-ui'
import { ref, computed } from 'vue'

const inputValue = ref<string>('')

const handleSubmit = () => {
  console.log('inputValue', inputValue.value)
  inputValue.value = ''
}

const isSubmitFormDisabled = computed(() => inputValue.value.trim() === '')
</script>

<template>
  <form class="flex items-center justify-center space-x-2 w-full" @submit.prevent="handleSubmit">
    <n-input v-model:value="inputValue" type="text" placeholder="Lavar louça" class="w-full" />
    <n-button attr-type="submit" type="primary" :disabled="isSubmitFormDisabled"
      >Adicionar</n-button
    >
  </form>
</template>
