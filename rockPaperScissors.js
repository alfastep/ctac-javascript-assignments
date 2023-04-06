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

function playRound(player1, player2) {
  let p1hand = player1.hand;
  let p2hand = player2.hand;

  if (p1hand === p2hand) {
    console.log(`${player1.name}'s hand: ${p1hand}\n${player2.name}'s hand: ${p2hand}\n it's a tie.`);
    return null;
  }

  if (p1hand === 'rock') {
    if (p2hand === 'paper') {
      console.log(`${player1.name}'s hand: ${p1hand}\n${player2.name}'s hand: ${p2hand}\n${player2.name} wins this round.`);
      return player2;
    } else {
      console.log(`${player1.name}'s hand: ${p1hand}\n${player2.name}'s hand: ${p2hand}\n${player1.name} wins this round.`);
      return player1;
    }
  }

  if (p1hand === 'paper') {
    if (p2hand === 'scissors') {
      console.log(`${player1.name}'s hand: ${p1hand}\n${player2.name}'s hand: ${p2hand}\n${player2.name} wins this round.`);
      return player2;
    } else {
      console.log(`${player1.name}'s hand: ${p1hand}\n${player2.name}'s hand: ${p2hand}\n${player1.name} wins this round.`);
      return player1;
    }
  }

  if (p1hand === 'scissors') {
    if (p2hand === 'rock') {
      console.log(`${player1.name}'s hand: ${p1hand}\n${player2.name}'s hand: ${p2hand}\n${player2.name} wins this round.`);
      return player2;
    } else {
      console.log(`${player1.name}'s hand: ${p1hand}\n${player2.name}'s hand: ${p2hand}\n${player1.name} wins this round.`);
      return player1;
    }
  }
}

console.log(playRound(player1, player2));