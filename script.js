

const gameChoices = ['Rock', 'Paper', 'Scissors']
let roundCounter = 0;
let roundNumber = 1;
let playerWins = 0;
let computerWins = 0;

function getComputerChoice() {

    return gameChoices[Math.floor(Math.random() * gameChoices.length)];
}

function playRound(playerSelection, computerSelection) {

    if (playerSelection === computerSelection) {
        alert('You Draw!');
    }     else if (playerSelection==='Rock'&&computerSelection==='Paper') {
        alert ('You Lose! Paper beats Rock!');
        computerWins ++;
    }     else if (playerSelection==='Rock'&&computerSelection==='Scissors') {
        alert ('You Win! Rock beats Scissors!')
        playerWins ++;
    }     else if (playerSelection==='Paper'&&computerSelection==='Scissors') {
        alert ('You Lose! Scissors beats paper!');
        computerWins ++;
    }    else if (playerSelection==='Paper'&&computerSelection==='Rock') {
        alert ('You Win! Paper beats Rock!');
        playerWins ++;
    }    else if (playerSelection==='Scissors'&&computerSelection==='Rock') {
        alert ('You Lose! Rock beats Scissors!');
        computerWins ++;
    }    else if (playerSelection==='Scissors'&&computerSelection==='Paper') {
        alert ('You Win! Scissors beats Paper!');
        playerWins ++;
    }
    roundCounter ++ ; 
}

function game(example) {
    
    let playerSelection = example;
    playRound(playerSelection, getComputerChoice());
    resultsTracker.textContent = `Round ${roundCounter}. Current score is Player: ${playerWins} Computer: ${computerWins} \n`;
    
    if (roundCounter===5) {
        if (playerWins>computerWins) {
            alert (`You Win! Player: ${playerWins} Computer: ${computerWins}`);
            }
        else if (computerWins>playerWins) {
                alert (`You Lose! Player: ${playerWins} Computer: ${computerWins}`);
            }
        else if (computerWins===playerWins) {
                alert (`It's a Draw! Player: ${playerWins} Computer: ${computerWins}`);
            }
        }
    }
const rockBtn = document.querySelector('#rock');
rockBtn.addEventListener('click', () => {
    game('Rock');
});
const paperBtn = document.querySelector('#paper');
paperBtn.addEventListener('click', () => {
    game('Paper');
});
const scisBtn = document.querySelector('#scissors');
scisBtn.addEventListener('click', () => {
    game('Scissors');
});

const resultsTracker = document.querySelector('#resultsTracker');
const computerSelection = getComputerChoice();

