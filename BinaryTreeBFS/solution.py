# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def averageOfLevels(self, root: Optional[TreeNode]) -> List[float]:
        result = []
        queue = []
        queue.insert(0, root)
        while len(queue) > 0:
            stack_len = len(queue)
            total = 0
            i = 0
            while i < stack_len:
                node = queue.pop()
                total += node.val
                if node.left:
                    queue.insert(0, node.left)
                if node.right:
                    queue.insert(0, node.right)
                i += 1
            result.append(total / stack_len)
        return result

            