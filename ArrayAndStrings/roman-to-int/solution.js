/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
  const trans = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };
  let sum = 0;
  for (let i = 0; i < s.length; i++) {
    const left = s[i];
    const right = s[i + 1] ? s[i + 1] : null;
    if (trans[left] < trans[right] && trans[right]) {
      sum -= trans[left];
    } else {
      sum += trans[left];
    }
  }
  return sum;
};
