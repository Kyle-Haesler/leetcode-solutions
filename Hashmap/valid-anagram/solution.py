class Solution:
    def isAnagram(self, s: str, t: str) -> bool:
        # edge case - if lengths are not the same, return False
        if len(s) != len(t):
            return False
        # make letter counts for each
        smap = {}
        for char in s:
            smap[char] = smap.get(char,0) + 1
        tmap = {}
        for char in t:
            tmap[char] = tmap.get(char,0)+1
        for char in s:
            if char not in tmap:
                return False
            if smap[char] != tmap[char]:
                return False
        return True