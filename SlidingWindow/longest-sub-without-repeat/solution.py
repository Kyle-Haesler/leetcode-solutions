class Solution:
    def lengthOfLongestSubstring(self, s: str) -> int:
        if len(s) < 2:
            return len(s)
        highest = 0
        res = []
        for i in range(len(s)):
            while s[i] in res:
                del res[0]
            res.append(s[i])
            highest = max(highest, len(res))
        return max(highest, len(res))