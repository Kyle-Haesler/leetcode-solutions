class Solution:
    def gameOfLife(self, board: List[List[int]]) -> None:
        """
        Do not return anything, modify board in-place instead.
        """
        row_length = len(board)
        col_length = len(board[0])
        alive_cords = []
        dead_cords = []

        for i in range(row_length):
            alive_count = 0
            for j in range(col_length):
                current = board[i][j]
                # first we will look at the cell directly above us, if it exists and find the alive cells
                if i - 1 >= 0:
                    if board[i-1][j]:
                        alive_count +=1
                        
                # now we will look directly below us
                if i + 1 < row_length:
                    if board[i+1][j]:
                        alive_count +=1
                        
                # now lets look directly to our left if it exists
                if j - 1 >= 0:
                    if board[i][j-1]:
                        alive_count +=1
                        
                # right cell check
                if j + 1 < col_length:
                    if board[i][j+1]:
                        alive_count +=1
                        
                # diagonal upper left
                if i - 1 >= 0 and j - 1 >= 0:
                    if board[i-1][j-1]:
                        alive_count +=1
                        
                # diagonal upper right
                if i - 1 >= 0 and j + 1 < col_length:
                    if board[i-1][j+1]:
                        alive_count +=1
                        
                # diagonal lower left
                if i + 1 < row_length and j - 1 >= 0:
                    if board[i+1][j-1]:
                        alive_count+=1
                        
                # diagonal lower right
                if i + 1 < row_length and j + 1 < col_length:
                    if board[i+1][j+1]:
                        alive_count +=1
                        
                
                
                # 1. live cell (current) alive_count < 2 will die so dead_cords needs to be updated
                if current and alive_count < 2:
                    dead_cords.append([i,j])
                #3. live cell with alive_count > 3 will die
                if current and alive_count >3:
                    dead_cords.append([i,j])
                #4. dead cell with 3 alive neighbords will turn alive so alive_cords needs to be updated
                if not current and alive_count == 3:
                    alive_cords.append([i,j])
                alive_count = 0
                
        for cord in alive_cords:
            row = cord[0]
            col = cord[1]
            board[row][col] = 1
        for cord in dead_cords:
            row = cord[0]
            col = cord[1]
            board[row][col] = 0