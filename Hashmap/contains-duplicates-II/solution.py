class Solution:
    def containsNearbyDuplicate(self, nums: List[int], k: int) -> bool:
        # compare as we go through a dict
        master = {}
        for i in range(len(nums)):
            if nums[i] in master:
                if abs(master[nums[i]] - i) <= k:
                    return True
                else:
                    master[nums[i]] = i
            else:
                master[nums[i]] = i
        return False