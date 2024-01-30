class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        diff = dict()
        for num in nums:
            sub = target - num
            if sub in diff:
                diff[sub] = diff[sub] + 1
            else:
                diff[sub] = 1
        result = []
        for i in range(len(nums)):
            if(nums[i] in diff):
                if target - nums[i] == nums[i]:
                    if diff[nums[i]] > 1:
                        result.append(i)
                else:
                    result.append(i)
        return result