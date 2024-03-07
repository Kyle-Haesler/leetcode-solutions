# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def deleteDuplicates(self, head: Optional[ListNode]) -> Optional[ListNode]:
        slow = ListNode()
        slow.next = head
        fast = head
        dummy = slow
        while fast and fast.next:
            if fast.next.val == fast.val:
                value = fast.val
                while fast and fast.val == value:
                    fast = fast.next
                slow.next = fast
            else:
                fast = fast.next
                slow = slow.next
        return dummy.next