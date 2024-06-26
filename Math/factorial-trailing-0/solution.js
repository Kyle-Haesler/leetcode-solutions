/**
 * @param {number} n
 * @return {number}
 */
var trailingZeroes = function (n) {
  let result = 0;
  while (n > 0) {
    n = Math.floor(n / 5);
    result += n;
  }

  return result;
};
