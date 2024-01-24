/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
  let result = new Map();
  for (let num of nums) {
    if (result.has(num)) {
      result.set(num, result.get(num) + 1);
    } else {
      result.set(num, 1);
    }
  }
  for (let [key, value] of result.entries()) {
    if (value < 2) return key;
  }
};
