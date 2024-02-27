class Solution:
    def isHappy(self, n: int) -> bool:
        # edge case, n is already 1
        if n == 1:
            return True
        # tracker will keep track of numbers we have already seen, we will use this to break the loop
        tracker = set()
        while n != 1:
            n = str(n)
            total = 0
            for j in n:
                total += int(j) **2
            if total in tracker:
                return False
            tracker.add(total)
            n = total

        return True