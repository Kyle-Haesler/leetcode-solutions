/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function (nums) {
  // edge case - blank array
  if (nums.length === 0) return 0;
  // edge case - length of 1
  if (nums.length === 1) return 1;
  nums.sort((a, b) => a - b);
  let count = 1;
  const res = [];
  for (let i = 0; i < nums.length - 1; i++) {
    if (nums[i + 1] - nums[i] === 1) {
      count++;
    } else if (nums[i + 1] === nums[i]) {
      continue;
    } else {
      res.push(count);
      count = 1;
    }
  }
  res.push(count);
  res.sort((a, b) => a - b);
  return res[res.length - 1];
};
