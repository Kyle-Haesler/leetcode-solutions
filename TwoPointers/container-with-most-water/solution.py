class Solution:
    def maxArea(self, height: List[int]) -> int:
        area = 0
        i = 0
        j = len(height) -1
        while i < j:
            temp = min(height[i], height[j]) * (j-i)
            area = max(area,temp)
            if height[i] > height[j]:
                j -= 1
            else:
                i +=1
        return area