/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
  if (s.length !== t.length) {
    return false;
  }
  const smap = new Map();
  const tmap = new Map();
  for (let char of s) {
    if (smap.has(char)) {
      smap.set(char, smap.get(char) + 1);
    } else {
      smap.set(char, 1);
    }
  }
  for (let char of t) {
    if (tmap.has(char)) {
      tmap.set(char, tmap.get(char) + 1);
    } else {
      tmap.set(char, 1);
    }
  }
  for (let [key, value] of smap.entries()) {
    if (!tmap.has(key)) {
      return false;
    } else {
      if (tmap.get(key) !== value) {
        return false;
      }
    }
  }
  return true;
};
