class Solution:
    def removeDuplicates(self, nums: List[int]) -> int:
        i = 0
        while i < len(nums) - 1:
            if nums[i] == nums[i+1]:
                nums.remove(nums[i])
                i-=1
            i +=1