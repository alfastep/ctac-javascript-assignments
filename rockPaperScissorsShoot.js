const hands = ['rock', 'paper', 'scissors'];

function getHand() {
  return hands[parseInt(Math.random() * 10) % 3];
}

let player1 = {
  name: "John",
  hand: getHand()
}

let player2 = {
  name: "Jane",
  hand: getHand()
}

let player3 = {
  name: "Lon",
  hand: getHand()
}

let player4 = {
  name: "Lane",
  hand: getHand()
}

function playRound(player1, player2) {
  player1.hand = getHand();
  player2.hand = getHand();

  if (player1.hand === player2.hand) {
    console.log(`${player1.name}'s hand: ${player1.hand}, ${player2.name}'s hand: ${player2.hand}. It's a tie.`);
    return null;
  } else if ((player1.hand === 'rock' && player2.hand == 'scissors') || (player1.hand === 'paper' && player2.hand === 'rock') || (player1.hand === 'scissors' && player2.hand === 'paper')) {
    console.log(`${player1.name}'s hand: ${player1.hand}, ${player2.name}'s hand: ${player2.hand}. ${player1.name} wins this round.`);
    return player1;
  } else {
    console.log(`${player1.name}'s hand: ${player1.hand}, ${player2.name}'s hand: ${player2.hand}. ${player2.name} wins this round.`);
    return player2;
  }
}

function playGame(player1, player2, playUntil) {
  let player1Wins = 0;
  let player2Wins = 0;

  while (player1Wins < playUntil && player2Wins < playUntil) {
    const result = playRound(player1, player2);
    if (result === player1) {
      player1Wins++;
    }

    if (result === player2) {
      player2Wins++;
    }
  }

  if (player1Wins === playUntil) {
    return player1;
  } else {
    return player2;
  }
}

function playTournament(player1, player2, player3, player4, playUntil) {
  const round1Winner1 = playGame(player1, player2, playUntil);
  const round1Winner2 = playGame(player3, player4, playUntil);
  const champion = playGame(round1Winner1, round1Winner2, playUntil);

  console.log(`${champion.name} is the world champion!`);
}

playTournament(player1, player2, player3, player4, 5);