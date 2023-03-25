function getComputerChoice () {
    let choice = Math.floor(Math.random * 3);
    if (choice === 0)
        return "rock";
    else if (choice === 1)
        return "paper";
    else
        return "scissors";
}

function playRound (playerSelection,computerSelection) {
    let player = playerSelection.toUpperCase();
    let computer = computerSelection;
    if ((player === "rock") && (computer === "scissors"))
        console.log("you win...rock beats paper");
    else if ((player === "paper") && (computer === "rock")) 
        console.log("you win...paper beats rock");
    else if ((player === "scissors") && (computer === "paper"))
        console.log("you win...scissors beats paper");
    else if ((player === "rock") && (computer === "scissors"))
        console.log("you win...rock beats scissors");
    else if ((player === "paper") && (computer === "rock")) 
        console.log("you win...paper beats rock");
    else if ((player === "scissors") && (computer === "paper"))
        console.log("you win...scissors beats paper");
}