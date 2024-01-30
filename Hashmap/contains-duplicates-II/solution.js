/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function (nums, k) {
  const score = new Map();
  for (let i = 0; i < nums.length; i++) {
    if (score.has(nums[i])) {
      if (Math.abs(i - score.get(nums[i]) <= k)) {
        return true;
      } else {
        score.set(nums[i], i);
      }
    } else {
      score.set(nums[i], i);
    }
  }
  return false;
};
