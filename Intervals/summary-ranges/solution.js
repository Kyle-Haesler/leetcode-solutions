/**
 * @param {number[]} nums
 * @return {string[]}
 */
var summaryRanges = function (nums) {
  let result = [];
  let start = 0;
  let end = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i + 1] - nums[i] === 1) {
      end++;
    } else {
      if (start === end) {
        result.push(`${nums[start]}`);
        end++;
        start++;
      } else {
        result.push(`${nums[start]}->${nums[end]}`);
        start = end + 1;
        end++;
      }
    }
  }

  return result;
};
