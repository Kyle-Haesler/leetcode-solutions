/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
  if (nums.length === 1) return nums[0];
  const map = new Map();
  for (let num of nums) {
    if (map.has(num)) {
      map.set(num, map.get(num) + 1);
      if (map.get(num) > nums.length / 2) {
        return num;
      }
    } else {
      map.set(num, 1);
    }
  }
};
