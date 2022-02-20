//GAME LOGIC
let playerScore = 0;
let computerScore = 0;
let roundResults;

function computerPlay() {
    let randomChoice = Math.floor(Math.random()*5);
    switch(randomChoice) {
        case 0:
            return 'ROCK';
        case 1:
            return 'PAPER';
        case 2:
            return 'SCISSORS';
        case 3:
            return 'LIZARD';
        case 4:
            return 'SPOCK';
    }
}
function playRound(playerSelection) {
    const computerSelection = computerPlay();
    if (playerSelection === computerSelection) {
        roundResults = [playerSelection, computerSelection, 'tie'];
    }
    if (
        (playerSelection === 'SCISSORS' && computerSelection === 'PAPER') ||
        (playerSelection === 'PAPER' && computerSelection === 'ROCK') ||
        (playerSelection === 'ROCK' && computerSelection === 'LIZARD') ||
        (playerSelection === 'LIZARD' && computerSelection === 'SPOCK') ||
        (playerSelection === 'SPOCK' && computerSelection === 'SCISSORS') ||
        (playerSelection === 'SCISSORS' && computerSelection === 'LIZARD') ||
        (playerSelection === 'LIZARD' && computerSelection === 'PAPER') ||
        (playerSelection === 'PAPER' && computerSelection === 'SPOCK') ||
        (playerSelection === 'SPOCK' && computerSelection === 'ROCK') ||
        (playerSelection === 'ROCK' && computerSelection === 'SCISSORS')
      ) {
        playerScore++;
        roundResults = [playerSelection, computerSelection, 'You'];
    }
    if (
        (computerSelection === 'SCISSORS' && playerSelection === 'PAPER') ||
        (computerSelection === 'PAPER' && playerSelection === 'ROCK') ||
        (computerSelection === 'ROCK' && playerSelection === 'LIZARD') ||
        (computerSelection === 'LIZARD' && playerSelection === 'SPOCK') ||
        (computerSelection === 'SPOCK' && playerSelection === 'SCISSORS') ||
        (computerSelection === 'SCISSORS' && playerSelection === 'LIZARD') ||
        (computerSelection === 'LIZARD' && playerSelection === 'PAPER') ||
        (computerSelection === 'PAPER' && playerSelection === 'SPOCK') ||
        (computerSelection === 'SPOCK' && playerSelection === 'ROCK') ||
        (computerSelection === 'ROCK' && playerSelection === 'SCISSORS')
      ) {
        computerScore++;
        roundResults = [playerSelection, computerSelection, 'The computer'];
    }
    return roundResults;
}

//TO ALLOW FOR DOM MANIPULATION TO ACCESS UI?
const scoreDetail = document.getElementById('scoreDetail');
const scoreMsgs = document.getElementById('scoreMsgs');
const playerChoice = document.getElementById('playerChoice');
const computerChoice = document.getElementById('computerChoice');
const playerScoreCurrent = document.getElementById('playerScore');
const computerScoreCurrent = document.getElementById('computerScore');
const rockBtn = document.getElementById('rockBtn');
const paperBtn = document.getElementById('paperBtn');
const scissorsBtn = document.getElementById('scissorsBtn');
const lizardBtn = document.getElementById('lizardBtn');
const spockBtn = document.getElementById('spockBtn');
const restartBtn = document.getElementById('restartBtn');

rockBtn.addEventListener('click', () => handleButtonValue('ROCK'));
paperBtn.addEventListener('click', () => handleButtonValue('PAPER'));
scissorsBtn.addEventListener('click', () => handleButtonValue('SCISSORS'))
lizardBtn.addEventListener('click', () => handleButtonValue('LIZARD'))
spockBtn.addEventListener('click', () => handleButtonValue('SPOCK'))

function handleButtonValue (buttonName) {
    result = playRound(buttonName);
    updateScoreBoard(result);
    isGameWon(); 
};

function isGameWon (){
    if (playerScore === 5 || computerScore === 5) {
        rockBtn.disabled = true;
        paperBtn.disabled = true;
        scissorsBtn.disabled = true;
        lizardBtn.disabled = true;
        spockBtn.disabled = true;
    }
}
restartBtn.addEventListener('click', function() {
    playerScore = 0;
    computerScore = 0;
    roundResults = null;
    rockBtn.disabled = false;
    paperBtn.disabled = false;
    scissorsBtn.disabled = false;
    lizardBtn.disabled = false;
    spockBtn.disabled = false;
    scoreDetail.textContent = "What will you choose?";
    scoreMsgs.textContent = "First to 5 points is the winner!"
    playerScoreCurrent.textContent = 'Player: 0';
    computerScoreCurrent.textContent = 'Computer: 0';
    playerChoice.textContent = null;
    computerChoice.textContent = null;
});

function updateScoreBoard (result) {
    playerScoreCurrent.textContent = `Player: ${playerScore}`;
    computerScoreCurrent.textContent = `Computer: ${computerScore}`;
    let roundChoices;
    let roundMsg;
    if (result[2] === 'tie') {
        roundMsg = `${result[0]} ties with ${result[1]}.`
        roundChoices = "It's a tie!"
    } else if (result[2] === 'You') {
        roundMsg = `${result[0]} beats ${result[1]}.`;
        roundChoices = "You won!"
    } else {
        roundMsg = `${result[1]} beats ${result[0]}.`
        roundChoices = "You lost!"
    }
    scoreDetail.textContent = roundChoices;
    scoreMsgs.textContent = roundMsg;
    playerChoice.textContent = `${result[0]}`
    computerChoice.textContent = `${result[1]}`
};