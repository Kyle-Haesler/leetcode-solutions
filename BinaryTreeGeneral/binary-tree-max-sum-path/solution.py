# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def maxPathSum(self, root: Optional[TreeNode]) -> int:
        highest = -float("inf")
        def dfs(root):
            nonlocal highest
            if not root:
                return 0
            left = max(0, dfs(root.left))
            right = max(0, dfs(root.right))
            curMax = root.val + left + right
            highest = max(highest, curMax)
            return root.val + max(left,right)
        dfs(root)
        return highest
