class Solution:
    def minimumTotal(self, triangle: List[List[int]]) -> int:
        row = len(triangle)-2
        while row >= 0:
            for col in range(len(triangle[row])):
                triangle[row][col] += min(triangle[row+1][col], triangle[row+1][col+1])
            row -=1
        return triangle[0][0]