/**
 * @param {number[][]} points
 * @return {number}
 */
var findMinArrowShots = function (points) {
  points.sort((a, b) => a[1] - b[1]);
  let max = points[0][1];
  let arrows = 1;
  for (let i = 0; i < points.length; i++) {
    const left = points[i];
    const right = i + 1 < points.length ? points[i + 1] : null;
    if (right && max < right[0]) {
      arrows++;
      max = right[1];
    }
  }
  return arrows;
};
