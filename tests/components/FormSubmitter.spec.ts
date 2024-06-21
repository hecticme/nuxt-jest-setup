/**
 * @jest-environment jsdom
 */

import {
  describe,
  expect,
  it,
} from '@jest/globals'
import { mount } from '@vue/test-utils'
import FormSubmitter from '~/components/FormSubmitter.vue'

describe('FormSubmitter.vue', () => {
  it('reveals a notification message when submitted', async () => {
    const wrapper = mount(FormSubmitter)

    await wrapper.find('[data-username]').setValue('Harry')
    await wrapper.find('form').trigger('submit.prevent')

    expect(wrapper.find('.message').text())
      .toBe('Thank you for your submission, Harry.')
  })
})
