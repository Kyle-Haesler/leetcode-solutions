class Solution:
    def longestCommonPrefix(self, strs: List[str]) -> str:
        result = ""
        if len(strs) == 0:
            return result
        if len(strs) == 1:
            return strs[0]
        first = strs[0]
        i = len(first)
        while i >= 0:
            sub = first[0:i]
            match = False
            for j in range(len(strs)):
                if strs[j].find(sub) != 0:
                    match = False
                    break
                else:
                    match = True
            if match:
                result = sub
                return result
            i -=1
        return ""