class Solution:
    
    
    def rotate(self, nums: List[int], k: int) -> None:
        """
        Do not return anything, modify nums in-place instead.
        """
        k = k % len(nums)

        self.revNums(nums, 0, len(nums) -1)
        self.revNums(nums, 0, k-1)
        self.revNums(nums, k, len(nums) -1)
    def revNums(self, nums, start, end):
        while start < end:
            [nums[start], nums[end]] = [nums[end], nums[start]]
            start += 1
            end -= 1