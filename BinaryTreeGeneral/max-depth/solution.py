# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def maxDepth(self, root: Optional[TreeNode], count = 0) -> int:
        if(not root):
            return count
        count +=1
        left = self.maxDepth(root.left, count)
        right = self.maxDepth(root.right, count)
        return max(left, right)