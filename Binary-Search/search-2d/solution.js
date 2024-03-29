/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function (matrix, target) {
  let rowToSearch = null;
  for (let row = 0; row < matrix.length; row++) {
    let col = matrix[row].length - 1;
    if (matrix[row][0] === target || matrix[row][col] === target) {
      return true;
    }
    if (target > matrix[row][0] && target < matrix[row][col]) {
      rowToSearch = row;
    }
  }
  if (rowToSearch == null) return false;
  for (let col = 0; col < matrix[rowToSearch].length; col++) {
    if (matrix[rowToSearch][col] === target) {
      return true;
    }
  }
  return false;
};
