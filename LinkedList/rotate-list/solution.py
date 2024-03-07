# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def rotateRight(self, head: Optional[ListNode], k: int) -> Optional[ListNode]:
        # edge cases
        if not head or not head.next:
            return head
        length = 1
        current = head
        while current.next:
            current = current.next
            length+=1
        # edge case 
        if k % length == 0:
            return head
        
        current.next = head

        shift = length - k % length
        count = 1
        prev = ListNode()
        while count <= shift:
            prev = head
            head = head.next
            count+=1
        prev.next = None
        return head
