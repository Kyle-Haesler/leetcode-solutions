/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function (intervals) {
  // alright so we are going to definitely have two pointers here for the start and end
  // going to push the results to res
  // going to need to keep track of the first and second indices for each one, maybe starting off with low high?
  intervals.sort((a, b) => a[0] - b[0]);
  const res = [intervals[0]];
  let resPointer = 0;
  for (let i = 1; i < intervals.length; i++) {
    if (res[resPointer][1] >= intervals[i][0]) {
      res[resPointer][0] = Math.min(res[resPointer][0], intervals[i][0]);
      res[resPointer][1] = Math.max(res[resPointer][1], intervals[i][1]);
    } else {
      res.push(intervals[i]);
      resPointer++;
    }
  }
  return res;
};
