# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def partition(self, head: Optional[ListNode], x: int) -> Optional[ListNode]:
        start1 = ListNode()
        start2 = ListNode()
        p1 = start1
        p2 = start2
        p = head
        while p:
            if p.val < x:
                p1.next = p
                p = p.next
                p1.next.next = None
                p1 = p1.next
            else:
                p2.next = p
                p = p.next
                p2.next.next = None
                p2 = p2.next
        p1.next = start2.next
        return start1.next