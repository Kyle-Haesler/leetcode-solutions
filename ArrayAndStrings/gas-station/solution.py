class Solution:
    def canCompleteCircuit(self, gas: List[int], cost: List[int]) -> int:
        total_gas = 0
        total_cost = 0
        leftOver = []
        for i in range(len(gas)):
            total_gas += gas[i]
            total_cost += cost[i]
            leftOver.append(gas[i] - cost[i])
        if total_gas < total_cost:
            return -1
        start = 0
        current_gas = 0
        print(leftOver)
        for i in range(len(leftOver)):
            current_gas += leftOver[i]
            if current_gas < 0:
                current_gas = 0
                start = i + 1
        return start
        