let userScore = 0;
let computerScore = 0;

function computerPlay() {
    let randomNumber = Math.floor(Math.random()*100);
    if (randomNumber <= 33) {
        randomNumber = "Rock";
    } else if (randomNumber <= 66) {
        randomNumber = "Paper";
    } else {
        randomNumber = "Scissors";
    }   
    return randomNumber; 
}

function playerInput() {
    let input = prompt ("Enter Rock, Paper of Scissors here");
    input = input.toLowerCase();
    finalOutput = input.charAt(0).toUpperCase() + input.slice(1);
    return finalOutput; 
}

function playRound(playerSelection, computerSelection) {
    let lose = "You Lose! " + computerSelection + " beats " + playerSelection;
    let win = "You Win! " + playerSelection + " beats " + computerSelection;
    let tie = "It's a tie!";

    if (playerSelection+computerSelection == "PaperPaper" || 
        playerSelection+computerSelection == "ScissorsScissors" ||
        playerSelection+computerSelection == "RockRock") {
            return tie;
 
    } else if (playerSelection+computerSelection == "RockScissors" || 
        playerSelection+computerSelection == "PaperRock" ||
        playerSelection+computerSelection == "ScissorsPaper") {
            userScore++;
            return win;

    } else if (playerSelection+computerSelection == "ScissorsRock" || 
        playerSelection+computerSelection == "RockPaper" ||
        playerSelection+computerSelection == "PaperScissors") {
            computerScore++;
            return lose;
    } else {
        return "something went wrong";
    }
}

function game() {
    for (let i = 0; i < 5; i++) { 
        console.log ( playRound(playerInput(), computerPlay()) );
    } 
    if (userScore > computerScore) {
        console.log ("Overall result: You Win!");
    } else if (computerScore > userScore) {
        console.log ("Overall result: You Lose. Better luck next time!");
    } else {
        console.log ("Overall result: It's a draw!");
    }
    console.log ("Player's Score: " + userScore);
    console.log("Computer's Score: " + computerScore);

}


game();