# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def kthSmallest(self, root: Optional[TreeNode], k: int) -> int:
        def iot(root, values = []):
            if not root:
                return values
            if root.left:
                values = iot(root.left,values)
            values.append(root.val)
            if root.right:
                values = iot(root.right,values)
            return values
        values = iot(root)
        index = 1
        for val in values:
            if index == k:
                return val
            index+=1
        