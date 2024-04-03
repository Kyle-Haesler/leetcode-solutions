# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def levelOrder(self, root: Optional[TreeNode]) -> List[List[int]]:
        if not root:
            return []
        queue = [root]
        res = []
        while len(queue) > 0:
            levelSize = len(queue)
            mini = []
            for i in range(levelSize):
                node = queue.pop()
                mini.append(node.val)
                if node.left:
                    queue.insert(0, node.left)
                if node.right:
                    queue.insert(0, node.right)
            res.append(mini)
        return res