/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
  // first edge case, if the list is empty, return null
  if (!head) return null;
  // step 1: calculate the length of the linked list
  let current = head;
  let length = 0;
  while (current) {
    current = current.next;
    length++;
  }
  // step 2: calculate the node to be removed
  const toRemove = length - n + 1;
  // step 3: edge case of removing the head
  if (toRemove === 1) {
    head = head.next;
    return head;
  }
  // step 4: remove the appropriate node
  let counter = 1;
  current = head;
  let prev = null;
  while (current) {
    if (counter === toRemove) {
      prev.next = current.next;
    }
    prev = current;
    current = current.next;
    counter++;
  }
  return head;
};
