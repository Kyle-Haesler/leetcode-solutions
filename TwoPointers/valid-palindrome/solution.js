/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
  s = s.toLowerCase().split("");
  const regex = /^[a-zA-Z0-9]+$/;
  const filtered = s.filter((char) => regex.test(char));
  for (let i = 0, j = filtered.length - 1; i < j; i++, j--) {
    if (filtered[i] !== filtered[j]) {
      return false;
    }
  }
  return true;
};
