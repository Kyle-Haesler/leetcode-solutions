/**
 * @param {string} startGene
 * @param {string} endGene
 * @param {string[]} bank
 * @return {number}
 */
var minMutation = function (start, end, bank) {
  let queue = [[start, 0]];
  let mutations = new Set(bank);

  while (queue.length > 0) {
    // check current mutation and step
    let [c, s] = queue.pop();
    if (c === end) {
      return s;
    }
    for (let i = 0; i < c.length; i++) {
      for (let ch of "ACGT") {
        let m = c.substring(0, i) + ch + c.substring(i + 1);
        console.log(m);
        if (mutations.has(m)) {
          mutations.delete(m);
          queue.unshift([m, s + 1]);
        }
      }
    }
  }
  return -1;
};
