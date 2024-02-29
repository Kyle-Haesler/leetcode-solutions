class Solution:
    def merge(self, intervals: List[List[int]]) -> List[List[int]]:
        # gotta sort this thang
        intervals.sort()
        res = [intervals[0]]
        res_p = 0
        for i in range(1, len(intervals)):
            if res[res_p][1] >= intervals[i][0]:
                res[res_p][0] = min(res[res_p][0], intervals[i][0])
                res[res_p][1] = max(res[res_p][1], intervals[i][1])
            else:
                res.append(intervals[i])
                res_p +=1
        return res