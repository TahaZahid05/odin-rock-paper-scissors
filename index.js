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

let input = prompt("Enter a number between 0 and 2 for your input: ")
let humanScore = 0;
let computerScore = 0;

console.log(getHumanChoice(input))