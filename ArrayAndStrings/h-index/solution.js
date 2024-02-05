/**
 * @param {number[]} citations
 * @return {number}
 */
var hIndex = function (citations) {
  let bar = citations.length;
  while (bar >= 1) {
    let count = 0;
    for (let i = 0; i < citations.length; i++) {
      if (citations[i] >= bar) {
        count++;
      }
    }
    if (count >= bar) {
      return bar;
    }
    bar--;
  }
  return 0;
};
