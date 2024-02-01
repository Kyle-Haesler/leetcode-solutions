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
var averageOfLevels = function (root) {
  const queue = [];
  const result = [];
  queue.unshift(root);
  while (queue.length > 0) {
    const length = queue.length;
    let i = 0;
    let sum = 0;
    while (i < length) {
      const node = queue.pop();
      sum += node.val;
      if (node.left) {
        queue.unshift(node.left);
      }
      if (node.right) {
        queue.unshift(node.right);
      }

      i++;
    }
    result.push(sum / length);
  }
  return result;
};
