class Solution:
    def findMinArrowShots(self, points: List[List[int]]) -> int:
        points = sorted(points, key = lambda a: a[1])
        highest = points[0][1]
        arrows = 1
        for i in range(len(points)):
            left = points[i]
            right = points[i+1] if i + 1 < len(points) else None
            if right and highest < right[0]:
                arrows +=1
                highest = right[1]
        return arrows