/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  if (s.length < 2) return s.length;
  const map = {};
  let front = 0,
    back = 0,
    maxLength = 0;
  for (; front < s.length; front++) {
    const exists = map[s[front]];
    if (exists !== undefined && back <= exists) {
      back = exists + 1;
    }
    map[s[front]] = front;
    maxLength = Math.max(maxLength, front - back + 1);
  }
  return maxLength;
};
