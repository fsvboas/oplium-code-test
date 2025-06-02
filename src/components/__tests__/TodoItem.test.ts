import { useTodoListStore } from '@/stores/useTodoListStore'
import { mount } from '@vue/test-utils'
import { describe, expect, it, vi } from 'vitest'
import { nextTick } from 'vue'
import TodoItem from '../TodoItem.vue'

describe('TodoItem', () => {
  const todoListStore = useTodoListStore()

  todoListStore.todoList = [
    {
      id: 'task-test-id',
      name: 'Task Test',
      status: 'pending',
    },
  ]

  const wrapper = mount(TodoItem, {
    props: {
      task: todoListStore.todoList[0],
    },
  })

  const checkbox = wrapper.find('[data-testid="checkbox"]')
  const deleteTaskButton = wrapper.find('[data-testid="delete-task-button"]')

  it('should update task status to completed when checkbox is clicked and current status is pending', async () => {
    expect(todoListStore.todoList[0].status).toBe('pending')

    await checkbox.trigger('click')

    await nextTick()

    expect(todoListStore.todoList[0].status).toBe('completed')
  })

  it('should update task status to pending when checkbox is clicked and the current status is completed', async () => {
    expect(todoListStore.todoList[0].status).toBe('completed')

    await checkbox.trigger('click')

    await nextTick()

    expect(todoListStore.todoList[0].status).toBe('pending')
  })

  it('should remove task from todo list', async () => {
    vi.useFakeTimers()

    await deleteTaskButton.trigger('click')

    vi.runAllTimers()

    await nextTick()

    const removedTask = todoListStore.todoList.find((task) => task.id === 'task-test-id')
    expect(removedTask).toBeUndefined()
  })
})
