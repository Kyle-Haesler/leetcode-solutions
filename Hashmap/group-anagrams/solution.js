/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
  // thinking we should sort each word alphabetically, see if it is in the map, if it is, push the original word
  const map = new Map();
  const res = [];
  for (let string of strs) {
    const sorted = string.split("").sort().join("");

    if (map.has(sorted)) {
      map.get(sorted).push(string);
    } else {
      map.set(sorted, [string]);
    }
  }
  for (let [key, value] of map.entries()) {
    res.push(value);
  }
  return res;
};
