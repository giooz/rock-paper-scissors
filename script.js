const computerChoiceDisplay = document.getElementById('computer-choice');
const userChoiceDisplay = document.getElementById('user-choice');
const resultDisplay = document.getElementById('result');
const possibleChoices = document.querySelectorAll('button');

let userChoice;
let computerChoice;
let result;

possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
    userChoice = e.target.id;
    userChoiceDisplay.innerHTML = userChoice;
    generateCumputerChoice();
    getResult();
}))

function generateCumputerChoice(){
    const randomNumber = Math.ceil(Math.random() * 3);
    
    switch (randomNumber){
        case 1:
            computerChoice = 'rock';
            break;
        case 2:
            computerChoice = 'paper';
            break;
        case 3:
            computerChoice = 'scissors';
            break;
    }
    computerChoiceDisplay.innerHTML = computerChoice;
}

function getResult() {
    if (computerChoice === userChoice) {
        result = 'draw';
    } else if (computerChoice === 'rock' && userChoice === 'paper') {
        result = 'you win';
    } else if (computerChoice === 'paper' && userChoice === 'scissors') {
        result = 'you win';
    } else  if (computerChoice === 'scissors' && userChoice === 'rock') {
        result = 'you win';
    } else  {
        result = 'you lose';
    }
    resultDisplay.innerHTML = result;
}