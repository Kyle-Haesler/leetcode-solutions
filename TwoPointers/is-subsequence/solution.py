class Solution:
    def isSubsequence(self, s: str, t: str) -> bool:
        pon1 = 0
        pon2 = 0
        while pon1 < len(s) and pon2 < len(t):
            if s[pon1] == t[pon2]:
                pon1 += 1
                pon2 += 1
            else:
                pon2 += 1
        print(pon1)
        if pon1 == len(s):
            return True
        else:
            return False