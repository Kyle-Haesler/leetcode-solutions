# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class BSTIterator:

    def __init__(self, root: Optional[TreeNode]):
        def iot(node, values = []):
            if not node:
                return values
            if node.left:
                iot(node.left,values)
            values.append(node.val)
            if node.right:
                iot(node.right, values)
            return values
        self.values = iot(root)    
        self.pointer = -float("inf")    

    def next(self) -> int:
        if self.pointer == -float("inf"):
            self.pointer = 0
        else:
            self.pointer+=1
        return self.values[self.pointer]

    def hasNext(self) -> bool:
        if self.pointer == -float("inf"):
            return True
        if self.pointer + 1 < len(self.values):
            return True
        return False


# Your BSTIterator object will be instantiated and called as such:
# obj = BSTIterator(root)
# param_1 = obj.next()
# param_2 = obj.hasNext()