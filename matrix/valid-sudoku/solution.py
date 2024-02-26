class Solution:
    def isValidSudoku(self, board: List[List[str]]) -> bool:
        row_length = len(board)
        col_length = len(board[0])

        # check the rows
        for i in range(row_length):
            seen = set()
            for j in range(col_length):
                cell = board[i][j]
                if cell != ".":
                    if cell in seen:
                        return False
                    else:
                        seen.add(cell)
        # check the cols
        for i in range(row_length):
            seen = set()
            for j in range(col_length):
                cell = board[j][i]
                if cell != ".":
                    if cell in seen:
                        return False
                    else:
                        seen.add(cell)
        
        # check the grids
        for i in range(0, row_length, 3):
            for j in range(0, col_length, 3):
                seen = set()
                for row in range(i, i + 3, 1):
                    for col in range(j, j + 3, 1):
                        cell = board[row][col]
                        if cell != ".":
                            if cell in seen:
                                return False
                            else:
                                seen.add(cell)
        
        return True