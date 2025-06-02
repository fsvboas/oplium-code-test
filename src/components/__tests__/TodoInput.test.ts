import { useTodoListStore } from '@/stores/useTodoListStore'
import { mount } from '@vue/test-utils'
import { describe, expect, it, vi } from 'vitest'
import { nextTick } from 'vue'
import TodoInput from '../TodoInput.vue'

describe('TodoInput', () => {
  const wrapper = mount(TodoInput)

  const form = wrapper.find('form')
  const input = wrapper.find('[data-testid="add-task-input"]').find('input')
  const button = wrapper.find('[data-testid="submit-task-button"]')

  const todoListStore = useTodoListStore()

  it('should render input and button', () => {
    expect(input.exists()).toBe(true)
    expect(button.exists()).toBe(true)
  })

  it('should initialize input with empty value', () => {
    expect(input.element.value).toBe('')
  })

  it('should update input value when typing', async () => {
    await input.setValue('refrigerante')
    expect(input.element.value).toBe('refrigerante')
  })

  it('should clear input after form submission', async () => {
    await input.setValue('pão de queijo')
    await form.trigger('submit.prevent')
    expect(input.element.value).toBe('')
  })

  it('should disable submit button when input is empty', async () => {
    await input.setValue('')
    expect((button.element as HTMLButtonElement).disabled).toBe(true)

    await input.setValue('chocolate')
    expect((button.element as HTMLButtonElement).disabled).toBe(false)
  })

  it('should task is added after submit form', async () => {
    vi.useFakeTimers()

    await input.setValue('leite')
    await form.trigger('submit.prevent')

    vi.runAllTimers()

    await nextTick()

    const addedTask = todoListStore.todoList.find((item) => item.name === 'leite')
    expect(addedTask).toBeTruthy()
  })
})
