const symbols = [
  "M",
  "CM",
  "D",
  "CD",
  "C",
  "XC",
  "L",
  "XL",
  "X",
  "IX",
  "V",
  "IV",
  "I",
];
const values = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];

let result = "";
for (let i = 0; i < symbols.length; i++) {
  const symbol = symbols[i];
  const value = values[i];

  const length = Math.floor(num / value);
  if (length > 0) {
    result += symbol.repeat(length);
    num -= value * length;
  }
}

return result;
