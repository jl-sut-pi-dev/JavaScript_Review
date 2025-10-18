const js_result = document.querySelector(".js-result");
const js_move = document.querySelector(".js-move");
let score = JSON.parse(localStorage.getItem("score")) || {
  wins: 0,
  losses: 0,
  ties: 0,
};
updateResultElement();

function getComputerMove() {
  const random = Math.random();
  if (random < 1 / 3) {
    return "rock";
  } else if (random < 2 / 3) {
    return "paper";
  } else {
    return "scissors";
  }
}
function playGame(playerMove) {
  let computerMove = getComputerMove();
  let result;
  if (playerMove === "rock") {
    if (computerMove === "rock") {
      score.ties += 1;
      result = "tie";
    } else if (computerMove === "paper") {
      score.losses += 1;
      result = "You lose.";
    } else if (computerMove === "scissors") {
      score.wins += 1;
      result = "You win.";
    }
  } else if (playerMove === "paper") {
    if (computerMove === "paper") {
      score.ties += 1;
      result = "tie";
    } else if (computerMove === "rock") {
      score.wins += 1;
      result = "You win.";
    } else if (computerMove === "scissors") {
      score.losses += 1;
      result = "You lose.";
    }
  } else if (playerMove === "scissors") {
    if (computerMove === "scissors") {
      score.ties += 1;
      result = "tie";
    } else if (computerMove === "rock") {
      score.losses += 1;
      result = "You lose.";
    } else if (computerMove === "paper") {
      score.wins += 1;
      result = "You win.";
    }
  }

  localStorage.setItem("score", JSON.stringify(score));

  js_result.innerHTML = result;
  if (playerMove === "rock") {
  }

  js_move.innerHTML = `   You
      <img class="move-icon" src="../images/${playerMove}-emoji.png" alt="" />
      <img class="move-icon" src="../images/${computerMove}-emoji.png" alt="" />
      Computer `;
  updateResultElement();
}

function resetScore() {
  score.wins = 0;
  score.losses = 0;
  score.ties = 0;
  localStorage.removeItem(`score`);
  updateResultElement();
  js_move.innerText = "";
  js_result.innerText = "";
}

function updateResultElement() {
  document.querySelector(
    ".js-score"
  ).innerHTML = `  wins: ${score.wins} , losses: ${score.losses}, tie : ${score.ties}`;
}
