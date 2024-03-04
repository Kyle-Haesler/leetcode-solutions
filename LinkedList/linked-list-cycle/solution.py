# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, x):
#         self.val = x
#         self.next = None

class Solution:
    def hasCycle(self, head: Optional[ListNode]) -> bool:
        if not head:
            return False
        tort = head
        rabbit = head
        while rabbit and rabbit.next:
            tort = tort.next
            rabbit = rabbit.next.next
            if tort == rabbit:
                return True
        return False