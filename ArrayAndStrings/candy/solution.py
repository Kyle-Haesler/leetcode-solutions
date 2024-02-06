class Solution:
    def candy(self, ratings: List[int]) -> int:
        n = len(ratings)
        total_candy = n
        i = 1
        while i < n:
            if ratings[i] == ratings[i-1]:
                i +=1
                continue
            peak = 0
            while i < n and ratings[i] > ratings[i-1]:
                peak +=1
                total_candy += peak
                i +=1
            if i == n:
                return total_candy
            valley = 0
            while i < n and ratings[i] < ratings[i-1]:
                valley += 1
                total_candy += valley
                i +=1
            total_candy -= min(peak,valley)
        return total_candy