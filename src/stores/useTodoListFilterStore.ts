import { defineStore } from 'pinia'
import { ref } from 'vue'

type FilterType = 'all' | 'pending' | 'completed'

export const useTodoListFilterStore = defineStore('filter', () => {
  const activeFilter = ref<FilterType>('all')

  function setFilter(filter: FilterType) {
    activeFilter.value = filter
  }

  return { activeFilter, setFilter }
})
