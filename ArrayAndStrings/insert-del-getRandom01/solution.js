var RandomizedSet = function () {
  this.nums = [];
  this.indexes = new Map();
};

/**
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.insert = function (val) {
  if (this.indexes.has(val)) {
    return false;
  } else {
    this.nums.push(val);
    this.indexes.set(val, this.nums.length - 1);
    return true;
  }
};

/**
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.remove = function (val) {
  if (this.indexes.has(val)) {
    const index = this.indexes.get(val);
    const lastElement = this.nums[this.nums.length - 1];
    this.nums[index] = lastElement;
    this.indexes.set(lastElement, index);
    this.nums.pop();
    this.indexes.delete(val);
    return true;
  } else {
    return false;
  }
};

/**
 * @return {number}
 */
RandomizedSet.prototype.getRandom = function () {
  const index = Math.floor(Math.random() * this.nums.length);
  return this.nums[index];
};

/**
 * Your RandomizedSet object will be instantiated and called as such:
 * var obj = new RandomizedSet()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */
