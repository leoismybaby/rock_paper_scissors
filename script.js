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


function capitalize(word) {
    let firstLetter = word.charAt(0)
    firstLetter = firstLetter.toUpperCase()
    let remainingLetters = word.substring(1)
    remainingLetters = remainingLetters.toLowerCase()
    return firstLetter + remainingLetters
}



// Test your outputs below to ensure correct values
temp = playRound("PAPEr")
console.log(temp)