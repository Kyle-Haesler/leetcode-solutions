const hands = {
  John: ["AH", "4S", "10S", "4S", "2S"],
  Alex: ["AD", "4H", "2C", "8S", "5H"],
  Bill: ["KD", "2H", "JC", "QS", "5C"],
  Kyle: ["JD", "9H", "QC", "QC", "3C"],
};

// Ok so we need to play 5 rounds here, each player uses the highest hard in their hand for each round.
// Ace, king, queen, jack numbers
// spaids, clubs, diamond, hearts
// return {"John": 1} with how many rounds they won.

function findWinner(hands) {
  // card and suit keys - idea is to get a total scores in an array for each player
  const cardKey = {
    A: 130,
    K: 120,
    Q: 110,
    J: 100,
    10: 90,
    9: 80,
    8: 70,
    7: 60,
    6: 50,
    5: 40,
    4: 30,
    3: 20,
    2: 10,
  };
  const suitKey = {
    S: 4,
    C: 3,
    D: 2,
    H: 1,
  };
  const result = new Map();
  // iterate over each player in hands
  const players = Object.keys(hands);
  for (let player of players) {
    const hand = hands[player];
    // iterate over each hand, put player and then array of the results
    for (let card of hand) {
      if (card.length == 2) {
        if (result.has(player)) {
          result.get(player).push(cardKey[card[0]] + suitKey[card[1]]);
        } else {
          result.set(player, [cardKey[card[0]] + suitKey[card[1]]]);
        }
      } else {
        if (result.has(player)) {
          result
            .get(player)
            .push(cardKey[card[0] + card[1]] + suitKey[card[2]]);
        } else {
          result.set(player, [cardKey[card[0] + card[1]] + suitKey[card[2]]]);
        }
      }
    }
  }
  for (let value of result.values()) {
    value = value.sort((a, b) => b - a);
  }
  const finalResult = new Map();
  let i = 0;

  while (i < 5) {
    let max = 0;
    let winner = "";
    for (let [key, value] of result.entries()) {
      if (value[i] > max) {
        max = value[i];
        winner = key;
      }
    }
    if (finalResult.has(winner)) {
      finalResult.set(winner, finalResult.get(winner) + 1);
    } else {
      finalResult.set(winner, 1);
    }
    i++;
  }
  console.log(result);
  return finalResult;
}

console.log(findWinner(hands));
