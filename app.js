const computerChoiceDisplay = document.getElementById('computer-choice')
const userChoiceDisplay = document.getElementById('user-choice')
const resultDisplay = document.getElementById('result')
const possibleChoices = document.querySelectorAll('button')
let userChoice


possibleChoices.forEach(possibleChoice => {
    possibleChoice.addEventListener('click', e =>
    {
        userChoice = e.target.id
        userChoiceDisplay.innerHTML = userChoice
    })
})

function generateComputerChoice() {
    const randomNumbers = Math.floor(Math.random() * 3)+1
    Math.floor(Math.random()* 4) +1
    
    if (randomNumbers == 1)
    {
        computerChoiceDisplay = 'Rock'
    }

    if (randomNumbers == 2)
    {
        computerChoiceDisplay = 'Paper'
    }

    if (randomNumbers == 3)
    {
        computerChoiceDisplay = 'Scissors'
    }
}