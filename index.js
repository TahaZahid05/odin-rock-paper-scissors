function getComputerChoice() {
    let val = Math.floor(Math.random() * 3);
    if (val == 0){
        return "rock";
    }
    else if(val == 1){
        return "paper";
    }
    else {
        return "scissors";
    }
}


function getHumanChoice(x){
    if (x == 0){
        return "rock";
    }
    else if(x == 1){
        return "paper";
    }
    else {
        return "scissors";
    }
}

function playRound(humanChoice, computerChoice) {
    if ((humanChoice == "rock" && computerChoice == "rock") || (humanChoice == "paper" && computerChoice == "paper") || (humanChoice == "scissors" && computerChoice == "scissors")){
        return "Draw";
    }
    else if ((humanChoice == "rock" && computerChoice == "scissors") || (humanChoice == "paper" && computerChoice == "rock") || (humanChoice == "scissors" && computerChoice == "paper")){
        return "Win";
    }
    else {
        return"Lose";
    }
}

function playGame() {
    let humanScore = 0;
    let computerScore = 0;
    for (let i = 0; i < 5; i++) {
        let input = prompt("Enter a number between 0 and 2 for your input: ")
        let humanChoice = getHumanChoice(input);
        let computerChoice = getComputerChoice();

        let roundDecision = playRound(humanChoice, computerChoice);


        if (roundDecision == "Draw"){
            console.log("Draw!");
        }
        else if(roundDecision == "Win"){
            console.log("You win! " + humanChoice + " beats " + computerChoice);
            humanScore += 1;
        }
        else {
            console.log("You lose! " + computerChoice + " beats " + humanChoice);
            computerScore += 1;
        }
    }
    if (computerScore == humanScore) {
        console.log("Final Result: Draw!");
    }
    else if(computerScore > humanScore) {
        console.log("Final Result: Computer Wins!");
    }
    else {
        console.log("Final Result: Player Wins!");
    }
}



playGame();



