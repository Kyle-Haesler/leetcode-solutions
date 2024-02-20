class Solution:
    def minWindow(self, s: str, t: str) -> str:
        lmap = {}
        for char in t:
            lmap[char] = lmap.get(char,0) + 1
        left = 0
        right = 0
        minlen = float("inf")
        count = len(lmap)
        minWin = ""
        while right < len(s):
            rLetter = s[right]
            if rLetter in lmap:
                lmap[rLetter] -= 1
                if lmap[rLetter] == 0:
                    count -=1
            right +=1
            while count == 0:
                if right - left < minlen:
                    minlen = right - left
                    minWin = s[left:right]
                lLetter = s[left]
                if lLetter in lmap:
                    lmap[lLetter] += 1
                    if(lmap[lLetter] > 0):
                        count +=1
                left +=1
        return minWin
