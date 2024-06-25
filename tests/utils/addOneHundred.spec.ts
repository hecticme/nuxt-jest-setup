import { describe, it, expect } from '@jest/globals'
import { addOneHundred } from '~/utils/addOneHundred'

describe('addOneHundred()', () => {
  const cases = [
    { number: 1, expected: 101 },
    { number: 2, expected: 102 },
    { number: 3, expected: 103 },
    { number: 4, expected: 104 },
  ]

  it.each(cases)('$number + 100', ({ number, expected }) => {
    expect(addOneHundred(number))
      .toBe(expected)
  })
})
