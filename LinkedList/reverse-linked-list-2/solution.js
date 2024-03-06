/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */
var reverseBetween = function (head, left, right) {
  // edge cases: list is empy, list of one, left = right
  if (!head || !head.next || left === right) {
    return head;
  }
  // step one, get node at position left and previous node
  let node1 = head;
  let prev1 = null;
  for (let i = 1; i < left; i++) {
    prev1 = node1;
    node1 = node1.next;
  }

  // step 2, get node at position right and next node
  let node2 = head;
  let next2 = null;
  for (let i = 1; i < right; i++) {
    node2 = node2.next;
  }
  next2 = node2.next;

  // step 3, make the cuts
  if (prev1) {
    prev1.next = null;
  }
  if (node2) {
    node2.next = null;
  }
  // reverse mid section
  let curr = node1,
    next = null,
    prev = null;
  while (curr) {
    next = curr.next;
    curr.next = prev;
    prev = curr;
    curr = next;
  }
  // at this juncture, prev is the reversed list and node1 is the tail so we need to attach
  if (prev1) {
    prev1.next = prev;
  }
  node1.next = next2;

  return prev1 ? head : prev;
};
