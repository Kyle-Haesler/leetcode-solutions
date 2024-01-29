class Solution:
    def maxProfit(self, prices: List[int]) -> int:
        cheapest = float("inf")
        maxp = 0
        for i in range(len(prices)):
            if prices[i] < cheapest:
                cheapest = prices[i]
            if prices[i] - cheapest > maxp:
                maxp = prices[i] - cheapest
        return maxp