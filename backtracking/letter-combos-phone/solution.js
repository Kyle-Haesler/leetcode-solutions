/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function (digits) {
  res = [];
  digitToChar = {
    2: "abc",
    3: "def",
    4: "ghi",
    5: "jkl",
    6: "mno",
    7: "qrsp",
    8: "tuv",
    9: "wxyz",
  };
  function backtrack(i, currStr) {
    if (currStr.length === digits.length) {
      res.push(currStr);
      return;
    }
    for (let c of digitToChar[digits[i]]) {
      backtrack(i + 1, currStr + c);
    }
  }
  if (digits) {
    backtrack(0, "");
  }
  return res;
};
