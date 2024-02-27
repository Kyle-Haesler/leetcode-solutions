/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function (s, t) {
  const smap = new Map();
  const tmap = new Map();
  for (let i = 0; i < s.length; i++) {
    const schar = s[i];
    const tchar = t[i];
    if (smap.has(schar)) {
      if (smap.get(schar) !== tchar) return false;
    } else {
      smap.set(schar, tchar);
    }
    if (tmap.has(tchar)) {
      if (tmap.get(tchar) !== schar) return false;
    } else {
      tmap.set(tchar, schar);
    }
  }
  return true;
};
