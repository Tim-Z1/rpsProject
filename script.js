const btn = document.querySelector('#btn');
const btn2 = document.querySelector('#btn2');
const btn3 = document.querySelector('#btn3');
const score = document.querySelector('.score');
const midgame = document.querySelector('.midgame');
const startBtn = document.querySelector('#start');
const result = document.querySelector('.result');
const p = document.querySelector('.p');
const buttonGroup = document.querySelector('.button');
const restart = document.querySelector('#restart');

startBtn.addEventListener('click', () => {
  startBtn.style.visibility = "hidden";
  midgame.style.visibility = "visible";
  game();
});

function getComputerChoice() {
  number = Math.floor(Math.random() * 100) + 1;
    if (number <= 33) {
        return 'Rock';
    } else if (number <= 66) {
        return 'Paper'; 
    } else {
        return 'Scissors';
    }
}

function playRound(playerSelection, computerSelection) {
  //computerSelection = getComputerChoice();
  if (playerSelection == 'Rock' && computerSelection == 'Rock' || 
      playerSelection == 'Paper' && computerSelection == 'Paper' ||
      playerSelection == 'Scissors' && computerSelection == 'Scissors') {
        result.textContent = `It's a tie!`;
        return outcome = 'tie'; 
  } else if (playerSelection == 'Rock' && computerSelection == 'Paper' ||
             playerSelection == 'Paper' && computerSelection == 'Scissors' ||
             playerSelection == 'Scissors' && computerSelection == 'Rock') { 
              result.textContent = `You Lose! ${computerSelection} beats ${playerSelection}.`;
              return outcome = 'lose'; 
    } else {
      result.textContent = `You Win! ${playerSelection} beats ${computerSelection}.`;
      return outcome = 'win'; 
    }
}

function game() {
  let playerScore = 0;
  let computerScore = 0;
  score.textContent = `player: ${playerScore} computer: ${computerScore}`;

  function updateScore (a) {
    if (a == 'lose') {
      computerScore++;
    } else if (a == 'win') {
      playerScore++;
    } else if (a == 'tie') {
      return;
    } else {
      console.log('did something go wrong?');
    }
    score.textContent = `player: ${playerScore} computer: ${computerScore}`;
  }

  btn.addEventListener('click', () => {
    pS = 'Scissors';
    playRound(pS, getComputerChoice());
    updateScore(outcome);
    gameOver();
  }); 
  btn2.addEventListener('click', () => {
    let pS = 'Paper';
    playRound( pS, getComputerChoice() );
    updateScore(outcome);
    gameOver();
  }); 
  btn3.addEventListener('click', () => {
    let pS = 'Rock';
    playRound( pS, getComputerChoice() );
    updateScore(outcome);
    gameOver();
  }); 

  function gameOver () {
    if (playerScore == 5) {
    p.textContent = 'Congratulations you win!'
    buttonGroup.style.visibility = "hidden";
    restart.style.visibility = "visible";
  } else if (computerScore == 5) {
    p.textContent = 'Computer wins! Better luck next time!'
    buttonGroup.style.visibility = "hidden";
    restart.style.visibility = "visible";
  }
  }

  restart.addEventListener ('click', () => {
    p.textContent = 'Choose an option below. First to 5 wins!';
    buttonGroup.style.visibility = "visible";
    restart.style.visibility = "hidden";
    playerScore = 0;
    computerScore = 0;
    score.textContent = `player: ${playerScore} computer: ${computerScore}`;
    result.textContent = ``;
});
}