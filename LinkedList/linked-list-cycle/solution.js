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
  if (!head) return false;
  let tort = head;
  let rabbit = head;
  while (rabbit && rabbit.next) {
    tort = tort.next;
    rabbit = rabbit.next.next;
    if (tort === rabbit) {
      return true;
    }
  }
  return false;
};
