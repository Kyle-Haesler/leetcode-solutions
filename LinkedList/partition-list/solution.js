/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} x
 * @return {ListNode}
 */
var partition = function (head, x) {
  if (!head || !head.next) return head;
  const smallList = new ListNode();
  let small = smallList;
  const bigList = new ListNode();
  let big = bigList;
  let curr = head;
  let connector = null;
  while (curr) {
    if (curr.val < x) {
      small.next = new ListNode(curr.val);
      small = small.next;
      connector = small;
    } else {
      big.next = new ListNode(curr.val);
      big = big.next;
    }
    curr = curr.next;
  }

  if (!connector) return bigList.next;
  connector.next = bigList.next;
  return smallList.next;
};
