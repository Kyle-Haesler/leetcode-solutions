/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function (nums, val) {
  let count = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === val) {
      nums[i] = "_";
      count++;
    }
  }
  nums.sort();
  for (let i = 1; i <= count; i++) {
    nums.pop();
  }
  console.log(nums);
};
