# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def removeNthFromEnd(self, head: Optional[ListNode], n: int) -> Optional[ListNode]:
        if not head:
            return None
        length = 0
        current = head
        while current:
            current = current.next
            length +=1
        toRemove = length - n + 1
        if toRemove == 1:
            head = head.next
            return head
        prev = None
        current = head
        counter = 1
        while current:
            if counter == toRemove:
                prev.next = current.next
            prev = current
            current = current.next
            counter +=1
        return head
        