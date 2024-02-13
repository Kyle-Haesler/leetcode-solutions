/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function (target, nums) {
  let res = Infinity;
  let left = 0;
  let sum = 0;
  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
    while (sum >= target) {
      res = Math.min(res, i - left + 1);
      sum -= nums[left++];
    }
  }
  return res === Infinity ? 0 : res;
};
