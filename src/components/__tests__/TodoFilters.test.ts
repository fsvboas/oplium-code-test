import type { TaskType } from '@/types/taskType'
import { describe, expect, it } from 'vitest'

const mockListData: TaskType[] = [
  { id: '1', name: 'Task 1', status: 'pending' },
  { id: '2', name: 'Task 2', status: 'completed' },
  { id: '3', name: 'Task 3', status: 'pending' },
  { id: '4', name: 'Task 4', status: 'completed' },
  { id: '5', name: 'Task 5', status: 'pending' },
  { id: '6', name: 'Task 6', status: 'pending' },
]

describe('TodoFilters', () => {
  const filterTasks = (tasks: TaskType[], selectedFilter: 'all' | 'pending' | 'completed') => {
    if (selectedFilter === 'all') return tasks
    if (selectedFilter === 'pending') return tasks.filter((task) => task.status === 'pending')
    if (selectedFilter === 'completed') return tasks.filter((task) => task.status === 'completed')
  }

  it('should return all tasks when the filter is "Todas"', () => {
    const todoList = filterTasks(mockListData, 'all')
    expect(todoList).toEqual(mockListData)
  })

  it('should return pending tasks when the filter is "Pendentes"', () => {
    const todoList = filterTasks(mockListData, 'pending')
    expect(todoList).toEqual([
      { id: '1', name: 'Task 1', status: 'pending' },
      { id: '3', name: 'Task 3', status: 'pending' },
      { id: '5', name: 'Task 5', status: 'pending' },
      { id: '6', name: 'Task 6', status: 'pending' },
    ])
  })

  it('should return completed tasks when the filter is "Concluídas"', () => {
    const todoList = filterTasks(mockListData, 'completed')
    expect(todoList).toEqual([
      { id: '2', name: 'Task 2', status: 'completed' },
      { id: '4', name: 'Task 4', status: 'completed' },
    ])
  })
})
