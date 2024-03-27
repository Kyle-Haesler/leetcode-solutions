class Solution:
    def numIslands(self, grid: List[List[str]]) -> int:
        def dfs(grid, row, col):
            if row < 0 or row > len(grid)-1 or col < 0 or col > len(grid[row])-1 or grid[row][col] == "0":
                return
            grid[row][col] = "0"
            dfs(grid, row+1, col)
            dfs(grid, row-1, col)
            dfs(grid, row, col+1)
            dfs(grid, row, col-1)
            return 1
        count = 0
        for i in range(len(grid)):
            for j in range(len(grid[i])):
                if grid[i][j] == "1":
                    count = count + dfs(grid,i,j)
        return count