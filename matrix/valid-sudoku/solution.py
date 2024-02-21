class Solution(object):
    def isValidSudoku(self, board):
        """
        :type board: List[List[str]]
        :rtype: bool
        """
        # first, we go through the rows!
        for i in range(len(board)):
            seen = set()
            for j in range(len(board[0])):
                if board[i][j] != ".":
                    if board[i][j] in seen:
                        return False
                    else:
                        seen.add(board[i][j])
        # now, we go through the columns, just flip the logic!
        for i in range(len(board)):
            seen = set()
            for j in range(len(board[0])):
                if board[j][i] != ".":
                    if board[j][i] in seen:
                        return False
                    else:
                        seen.add(board[j][i])
        # excellent, now we do the 3X3 grid
        for rowStart in range(0, len(board), 3):
            for colStart in range(0, len(board[0]), 3):
                seen = set()
                for i in range(rowStart, rowStart + 3):
                    for j in range(colStart, colStart + 3):
                        if board[i][j] != ".":
                            if board[i][j] in seen:
                                return False
                            else:
                                seen.add(board[i][j])
        
        
        return True

                
        