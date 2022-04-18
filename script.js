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

function playRound(playerSelection, computerSelection) {
    let lose = "You Lose! " + computerSelection + " beats " + playerSelection;
    let win = "You Win! " + playerSelection + " beats " + computerSelection;
    let tie = "It's a tie!";

    if (playerSelection == "Rock" && computerSelection == "Paper" || 
    playerSelection == "Paper" && computerSelection == "Scissors" ||
    playerSelection == "Scissors" && computerSelection == "Rock") {
        return lose;

    } else if (playerSelection == "Rock" && computerSelection == "Scissors" || 
    playerSelection == "Paper" && computerSelection == "Rock" ||
    playerSelection == "Scissors" && computerSelection == "Paper") {
        return win;

    } else if (playerSelection == "Rock" && computerSelection == "Rock" || 
    playerSelection == "Paper" && computerSelection == "Paper" ||
    playerSelection == "Scissors" && computerSelection == "Scissors") {
        return tie;  

    } else {
        return "meow, something went wrong";
    }
}



// const playerSelection = prompt ("Type here");
// const computerSelection = computerPlay();
// console.log(playRound(playerSelection, computerSelection));


function game() {
    for (let i = 0; i < 5; i++) {
        const playerSelection = prompt ("Type here");
        const computerSelection = computerPlay();
        console.log (playRound(playerSelection,computerSelection));
    }
}

game();

//get playerSelection to prompt user for an input: rock, paper or scissors
//          -how do I make prompt case insensitive?
// how do I loop playRound() 5 times inside of game()? 
// how do I track the results of playRound() inside of game() to show overall winner? 