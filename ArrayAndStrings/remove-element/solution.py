class Solution:
    def removeElement(self, nums: List[int], val: int) -> int:
        count = 0
        for i in range(len(nums)):
            if nums[i] == val:
                nums[i] = float("inf")
                count += 1
        nums.sort()
        for b in range(count):
            nums.pop()