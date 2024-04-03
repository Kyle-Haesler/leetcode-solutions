class Solution:
    def solve(self, board: List[List[str]]) -> None:
        """
        Do not return anything, modify board in-place instead.
        """
        def dfs(i,j):
            if i < 0 or j < 0 or i >= len(board) or j >= len(board[0]) or board[i][j] == "X" or board[i][j] == "Visited":
                return
            board[i][j] = "Visited"
            dfs(i+1, j)
            dfs(i-1, j)
            dfs(i, j+1)
            dfs(i, j-1)
            return
        
        for i in range(len(board)):
            for j in range(len(board[0])):
                if board[i][j] == "O" and (i == 0 or j == 0 or i == len(board)-1 or j == len(board[0])-1):
                    dfs(i,j)
        for i in range(len(board)):
            for j in range(len(board[0])):
                if board[i][j] == "Visited":
                    board[i][j] = "O"
                else:
                    board[i][j] = "X"
        