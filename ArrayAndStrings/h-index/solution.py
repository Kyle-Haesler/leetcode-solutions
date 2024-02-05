class Solution:
    def hIndex(self, citations: List[int]) -> int:
        bar = len(citations)
        while bar >= 1:
            count = 0
            for i in range(len(citations)):
                if citations[i] >= bar:
                    count +=1
            if count >= bar:
                return bar
            bar -=1
        return 0
            