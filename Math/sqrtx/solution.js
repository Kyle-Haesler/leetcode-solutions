/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function (x) {
  if (x < 2) {
    return x;
  }
  let left = 1;
  let right = Math.floor(x / 2);
  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    let squared = mid * mid;
    if (squared === x) {
      return mid;
    }
    if (squared < x) {
      left = mid + 1;
    }
    if (squared > x) {
      right = mid - 1;
    }
  }
  return right;
};
