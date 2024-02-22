/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function (matrix) {
  // edge case
  if (matrix.length === 0 || matrix[0].length === 0) return [];
  // identify boundaries
  let left = 0;
  let right = matrix[0].length - 1;
  let top = 0;
  let bottom = matrix.length - 1;
  const res = [];
  while (left <= right && top <= bottom) {
    // rip through first row and push
    for (let col = left; col <= right; col++) {
      res.push(matrix[top][col]);
    }
    // move to next row
    top++;
    // go down!
    for (let row = top; row <= bottom; row++) {
      res.push(matrix[row][right]);
    }
    // move one column over
    right--;
    // make sure we are now below the top boundary
    if (top <= bottom) {
      for (let col = right; col >= left; col--) {
        res.push(matrix[bottom][col]);
      }
      // move up bottom
      bottom--;
    }
    // make sure we are now inside the right boundary
    if (left <= right) {
      // go up
      for (let row = bottom; row >= top; row--) {
        res.push(matrix[row][left]);
      }
      left++;
    }
  }
  return res;
};
