/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  // start with res = the first string in the array
  let res = strs[0];
  // going to do a for loop for the remaining strings
  for (let i = 1; i < strs.length; i++) {
    while (true) {
      if (strs[i].startsWith(res)) {
        break;
      } else {
        if (res.length === 1) {
          return "";
        }
      }

      res = res.substring(0, res.length - 1);
    }
  }
  return res;
};
