const computerChoiceDisplay = document.getElementById('computer-choice')
const userChoiceDisplay = document.getElementById('user-choice')
const resultDisplay = document.getElementById('result')
const levelDisplay = document.getElementById('level')
const scoreDisplay = document.getElementById('user-score');
const possibleChoices = document.querySelectorAll('button')

let userChoice
let computerChoice
let result
let level = 1
let score = 0

possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
    userChoice = e.target.id
    userChoiceDisplay.innerHTML = userChoice
    generateComputerChoice()
    getResult()
}))

function generateComputerChoice() {
    const randomNumber = Math.floor(Math.random() * possibleChoices.length)

    if(randomNumber === 0) {
        computerChoice = 'Rock'
    }
    if(randomNumber === 1) {
        computerChoice = 'Scissors'
    }
    if(randomNumber === 2) {
        computerChoice = 'Paper'
    }
    computerChoiceDisplay.innerHTML = computerChoice
}

function getResult() {
    if (computerChoice === userChoice) {
        result = 'it is a draw!'
    }
    if (computerChoice === 'Rock' && userChoice === "Paper") {
        result = 'You win!'
        score += 1
    }
    if (computerChoice === 'Rock' && userChoice === "Scissors") {
        result = 'You lose!'
        score -= 1
    }
    if (computerChoice === 'Paper' && userChoice === "Scissors") {
        result = 'You win!'
        score += 1
    }
    if (computerChoice === 'Paper' && userChoice === "Rock") {
        result = 'You lose!'
        score -= 1
    }
    if (computerChoice === 'Scissors' && userChoice === "Rock") {
        result = 'You win!'
        score += 1
    }
    if (computerChoice === 'Scissors' && userChoice === "Paper") {
        result = 'You lose!'
        score -= 1
    }
    resultDisplay.innerHTML = result
    scoreDisplay.innerHTML = `Score: ${score}`
    checkLevel()
}

function checkLevel() {
    if (score >= 3 && score < 6) {
        level = 2
    } else if (score >= 6 && score < 9) {
        level = 3
    } else if (score >= 9) {
        level = 4
    }
    levelDisplay.innerHTML = `Level: ${level}`
}

