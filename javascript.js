console.log("Hello, world!");

let humanScore    = 0;
let computerScore = 0;

const humanSelection    = getHumanChoice();
const computerSelection = getComputerChoice();

const winners = {
    rock: "scissors",
    scissors: "paper",
    paper: "rock"
};

playRound( humanSelection, computerSelection );

function playRound( humanChoice, computerChoice ){

    if ( humanChoice == computerChoice ){
        console.log( "Both chose: " + humanChoice );
    } else if ( winners[humanChoice] == computerChoice ){
        console.log( `Human wins! They chose ${humanChoice} and computer chose ${computerChoice}` );
        humanScore++;
    } else {
        console.log( `Computer wins! They chose ${computerChoice} and human chose ${humanChoice}`);
        computerScore++;
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

function getHumanChoice() {
    const validOptions = ["rock", "paper", "scissors"];
    let human = prompt("Please type 'rock', 'paper', or 'scissors'");
    while ( !validOptions.includes(human) ){
        human = prompt("Invalid choice. Please type 'rock', 'paper', or 'scissors'")
    }
    return human;
}