/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function (ransomNote, magazine) {
  const ran = new Map();
  for (r of ransomNote) {
    if (ran.has(r)) {
      ran.set(r, ran.get(r) + 1);
    } else {
      ran.set(r, 1);
    }
  }
  const mag = new Map();
  for (m of magazine) {
    if (mag.has(m)) {
      mag.set(m, mag.get(m) + 1);
    } else {
      mag.set(m, 1);
    }
  }
  for (let [key, value] of ran.entries()) {
    if (!mag.has(key)) {
      return false;
    } else {
      if (mag.get(key) < value) {
        return false;
      }
    }
  }
  return true;
};
