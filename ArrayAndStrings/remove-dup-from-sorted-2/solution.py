class Solution:
    def removeDuplicates(self, nums: List[int]) -> int:
        key = dict()
        for i in range(len(nums)):
            if nums[i] in key:
                key[nums[i]].append(i)
            else:
                key[nums[i]] = [i]
        count = 0
        for (key, indexes) in key.items():
            while len(indexes) > 2:
                indexRem = indexes.pop()
                nums[indexRem] = float("inf")
                count +=1
        nums.sort()
        
        i = count
        while i >=1:
            nums.pop()
            i-=1
        