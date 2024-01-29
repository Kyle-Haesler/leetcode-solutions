class Solution:
    def isPalindrome(self, s: str) -> bool:
        if len(s) == 1:
            return True
        clean = []
        for i in range(len(s)):
            if s[i].isalnum():
                clean.append(s[i].lower())
        i = 0
        j = len(clean) - 1
        while i <= j:
            if clean[i] != clean[j]:
                return False
            i += 1
            j -= 1
        
        return True
