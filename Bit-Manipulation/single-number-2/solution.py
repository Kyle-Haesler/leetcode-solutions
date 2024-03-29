class Solution:
    def singleNumber(self, nums: List[int]) -> int:
        score = {}
        for num in nums:
            score[num] = score[num] + 1 if num in score else 1
        for (key,value) in score.items():
            if value < 3:
                return key