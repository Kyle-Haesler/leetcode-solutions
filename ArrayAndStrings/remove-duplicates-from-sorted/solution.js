/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  let count = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === nums[i + 1]) {
      nums[i] = Infinity;
      count++;
    }
  }
  nums.sort((a, b) => a - b);
  for (let i = 1; i <= count; i++) {
    nums.pop();
  }
};
