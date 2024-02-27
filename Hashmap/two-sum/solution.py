class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        res = {}
        for i in range(len(nums)):
            difference = target  - nums[i]
            if nums[i] in res:
                if res.get(nums[i])["index"] != i:
                    return [res.get(nums[i])["index"], i]

            else:
                res[difference] = dict(number = nums[i], index = i)
        