/**
 * // Definition for a Node.
 * function Node(val, next, random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */

/**
 * @param {Node} head
 * @return {Node}
 */
var copyRandomList = function (head) {
  const oldToCopy = new Map([[null, null]]);
  let current = head;
  while (current) {
    const copy = new Node(current.val, null, null);
    oldToCopy.set(current, copy);
    current = current.next;
  }
  current = head;
  while (current) {
    const copy = oldToCopy.get(current);
    copy.next = oldToCopy.get(current.next);
    copy.random = oldToCopy.get(current.random);
    current = current.next;
  }
  return oldToCopy.get(head);
};
