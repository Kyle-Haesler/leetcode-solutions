class Solution:
    def isHappy(self, n: int) -> bool:
        sum_set = set()
        while n != 1:
            strnum = str(n)
            total = 0
            for num in strnum:
                total = total + (int(num) * int(num))
            if total in sum_set:
                return False
            else:
                sum_set.add(total)
            n = total
        return True
