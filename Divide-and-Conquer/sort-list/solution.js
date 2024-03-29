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
var sortList = function (head) {
  if (!head) return head;
  const listVals = [];
  let curr = head;
  while (curr) {
    listVals.push(curr.val);
    curr = curr.next;
  }
  listVals.sort((a, b) => a - b);
  const result = new ListNode();
  curr = result;
  for (let v of listVals) {
    const newNode = new ListNode(v);
    curr.next = newNode;
    curr = newNode;
  }
  return result.next;
};
