class Solution:
    def setZeroes(self, matrix: List[List[int]]) -> None:
        """
        Do not return anything, modify matrix in-place instead.
        """
        rowLength = len(matrix)
        colLength = len(matrix[0])
        targetRows = set()
        targetCols = set()
        for i in range(rowLength):
            for j in range(colLength):
                if matrix[i][j] == 0:
                    targetRows.add(i)
                    targetCols.add(j)

        
        for row in targetRows:
            for i in range(colLength):
                matrix[row][i] = 0
        for col in targetCols:
            for i in range(rowLength):
                matrix[i][col] = 0