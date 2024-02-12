/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function (s, numRows) {
  if (numRows === 1) return s;
  const result = new Map();
  let row = 1;
  let direction = "down";
  for (let char of s) {
    if (result.has(row)) {
      result.get(row).push(char);
    } else {
      result.set(row, [char]);
    }
    if (direction === "down") {
      if (row + 1 > numRows) {
        direction = "up";
        row--;
      } else {
        row++;
      }
    } else {
      if (row - 1 < 1) {
        direction = "down";
        row++;
      } else {
        row--;
      }
    }
  }
  let finalResult = "";
  for (let value of result.values()) {
    finalResult += value.join("");
  }
  return finalResult;
};
