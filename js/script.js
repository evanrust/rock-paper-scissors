//Function that randomly returns rock, paper, scissors
function getComputerChoice() {
    let num = Math.random() * 100;
    let choice;

    //equal weight of RPS
    if (num < 33) {
        choice = "rock"
    } else if (num < 66) {
        choice = "paper"
    } else choice = "scissors";

    return choice;
}

//Function that gets the human choice
function getHumanChoice() {
    let choice;
    let isValid = false;

    //validate choice, case-insensitive, keep prompting
    while (!isValid) {
        //get the choice -- could make this a function
        choice = prompt("Enter Rock, Paper, or Scissors").toLowerCase();

        //check if the choice is valid
        if (choice === 'rock' || choice === 'paper' || choice === 'scissors') {
            //if so, exit
            return choice;
        } else {
            console.log("Invalid choice: " + choice)
            // do nothing
        }
    }

    return choice;
}


//Function to play the game
function playRound(humanScore, computerScore) {

    //choose what to throw
    let humanChoice = getHumanChoice();
    let computerChoice = getComputerChoice();

    //Draw Scenario
    if (computerChoice === humanChoice) {
        console.log("Draw!")
    } else if ((humanChoice === 'rock' && computerChoice === 'scissors') || (humanChoice === 'paper' && computerChoice === 'rock') || (humanChoice === 'scissors' && computerChoice === 'paper')) {
        console.log("You win! " + humanChoice + " beats " + computerChoice);
        return 1; //win
    } else {
        console.log("You lose! " + computerChoice + " beats " + humanChoice);
        return -1; //loss
    }

}

function playGame() {

    //initial setup
    let humanScore = 0;
    let computerScore = 0;

    //keep playing until one of the scores reaches 5
    while (humanScore < 5 && computerScore < 5) {
        
        //play a round
        let thisResult = playRound(humanScore,computerScore);

        if (thisResult === 1){
            humanScore++;
        } else if (thisResult === -1){
            computerScore++;
        }

        //report the score
        console.log("Updated score: Human " + humanScore +" , Computer: " + computerScore)

    }

}

//Go!
playGame();