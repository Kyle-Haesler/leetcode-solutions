class Solution:
    def spiralOrder(self, matrix: List[List[int]]) -> List[int]:
        # handle edge cases
        if len(matrix) == 0 or len(matrix[0]) == 0:
            return []
        left = 0
        right = len(matrix[0]) - 1
        top = 0
        bottom = len(matrix) - 1
        res = []
        while left <= right and top <= bottom:
            #rip the first row
            for col in range(left, right +1):
                res.append(matrix[top][col])
            # move the top down one
            top +=1
            # move down along the right side
            for row in range(top, bottom + 1):
                res.append(matrix[row][right])
            # move the right to the left one
            right -=1
            # make sure the bottom is below the top
            if top <= bottom:
                # rip the bottom row
                for col in range(right, left - 1, -1):
                    res.append(matrix[bottom][col])
                #move the bottom up one because we are done with it
                bottom -=1
            # make sure the left is <= right
            if left <= right:
                # rip the left side
                for row in range(bottom, top -1,-1):
                    res.append(matrix[row][left])
                left+=1
                
        return res