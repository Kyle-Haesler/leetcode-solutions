class Solution:
    def searchMatrix(self, matrix: List[List[int]], target: int) -> bool:
        row2search = None
        for row in range(len(matrix)):
            col = len(matrix[row])-1
            if matrix[row][0] == target or matrix[row][col] == target:
                return True
            if target > matrix[row][0] and target < matrix[row][col]:
                row2search = row
        if row2search == None:
            return False
        for col in range(len(matrix[row2search])):
            if matrix[row2search][col] == target:
                return True
        return False
