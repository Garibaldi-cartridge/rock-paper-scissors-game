
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

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return 'You Draw!';
    }
    else if (playerSelection==='Rock'&&computerSelection==='Paper') {
        return 'You Lose! Paper beats Rock!';
    }
    else if (playerSelection==='Rock'&&computerSelection==='Scissors') {
        return 'You Win! Rock beats Scissors!';
    }
    else if (playerSelection==='Paper'&&computerSelection==='Scissors') {
        return 'You Lose! Scissors beats paper!';
    }
    else if (playerSelection==='Paper'&&computerSelection==='Rock') {
        return 'You Win! Paper beats Rock!';
    }
    else if (playerSelection==='Scissors'&&computerSelection==='Rock') {
        return 'You Lose! Rock beats Scissors!';
    }
    else if (playerSelection==='Scissors'&&computerSelection==='Paper') {
        return 'You Win! Scissors beats Paper!';
    }
}

function game() {
    for (let i=0; i<5; i++){

    }
}

const playerSelection = "Rock";
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));