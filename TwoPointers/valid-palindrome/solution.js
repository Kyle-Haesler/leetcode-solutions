/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
  if (s.length === 1) {
    return true;
  }
  const regex = /^[a-zA-Z0-9]+$/;
  const clean = [];
  for (let i = 0; i < s.length; i++) {
    if (regex.test(s[i])) {
      clean.push(s[i].toLowerCase());
    }
  }
  for (let i = 0, j = clean.length - 1; i <= j; i++, j--) {
    if (clean[i] !== clean[j]) {
      return false;
    }
  }
  return true;
};
