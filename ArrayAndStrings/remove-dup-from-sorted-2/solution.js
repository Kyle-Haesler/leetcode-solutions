/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  const map = new Map();
  for (let i = 0; i < nums.length; i++) {
    if (map.has(nums[i])) {
      map.get(nums[i]).push(i);
    } else {
      map.set(nums[i], [i]);
    }
  }
  let count = 0;
  for (let indexes of map.values()) {
    while (indexes.length > 2) {
      indextoDel = indexes.pop();
      nums[indextoDel] = Infinity;
      count++;
    }
  }
  nums.sort((a, b) => a - b);
  let i = count;
  while (i >= 1) {
    nums.pop();
    i--;
  }
};
