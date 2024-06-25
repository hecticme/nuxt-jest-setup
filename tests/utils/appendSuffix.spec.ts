import {
  describe,
  expect,
  it,
} from '@jest/globals'
import { appendSuffix } from '~/utils/appendSuffix'

describe('appendSuffix()', () => {
  it('concatenate a suffix to a string', () => {
    const input = 'John'
    const suffix = 'Smith'
    const result = input + suffix

    expect(appendSuffix(input, suffix))
      .toBe(result)
  })
})
