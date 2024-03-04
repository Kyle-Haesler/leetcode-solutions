/**
 * @param {string} s
 * @return {number}
 */
var calculate = function (s) {
  s = s.replace(/\s+/g, ""); // Remove spaces
  let stack = [];
  let sign = 1;
  let sum = 0;
  let i = 0;

  while (i < s.length) {
    let char = s[i];

    if (char === "+") {
      sign = 1;
      i++;
    } else if (char === "-") {
      sign = -1;
      i++;
    } else if (char === "(") {
      // Push the current sum and sign onto the stack
      stack.push(sum);
      stack.push(sign);
      // Reset sum and sign for the new expression within the parenthesis
      sum = 0;
      sign = 1;
      i++;
    } else if (char === ")") {
      // End of parenthesis expression, pop the sign and previous sum
      sum *= stack.pop(); // Multiply by the sign before the parenthesis
      sum += stack.pop(); // Add to the sum before the parenthesis
      i++;
    } else {
      // Accumulate all digits for multi-digit numbers
      let num = 0;
      while (i < s.length && !isNaN(parseInt(s[i], 10))) {
        num = num * 10 + parseInt(s[i], 10);
        i++;
      }
      sum += sign * num;
    }
  }

  return sum;
};
