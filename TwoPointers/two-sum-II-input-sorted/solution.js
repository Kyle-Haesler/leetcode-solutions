/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (numbers, target) {
  const resultMap = new Map();
  for (let num of numbers) {
    resultMap.set(target - num, num);
  }
  const result = [];
  for (let i = 0; i < numbers.length; i++) {
    if (resultMap.has(numbers[i])) {
      result.push(i + 1);
      result.push(numbers.lastIndexOf(resultMap.get(numbers[i])) + 1);
      break;
    }
  }
  console.log(resultMap);
  return result;
};
