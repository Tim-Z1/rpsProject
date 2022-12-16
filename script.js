function getComputerChoice(number) {
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

function playRound(playerSelection, computerSelection) {

  if (playerSelection == 'Rock' && computerSelection == 'Rock' || 
      playerSelection == 'Paper' && computerSelection == 'Paper' ||
      playerSelection == 'Scissors' && computerSelection == 'Scissors') {
    return n = 1; //"It's a tie!";
  } else if (playerSelection == 'Rock' && computerSelection == 'Paper' ||
             playerSelection == 'Paper' && computerSelection == 'Scissors' ||
             playerSelection == 'Scissors' && computerSelection == 'Rock') { 
    return n = 2; //`You Lose! ${computerSelection} beats ${playerSelection}.`;
    } else {
      return n = 3; //`You Win! ${playerSelection} beats ${computerSelection}.`;
    }
  }


const btn = document.querySelector('#btn');
    
btn.addEventListener('click', function(e){
  console.log(e.target);
}); 
 
  
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

    if (n == 1){
      console.log ("It's a tie");
    } else if (n == 2){
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