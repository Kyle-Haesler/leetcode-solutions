/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
var canCompleteCircuit = function (gas, cost) {
  let gasSum = 0,
    costSum = 0;
  const leftOver = [];
  for (let i = 0; i < gas.length; i++) {
    gasSum += gas[i];
    costSum += cost[i];
    leftOver[i] = gas[i] - cost[i];
  }
  if (gasSum < costSum) return -1;
  let start = 0;
  let currentGas = 0;
  for (let i = 0; i < leftOver.length; i++) {
    currentGas += leftOver[i];
    if (currentGas < 0) {
      currentGas = 0;
      start = i + 1;
    }
  }

  return start;
};
