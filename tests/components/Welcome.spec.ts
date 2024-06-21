/**
 * @jest-environment jsdom
 */

import {
  describe,
  expect,
  it,
} from '@jest/globals'
import { mount } from '@vue/test-utils'
import Welcome from '~/components/Welcome.vue'

describe('Welcome.vue', () => {
  it('shows welcome message', () => {
    const wrapper = mount(Welcome)

    expect(wrapper.text())
      .toBe('Hello! Welcome')
  })
})
