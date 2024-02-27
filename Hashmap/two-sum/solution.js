/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  const res = new Map();
  // going to make a map that has the difference of the current number - {number, index}
  for (let i = 0; i < nums.length; i++) {
    const difference = target - nums[i];
    if (res.has(nums[i])) {
      if (res.get(nums[i]).index !== i) {
        return [res.get(nums[i]).index, i];
      }
    } else {
      res.set(difference, { number: nums[i], index: i });
    }
  }
};
