# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def sortedArrayToBST(self, nums: List[int], left: int = 0, right: int = None) -> Optional[TreeNode]:
        if right == None:
            right = len(nums) -1
        if left > right:
            return None

        mid = (left + right) // 2
        root = TreeNode(nums[mid])
        root.left = self.sortedArrayToBST(nums, left, mid -1)
        root.right = self.sortedArrayToBST(nums, mid + 1, right)

        return root
        