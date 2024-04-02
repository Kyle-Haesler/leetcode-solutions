/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  let max = 0;
  let result = [];
  for (let i = 0; i < s.length; i++) {
    while (result.includes(s[i])) {
      result.shift();
    }
    result.push(s[i]);
    max = Math.max(max, result.length);
  }
  return max;
};
