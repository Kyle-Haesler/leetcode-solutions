class Solution:
    def lengthOfLongestSubstring(self, s: str) -> int:
        left = 0
        right = 0
        seen = {}
        highest = 0
        while right < len(s):
            rLetter = s[right]
            seen[rLetter] = seen.get(rLetter, 0) + 1
            while seen[rLetter] > 1:
                lLetter = s[left]
                seen[lLetter] = seen[lLetter] - 1
                left +=1
            highest = max(highest, right - left + 1)
            right +=1
            
        return highest