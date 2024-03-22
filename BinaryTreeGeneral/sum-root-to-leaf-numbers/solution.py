# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def helper(self, node, currentSum):
        if not node:
            return 0
        currentSum = currentSum * 10 + node.val
        if not node.left and not node.right:
            return currentSum
        return self.helper(node.left, currentSum) + self.helper(node.right, currentSum)
    
    def sumNumbers(self, root: Optional[TreeNode]) -> int:
        return self.helper(root,0)
        