const { validParentheses } = require('./index')

describe('validParentheses', () => {
  it('one pair', () => {
    const input = '()'
    const expected = true
    const actual = validParentheses(input)
    expect(actual).toStrictEqual(expected)
  })

  it('sequential pairs', () => {
    const input = '()[]{}'
    const expected = true
    const actual = validParentheses(input)
    expect(actual).toStrictEqual(expected)
  })

  it('short mismatch', () => {
    const input = '(]'
    const expected = 'false
    const actual = validParentheses(input)
    expect(actual).toStrictEqual(expected)
  })
})