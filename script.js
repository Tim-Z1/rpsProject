function computerPlay() {
    let randomNumber = Math.floor(Math.random()*100);
    if (randomNumber <= 33) {
        randomNumber = "rock";
    } else if (randomNumber <= 66) {
        randomNumber = "paper";
    } else {
        randomNumber = "scissors";
    }   
    return randomNumber; 
}

function playRound(playerSelection, computerSelection) { //is the reason for putting parameters in the function a matter of scope? vs defining the variables inside the function?
    playerSelection = playerSelection.toLowerCase();
    if (playerSelection == "rock" && computerSelection == "rock") {
      return "It's a tie. " + playerSelection + " and " + computerSelection;
  } else if (playerSelection == "paper" && computerSelection == "rock") {
      return "You win! Paper beats Rock!";
  } else {
      return "beep beep meow";
  }
}

const playerSelection = prompt ("Please type something here", "Type in Rock, Paper or Scissors here");
const computerSelection = computerPlay();


console.log(playRound(playerSelection, computerSelection));

function game() {
    for (let i = 0; i < 5; i++) {
        console.log ("wow");
        console.log ('hmm');
    }
}

game();
// _____________________________________________________________
// function favoriteAnimal(animal) {
//     console.log(animal + " is my favorite animal!")
//   }
  
//   favoriteAnimal('Goat')
// _____________________________________________________________


// -play a game of rock, paper, scissors with the computer

// -player inputs "Rock, paper or scissors"
// -code takes that input and stores it in a variable

// -code generates a random number and determines rock,paper,scissors depending on
// the random number outcome then stores that outcome as the computer's variable

// -code compares that variable against computer's variable to determine outcome
// -code displays different messages depending on outcome 