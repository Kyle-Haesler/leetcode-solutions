/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function (height) {
  let sum = 0;
  let i = 0;
  let j = height.length - 1;
  while (i < j) {
    if (height[i] < height[j]) {
      let k = i;
      while (k <= j && height[k] <= height[i]) {
        sum += height[i] - height[k];
        k += 1;
      }
      i = k;
    } else {
      let k = j;
      while (k >= i && height[k] <= height[j]) {
        sum += height[j] - height[k];
        k -= 1;
      }
      j = k;
    }
  }
  return sum;
};
