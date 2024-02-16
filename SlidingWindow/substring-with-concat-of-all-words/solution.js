/**
 * @param {string} s
 * @param {string[]} words
 * @return {number[]}
 */
var findSubstring = function (s, words) {
  const wordLength = words[0].length;
  const totalLength = words.length * wordLength;
  const result = [];
  const wordCount = {};
  for (let word of words) {
    wordCount[word] = (wordCount[word] || 0) + 1;
  }
  for (let i = 0; i < s.length - totalLength + 1; i++) {
    const seen = {};
    let matches = 0;
    for (let j = i; j < i + totalLength; j += wordLength) {
      const temp = s.substring(j, j + wordLength);

      if (wordCount[temp]) {
        seen[temp] = (seen[temp] || 0) + 1;
        if (seen[temp] > wordCount[temp]) break;
        matches++;
      } else {
        break;
      }
      if (matches === words.length) result.push(i);
    }
  }
  return result;
};
