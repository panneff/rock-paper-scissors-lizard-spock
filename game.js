const buttons = document.querySelectorAll(".choice");
const resultSpan = document.getElementById("result");
const playerChoiceSpan = document.getElementById("player-choice");
const pcChoiceSpan = document.getElementById("pc-choice");
const playerScoreSpan = document.getElementById("player-score");
const pcScoreSpan = document.getElementById("pc-score");
const confirmButton = document.getElementById("confirm-button")
let playerChoice = null;
let playerScore = 0;
let pcScore = 0;

const choices = ["rock", "paper", "scissors", "lizard", "spock"];
const possibilties = {
    rock: ["scissors", "lizard"],
    paper: ["rock", "spock"],
    scissors: ["paper", "lizard"],
    lizard: ["paper", "spock"],
    spock: ["scissors", "rock"],
};


// get PC choice
function getPCChoice() {
    return choices[Math.floor(Math.random() * choices.length)];
}


function determineWin(player, pc) {
    if (player === pc) {
        return "It's a tie!";
    } else if (possibilties[player].includes(pc)) {
        playerScore++;
        playerScoreSpan.textContent = playerScore;
        return "You win!";
    } else {
        pcScore++;
        // leaving out pc score stuff until I can come up with a use for it, waste of space currently.
        // pcScoreSpan.textContent = pcScore;
        return "You lose!";
    }
}

// button click stuff
buttons.forEach(button => {
    button.addEventListener("click", () => {
        const playerChoice = button.id;
        const pcChoice = getPCChoice();
        const result = determineWin(playerChoice, pcChoice);

        playerChoiceSpan.textContent = playerChoice;
        pcChoiceSpan.textContent = pcChoice;
        resultSpan.textContent = result;

        if (!playerChoice) {
            // occurs when user doesn't make a choice
            return;
        }

        document.querySelector(".result").style.display = "block";
    });
});
