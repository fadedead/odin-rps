function getComputerChoice() {
  let options = ["rock", "paper", "scissors"];
  let choice = Math.floor(Math.random() * 3);
  return options[choice];
}

function playRound(playerSelection, computerSelection) {
  playerSelection = playerSelection.toLowerCase();
  let win = -1;
  if (playerSelection === "rock") {
    if (computerSelection === "rock") {
      console.log("It's a tie, both pick Rock");
      win = -1;
    }
    if (computerSelection === "paper") {
      console.log("You Lose! Paper beats Rock");
      win = 0;
    }
    if (computerSelection === "scissors") {
      console.log("You Win! Rock beats Scissors");
      win = 1;
    }
  }

  if (playerSelection === "paper") {
    if (computerSelection === "rock") {
      console.log("You Win! Paper beats Rock");
      win = 1;
    }
    if (computerSelection === "paper") {
      console.log("It's a tie, both pick Paper");
      win = -1;
    }
    if (computerSelection === "scissors") {
      console.log("You Lose! Scissors beats Paper");
      win = 0;
    }
  }

  if (playerSelection === "scissors") {
    if (computerSelection === "rock") {
      console.log("You Lose! Rock beats Scissors");
      win = 0;
    }
    if (computerSelection === "paper") {
      console.log("You Win! Scissors beats Paper");
      win = 1;
    }
    if (computerSelection === "scissors") {
      console.log("It's a tie, both pick Scissors");
      win = -1;
    }
  }

  return win;
}

// function game() {
//   let round = 1
//   let computer = 0
//   let player = 0

//     // let playerChoice = prompt("Pick your choice [rock, paper, scissors]")
//     let currWinner = playRound(playerChoice, getComputerChoice())
//     if(currWinner == 0){
//       computer += 1
//     }
//     if(currWinner == 1){
//       player += 1
//     }
//     if(currWinner == -1){
//       player += 1
//       computer += 1
//     }
//     round += 1

//   if(player > computer){
//     console.log(`You Win! with score: ${player}`)
//   }
//   else if(player < computer){
//     console.log(`You Lose! with score: ${player}`)
//   }
//   else{
//     console.log(`It's a Tie! with score: ${player}`)
//   }
// }

function createButtons() {
  const playArea = document.createElement("div");

  const playStyles = {
    display: "flex",
    height: "200px",
    width: "400px",
    background: "lightgrey",
  };
  Object.assign(playArea.style, playStyles);

  const div = document.createElement("div");
  const rock = document.createElement("button");
  const paper = document.createElement("button");
  const scissors = document.createElement("button");

  rock.innerText = "Play Rock";
  paper.innerText = "Play Paper";
  scissors.innerText = "Play Scissors";

  const divRock = document.createElement("div");
  const divPaper = document.createElement("div");
  const divScissor = document.createElement("div");

  const btns = [rock, paper, scissors];
  const divEle = [divRock, divPaper, divScissor];

  for (let i = 0; i < btns.length; i++) {
    divEle[i].appendChild(btns[i]);
  }

  for (let val of divEle) {
    div.appendChild(val);
  }

  const btnStyles = {
    display: "flex",
    color: "grey",
    margin: "12px",
    padding: "12px",
    paddingLeft: "48px",
    gap: "12px",
  };

  Object.assign(div.style, btnStyles);

  document.body.appendChild(playArea);

  document.body.appendChild(div);

  let rounds = document.createElement('div');

  const roundStyle = {
    display : "flex",
    flexDirection : "column",
    fontSize : "12px",
    margin : '0px',
  }

  playArea.appendChild(rounds);
  Object.assign(rounds.style, roundStyle);
  
  function playRock() {
    const winner = playRound("rock", getComputerChoice());
    let currWinner;
    if (winner == 0) {
      currWinner = "Computer Wins";
    }
    if (winner == 1) {
      currWinner = "Player Wins";
    }
    if (winner == -1) {
      currWinner = "It was a Tie";
    }
    let paraTag = document.createElement('p');
    let currText = document.createTextNode(currWinner);
    paraTag.style.margin = '0px';
    rounds.appendChild(paraTag);
    paraTag.appendChild(currText);
  }

  function playPaper() {
    const winner = playRound("paper", getComputerChoice());
    if (winner == 0) {
      alert("Computer Wins");
    }
    if (winner == 1) {
      alert("Player Wins");
    }
    if (winner == -1) {
      alert("It was a Tie");
    }
  }

  function playScissors() {
    const winner = playRound("scissors", getComputerChoice());
    if (winner == 0) {
      alert("Computer Wins");
    }
    if (winner == 1) {
      alert("Player Wins");
    }
    if (winner == -1) {
      alert("It was a Tie");
    }
  }

  rock.onclick = playRock;
  paper.onclick = playPaper;
  scissors.onclick = playScissors;
}
function main() {
  createButtons();
  // evenHandling(btns[0], btns[1], btns[2]);
}

main();
