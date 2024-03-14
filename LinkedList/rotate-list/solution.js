/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function (head, k) {
  if (!head || k === 0) return head;
  let length = 0;
  let curr = head;
  let lastEl = null;

  while (curr) {
    length++;
    lastEl = curr;
    curr = curr.next;
  }
  if (length === k || length === 1 || k % length === 0) return head;
  const indexToCut = length - (k % length);

  curr = head;

  let counter = 1;
  while (counter < indexToCut) {
    curr = curr.next;
    counter++;
  }
  const backHalf = curr.next;
  const frontHalf = head;
  // chop it off
  curr.next = null;
  // attach
  head = backHalf;
  lastEl.next = frontHalf;

  return head;
};
