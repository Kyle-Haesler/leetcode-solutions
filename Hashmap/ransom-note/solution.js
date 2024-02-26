/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function (ransomNote, magazine) {
  const ranMap = {};
  for (let letter of ransomNote) {
    ranMap[letter] = (ranMap[letter] || 0) + 1;
  }
  const magMap = {};
  for (let letter of magazine) {
    magMap[letter] = (magMap[letter] || 0) + 1;
  }

  for (let letter of ransomNote) {
    if (!magMap[letter]) return false;
    if (magMap[letter]) {
      if (ranMap[letter] > magMap[letter]) return false;
    }
  }
  return true;
};
