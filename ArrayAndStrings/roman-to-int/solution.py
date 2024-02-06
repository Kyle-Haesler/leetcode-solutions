class Solution:
    def romanToInt(self, s: str) -> int:
        trans = {
            "I": 1,
            "V": 5,
            "X": 10,
            "L": 50,
            "C": 100,
            "D": 500,
            "M": 1000
        }
        total = 0
        for i in range(len(s)):
            left = s[i]
            right = s[i+1] if i + 1 < len(s) else False
            if right and trans[left] < trans[right]:
                total -= trans[left]
            else:
                total += trans[left]
        return total