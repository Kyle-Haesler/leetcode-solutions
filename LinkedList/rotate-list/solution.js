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
  // edge cases: head is null or only one item
  if (!head || !head.next) return head;
  let length = 1;
  let current = head;
  // simple count here
  while (current.next) {
    current = current.next;
    length++;
  }
  // edge case: k  % length === 0 meaning its a multiple so we don't have to do anything
  if (k % length === 0) return head;
  // make it a circle
  current.next = head;

  const shifts = length - (k % length);
  let count = 1;
  let prev = null;
  while (count <= shifts) {
    prev = head;
    head = head.next;
    count++;
  }
  prev.next = null;
  return head;
};
