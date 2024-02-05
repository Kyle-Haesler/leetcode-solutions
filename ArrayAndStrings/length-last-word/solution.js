/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function (s) {
  sArray = s.trim().split(" ");
  return sArray[sArray.length - 1].length;
};
