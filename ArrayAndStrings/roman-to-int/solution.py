class Solution:
    def romanToInt(self, s: str) -> int:
        result = dict()
        result["I"] = 1
        result["V"] = 5
        result["X"] = 10
        result["L"] = 50
        result["C"] = 100
        result["D"] = 500
        result["M"] = 1000
        total = 0
        for i in range(len(s) - 1):
            curr = s[i]
            nex = s[i+1]
            if result[curr] < result[nex]:
                total -= result[curr]
            else:
                total += result[curr]
        return total + result[s[len(s) - 1]]
     