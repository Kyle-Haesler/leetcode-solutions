class Solution:
    def isPalindrome(self, s: str) -> bool:
        s = list(s.lower())
        filtered = list(filter(lambda char: char.isalnum(), s))
        i = 0
        j = len(filtered) -1
        while i < j:
            if filtered[i] != filtered[j]:
                return False
            i +=1
            j -=1
        return True
