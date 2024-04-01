class Solution:
    def rob(self, nums: List[int]) -> int:
        if len(nums) == 1:
            return nums[0]
        if len(nums) == 0:
            return 0
        dp = [0 for w in nums]
        dp[0] = nums[0]
        dp[1] = max(nums[0],nums[1])

        for i in range(2, len(nums)):
            dp[i] = max(nums[i] + dp[i-2], dp[i-1])
        return dp[len(dp)-1]
        