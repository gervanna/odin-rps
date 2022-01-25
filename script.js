let playerScore = 0;
let computerScore = 0;
let gameRounds = 0;

//generates 3 random #'s for the rock/paper/scissors choices
function computerPlay() {
    let randomChoice = Math.floor(Math.random()*3);
    switch (randomChoice) { //used switch statement to assign #'s to the appropriate strings
        case 0:
            return 'rock';
        case 1:
            return 'paper';
        case 2:
            return 'scissors';
    }
}

function playRound(playerSelection, computerSelection) { //func with game logic to check winner/loser
    if (playerSelection === computerSelection) {
        return "It's a tie.";
    } else if (playerSelection === 'rock' && computerSelection === 'scissors') {
        playerScore++;
        return "You win. Rock smashes scissors.";
    } else if (computerSelection === 'rock' && playerSelection === 'scissors') {
        computerScore++;
        return "You lose. Rock smashes scissors.";
    } else if (playerSelection === 'paper' && computerSelection === 'rock') {
        playerScore++;
        return "You win. Paper covers rock.";
    } else if (computerSelection === 'paper' && playerSelection === 'rock') {
        computerScore++;
        return "You lose. Paper covers rock.";
    } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
        playerScore++;
        return "You win. Scissors cuts paper.";
    } else if (computerSelection === 'scissors' && playerSelection === 'paper') {
        computerScore++;
        return "You lose. Scissors cuts paper.";
    }
}

function runGame() {
    while (gameRounds < 5) { //while inside runGame in order to play 5 rounds and get a new choice each round
        const playerSelection = window.prompt("Type: rock, paper or scissors ").toLowerCase(); //promt for user choice and toLowerCase makes string lower before running checks
        const computerSelection = computerPlay(); //computer choice from random # func
        console.log(playRound(playerSelection, computerSelection)); //rounds of the game
        gameRounds++ //increments gameRounds in order to end the loop after 5 rounds
    }
    if (playerScore === computerScore) {
        return "\nGAME OVER! The game is tied.";
    } else if (playerScore > computerScore) {
        return "\nGAME OVER! You won the game.";
    } else {
        return "\nGAME OVER! The computer won the game.";
    }
}
console.log(runGame()); //logs the entire game to console. 