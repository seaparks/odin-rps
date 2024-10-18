console.log("Hello, world!");

let humanScore;
let computerScore;

const winners = {
    rock: "scissors",
    scissors: "paper",
    paper: "rock"
};

playGame();

function playGame(){
    console.log("Let's play five rounds of Rock-Paper-Scissors!")

    // in case it gets called again
    humanScore    = 0;
    computerScore = 0;

    let games = 0;
    while( games < 5 ) {

        const humanSelection    = getHumanChoice();
        const computerSelection = getComputerChoice();
        playRound( humanSelection, computerSelection );
        games++;
    }

    console.log( `Final score: Human ${humanScore}, Computer ${computerScore}`);

}


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