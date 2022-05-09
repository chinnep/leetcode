const { longestCommonPrefix } = require('./index')

describe('longestCommonPrefix', () => {
  it('2 letter prefix in common', () => {
    const input = ['flower','flow','flight']
    const expected = 'fl'
    const actual = longestCommonPrefix(input)
    expect(actual).toStrictEqual(expected)
  })

  it('none in common', () => {
    const input = ['dog','racecar','car']
    const expected = ''
    const actual = longestCommonPrefix(input)
    expect(actual).toStrictEqual(expected)
  })

  it('all of one word', () => {
    const input = ['fire','fireball','firefighter']
    const expected = 'fire'
    const actual = longestCommonPrefix(input)
    expect(actual).toStrictEqual(expected)
  })
})