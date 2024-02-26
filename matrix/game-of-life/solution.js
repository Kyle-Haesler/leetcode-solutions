/**
 * @param {number[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var gameOfLife = function (board) {
  const rowLength = board.length;
  const colLength = board[0].length;
  const deadCords = [];
  const aliveCords = [];
  // alright so now we basically have to check every touching square which is going to be a little ridiculous
  // lets start with one that actually has 8 neighbors and test for each requirement one by one

  for (let i = 0; i < rowLength; i++) {
    for (let j = 0; j < colLength; j++) {
      let aliveCount = 0;
      let deadCount = 0;
      // first we have to check if the cell is even alive
      const currentCell = board[i][j];
      // so regardless we are going to have to check all of the surround cells, come up with a count for alive and dead
      // then we will check if our cell is alive or dead and go from there

      // check the left cell if it even exists
      if (j - 1 >= 0) {
        board[i][j - 1] ? aliveCount++ : deadCount++;
      }
      // check the right cell if it even exists
      if (j + 1 < colLength) {
        board[i][j + 1] ? aliveCount++ : deadCount++;
      }
      // check directly below the cell if it exists
      if (i + 1 < rowLength) {
        board[i + 1][j] ? aliveCount++ : deadCount++;
      }
      // check directly about the cell if it exists
      if (i - 1 >= 0) {
        board[i - 1][j] ? aliveCount++ : deadCount++;
      }
      // check diagonal upper left cell if it exists
      if (i - 1 >= 0 && j - 1 >= 0) {
        board[i - 1][j - 1] ? aliveCount++ : deadCount++;
      }
      // check diagonal upper right cell if it exists
      if (i - 1 >= 0 && j + 1 < colLength) {
        board[i - 1][j + 1] ? aliveCount++ : deadCount++;
      }
      // check diagonal bottom left
      if (i + 1 < rowLength && j - 1 >= 0) {
        board[i + 1][j - 1] ? aliveCount++ : deadCount++;
      }
      // check diagonal bottom right
      if (i + 1 < rowLength && j + 1 < colLength) {
        board[i + 1][j + 1] ? aliveCount++ : deadCount++;
      }

      // now we will check the requirements one at a time and build into our new board
      // 1. alive cell with fewer than two live neighbors will die
      if (currentCell && aliveCount < 2) {
        deadCords.push([i, j]);
      }
      // 2. alive cell with two or three alive neighbors lives dont have to do anything here

      // 3. alive cell with more than three live neighbors dies!
      if (currentCell && aliveCount > 3) {
        deadCords.push([i, j]);
      }
      // 4. dead cell with exactly 3 alive neighbors becomes alive!
      if (!currentCell && aliveCount === 3) {
        aliveCords.push([i, j]);
      }
    }
  }
  for (let dead of deadCords) {
    let i = dead[0];
    let j = dead[1];
    board[i][j] = 0;
  }
  for (let alive of aliveCords) {
    let i = alive[0];
    let j = alive[1];
    board[i][j] = 1;
  }
};
