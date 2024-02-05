/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function (nums) {
  let count = 0;
  let target = nums.length - 1;
  let i = 0;
  while (target > 0) {
    if (nums[i] + i >= target && nums[i] !== 0) {
      target = i;
      count++;
      i = 0;
    } else {
      i++;
    }
  }
  return count;
};
