class Solution:
    def singleNumber(self, nums: List[int]) -> int:
        result = dict()
        for i in nums:
            if i in result:
                result[i] = result[i] + 1
            else:
                result[i] = 1
        for (key, value) in result.items():
            if value < 2:
                return key