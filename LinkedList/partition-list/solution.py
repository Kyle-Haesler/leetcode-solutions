# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def partition(self, head: Optional[ListNode], x: int) -> Optional[ListNode]:
        if not head or not head.next:
            return head
        smallList = ListNode()
        small = smallList
        bigList = ListNode()
        big = bigList
        curr = head
        connector = None
        while curr:
            if curr.val < x:
                small.next = ListNode(curr.val)
                small = small.next
                connector = small
            else:
                big.next = ListNode(curr.val)
                big = big.next
            curr = curr.next
        if not connector:
            return bigList.next
        connector.next = bigList.next
        return smallList.next
