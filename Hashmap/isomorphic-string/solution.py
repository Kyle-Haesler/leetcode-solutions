class Solution:
    def isIsomorphic(self, s: str, t: str) -> bool:
        smap = {}
        tmap = {}
        for i in range(len(s)):
            schar = s[i]
            tchar = t[i]

            if schar in smap:
                if smap.get(schar) != tchar:
                    return False
            else:
                smap[schar] = tchar
            
            if tchar in tmap:
                if tmap.get(tchar) != schar:
                    return False
            else:
                tmap[tchar] = schar
        return True