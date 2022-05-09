const { twoSum } = require('./index')

describe('twoSum', () => {
  it('should run true', () => {
    const nums = [2,7,11,15]
    const target = 9
    const expected = [0,1]
    const actual = twoSum(nums, target)
    expect(actual).toStrictEqual(expected)
  })
})