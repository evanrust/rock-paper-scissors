//Vars
const rock = document.querySelector(".rock")
const paper = document.querySelector(".paper")
const scissors = document.querySelector(".scissors")
const results = document.querySelector(".results")
const overall = document.querySelector(".gameProgress")


// add listeners to the buttons -- when clicked, save that as the human choice and start a round
rock.addEventListener('click',startRound)
paper.addEventListener('click',startRound)
scissors.addEventListener('click',startRound)

//Function that starts the game/saves human choice
function startRound(e){
    let humanChoice = e.target.textContent
    playRound(humanChoice)
}

//add to scores
function roundWon(e){
    let currScore = parseInt(e.textContent)
    let newScore = currScore + 1
    e.textContent = newScore
}

//Function that randomly returns rock, paper, scissors
function getComputerChoice() {
    let num = Math.random() * 100;
    let choice;

    //equal weight of RPS
    if (num < 33) {
        choice = "Rock"
    } else if (num < 66) {
        choice = "Paper"
    } else choice = "Scissors";

    return choice;
}


//Function to play the game
function playRound(humanChoice) {

    const computerScoreTxt = document.querySelector(".compScore") ///how do i get the value from the html
    const humanScoreTxt = document.querySelector(".humanScore")

    //set up stuff for displaying on this li
    let newLi = document.createElement("li")
    let thisResult

    //get computer choice
    let computerChoice = getComputerChoice();

    //Draw Scenario
    if (computerChoice === humanChoice) {
        thisResult = 'Draw'
    } else if ((humanChoice === 'Rock' && computerChoice === 'Scissors') || (humanChoice === 'Paper' && computerChoice === 'Rock') || (humanChoice === 'Scissors' && computerChoice === 'paper')) {
        thisResult = "You win! " + humanChoice + " beats " + computerChoice
        roundWon(humanScoreTxt)
    } else {
        thisResult = "You lose! " + computerChoice + " beats " + humanChoice
        roundWon(computerScoreTxt)
    }

    //update game progress if won
    if(humanScoreTxt.textContent === '5' || computerScoreTxt.textContent === '5'){
        overall.textContent = 'GAME OVER'
    }

    //add a bullet with the result + score
    newLi.textContent = thisResult
    results.appendChild(newLi)

}

//main



/* below is logic to play 5 rounds

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

*/