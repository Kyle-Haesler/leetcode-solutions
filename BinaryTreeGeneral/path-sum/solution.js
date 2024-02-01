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
 * @param {number} targetSum
 * @return {boolean}
 */
var hasPathSum = function (root, targetSum, sum = 0) {
  if (!root) {
    return false;
  }
  sum += root.val;
  if (!root.left && !root.right) {
    return sum === targetSum;
  }
  return (
    hasPathSum(root.left, targetSum, sum) ||
    hasPathSum(root.right, targetSum, sum)
  );
};
