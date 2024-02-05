class Solution:
    def productExceptSelf(self, nums: List[int]) -> List[int]:
        res = []
        start1 = 1
        for i in range(len(nums)):
            res.append(start1)
            start1 = start1 * nums[i]
        start2 = 1
        i = len(nums) -1

        while i >= 0:
            res[i] = start2 * res[i]
            start2 = start2 * nums[i]
            i -= 1
        return res