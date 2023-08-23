function getComputerChoice() {
    selection = Math.floor(Math.random() * 3)
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

temp = getComputerChoice()
console.log(temp)



