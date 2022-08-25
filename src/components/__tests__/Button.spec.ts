import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import Button from '../Button/index.vue'
describe('Button default slot', () => {
  it('renders properly', () => {
    const wrapper = mount(Button, { props: { type: '1', subText: '123' } })
    expect(wrapper.text()).toContain('Read More')
  })
})
describe('Button slot', () => {
  it('renders properly', () => {
    // Button, { props, options: { slots: "hello button" } }
    const wrapper = mount(Button, { props: { type: '1', subText: '123' }, slots: Button })
    expect(wrapper.text()).toContain('Read More')
  })
})
