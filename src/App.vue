<script setup lang="ts">
import { Check } from 'lucide-vue-next'
import { NButton } from 'naive-ui'
</script>
<template>
  <div class="min-h-screen bg-black/90 flex justify-center items-center">
    <div class="flex items-center space-x-2">
      <h1 class="text-white text-2xl">Hello World</h1>
      <Check color="lime" :size="32" />
      <n-button type="primary">Button</n-button>
    </div>
  </div>
</template>
