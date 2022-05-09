/**
 * @param {String} input in roman numerals
 * @return {Number} result in arabic numerals
 */

const map = {
  'I': 1,
  'V': 5,
  'X': 10,
  'L': 50,
  'C': 100,
  'D': 500,
  'M': 1000
}

 exports.romanToInteger = (input) => {
   // I wanted to separate into a function but it wasn't renderring correctly
  const isNextLarger = index => map[input[index]] < map[input[index++]]
  let result = 0;
  for(let i = 0; i < input.length; i++) {
    if(i < input.length - 1 && (map[input[i]] < map[input[i+1]])) {
      result += map[input[i+1]] - map[input[i]]
      i+=1
    } else {
      result+= map[input[i]]
    }
  }
  return result
}
  