/**
 * @jest-environment jsdom
 */

import {
  describe,
  expect,
  it,
} from '@jest/globals'
import { mount } from '@vue/test-utils'
import TheHeader from '~/components/TheHeader.vue'
import { NuxtLink } from '#components'

describe('TheHeader.vue', () => {
  it('has navigation links', () => {
    const wrapper = mount(TheHeader)

    const navLink = wrapper.getComponent(NuxtLink)

    expect(navLink.text())
      .toBe('Home')
  })
})
