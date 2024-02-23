/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function (matrix) {
  // step 1: locate the 0's in the matrix by iterating the whole thing unfortunately
  // lets try adding the row and col coordinates to a set so we dont duplicate and wastetime
  const targetRows = new Set();
  const targetCols = new Set();
  const rowLength = matrix.length;
  const colLength = matrix[0].length;
  for (let i = 0; i < rowLength; i++) {
    for (let j = 0; j < colLength; j++) {
      if (matrix[i][j] === 0) {
        targetRows.add(i);
        targetCols.add(j);
      }
    }
  }
  // now we can iterate each set and zero out the necessary rows and cols
  // first up, the rows
  for (let row of targetRows) {
    // blast the cols in that row
    for (let i = 0; i < colLength; i++) {
      matrix[row][i] = 0;
    }
  }
  // same goes for columns now, blast the rows
  for (let col of targetCols) {
    for (let i = 0; i < rowLength; i++) {
      matrix[i][col] = 0;
    }
  }
};
