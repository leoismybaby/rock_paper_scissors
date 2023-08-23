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

// function playRound(playerSelection, computerSelection) {
//     computerSelection = getComputerChoice()
//     playerSelection = 

// }

function capitalize(word) {
    let firstLetter = word.charAt(0)
    firstLetter = firstLetter.toUpperCase()
    let remainingLetters = word.substring(1)
    remainingLetters = remainingLetters.toLowerCase()
    return firstLetter + remainingLetters
}


// Test your outputs below to ensure correct values
temp = capitalize("PAPEr")
console.log(temp)




