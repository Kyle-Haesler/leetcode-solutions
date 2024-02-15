/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  if (s.length < 2) return s.length;
  let max = 0;

  let res = [];
  for (let i = 0; i < s.length; i++) {
    while (res.includes(s[i])) {
      res.shift();
    }
    res.push(s[i]);
    max = Math.max(max, res.length);
  }
  return Math.max(max, res.length);
};
