/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function (s, t) {
  let minimumTotal = Infinity;
  let minLower = 0;
  let minHigher = 0;

  const tCount = {};
  for (let i of t) {
    tCount[i] = (tCount[i] || 0) + 1;
  }
  for (let i = 0; i < s.length; i++) {
    let matches = 0;
    // if starting letter isnt in t, skip
    const seen = {};
    if (!tCount[s[i]]) continue;
    for (let j = i; j < s.length; j++) {
      const temp = s[j];

      if (tCount[temp]) {
        seen[temp] = (seen[temp] || 0) + 1;
        if (seen[temp] <= tCount[temp]) {
          matches++;
        }
        if (matches === t.length) {
          const len = j - i + 1;
          if (len < minimumTotal) {
            minimumTotal = len;
            minLower = i;
            minHigher = j + 1;
          }
          break;
        }
      }
    }
  }
  return s.substring(minLower, minHigher);
};
