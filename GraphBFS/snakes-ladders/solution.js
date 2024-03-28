/**
 * @param {number[][]} board
 * @return {number}
 */
var snakesAndLadders = function (board) {
  const n = board.length;
  const visited = new Set();
  const queue = [[1, 0]]; // [square, moves]

  function getCoordinates(square) {
    let row = Math.floor((square - 1) / n);
    let col = (square - 1) % n;
    if (row % 2 !== 0) {
      // Adjust for Boustrophedon layout: This line was corrected
      col = n - 1 - col;
    }
    row = n - 1 - row; // Convert from "top-down" to "bottom-up" row indexing
    return [row, col];
  }

  while (queue.length) {
    const [square, moves] = queue.shift();
    if (square === n * n) return moves;
    for (let i = 1; i <= 6 && square + i <= n * n; i++) {
      let nextSquare = square + i;
      let [row, col] = getCoordinates(nextSquare);
      let destination = board[row][col] !== -1 ? board[row][col] : nextSquare;
      if (!visited.has(destination)) {
        visited.add(destination);
        queue.push([destination, moves + 1]);
      }
    }
  }
  return -1;
};
