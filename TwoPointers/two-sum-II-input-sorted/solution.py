class Solution:
    def twoSum(self, numbers: List[int], target: int) -> List[int]:
        result_map = dict()
        for num in numbers:
            result_map[target-num] = num
        result = []
        reverse = numbers[::-1]
        for i in range(len(numbers)):
            if numbers[i] in result_map:
                result.append(i+1)
                
                result.append(len(numbers) - reverse.index(result_map[numbers[i]]))
                break
        return result