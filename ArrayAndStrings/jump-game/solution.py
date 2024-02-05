class Solution:
    def canJump(self, nums: List[int]) -> bool:
        target = len(nums) -1
        initial = target
        i = target - 1

        while i >= 0:
            if nums[i] + i >= target and nums[i] != 0:
                target = i
            i -=1
        if target == 0:
            return True
        else:
            return False