/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function (target, nums) {
  let left = 0;
  let sum = 0;
  let smallest = Infinity;
  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
    while (sum >= target) {
      smallest = Math.min(smallest, i - left + 1);
      sum -= nums[left++];
    }
  }
  return smallest === Infinity ? 0 : smallest;
};
