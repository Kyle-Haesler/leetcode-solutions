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
 * @return {number}
 */
var maxDepth = function (root, count = 0) {
  if (!root) {
    return count;
  }
  count++;
  const leftCount = maxDepth(root.left, count);
  const rightCount = maxDepth(root.right, count);
  return Math.max(leftCount, rightCount);
};
