var findSubstring = function (s, words) {
  const potentials = [words.join("")];
  let counter = 1;
  while (counter <= words.length) {
    for (let i = 0; i < words.length - 1; i++) {
      let temp = words[i + 1];
      words[i + 1] = words[i];
      words[i] = temp;
      potentials.push(words.join(""));
    }
    counter++;
  }
  console.log(potentials);
};

findSubstring("potato", ["ab", "cd", "ef"]);
