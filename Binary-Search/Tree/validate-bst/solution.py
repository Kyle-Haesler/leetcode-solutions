# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def isValidBST(self, root: Optional[TreeNode]) -> bool:
        def inOrder(node,values=[]):
            if not node:
                return values
            if node.left:
                values = inOrder(node.left,values)
            values.append(node.val)
            if node.right:
                values = inOrder(node.right,values)
            return values
        arr = inOrder(root)
        for i in range(1, len(arr)):
            if arr[i] <= arr[i-1]:
                return False
        return True