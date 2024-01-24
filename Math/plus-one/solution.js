/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
  let carry = 0;
  if (digits[digits.length - 1] + 1 > 9) {
    digits[digits.length - 1] = 0;
    carry = 1;
  } else {
    digits[digits.length - 1] = digits[digits.length - 1] + 1;
    return digits;
  }
  for (let i = digits.length - 2; i >= 0; i--) {
    if (digits[i] + carry > 9) {
      digits[i] = 0;
    } else {
      digits[i] = digits[i] + carry;
      carry = 0;
      break;
    }
  }
  if (carry) digits.unshift(carry);
  return digits;
};
