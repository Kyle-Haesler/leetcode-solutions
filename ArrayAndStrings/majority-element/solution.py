class Solution:
    def majorityElement(self, nums: List[int]) -> int:
        if len(nums) == 1:
            return nums[0]
        key = dict()
        for num in nums:
            if num in key:
                key[num] +=1
                if key[num] > len(nums) / 2:
                    return num
            else:
                key[num] = 1