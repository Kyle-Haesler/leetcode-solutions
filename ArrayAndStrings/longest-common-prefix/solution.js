/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  result = "";
  for (let i = 1; i < strs[0].length + 1; i++) {
    sub = strs[0].substring(0, i);
    let j = 1;
    let legit = true;
    while (j < strs.length) {
      if (sub !== strs[j].substring(0, i)) {
        legit = false;
      }
      j++;
    }
    if (legit) {
      result = sub;
    }
  }
  return result;
};
