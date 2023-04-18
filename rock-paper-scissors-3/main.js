const hands = ['rock', 'paper', 'scissors'];

function getHand() {
  return hands[parseInt(Math.random() * 10) % 3];
}

let player1 = {
  name: "John",
  hand: getHand(),
  score: 0
}

let player2 = {
  name: "Jane",
  hand: getHand(),
  score: 0
}

let player3 = {
  name: "Lon",
  hand: getHand(),
  score: 0
}

let player4 = {
  name: "Lane",
  hand: getHand(),
  score: 0
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
  const games = document.querySelector('#games');
  const newGame = document.createElement('div');
  const player1Div = document.createElement('div');
  const player1Name = document.createElement('h2');
  const player1Score = document.createElement('p');
  const player2Div = document.createElement('div');
  const player2Name = document.createElement('h2');
  const player2Score = document.createElement('p');
  const winner = document.createElement('p');

  newGame.className = 'game';
  player1Div.className = `${player1.name}`;
  player1Score.className = `${player1.name}-score`
  player1Name.innerHTML = `${player1.name}`;
  player1Score.innerHTML = `Score: 0`;
  player2Div.className = `${player2.name}`;
  player2Score.className = `${player2.name}-score`
  player2Name.innerHTML = `${player2.name}`;
  player2Score.innerHTML = `Score: 0`;

  games.appendChild(newGame);
  newGame.appendChild(player1Div);
  newGame.appendChild(player2Div);
  player1Div.appendChild(player1Name);
  player1Div.appendChild(player1Score);
  player2Div.appendChild(player2Name);
  player2Div.appendChild(player2Score);
  newGame.appendChild(winner);

  while (player1.score < playUntil && player2.score < playUntil) {
    const result = playRound(player1, player2);
    if (result === player1) {
      player1.score++;
      player1Score.innerHTML = `Score: ${player1.score}`;
    }

    if (result === player2) {
      player2.score++;
      player2Score.innerHTML = `Score: ${player2.score}`;
    }
  }

  if (player1.score === playUntil) {
    winner.innerHTML = `${player1.name} wins this game!`;
    player1.score = 0;
    return player1;
  } else {
    winner.innerHTML = `${player2.name} wins this game!`;
    player2.score = 0;
    return player2;
  }
}

function playTournament(player1, player2, player3, player4, playUntil) {
  const round1Winner1 = playGame(player1, player2, playUntil);
  const round1Winner2 = playGame(player3, player4, playUntil);
  const champion = playGame(round1Winner1, round1Winner2, playUntil);

  const resultElement = document.getElementById('result');
  resultElement.innerHTML = `${champion.name} is the world champion!`;
  console.log(`${champion.name} is the world champion!`);
}

const playButton = document.querySelector('#playButton');

playButton.addEventListener('click', event => {
  event.preventDefault();
  playTournament(player1, player2, player3, player4, 5);
})