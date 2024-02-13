class Solution:
    def lengthOfLongestSubstring(self, s: str) -> int:
        if len(s) < 2:
            return len(s)
        storage = {}
        front = 0
        back = 0
        maxLength = 0
        while front < len(s):
            exists = storage[s[front]] if s[front] in storage else None
            if exists != None and back <= exists:
                back = exists + 1
            storage[s[front]] = front
            maxLength = max(maxLength, front-back + 1)
            front +=1
        return maxLength
            