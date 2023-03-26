let userScore = 0 , computerScore = 0;
game();

function getComputerChoice () {
    let choice = Math.floor(Math.random() * 3);
    console.log(choice);
    if (choice === 0)
        return "rock";
    else if (choice === 1)
        return "paper";
    else
        return "scissors";
}

function getUserChoice () {
    let flag=0 , choice;
    while (flag===0) {
        choice = prompt("Enter your choice");
        choice = choice.toLowerCase();
        if (choice==="rock"||choice==="paper"||choice==="scissors")
            flag = 1;
        else
            console.log("invalid choice");
    }
    return choice;
}

function playRound (playerSelection,computerSelection) {
    let player = playerSelection;
    let computer = computerSelection;
    if ((player === "rock") && (computer === "scissors")) {
        console.log("you win...rock beats scissors");
        userScore++;
    }
    else if ((player === "paper") && (computer === "rock")) {
        console.log("you win...paper beats rock");
        userScore++;
    }
    else if ((player === "scissors") && (computer === "paper")) {
        console.log("you win...scissors beats paper");
        userScore++;
    }
    else if ((player === "scissors") && (computer === "rock")) {
        console.log("you lose...rock beats scissors");
        computerScore++;
    }
    else if ((player === "rock") && (computer === "paper")) {
        console.log("you lose...paper beats rock");
        computerScore++;
    }
    else if ((player === "paper") && (computer === "scissors")) {
        console.log("you lose...scissors beats paper");
        computerScore++;
    }
    else
        console.log(`It\'s a draw...both chose ${player}`);
}

function game () {
    let userChoice , computerChoice;
    for (let i=0;i<5;++i) {
        userChoice = getUserChoice();
        computerChoice = getComputerChoice();
        playRound(userChoice,computerChoice);
    }
    if (userScore > computerScore)
        console.log("you win the game");
    else if (computerChoice > userScore)
        console.log("computer win the game");
    else
        console.log("It's a draw...thankyou for playing");
}