
let playGame = confirm("Shall we play rock, paper or scissors?");

if (playGame) {
    let playerChoice = prompt("Please enter rock, paper or scissors.");
    if (playerChoice) {
        let playerOne = playerChoice.trim().toLowerCase();
        if (playerOne === "rock" || playerOne === "paper" || playerOne === "scissors") {
            let computerChoice = Math.floor(Math.random() * 3 + 1);
            let computer = computerChoice === 1 ? "rock"
                : computerChoice === 2 ? "paper"
                    : "scissors";

            let result = playerOne === computer
                ? "Tie game!"
                : playerOne === "rock" && computer === "paper" ? `playerOne: ${playerOne}\ncomputer:${computer}\nComputer wins!`
                    : playerOne === "paper" && computer === "scissors" ? `playerOne: ${playerOne}\ncomputer:${computer}\nComputer wins!`
                        : playerOne === "scissors" && computer === "rock" ? `playerOne: ${playerOne}\ncomputer:${computer}\nComputer wins!`
                            : `playerOne: ${playerOne}\ncomputer:${computer}\nPlayer One wins!`

            alert(result);
            let playAgain = confirm("Play again ?");
            playAgain ? location.reload() : alert("Ok, Thanks for playing");
        } else {
            alert("You didn't enter rock, paper, scissors.")
        }
    } else {
        alert("I guess you changed your mind. Maybe nex time.");
    }
} else {
    alert("Ok, may be next time.")
}

