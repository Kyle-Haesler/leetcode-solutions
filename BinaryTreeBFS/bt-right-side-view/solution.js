/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var rightSideView = function (root) {
  if (!root) return [];
  const queue = [root];
  const res = [];
  while (queue.length > 0) {
    let levelSize = queue.length;

    if (levelSize === 1) {
      for (let i = 0; i < levelSize; i++) {
        let node = queue.pop();
        res.push(node.val);
        if (node.right) queue.unshift(node.right);
        if (node.left) queue.unshift(node.left);
      }
    }
    if (levelSize > 1) {
      res.push(queue[queue.length - 1].val);
      for (let i = 0; i < levelSize; i++) {
        let node = queue.pop();
        if (node.right) queue.unshift(node.right);
        if (node.left) queue.unshift(node.left);
      }
    }
  }
  return res;
};
