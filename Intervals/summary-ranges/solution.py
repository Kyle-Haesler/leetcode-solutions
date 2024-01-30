class Solution:
    def summaryRanges(self, nums: List[int]) -> List[str]:
        start = 0
        end = 0
        result = []
        for i in range(len(nums)):
            left = nums[i]
            right = nums[i+1] if i + 1 < len(nums) else float("inf")
            if right - left == 1:
                end +=1
            else:
                if start == end:
                    result.append(str(left))
                    start += 1
                    end += 1
                else:
                    result.append("%s->%s" % (str(nums[start]), str(nums[end])))
                    start = end + 1
                    end +=1
        return result