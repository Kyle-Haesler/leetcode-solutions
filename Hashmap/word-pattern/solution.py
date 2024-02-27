class Solution:
    def wordPattern(self, pattern: str, s: str) -> bool:
        # convert s to list 
        s = s.split(" ")
        # edge case - if lengths are not the same it is false
        if len(s) != len(pattern):
            return False
        # double linkage map to check both ways
        pmap = {}
        smap = {}
        for i in range(len(pattern)):
            pchar = pattern[i]
            schar = s[i]

            if pchar in pmap:
                if pmap.get(pchar) != schar:
                    return False
            else:
                pmap[pchar]=schar
            
            if schar in smap:
                if smap.get(schar) != pchar:
                    return False
            else:
                smap[schar]=pchar
        return True