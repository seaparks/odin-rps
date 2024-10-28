let humanScore = 0;
let computerScore = 0;

const winners = {
    rock: "scissors",
    scissors: "paper",
    paper: "rock"
};

const buttons   = document.querySelectorAll('button');
const resultdiv = document.querySelector('#result');
const scorediv  = document.querySelector('#score');

buttons.forEach( button => {
    button.addEventListener('click', function(){
        playRound(button.value)
    });
});

function playRound( humanChoice ){

    const computerChoice = getComputerChoice();

    if ( humanChoice == computerChoice ){
        updateResult(`Both chose: ${humanChoice}`);

    } else if ( winners[humanChoice] == computerChoice ){
        humanScore++;
        updateResult(`Human wins! They chose ${humanChoice} and computer chose ${computerChoice}`);
        checkIfOver();
    } else {
        computerScore++;
        updateResult(`Computer wins! They chose ${computerChoice} and human chose ${humanChoice}`);
        checkIfOver();
    }
}

function updateResult(result){
    const resultspan = document.createElement('span');
    resultspan.textContent = result;
    resultdiv.innerHTML = '';
    resultdiv.appendChild(resultspan);

    const scorespan = document.createElement('span');
    scorespan.textContent = `Current score: Human ${humanScore}, Computer ${computerScore}`;
    scorediv.innerHTML = '';
    scorediv.appendChild(scorespan);
}

function checkIfOver() {
    if (humanScore == 5){
        
    } else if (computerScore == 5){

    }
}

function getComputerChoice() {
    let num = Math.floor( Math.random() * 3 );
    if ( num == 0 ) {
        return "rock";
    } else if ( num == 1 ) {
        return "paper";
    } else {
        return "scissors";
    }
}