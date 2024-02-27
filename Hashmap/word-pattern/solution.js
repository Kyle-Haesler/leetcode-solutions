/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function (pattern, s) {
  // split into array of words
  s = s.split(" ");
  // edge case - lengths need to be the same
  if (s.length !== pattern.length) return false;
  // run double linkage map, just like isomorphic strings
  const pmap = new Map();
  const smap = new Map();
  for (let i = 0; i < pattern.length; i++) {
    const pchar = pattern[i];
    const schar = s[i];

    if (pmap.has(pchar)) {
      if (pmap.get(pchar) !== schar) return false;
    } else {
      pmap.set(pchar, schar);
    }
    if (smap.has(schar)) {
      if (smap.get(schar) !== pchar) return false;
    } else {
      smap.set(schar, pchar);
    }
  }
  return true;
};
