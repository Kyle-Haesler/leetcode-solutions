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
 * @return {boolean}
 */
var isValidBST = function (root) {
  function inOrder(node, values = []) {
    if (!node) return values;
    if (node.left) values = inOrder(node.left, values);
    values.push(node.val);
    if (node.right) values = inOrder(node.right, values);
    return values;
  }
  const arr = inOrder(root);
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] <= arr[i - 1]) {
      return false;
    }
  }
  return true;
};
