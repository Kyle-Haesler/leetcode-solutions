/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function (s, t) {
  let pon1 = 0;
  let pon2 = 0;
  while (pon1 <= s.length - 1 && pon2 < t.length) {
    if (s[pon1] === t[pon2]) {
      pon1++;
      pon2++;
    } else {
      pon2++;
    }
  }
  console.log(pon1);
  if (pon1 === s.length) {
    return true;
  } else {
    return false;
  }
};
