/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function (head) {
  // two pointer system
  let slow = new ListNode();
  slow.next = head;
  let fast = head;
  let dummy = slow;
  while (fast && fast.next) {
    if (fast.next.val === fast.val) {
      const value = fast.val;
      while (fast && fast.val === value) {
        fast = fast.next;
      }
      slow.next = fast;
    } else {
      fast = fast.next;
      slow = slow.next;
    }
  }
  return dummy.next;
};
