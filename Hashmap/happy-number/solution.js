/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function (n) {
  // edge case starting with 1
  if (n === 1) return true;
  // going to use a set to keep track of numbers we have had already and use that to break
  const tracker = new Set();
  while (n !== 1) {
    n = n.toString();
    let sum = 0;
    for (i of n) {
      sum += Number(i) * Number(i);
    }
    if (tracker.has(sum)) return false;
    tracker.add(sum);
    n = sum;
  }
  return true;
};
