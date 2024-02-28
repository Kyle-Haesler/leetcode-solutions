/**
 * @param {number[]} nums
 * @return {string[]}
 */
var summaryRanges = function (nums) {
  // alrighty definitely going to use two pointers here to keep track of the start and the end
  // will push results
  const res = [];
  let start = 0;
  let end = 0;
  for (let i = 0; i < nums.length; i++) {
    const left = nums[i];
    const right = i + 1 < nums.length ? nums[i + 1] : null;
    // check to see if right - left == 1 and right is true meaning we havent gone to the end yet
    if (right && right - left === 1) {
      end++;
    } else {
      start === end
        ? res.push(`${nums[end]}`)
        : res.push(`${nums[start]}->${nums[end]}`);
      start = i + 1;
      end = i + 1;
    }
  }
  return res;
};
