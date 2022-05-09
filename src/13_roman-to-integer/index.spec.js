const { romanToInteger } = require('./index')

describe('romanToInteger', () => {
  it('under 5', () => {
    const input = 'III'
    const expected = 3
    const actual = romanToInteger(input)
    expect(actual).toStrictEqual(expected)
  })
})