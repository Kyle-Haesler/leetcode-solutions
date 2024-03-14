# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def rotateRight(self, head: Optional[ListNode], k: int) -> Optional[ListNode]:
        if not head or not head.next:
            return head
        length = 0
        lastEl = None
        curr = head
        while curr:
            lastEl = curr
            curr = curr.next
            length +=1
        if k % length == 0:
            return head
        indexToRemove = length - (k % length)
        counter = 1
        curr = head
        while counter < indexToRemove:
            curr = curr.next
            counter+=1
        backHalf = curr.next
        frontHalf = head
        curr.next = None
        head = backHalf
        lastEl.next = frontHalf
        return head
