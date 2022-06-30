const computerChoiceDisplay = document.getElementById('computer-choice')
const userChoiceDisplay = document.getElementById('user-choice')
const resultDisplay = document.getElementById('result')
const possibleChoices = document.querySelectorAll('button')
let userChoice
let computerChoice


possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', e => 
{
    userChoice = e.target.id
    userChoiceDisplay.innerHTML = userChoice
    getComputerChoice()
    getResult()
}))


function getComputerChoice()
{
    const randomNumber = Math.floor(Math.random() * 3) + 1

    if (randomNumber === 1)
    {
        computerChoice = 'Rock'
    }

    if (randomNumber === 2)
    {
        computerChoice = 'Paper'
    }

    if (randomNumber === 3)
    {
        computerChoice = 'Scissors'
    }

    computerChoiceDisplay.innerHTML = computerChoice
}

function getResult()

{
    if (userChoice === computerChoice)
    {
        result = 'There was a Tie!'
    }

    if (userChoice == 'Rock' && computerChoice == 'Scissors')
    {
        result = 'You Win!'
    }

    if (userChoice == 'Rock' && computerChoice == 'Paper')
    {
        result = 'You Lose!'
    }

    if (userChoice == 'Paper' && computerChoice == 'Scissors')
    {
        result = 'You Lose!'
    }

    if (userChoice == 'Paper' && computerChoice == 'Rock')
    {
        result = 'You Win!'
    }

    if (userChoice == 'Scissors' && computerChoice == 'Paper')
    {
        result = 'You Win!'
    }

    if (userChoice == 'Scissors' && computerChoice == 'Rock')
    {
        result = 'You Lose!'
    }
    resultDisplay.innerHTML = result
}