import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import Button from '../Button/index.vue'
describe('render button', () => {
  it('render button', () => {
    const wrapper = mount(Button, { props: { type: '1', subText: '123' } })
    expect(wrapper.text()).toContain('Read More')
  })
  it('slot is hello world', () => {
    // Button, { props, options: { slots: "hello button" } }
    const wrapper = mount(Button, {
      props: { type: '1', subText: '123' }, slots: {
        default: "hello world"
      }
    })
    expect(wrapper.text()).toContain('hello world')
  })
  it('test button event', () => {
    // Button, { props, options: { slots: "hello button" } }
    const wrapper = mount(Button)
    wrapper.find('button').trigger('click')
    const clickEvent = wrapper.emitted('click')
    expect(wrapper.emitted()).toHaveProperty('click')
    expect(clickEvent).toHaveLength(1)
  })
})
