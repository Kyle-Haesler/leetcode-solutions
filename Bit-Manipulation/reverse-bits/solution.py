class Solution:
    def reverseBits(self, n: int) -> int:
        result = 0
        for i in range(32):
            lastBit = n & 1
            revBit = lastBit << (31-i)
            result = result | revBit
            n = n >> 1
        return result & 0xFFFFFFFF