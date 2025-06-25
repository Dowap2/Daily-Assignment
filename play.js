function play(cards) {
  if (cards.length % 3 !== 0) {
    return new Map([
      ["A", "0"],
      ["B", "0"],
      ["C", "0"],
    ]);
  }

  const piles = [[10], [30], [50], [80]];

  const players = ["A", "B", "C"];
  const penalties = { A: 0, B: 0, C: 0 };

  const allPilesEmpty = () => piles.every((p) => p.length === 0);

  function getClosestPileIndex(card) {
    let minDiff = Infinity;
    let candidates = [];

    for (let i = 0; i < piles.length; i++) {
      const pile = piles[i];
      if (pile.length === 0) continue;
      const last = pile[pile.length - 1];
      const diff = Math.abs(card - last);

      if (diff < minDiff) {
        minDiff = diff;
        candidates = [i];
      } else if (diff === minDiff) {
        candidates.push(i);
      }
    }

    if (candidates.length === 0) return -1;

    let chosen = candidates[0];
    let maxLast = piles[chosen][piles[chosen].length - 1];
    for (const idx of candidates) {
      const last = piles[idx][piles[idx].length - 1];
      if (last > maxLast) {
        maxLast = last;
        chosen = idx;
      }
    }
    return chosen;
  }

  const turnCount = cards.length / 3;

  for (let t = 0; t < turnCount; t++) {
    const turnCards = cards.slice(t * 3, t * 3 + 3);
    const turnData = players.map((p, i) => ({ player: p, card: turnCards[i] }));
    turnData.sort((a, b) => a.card - b.card);

    for (const { player, card } of turnData) {
      if (allPilesEmpty()) return new Map(Object.entries(penalties));

      const idx = getClosestPileIndex(card);
      if (idx === -1) return new Map(Object.entries(penalties));

      const pile = piles[idx];
      const last = pile[pile.length - 1];

      if (card < last) {
        pile.push(card);
      } else {
        penalties[player] += pile.length;
        piles[idx] = [];
      }
    }
  }

  return new Map(Object.entries(penalties));
}

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let inputs = [];
rl.on("line", (line) => {
  inputs.push(line);
  if (inputs.length === 1) {
    rl.close();
  }
});

rl.on("close", () => {
  const numArray = inputs[0].split(",").map(Number);
  const answer = play(numArray);
  console.log(answer);
  rl.close();
});
