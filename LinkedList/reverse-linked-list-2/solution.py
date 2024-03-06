# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def reverseBetween(self, head: Optional[ListNode], left: int, right: int) -> Optional[ListNode]:
        # edge cases, list is blank, list has 1 item or left === right just return the list
        if not head or not head.next or left == right:
            return head
        # step 1, locate left and the previous to left, we will call these node1 and prev1 
        node1 = head
        prev1 = None
        for i in range(1, left):
            prev1 = node1
            node1 = node1.next
        # step 2, locate right and the next pointer of right, we will call these node2 and next2
        node2 = head
        next2 = None
        for i in range(1, right):
            node2 = node2.next
        next2 = node2.next
        
        # step 3, sever the ties! so prev1.next should be None and node2.next should be none if they exist
        if prev1:
            prev1.next = None
        if node2:
            node2.next = None
        
        # reverse the middle section, the middle section head is node1
        curr = node1
        prev = None
        nextr = None
        while curr:
            nextr = curr.next
            curr.next = prev
            prev = curr
            curr = nextr
        
        # alrighty so now prev is the head of the middle section and node1 = tail, time to attach
        if prev1:
            prev1.next = prev
        if node1:
            node1.next = next2
        return head if prev1 else prev
        
        
        