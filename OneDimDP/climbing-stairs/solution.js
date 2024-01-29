/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
  const map = new Map();
  map.set(0, 0);
  map.set(1, 1);
  map.set(2, 2);
  map.set(3, 3);
  for (let i = 4; i <= 45; i++) {
    map.set(i, map.get(i - 2) + map.get(i - 1));
  }
  return map.get(n);
};
