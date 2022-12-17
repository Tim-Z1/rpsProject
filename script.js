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

function capitalize(string) {
  let str1 = string.toLowerCase(); //makes all input lowercase
  str1 = str1.substr(1);

  let str2 = string.substr(0,1); //takes first letter of input 
  str2 = str2.toUpperCase();

  return str2 + str1;
}

const result = document.querySelector('.result');

function playRound(playerSelection, computerSelection) {
  if (playerSelection == 'Rock' && computerSelection == 'Rock' || 
      playerSelection == 'Paper' && computerSelection == 'Paper' ||
      playerSelection == 'Scissors' && computerSelection == 'Scissors') {
        result.textContent = `It's a tie`;
        return n = 1; //"It's a tie!";
  } else if (playerSelection == 'Rock' && computerSelection == 'Paper' ||
             playerSelection == 'Paper' && computerSelection == 'Scissors' ||
             playerSelection == 'Scissors' && computerSelection == 'Rock') { 
              result.textContent = `You Lose! ${computerSelection} beats ${playerSelection}.`;
              return n = 2; //`You Lose! ${computerSelection} beats ${playerSelection}.`;
    } else {
      result.textContent = `You Win! ${playerSelection} beats ${computerSelection}.`;
      return n = 3; //`You Win! ${playerSelection} beats ${computerSelection}.`;
    }
}

const midgame = document.querySelector('.midgame');
const startBtn = document.querySelector('#start');
startBtn.addEventListener('click', () => {
  startBtn.style.visibility = "hidden";
  midgame.style.visibility = "visible";
});


//could probably optimise code using querySelectorAll?
const btn = document.querySelector('#btn');
const btn2 = document.querySelector('#btn2');
const btn3 = document.querySelector('#btn3');
const score = document.querySelector('.score');
//score text content changing according to increment/decrement of player and computer's score

function game(){
  let playerScore = 0;
  let computerScore = 0;

  btn.addEventListener('click', () => {
    let pS = 'Scissors';
    playRound( pS, getComputerChoice() );
  }); 
  btn2.addEventListener('click', () => {
    let pS = 'Paper';
    playRound( pS, getComputerChoice() );
  }); 
  btn3.addEventListener('click', () => {
    let pS = 'Rock';
    playRound( pS, getComputerChoice() );
  }); 

  if (n == 2) {
    computerScore++;
  } else if (n == 3) {
    playerScore++;
  } else {
    console.log ('something went wrong');
  }  
}
/*
1. press start to play 
2. click buttons -> display result of that 1 round -> track result of that 1 round, increase/decrease score
3. when score reaches 5 announce winner of the game -> game ends: have a button allowing you to play again
*/



/*
function game() {
  let playerScore = 0;
  let computerScore = 0;

  for (let i = 0; i < 5; i++) {
    const randomNumber = Math.floor(Math.random() * 100) + 1;
    const computerSelection = getComputerChoice(randomNumber);
    const input = prompt('Choose one: Scissors, Paper, Rock');
    const playerSelection = capitalize(input); 

    playRound(playerSelection, computerSelection);

    if (n == 1) {
      console.log ("It's a tie");
    } else if (n == 2) {
      console.log (`You Lose! ${computerSelection} beats ${playerSelection}.`);
      computerScore++;
    } else if (n == 3) {
      console.log(`You Win! ${playerSelection} beats ${computerSelection}.`);
      playerScore++;
    } else {
      console.log ('something went wrong');
    }
  }

  if (i = 5 && playerScore > computerScore) {
    console.log (`Congratulations! You've won the match! Your score is: ${playerScore}, Computer's score is: ${computerScore}`);
  } else if (i = 5 && computerScore > playerScore) {
    console.log (`Better luck next time! The computer wins the match. Your score is: ${playerScore}, Computer's score is : ${computerScore}`);
  } else if (i = 5 && playerScore == computerScore) {
    console.log (`The match ends in a draw! Your score is: ${playerScore}, Computer's score is: ${computerScore}`);
  } else {
    console.log ('did something go wrong?');
  }
} 

*/