class Solution:
    def minMutation(self, start: str, end: str, bank: List[str]) -> int:
        queue = [[start,0]]
        mutations = set(bank)
        while len(queue) > 0:
            [c,s] = queue.pop()
            if c == end:
                return s
            for i in range(len(c)):
                for ch in "ACTG":
                    m = c[0:i] + ch + c[i+1:]
                    if m in mutations:
                        mutations.remove(m)
                        queue.insert(0,[m,s+1])
        return -1