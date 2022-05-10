/**
 * @param {String} s
 * @return {Boolean} 
 */

 exports.validParentheses = (s) => {
   let stack = []
   for(const index in s ) {
     let last = stack[stack.length - 1]
     let e = s[index]
     console.log(stack, e)
    if (['(', '{', '['].includes(e)) stack.push(e)

    else if (stack.length > 0 && ((last == '(' && e == ')')
      || (last == '[' && e == ']')
      || (last == '{' && e == '}'))) {

      stack.pop()
      }

  else return false
   }
   return stack.length == 0
}
  