/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function (board) {
  // first need to check each row for duplicates, will use a set, make sure to return false to break out of these loops if there is a duplicate
  for (let i = 0; i < board.length; i++) {
    const seen = new Set();
    for (let j = 0; j < board[i].length; j++) {
      if (board[i][j] !== ".") {
        if (seen.has(board[i][j])) {
          return false;
        } else {
          seen.add(board[i][j]);
        }
      }
    }
  }
  // ok now we need to check each column in a similar fashion
  for (let i = 0; i < board.length; i++) {
    const seen = new Set();
    for (let j = 0; j < board[i].length; j++) {
      if (board[j][i] !== ".") {
        if (seen.has(board[j][i])) {
          return false;
        } else {
          seen.add(board[j][i]);
        }
      }
    }
  }
  // ok very nice, now we need to check a 3 x 3 group
  for (let rowStart = 0; rowStart < board.length; rowStart += 3) {
    for (let colStart = 0; colStart < board[0].length; colStart += 3) {
      const seen = new Set();
      for (let i = rowStart; i < rowStart + 3; i++) {
        for (let j = colStart; j < colStart + 3; j++) {
          if (board[i][j] !== ".") {
            if (seen.has(board[i][j])) {
              return false;
            } else {
              seen.add(board[i][j]);
            }
          }
        }
      }
    }
  }

  return true;
};
