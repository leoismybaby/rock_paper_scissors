// Helper functions
function capitalize(word) {
    let firstLetter = word.charAt(0)
    firstLetter = firstLetter.toUpperCase()
    let remainingLetters = word.substring(1)
    remainingLetters = remainingLetters.toLowerCase()
    return firstLetter + remainingLetters
}

// Main functions

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

    // if player ties:
    if (playerSelection == computerSelection) {
        return "It's a tie!"
       
    }
    // If player loses:
    else if (playerSelection == "Rock" && computerSelection == "Paper" || playerSelection == "Paper" && computerSelection == "Scissors" || playerSelection == "Scissors" && computerSelection == "Rock") {
        return `You Lose! ${computerSelection} beats ${playerSelection}`
    } 
        
    // if player wins:
    else {
        return `You Win! ${playerSelection} beats ${computerSelection}`
    }
}

//DOM Manipulation and Events
//*Variables*
let rockBtn = document.getElementById('Rock')
let paperBtn = document.querySelector('#Paper')
let scissorsBtn = document.querySelector('#Scissors')
let result = document.createElement('div')
let score = document.createElement('div')
result.setAttribute('id', 'result')
score.setAttribute('id', "score")
score.textContent = "You: 0 Computer: 0"

document.body.appendChild(result)
document.body.appendChild(score)

rockBtn.addEventListener('click', function (e) {
    verdict = playRound("Rock", getComputerChoice())
    document.querySelector('#result').textContent = verdict
    }
)

paperBtn.addEventListener('click', function (e) {
    playRound("Paper", getComputerChoice())
    verdict = playRound("Paper", getComputerChoice())
    document.querySelector('#result').textContent = verdict
})

scissorsBtn.addEventListener('click', function (e) {
    playRound("Scissors", getComputerChoice())
    verdict = playRound("Scissors", getComputerChoice())
    document.querySelector('#result').textContent = verdict
})

// function game() {
//     let rounds = 0
//     let playerScore = 0
//     let computerScore = 0
//     while (rounds < 5) {
//         // play round BUT pass in correct PlayerSelection
//         //return outcome (Win, or lose)
//         rounds = rounds + 1
//         console.log(`Rounds: ${rounds}`)
//         if (outcome.includes("Win")) {
//             playerScore = playerScore + 1 
//             document.querySelector('#score').textContent = `You = ${playerScore} Computer Score = ${computerScore}`
//         }
//         else if (outcome.includes("Lose")) {
//             computerScore = computerScore + 1
//             document.querySelector('#score').textContent = `You = ${playerScore} Computer Score = ${computerScore}`
//         }
//     }
//     // After 5 rounds have been played, compare scores and declare winner.
//     if (computerScore > playerScore) {
//         console.log(`You lose the game! Haha! Try again.`)
//     }
//     else if (computerScore < playerScore) {
//         console.log(`You beat me! Darn it.`)
//     }
//     else {
//         console.log(`We tied! Let's play again.`)
//     }
// }

// game()

