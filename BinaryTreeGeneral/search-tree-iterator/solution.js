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
 */
var BSTIterator = function (root) {
  function iot(node, values = []) {
    if (!node) return values;
    if (node.left) iot(node.left, values);
    values.push(node.val);
    if (node.right) iot(node.right, values);
    return values;
  }
  this.values = iot(root);
  this.pointer = -Infinity;
};

/**
 * @return {number}
 */
BSTIterator.prototype.next = function () {
  if (this.pointer == -Infinity) {
    this.pointer = 0;
  } else {
    this.pointer += 1;
  }
  return this.values[this.pointer];
};

/**
 * @return {boolean}
 */
BSTIterator.prototype.hasNext = function () {
  if (this.pointer === -Infinity) return true;
  if (this.pointer + 1 < this.values.length) return true;
  return false;
};

/**
 * Your BSTIterator object will be instantiated and called as such:
 * var obj = new BSTIterator(root)
 * var param_1 = obj.next()
 * var param_2 = obj.hasNext()
 */
