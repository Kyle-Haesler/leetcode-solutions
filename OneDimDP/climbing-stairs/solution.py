class Solution:
    def climbStairs(self, n: int) -> int:
        result = dict()
        result[0] = 0
        result[1] = 1
        result[2] = 2
        result[3] = 3
        for i in range(4, 46):
            result[i] = result[i-2] + result[i-1]
        
        return result[n]