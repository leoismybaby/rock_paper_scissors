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
    computerSelection = getComputerChoice()
    playerSelection = capitalize(playerSelection)

    // if player ties:
    if (playerSelection == computerSelection) {
        return "It's a tie!"
    }
    // If player loses:
    else if (playerSelection == "Rock" && computerSelection == "Paper" || playerSelection == "Paper" && computerSelection == "Scissors" || playerSelection == "Scissors" && computerSelection == "Rock") {
        let outcome = "Lose"
        return `You ${outcome}! ${computerSelection} beats ${playerSelection}`
    } 
    // if player wins:
    else {
        let outcome = "Win"
        return `You ${outcome}! ${playerSelection} beats ${computerSelection}`
    }
}

function game() {
    let rounds = 0
    let playerScore = 0
    let computerScore = 0
    while (rounds < 5) {
        let playerSelection = window.prompt("Choose between Rock, paper or Scissors!")
        let outcome = playRound(playerSelection, getComputerChoice)
        console.log(outcome)
        rounds = rounds + 1
        console.log(`Rounds: ${rounds}`)
        if (outcome.includes("Win")) {
            playerScore = playerScore + 1 
            console.log(`PlayerScore = ${playerScore}`)
        }
        else if (outcome.includes("Lose")) {
            computerScore = computerScore + 1
            console.log(`CompScore = ${computerScore}`)
        }
    }
    if (computerScore > playerScore) {
        console.log(`You lose the game! Haha! Try again.`)
    }
    else if (computerScore < playerScore) {
        console.log(`You beat me! Darn it.`)
    }
    else {
        console.log(`We tied! Let's play again.`)
    }
}

function capitalize(word) {
    let firstLetter = word.charAt(0)
    firstLetter = firstLetter.toUpperCase()
    let remainingLetters = word.substring(1)
    remainingLetters = remainingLetters.toLowerCase()
    return firstLetter + remainingLetters
}



// Test your outputs below to ensure correct values
game()