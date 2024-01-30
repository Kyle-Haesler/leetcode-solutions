/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function (n) {
  let sumSet = new Set();
  while (n !== 1) {
    const strnum = n.toString();

    let sum = 0;
    for (let num of strnum) {
      sum = sum + Number(num) * Number(num);
    }
    if (sumSet.has(sum)) {
      return false;
    } else {
      sumSet.add(sum);
    }
    n = sum;
  }
  return true;
};
