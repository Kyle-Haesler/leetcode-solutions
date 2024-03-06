# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def getKth(self, curr, k):
        while curr and k > 0:
            curr = curr.next
            k-=1
        return curr
    def reverseKGroup(self, head: Optional[ListNode], k: int) -> Optional[ListNode]:
        dummy = ListNode(0,head)
        groupPrev = dummy
        while True:
            kth = self.getKth(groupPrev, k)
            if not kth:
                break
            groupNext = kth.next
            prev = kth.next
            curr = groupPrev.next
            nextr = None
            while curr != groupNext:
                nextr = curr.next
                curr.next = prev
                prev = curr
                curr = nextr
            temp = groupPrev.next
            groupPrev.next = kth
            groupPrev = temp
        return dummy.next

        