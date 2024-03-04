/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function (tokens) {
  // so I think we could just create a stack and and iterate the tokens, if its a number, push it, if not, pop the last two off and combine and push it back on to the stack?
  const stack = [];
  for (let tok of tokens) {
    if (tok === "+" || tok === "-" || tok === "*" || tok === "/") {
      const right = Number(stack.pop());
      const left = Number(stack.pop());

      if (tok === "+") {
        stack.push(left + right);
      }
      if (tok === "-") {
        stack.push(left - right);
      }
      if (tok === "*") {
        stack.push(left * right);
      }
      if (tok === "/") {
        stack.push(Math.trunc(left / right));
      }
    } else {
      stack.push(tok);
    }
  }

  return stack[0];
};
