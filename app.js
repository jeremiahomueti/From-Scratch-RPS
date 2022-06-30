const computerChoiceDisplay = document.getElementById('computer-choice')
const userChoiceDisplay = document.getElementById('user-choice')
const resultDisplay = document.getElementById('result')
const possibleChoices = document.querySelectorAll('button')
let userChoice
let computerChoice


possibleChoices.forEach(possibleChoice => {
    possibleChoice.addEventListener('click', e =>
    {
        userChoice = e.target.id
        userChoiceDisplay.innerHTML = userChoice
        generateComputerChoice()
    })
})

function generateComputerChoice() {
    const randomNumbers = Math.floor(Math.random() * 3 ) + 1

    
    if (randomNumbers === 1)
    {
        computerChoice = 'Rock'
    }

    if (randomNumbers === 2)
    {
        computerChoice = 'Paper'
    }

    if (randomNumbers === 3)
    {
        computerChoice = 'Scissors'
    }

    computerChoiceDisplay.innerHTML = computerChoice
}