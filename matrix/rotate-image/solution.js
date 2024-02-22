/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function (matrix) {
  let n = matrix.length;
  for (let row = 0; row < n; row++) {
    for (let col = row + 1; col < n; col++) {
      let temp = matrix[row][col];
      matrix[row][col] = matrix[col][row];
      matrix[col][row] = temp;
    }
  }
  for (let row = 0; row < n; row++) {
    matrix[row].reverse();
  }
};
