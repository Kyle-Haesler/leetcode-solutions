/**
 * @param {string} path
 * @return {string}
 */
var simplifyPath = function (path) {
  const splitPath = path.split("/");
  const stack = [];
  for (let char of splitPath) {
    if (char === "" || char === ".") {
      continue;
    } else if (char === "..") {
      stack.pop();
    } else {
      stack.push(char);
    }
  }
  return "/" + stack.join("/");
};
