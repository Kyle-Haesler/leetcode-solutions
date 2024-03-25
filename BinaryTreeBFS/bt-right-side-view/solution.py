# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def rightSideView(self, root: Optional[TreeNode]) -> List[int]:
        if not root:
            return []
        queue = [root]
        res = []
        
        while len(queue) > 0:
            levelSize = len(queue)
            if levelSize == 1:
                for i in range(levelSize):
                    node = queue.pop()
                    res.append(node.val)
                    if node.right:
                        queue.insert(0, node.right)
                    if node.left:
                        queue.insert(0, node.left)
            if levelSize > 1:
                res.append(queue[len(queue)-1].val)
                for i in range(levelSize):
                    node = queue.pop()
                    if node.right:
                        queue.insert(0,node.right)
                    if node.left:
                        queue.insert(0, node.left)
        return res