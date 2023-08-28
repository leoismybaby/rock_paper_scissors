//*Variables*
let rockBtn = document.getElementById('Rock')
let paperBtn = document.querySelector('#Paper')
let scissorsBtn = document.querySelector('#Scissors')
let result = document.createElement('div')
let score = document.createElement('div')
let gameOutcome = document.createElement('div')
let roundOutcome = document.createElement('div')
result.setAttribute('id', 'result')
score.setAttribute('id', "score")
gameOutcome.setAttribute('id', "gameOutcome")
roundOutcome.setAttribute('id', 'roundOutcome')
score.textContent = "You: 0 Computer: 0"

document.body.appendChild(result)
document.body.appendChild(score)
document.body.appendChild(roundOutcome)
document.body.appendChild(gameOutcome)

let playerScore = 0
let computerScore = 0

function capitalize(word) {
    let firstLetter = word.charAt(0)
    firstLetter = firstLetter.toUpperCase()
    let remainingLetters = word.substring(1)
    remainingLetters = remainingLetters.toLowerCase()
    return firstLetter + remainingLetters
}

function getComputerChoice() {
    let selection = Math.floor(Math.random() * 3)
    if (selection == 0) {
        selection = "Paper"
    }
    else if (selection == 1) {
        selection = "Scissors"
    }
    else {
        selection = "Rock"
    }
    return selection
}

function playRound(playerSelection, computerSelection) {
    // computerSelection = getComputerChoice()
    playerSelection = capitalize(playerSelection)

    if (playerSelection == computerSelection) {
        roundOutcome.textContent = "It's a tie!"
    }
    else if (playerSelection == "Rock" && computerSelection == "Paper" || playerSelection == "Paper" && computerSelection == "Scissors" || playerSelection == "Scissors" && computerSelection == "Rock") {
        roundOutcome.textContent = `You Lose! ${computerSelection} beats ${playerSelection}`;
        computerScore++;
    }    
    else {
        roundOutcome.textContent = `You Win! ${playerSelection} beats ${computerSelection}`;
        playerScore++
    }
    
}

rockBtn.addEventListener('click', () => choiceSelected('rock'));
paperBtn.addEventListener('click', () => choiceSelected('paper'));
scissorsBtn.addEventListener('click', () => choiceSelected('scissors'));


function isGameOver() {
    if (playerScore === 5 || computerScore === 5) {
        if (playerScore > computerScore) {
            gameOutcome.textContent = "Darn, you won the game!";
        } else {
            gameOutcome.textContent = "Hah, you lost the game!"
        }

    }
}

function choiceSelected(playerSelection) {
    computerSelection = getComputerChoice();
    playRound(playerSelection, computerSelection);
    document.querySelector('#score').textContent = `You = ${playerScore} Computer Score = ${computerScore}`;
    isGameOver();
}

