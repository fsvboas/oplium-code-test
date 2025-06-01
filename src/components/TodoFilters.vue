<script setup lang="ts">
import { NButtonGroup, NButton, NIcon } from 'naive-ui'
import { List, Hourglass, Check } from 'lucide-vue-next'
import { ref, onMounted, computed } from 'vue'
import { useTodoListFilterStore } from '../stores/useTodoListFilterStore.ts'
import { storeToRefs } from 'pinia'

const filterStore = useTodoListFilterStore()

const { setFilter } = filterStore
const { activeFilter } = storeToRefs(filterStore)

const width = ref<number>(window.innerWidth)

const updateWidth = () => {
  width.value = window.innerWidth
}

onMounted(() => {
  window.addEventListener('resize', updateWidth)
})

const isMobileDevice = computed(() => width.value <= 640)
</script>

<template>
  <div class="flex w-full space-x-2">
    <n-button-group
      class="bg-white dark:bg-neutral-800 rounded max-sm:w-full"
      :vertical="isMobileDevice"
    >
      <n-button
        :tabindex="0"
        @click="setFilter('all')"
        :focusable="false"
        :bordered="false"
        :class="[
          '[--n-ripple-color:black!important] [--n-text-color-hover:black!important] [--n-text-color-pressed:black!important] [--n-text-color-focus:black!important] !border !border-[#e0e0e6] hover:!border-black dark:[--n-ripple-color:white!important] dark:[--n-text-color-hover:white!important] dark:[--n-text-color-pressed:white!important] dark:[--n-text-color-focus:white!important]  dark:hover:!border-white dark:hover:!text-white',
          activeFilter === 'all'
            ? '!border-black !text-black dark:!border-white dark:!text-white'
            : 'dark:!text-neutral-400 dark:!border-neutral-600',
        ]"
      >
        <template #icon>
          <n-icon><List /></n-icon>
        </template>
        Todas
      </n-button>
      <n-button
        :tabindex="0"
        @click="setFilter('pending')"
        :focusable="false"
        :bordered="false"
        :class="[
          '[--n-ripple-color:#ff6900!important] [--n-text-color-pressed:#ff6900!important] [--n-text-color-focus:#ff6900!important] !border !border-[#e0e0e6] hover:!border-orange-600  hover:!text-orange-600',
          activeFilter === 'pending'
            ? '!border-orange-600 !text-orange-600 dark:!border-orange-600 dark:!text-orange-600'
            : 'dark:!text-neutral-400 dark:!border-neutral-600',
        ]"
      >
        <template #icon>
          <n-icon><Hourglass /></n-icon>
        </template>
        Pendentes
      </n-button>
      <n-button
        :tabindex="0"
        @click="setFilter('completed')"
        :focusable="false"
        :bordered="false"
        :class="[
          '[--n-ripple-color:#22c55e!important] [--n-text-color-pressed:#22c55e!important] [--n-text-color-focus:#22c55e!important] !border !border-[#e0e0e6] hover:!border-green-600  hover:!text-green-600',
          activeFilter === 'completed'
            ? '!border-green-500 !text-green-500 dark:!border-green-500 dark:!text-green-500'
            : 'dark:!text-neutral-400 dark:!border-neutral-600',
        ]"
      >
        <template #icon>
          <n-icon><Check /></n-icon>
        </template>
        Concluídas
      </n-button>
    </n-button-group>
  </div>
</template>
