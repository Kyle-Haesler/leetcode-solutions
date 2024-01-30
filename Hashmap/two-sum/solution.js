/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  const diff = new Map();
  for (let num of nums) {
    const sub = target - num;
    if (diff.has(sub)) {
      diff.set(sub, diff.get(sub) + 1);
    } else {
      diff.set(sub, 1);
    }
  }
  const result = [];
  for (let i = 0; i < nums.length; i++) {
    if (diff.has(nums[i])) {
      if (target - nums[i] === nums[i]) {
        if (diff.get(nums[i]) > 1) {
          result.push(i);
        }
      } else {
        result.push(i);
      }
    }
  }
  console.log(diff);
  return result;
};
