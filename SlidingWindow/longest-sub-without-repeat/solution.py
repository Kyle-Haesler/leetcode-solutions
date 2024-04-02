class Solution:
    def lengthOfLongestSubstring(self, s: str) -> int:
        highest = 0
        result = []
        for i in range(len(s)):
            while s[i] in result:
                del result[0]
            result.append(s[i])
            highest = max(highest, len(result))
        return highest