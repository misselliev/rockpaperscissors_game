// Setting up dom
// const container = document.querySelector("#main");
// var board = document.createElement("div");
// container.appendChild(board);
// var board = document.createElement("div");
// container.appendChild(board);
// var compScore = document.createElement("p");
// var yourScore = document.createElement("p");
// board.appendChild(compScore);
// board.appendChild(yourScore);
// var results = document.createElement("div");
// container.appendChild(results);

// Setting computer inputs
function robot() {
  var computerMove = ["rock", "paper", "scissors"];
  var randomMove =
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
  alert(result);
}

// Setting user inputs

var rock = document.querySelector("#rock");
rock.addEventListener("click", () => {
  console.log("rock");
  playerSelection = "rock";
  computerMove = robot();
  round("rock", computerMove);
});
var paper = document.querySelector("#paper");
paper.addEventListener("click", () => {
  console.log("paper");
  round("paper", computerMove);
});

var scissors = document.querySelector("#scissors");
scissors.addEventListener("click", () => {
  console.log("scissors");
  round("scissors", computerMove);
});

// Running a game for five rounds!

function game() {
  //   var userScore = 0;
  //   var robotScore = 0;
  //   for (var i = 1; i <= 5; i++) {
  //     var userSelection = playerSelection;
  //     var robotSelection = robot();
  //     result = round(userSelection, robotSelection);
  //     // Finding a winner
  //     if (result.includes("win")) {
  //       userScore += 1;
  //     } else {
  //       computerScore += 1;
  //     }
  //     if (userScore > computerScore) {
  //       alert = "Congrats! You win!";
  //     } else {
  //       alert = "Better luck next time!";
  //     }
  //   }
}
