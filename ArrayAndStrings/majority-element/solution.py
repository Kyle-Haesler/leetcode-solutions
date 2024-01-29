class Solution:
    def majorityElement(self, nums: List[int]) -> int:
        maj = len(nums) / 2
        result = dict()
        for i in range(len(nums)):
            if nums[i] in result:
                result[nums[i]] = result[nums[i]] + 1
            else:
                result[nums[i]] = 1
        for (key, value) in result.items():
            if value > maj:
                return key