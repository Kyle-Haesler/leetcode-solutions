class Solution:
    def isAnagram(self, s: str, t: str) -> bool:
        if len(s) != len(t):
            return False
        smap = dict()
        tmap = dict()
        for char in s:
            if char in smap:
                smap[char] = smap[char] + 1
            else:
                smap[char] = 1
        for char in t:
            if char in tmap:
                tmap[char] = tmap[char] + 1
            else:
                tmap[char] = 1
        for (key, value) in smap.items():
            if key not in tmap:
                return False
            else:
                if tmap[key] != value:
                    return False
                
        return True
            