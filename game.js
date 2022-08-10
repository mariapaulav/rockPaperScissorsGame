const computerChoiceDisplay = document.getElementById('computer-choice'),
userChoiceDisplay =document.getElementById('user-choice'),
result = document.getElementById('result')

const possibleChoices = document.querySelectorAll('img')

let userChoice ,computerChoice , results

possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) =>{
   userChoice = e.target.id
//    console.log(userChoice);
//    console.log(e);
   userChoiceDisplay.innerText = userChoice
   generateComputerChoice()
   getResult()
}))

function generateComputerChoice(){
    const randomNumber = Math.floor(Math.random() * possibleChoices.length) + 1
 
    if(randomNumber === 1){
        computerChoice = 'Rock'
    }
    if(randomNumber === 2){
        computerChoice = 'Paper'
    }
    if(randomNumber === 3){
        computerChoice = 'Scissors'
    }
    computerChoiceDisplay.innerText = computerChoice
}

function getResult (){
    if(computerChoice === userChoice){
        results = 'Its a draw !'
    }

    if(computerChoice === 'Rock' && userChoice === 'Scissors'){
        results = 'You lost :( !'
    }
    if(computerChoice === 'Rock' && userChoice === 'Paper'){
        results = 'You win :) !'
    }
    
    if(computerChoice === 'Paper' && userChoice === 'Rock'){
        results = 'You lost :( !'
    }
    if(computerChoice === 'Paper' && userChoice === 'Scissors'){
        results = 'You win :) !'
    }

    if(computerChoice === 'Scissors' && userChoice === 'Paper'){
        results = 'You lost :( !'
    }
    if(computerChoice === 'Scissors' && userChoice === 'Rock'){
        results = 'You win :) !'
    }
    result.innerHTML = results
}