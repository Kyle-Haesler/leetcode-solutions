class Solution:
    def longestCommonPrefix(self, strs: List[str]) -> str:
        result = ""
        for i in range(1, len(strs[0]) + 1):
            sub = strs[0][0:i]
            legit = True
            j = 1
            while j < len(strs):
                if sub != strs[j][0:i]:
                    legit = False
                j += 1
            if legit:
                result = sub
        return result