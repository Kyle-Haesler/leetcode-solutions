/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
  const maj = nums.length / 2;
  const result = new Map();
  for (let i = 0; i < nums.length; i++) {
    if (result.has(nums[i])) {
      result.set(nums[i], result.get(nums[i]) + 1);
    } else {
      result.set(nums[i], 1);
    }
  }
  for (let [key, value] of result.entries()) {
    if (value > maj) {
      return key;
    }
  }
};
