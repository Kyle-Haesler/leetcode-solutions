class Solution:
    def mySqrt(self, x: int) -> int:
        if x < 2:
            return x

        left = 1
        right = x // 2
        while left <= right:
            mid = (left + right) // 2
            squared = mid * mid
            if squared == x:
                return mid
            if squared > x:
                right = mid - 1
            if squared < x:
                left = mid + 1
        return right