/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
  const map = new Map();
  for (let num of nums) {
    const count = map.get(num) ? map.get(num) + 1 : 1;
    map.set(num, count);
  }
  for (let [key, value] of map.entries()) {
    if (value < 3) return key;
  }
};
