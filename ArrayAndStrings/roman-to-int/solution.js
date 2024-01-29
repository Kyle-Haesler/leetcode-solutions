/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
  const result = new Map();
  result.set("I", 1);
  result.set("V", 5);
  result.set("X", 10);
  result.set("L", 50);
  result.set("C", 100);
  result.set("D", 500);
  result.set("M", 1000);
  let sum = 0;
  for (let i = 0; i < s.length; i++) {
    let curr = s[i];
    let next = s[i + 1];
    if (result.get(curr) < result.get(next)) {
      sum -= result.get(curr);
    } else {
      sum += result.get(curr);
    }
  }
  return sum;
};
