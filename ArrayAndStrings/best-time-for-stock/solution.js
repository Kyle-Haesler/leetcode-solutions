/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  let cheapest = Infinity;
  let maxp = 0;
  for (let i = 0; i < prices.length; i++) {
    if (prices[i] < cheapest) {
      cheapest = prices[i];
    }
    if (prices[i] - cheapest > maxp) {
      maxp = prices[i] - cheapest;
    }
  }
  return maxp;
};
