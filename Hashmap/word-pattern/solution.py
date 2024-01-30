class Solution:
    def wordPattern(self, pattern: str, s: str) -> bool:
        pat = list(pattern)
        sat = s.split(" ")
        print(pat, sat)
        if len(pat) != len(sat):
            return False
        pmap = dict()
        smap = dict()
        for i in range(len(pat)):
            pchar = pat[i]
            schar = sat[i]
            if pchar in pmap:
                if pmap[pchar] != schar:
                    return False
            else:
                pmap[pchar] = schar
            if schar in smap:
                if smap[schar] != pchar:
                    return False
            else:
                smap[schar] = pchar
        
        return True