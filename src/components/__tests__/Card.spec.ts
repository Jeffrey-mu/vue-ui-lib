import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import Card from '../Card/index.vue'
describe('Card default slot', () => {
  it('renders properly', () => {
    const wrapper = mount(Card, {})
    expect(wrapper.text()).toContain('')
  })
})

