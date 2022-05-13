/**
 * @param {String} s
 * @return {Boolean}
 */

exports.validParentheses = (s) => {
  const stack = []
  for (const index in s) {
    const last = stack[stack.length - 1]
    const e = s[index]
    if (['(', '{', '['].includes(e)) stack.push(e)
    else if (stack.length > 0 && ((last === '(' && e === ')') ||
    (last === '[' && e === ']') ||
    (last === '{' && e === '}'))) {
      stack.pop()
    } else return false
  }
  return stack.length === 0
}
