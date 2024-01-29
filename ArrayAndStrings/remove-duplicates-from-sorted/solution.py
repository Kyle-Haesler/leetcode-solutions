class Solution:
    def removeDuplicates(self, nums: List[int]) -> int:
        count = 0
        for i in range(len(nums)-1):
            if nums[i] == nums[i+1]:
                nums[i] = float("inf")
                count += 1
        nums.sort()
        for i in range(1, count + 1):
            nums.pop()