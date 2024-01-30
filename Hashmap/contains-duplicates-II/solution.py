class Solution:
    def containsNearbyDuplicate(self, nums: List[int], k: int) -> bool:
        score = dict()
        for i in range(len(nums)):
            if nums[i] in score:
                if abs(i - score[nums[i]]) <= k:
                    return True
                else:
                    score[nums[i]] = i
            else:
                score[nums[i]] = i
        return False