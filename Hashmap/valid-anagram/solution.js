/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
  // edge case - if lengths arent the same, false
  if (s.length !== t.length) return false;
  // make counts for both strings, then compare the counts
  const smap = {};
  for (char of s) {
    smap[char] = (smap[char] || 0) + 1;
  }
  const tmap = {};
  for (char of t) {
    tmap[char] = (tmap[char] || 0) + 1;
  }
  // compare, make sure they are the same
  for (let char of s) {
    if (!tmap[char]) return false;
    if (smap[char] !== tmap[char]) return false;
  }
  return true;
};
