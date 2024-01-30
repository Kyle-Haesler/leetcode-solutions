/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  const stack = [];
  const key = {
    ")": "(",
    "}": "{",
    "]": "[",
  };
  for (let char of s) {
    if (char === "(" || char === "{" || char === "[") {
      stack.push(char);
    } else {
      const popped = stack.pop();
      if (key[char] !== popped) {
        return false;
      }
    }
  }
  if (!stack.length) {
    return true;
  } else {
    return false;
  }
};
