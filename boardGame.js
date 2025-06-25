function nextPosition(current, dice) {
  const next = current + dice;
  if (next == 6) {
    return 36;
  } else if (next == 32) {
    return 10;
  } else if (next == 62) {
    return 18;
  } else if (next == 88) {
    return 24;
  } else if (next == 48) {
    return 26;
  } else if (next == 95) {
    return 56;
  } else if (next == 97) {
    return 78;
  } else if (next == 4) {
    return 14;
  } else if (next == 8) {
    return 30;
  } else if (next == 28) {
    return 76;
  } else if (next == 21) {
    return 63;
  } else if (next == 50) {
    return 67;
  } else if (next == 71) {
    return 92;
  } else if (next == 80) {
    return 99;
  }

  return dice;
}

function boardGame(dice) {
  let start = 1;
  let next = 1;

  for (let i = 0; i < dice.length; i++) {
    next = start + nextPosition(start, dice);
    console.log("from=", start, ", dice=", dice, ", next=", next);
  }

  console.log();
}

const diceValue = [3, 4, 3, 5, 1];
boardGame(diceValue);
