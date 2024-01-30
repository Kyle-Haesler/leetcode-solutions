/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function (head) {
  let pone = head;
  if (!head || !head.next) {
    return false;
  }
  let ptwo = head.next;
  while (pone !== ptwo) {
    pone = pone.next;
    if (!ptwo || !ptwo.next || !ptwo.next.next) {
      return false;
    }
    ptwo = ptwo.next.next;
  }
  return true;
};
