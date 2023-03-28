let userScore = 0 , computerScore = 0;

const user = document.querySelector('.user');
const computer = document.querySelector('.computer');
const uc = document.querySelector('.uc');
const cc = document.querySelector('.cc');

const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
    let id = button.getAttribute('class');
    button.addEventListener('click', function() {
        if (id === "rock")
            game("rock");
        else if (id === "paper")
            game("paper");
        else
            game("scissors")
    })
})

function getComputerChoice () {
    let choice = Math.floor(Math.random() * 3);
    if (choice === 0)
        return "rock";
    else if (choice === 1)
        return "paper";
    else
        return "scissors";
}

function playRound (playerSelection,computerSelection) {
    let player = playerSelection;
    let computer = computerSelection;

    uc.textContent = `you chose : ${player}`;
    cc.textContent = `computer chose : ${computer}`;

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

function game (userChoice) {
    let computerChoice;
    computerChoice = getComputerChoice();
    playRound(userChoice,computerChoice);

    user.textContent = `user score : ${userScore}`;
    computer.textContent = `computer score : ${computerScore}`;


    if (userScore >= 5)
        console.log("you win the game");
    else if (computerScore >= 5)
        console.log("computer win the game");
}