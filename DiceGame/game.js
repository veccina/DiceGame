const usernameInput = document.getElementById('username');
const rollBtn = document.getElementById('rollBtn');
const player1Dice = document.getElementById('player1Dice');
const player2Dice = document.getElementById('player2Dice');
const resultDiv = document.getElementById('result');
const diceFaces = ['dice1.png', 'dice2.png', 'dice3.png', 'dice4.png', 'dice5.png', 'dice6.png'];

function rollDice() {
  return Math.floor(Math.random() * diceFaces.length) + 1;
}

function displayDice(playerDice, roll) {
  playerDice.style.backgroundImage = `url('images/dice${roll}.png')`;
  playerDice.style.backgroundSize = 'contain';
  playerDice.style.backgroundRepeat = 'no-repeat';
  playerDice.style.backgroundPosition = 'center';
}

rollBtn.addEventListener('click', () => {
  rollBtn.disabled = true;
  resultDiv.textContent = 'Rolling dice...';
  
  let counter = 0;
  let player1Roll = rollDice();
  let player2Roll = rollDice();
  const intervalId = setInterval(() => {
    displayDice(player1Dice, rollDice());
    displayDice(player2Dice, rollDice());
    counter++;
    if (counter > 15) { // Stop rolling after 15 changes
      clearInterval(intervalId);
      displayDice(player1Dice, player1Roll);
      displayDice(player2Dice, player2Roll);
      const winner = player1Roll > player2Roll ? usernameInput.value || 'Player 1' : 'Player 2';
      resultDiv.textContent = player1Roll === player2Roll ? 'It\'s a draw!' : `${winner} wins!`;
      rollBtn.disabled = false;
    }
  }, 200);
});
