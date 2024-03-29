# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def sortList(self, head: Optional[ListNode]) -> Optional[ListNode]:
        if not head:
            return head
        listVals = []
        curr = head
        while curr:
            listVals.append(curr.val)
            curr = curr.next
        listVals.sort()
        result = ListNode()
        curr = result
        for v in listVals:
            newNode = ListNode(v)
            curr.next = newNode
            curr = newNode
        return result.next