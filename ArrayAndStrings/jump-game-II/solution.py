class Solution:
    def jump(self, nums: List[int]) -> int:
        target = len(nums) - 1
        count = 0
        i = 0
        while target > 0:
            if nums[i] + i >= target and nums[i] != 0:
                target = i
                count +=1
                i = 0
            else:
                i +=1
        return count