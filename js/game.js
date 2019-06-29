// Setting user inputs

var rock = document.querySelector("#rock");
rock.addEventListener("click", () => {
  console.log("rock");
});
var paper = document.querySelector("#paper");
paper.addEventListener("click", () => {
  console.log("paper");
});

var scissors = document.querySelector("#scissors");
scissors.addEventListener("click", () => {
  console.log("scissors");
});

// Setting computer inputs
function robot() {
  let computerMove = ["rock", "paper", "scissors"];
  let randomMove =
    computerMove[Math.floor(Math.random() * computerMove.length)];
  return randomMove;
}

// Setting up a game round
function round(playerSelection, computerSelection) {
  let result = "";
  let tie = "Oh, it's a tie! Try again";

  switch (playerSelection) {
    case "rock":
      if (computerSelection == "scissors") {
        result = "You lose, rock beats scissors!";
      } else if (computerSelection == "paper") {
        result = "You win, paper beats rock!";
      } else if (computerSelection == playerSelection) {
        result = tie;
      } else {
        result = "Try again!";
      }
      break;

    case "paper":
      if (computerSelection == "rock") {
        result = "You loose, paper beats rock!";
      } else if (computerSelection == "scissors") {
        result = "You win, scissors beat paper!";
      } else if (computerSelection == playerSelection) {
        result = tie;
      } else {
        result = "Try again!";
      }
      break;

    case "scissors":
      if (computerSelection == "rock") {
        result = "You win! Rock beats Scissors";
      } else if (computerSelection == "paper") {
        result = "You lose! Scissors beats Paper";
      } else if (computerSelection == playerSelection) {
        result = tie;
      } else {
        result = "Try again!";
      }
      break;
  }
  return result;
}

// Running a game!

function game() {
  let userScore = 0;
  let computerScore = 0;
  let message = "";

  for (var i = 1; i <= 5; i++) {
    let playerSelection = prompt("Rock, paper or scissors?").toLowerCase();
    let computerSelection = computerPlay();
    result = playRound(playerSelection, computerSelection);
    console.log("Round " + i + ": " + result);

    if (result.includes("win")) {
      userScore += 1;
    } else {
      computerScore += 1;
    }

    if (userScore > computerScore) {
      message = "Congrats! You win!";
    } else {
      message = "Better luck next time!";
    }
  }
  console.log("You: " + userScore + "\nComputer: " + computerScore);
}

// game();
