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
    <n-button-group class="bg-white rounded max-sm:w-full" :vertical="isMobileDevice">
      <n-button
        :tabindex="0"
        @click="setFilter('all')"
        :focusable="false"
        :bordered="false"
        :class="[
          '[--n-ripple-color:black!important] [--n-text-color-hover:black!important] [--n-text-color-pressed:black!important] [--n-text-color-focus:black!important] !border !border-[#e0e0e6] hover:!border-black',
          activeFilter === 'all' ? '!border-black !text-black' : '',
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
          '[--n-ripple-color:#ff6900!important] [--n-text-color-hover:#ff6900!important] [--n-text-color-pressed:#ff6900!important] [--n-text-color-focus:#ff6900!important] !border !border-[#e0e0e6] hover:!border-orange-500',
          activeFilter === 'pending' ? '!border-orange-500 !text-orange-500' : '',
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
          '!border !border-[#e0e0e6]',
          activeFilter === 'completed' ? '!border-green-600 !text-green-600' : '',
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
