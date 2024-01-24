class Solution:
    def addBinary(self, a: str, b: str) -> str:
        i = len(a) - 1
        j = len(b) - 1
        res = ""
        carry = 0
        while i >= 0 or j >= 0:
            total = (int(a[i]) if i >= 0 else 0) + (int(b[j]) if j >= 0 else 0) + carry
            res = str(total %2) + res
            carry = 1 if total > 1 else 0
            i -= 1
            j -= 1
        if carry:
            res = "1" + res
        return res