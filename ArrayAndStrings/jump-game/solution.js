/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function (nums) {
  let target = nums.length - 1;
  const initial = target;
  let i = target - 1;
  while (i >= 0) {
    if (nums[i] + i >= target && nums[i] !== 0) {
      target = i;
    }

    i--;
  }

  if (target === 0) {
    return true;
  } else {
    return false;
  }
};
