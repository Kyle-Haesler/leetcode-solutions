# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, x):
#         self.val = x
#         self.next = None

class Solution:
    def hasCycle(self, head: Optional[ListNode]) -> bool:
        pone = head
        if not head or not head.next:
            return False
        ptwo = head.next
        while pone != ptwo:
            pone = pone.next
            if not ptwo or not ptwo.next or not ptwo.next.next:
                return False
            ptwo = ptwo.next.next
        return True