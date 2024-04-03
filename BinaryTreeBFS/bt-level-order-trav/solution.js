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
 * @return {number[][]}
 */
var levelOrder = function (root) {
  if (!root) return [];
  let curr = root;
  const queue = [curr];
  const res = [];

  while (queue.length > 0) {
    const levelSize = queue.length;
    let mini = [];
    for (let i = 0; i < levelSize; i++) {
      let node = queue.pop();

      mini.push(node.val);
      if (node.left) queue.unshift(node.left);
      if (node.right) queue.unshift(node.right);
    }
    res.push(mini);
  }
  return res;
};
