
//Declare gameChoices as an array.
const gameChoices = ['Rock', 'Paper', 'Scissors']

//declare get getComputerChoice as a function
function getComputerChoice() {
// math.random chooses a random number between 0 and 1 (not including 1)
//gameChoices.length multiplies this by the length of the array.
//math.floor returns whole numbers
//this is applied to the gameChoices array.
    return gameChoices[Math.floor(Math.random() * gameChoices.length)];
}
let roundNumber = 1;
let playerWins = 0;
let computerWins = 0;

function playRound(playerSelection, computerSelection) {

    

    if (playerSelection === computerSelection) {
        alert('You Draw!');
    }
    else if (playerSelection==='Rock'&&computerSelection==='Paper') {
        alert ('You Lose! Paper beats Rock!');
        computerWins ++;
    }
    else if (playerSelection==='Rock'&&computerSelection==='Scissors') {
        alert ('You Win! Rock beats Scissors!')
        playerWins ++;
    }
    else if (playerSelection==='Paper'&&computerSelection==='Scissors') {
        alert ('You Lose! Scissors beats paper!');
        computerWins ++;
    }
    else if (playerSelection==='Paper'&&computerSelection==='Rock') {
        alert ('You Win! Paper beats Rock!');
        playerWins ++;
    }
    else if (playerSelection==='Scissors'&&computerSelection==='Rock') {
        alert ('You Lose! Rock beats Scissors!');
        computerWins ++;
    }
    else if (playerSelection==='Scissors'&&computerSelection==='Paper') {
        alert ('You Win! Scissors beats Paper!');
        playerWins ++;
    }
    roundNumber ++ ; 
    (`Current score is Player: ${playerWins} Computer: ${computerWins}`);
}
const roundCounter = 0;

function game() {
    for (let i=0; i<5; i++) {
    let playerSelection = prompt('Rock Paper or Scissors?');
    playRound(playerSelection, getComputerChoice());
    }
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

const computerSelection = getComputerChoice();
console.log(game());

