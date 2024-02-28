class Solution:
    def summaryRanges(self, nums: List[int]) -> List[str]:
        # keep track of start and end using pointers
        # add results as we go
        start = 0
        end = 0
        res = []
        for i in range(len(nums)):
            left = nums[i]
            right = nums[i+1] if i +1 < len(nums) else None
            # check to see if the difference is one
            if right and right - left == 1:
                end+=1
            else:
                res.append("{}".format(nums[end]) if start == end else "{}->{}".format(nums[start],nums[end]))
                start = i +1
                end = i +1
        return res
            
