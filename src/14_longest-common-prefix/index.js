/**
 * @param {String[]} strs
 * @return {String}
 */

 exports.longestCommonPrefix = (strs) => {
  let prefix = strs[0]
  for(let i = 1; i < strs.length; i++) {
    while(!strs[i].startsWith(prefix)) {
      prefix = prefix.slice(0, prefix.length-1)
    }
  }
  return prefix
}
  