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
var reverseKGroup = function (head, k) {
  // first define a helper function to find the kth node assuming a start from a dummy node
  function getKth(curr, k) {
    while (curr && k > 0) {
      curr = curr.next;
      k--;
    }
    return curr;
  }
  // second establish a dummy node that points to the head of the linked list
  const dummy = new ListNode(0, head);
  // third establish group previous which will always be the node previous to the group
  let groupPrev = dummy;
  // fourth get a while loop going
  while (true) {
    // find the kth node, if its false that means we are at the end so we can break
    const kth = getKth(groupPrev, k);
    if (!kth) break;
    // so our group next will be the kth next
    let groupNext = kth.next;
    // reverse our group!
    let prev = kth.next,
      curr = groupPrev.next,
      next = null;
    while (curr !== groupNext) {
      next = curr.next;
      curr.next = prev;
      prev = curr;
      curr = next;
    }
    // set groupPrev to kth
    let temp = groupPrev.next;
    groupPrev.next = kth;
    groupPrev = temp;
  }

  return dummy.next;
};
