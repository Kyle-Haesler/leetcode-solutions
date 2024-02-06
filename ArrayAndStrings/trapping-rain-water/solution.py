class Solution:
    def trap(self, height: List[int]) -> int:
        total = 0
        i = 0
        j = len(height) -1
        while i < j:
            if height[i] < height[j]:
                k = i
                while k <= j and height[k] <= height[i]:
                    total += height[i] - height[k]
                    k +=1
                i = k
            else:
                k = j
                while k >= i and height[k] <= height[j]:
                    total += height[j] - height[k]
                    k -=1
                j = k
        return total