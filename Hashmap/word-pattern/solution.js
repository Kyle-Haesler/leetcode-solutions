/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function (pattern, s) {
  const pat = pattern.split("");
  const sat = s.split(" ");
  if (pat.length !== sat.length) {
    return false;
  }
  const pmap = new Map();
  const smap = new Map();
  for (let i = 0; i < pat.length; i++) {
    const pchar = pat[i];
    const schar = sat[i];
    if (pmap.has(pchar)) {
      if (pmap.get(pchar) !== schar) {
        return false;
      }
    } else {
      pmap.set(pchar, schar);
    }
    if (smap.has(schar)) {
      if (smap.get(schar) !== pchar) {
        return false;
      }
    } else {
      smap.set(schar, pchar);
    }
  }
  return true;
};
