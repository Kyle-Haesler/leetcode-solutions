class Solution:
    def longestConsecutive(self, nums: List[int]) -> int:
        # edge cases
        if len(nums) == 0:
            return 0
        if len(nums) ==1:
            return 1
        nums.sort()
        count = 1
        res = []
        for i in range(len(nums)-1):
            if nums[i+1] - nums[i] == 1:
                count+=1
            elif nums[i+1] == nums[i]:
                continue
            else:
                res.append(count)
                count = 1
        res.append(count)
        res.sort()
        return res[len(res)-1]