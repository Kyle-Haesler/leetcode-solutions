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
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function (root, k) {
  function iot(root, values = []) {
    if (!root) return values;
    if (root.left) values = iot(root.left, values);
    values.push(root.val);
    if (root.right) values = iot(root.right, values);
    return values;
  }
  const values = iot(root);
  let index = 1;
  for (val of values) {
    if (index === k) {
      return val;
    }
    index++;
  }
};
