/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
var insert = function (intervals, newInterval) {
  // so basically, all we have to do is push the newIntervals, re sort and then run our merge function lol
  intervals.push(newInterval);
  intervals.sort((a, b) => a[0] - b[0]);
  const res = [intervals[0]];
  let resPnt = 0;
  for (let i = 1; i < intervals.length; i++) {
    if (res[resPnt][1] >= intervals[i][0]) {
      res[resPnt][0] = Math.min(res[resPnt][0], intervals[i][0]);
      res[resPnt][1] = Math.max(res[resPnt][1], intervals[i][1]);
    } else {
      res.push(intervals[i]);
      resPnt++;
    }
  }
  return res;
};
