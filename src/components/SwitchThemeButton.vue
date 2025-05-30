<script setup lang="ts">
import { useDark, useToggle } from '@vueuse/core'
import { NButton } from 'naive-ui'

const isDark = useDark()
const toggleTheme = useToggle(isDark)
</script>

<template>
  <n-button
    quaternary
    :focusable="false"
    class="!dark:text-white cursor-pointer !absolute right-4 top-4"
    @click="toggleTheme()"
  >
    <template #icon>
      <n-icon>
        <span v-if="isDark">☀</span>
        <span v-else>🌙</span>
      </n-icon>
    </template>
  </n-button>
</template>
