import re
class Solution:
    def reverseWords(self, s: str) -> str:
        s = s.strip()
        arr = re.split(r'\s+',s)
        arr.reverse()
        return " ".join(arr)