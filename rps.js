//starts a new game
function game(){


        //prompt the user for entry
        let playerSelection = window.prompt("Choose your fighter");

        //play the game
        let thisGame = playRps(playerSelection, computerPlay());

        //print the result
        console.log(thisGame);
    
    //display final score
    console.log("Player score: " + playerScore);
    console.log("Computer score: " + compScore);

}

//randomly get rock, paper, scissors from computer
function computerPlay(){
    //randomly get a number between 0-3
    let randNum = Math.random() * 3;
    // if the number <1, rock
    if(randNum < 1){
        return "Rock";
    // if <2, paper
    } else if (randNum < 2){
        return "Paper";
    }
    //else, scissors
    else return "Scissors";
}

//play the game
function playRps(playerSelection, computerSelection){
    //case insensitive
    let ps = playerSelection.toLowerCase();
    let cs = computerSelection.toLowerCase();
    let result;

    //draw scenario
    if(ps == cs){
        result = 0;
    }
    else if (ps == "rock"){
        if(cs == "paper"){
            result = -1;
        }
        else result = 1;
    }
    else if (ps == "paper"){
        if(cs == "rock"){
            result = 1;
        }
        else result = -1;
    }
    else {
        if(cs == "rock"){
            result = -1;
        }
        else result = 1;
    }
    //print result
    printResult(result, ps, cs);
}

//print the results of a game
function printResult(result, playerSelection, computerSelection){
    const ps = document.querySelector(".ps");
    const cs = document.querySelector(".cs");
    const winner = document.querySelector(".winner");
    if(result == -1){
        compScore++;
        cs.textContent = compScore;
    } else if (result == 1){
        playerScore++;
        ps.textContent = playerScore;
    } 
    else {} //do nothing

    if(compScore == 5){
        winner.textContent = "Computer Wins!";
    }
    else if (playerScore == 5){
        winner.textContent = "You Win!";
    }
    else{} //do nothing
}

//get buttons
const buttons = document.querySelectorAll(".btn");

//add event listener for clicks
buttons.forEach(b => b.addEventListener("click",function(){
    playRps(b.textContent,computerPlay());
})
)

//start keeping score
let playerScore = 0;
let compScore = 0;