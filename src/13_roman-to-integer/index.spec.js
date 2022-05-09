const { romanToInteger } = require('./index')

describe('romanToInteger', () => {
  it('under 5', () => {
    const input = 'III'
    const expected = 3
    const actual = romanToInteger(input)
    expect(actual).toStrictEqual(expected)
  })

  it('4', () => {
    const input = 'IV'
    const expected = 4
    const actual = romanToInteger(input)
    expect(actual).toStrictEqual(expected)
  })

  it('4', () => {
    const input = 'XIV'
    const expected = 14
    const actual = romanToInteger(input)
    expect(actual).toStrictEqual(expected)
  })

  it('58', () => {
    const input = 'LVIII'
    const expected = 58
    const actual = romanToInteger(input)
    expect(actual).toStrictEqual(expected)
  })

  it('1994', () => {
    const input = 'MCMXCIV'
    const expected = 1994
    const actual = romanToInteger(input)
    expect(actual).toStrictEqual(expected)
  })
  
})