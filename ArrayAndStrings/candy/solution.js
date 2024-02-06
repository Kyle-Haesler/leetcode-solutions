/**
 * @param {number[]} ratings
 * @return {number}
 */
var candy = function (ratings) {
  const n = ratings.length;
  let totalCandy = n;
  let i = 1;
  while (i < n) {
    if (ratings[i] === ratings[i - 1]) {
      i += 1;
      continue;
    }
    let peak = 0;
    while (i < n && ratings[i] > ratings[i - 1]) {
      peak++;
      totalCandy += peak;
      i += 1;
    }
    if (i === n) {
      return totalCandy;
    }
    let valley = 0;
    while (i < n && ratings[i] < ratings[i - 1]) {
      valley++;
      totalCandy += valley;
      i += 1;
    }
    totalCandy -= Math.min(peak, valley);
  }

  return totalCandy;
};
