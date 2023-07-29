function getComputerChoice() {
  let options = ["rock", "paper", "scissors"];
  let choice = Math.floor(Math.random() * 3);
  return options[choice];
}

function playRound(playerSelection, computerSelection) {
  playerSelection = playerSelection.toLowerCase();
  let win = -1;
  let winner; 
  if (playerSelection === "rock") {
    if (computerSelection === "rock") {
      winner ="It's a tie, both pick Rock";
      win = -1;
    }
    if (computerSelection === "paper") {
      winner ="You Lose! Paper beats Rock";
      win = 0;
    }
    if (computerSelection === "scissors") {
      winner ="You Win! Rock beats Scissors";
      win = 1;
    }
  }

  if (playerSelection === "paper") {
    if (computerSelection === "rock") {
      winner ="You Win! Paper beats Rock";
      win = 1;
    }
    if (computerSelection === "paper") {
      winner ="It's a tie, both pick Paper";
      win = -1;
    }
    if (computerSelection === "scissors") {
      winner = "You Lose! Scissors beats Paper";
      win = 0;
    }
  }

  if (playerSelection === "scissors") {
    if (computerSelection === "rock") {
      winner = "You Lose! Rock beats Scissors";
      win = 0;
    }
    if (computerSelection === "paper") {
      winner = "You Win! Scissors beats Paper";
      win = 1;
    }
    if (computerSelection === "scissors") {
      winner = "It's a tie, both pick Scissors";
      win = -1;
    }
  }

  return [winner, win];
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
//     winner = `You Win! with score: ${player}`)
//   }
//   else if(player < computer){
//     winner = `You Lose! with score: ${player}`)
//   }
//   else{
//     winner = `It's a Tie! with score: ${player}`)
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
  const play = document.createElement("button");

  rock.innerText = "Play Rock";
  paper.innerText = "Play Paper";
  scissors.innerText = "Play Scissors";
  play.innerText = "Play Again";

  const divRock = document.createElement("div");
  const divPaper = document.createElement("div");
  const divScissor = document.createElement("div");
  const divPlay = document.createElement("div");

  const btns = [rock, paper, scissors, play];
  const divEle = [divRock, divPaper, divScissor, divPlay];

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
    paddingLeft: "0px",
    gap: "12px",
  };

  Object.assign(div.style, btnStyles);

  document.body.appendChild(playArea);

  document.body.appendChild(div);

  let rounds = document.createElement("div");

  const roundStyle = {
    display: "flex",
    flexDirection: "column",
    fontSize: "16px",
    margin: "0px",
    padding: "4px",
  };

  playArea.appendChild(rounds);
  Object.assign(rounds.style, roundStyle);

 
  let roundCount = 0, currPlayerScore = 0, currComputerScore = 0;

  function playRock() {
    const winner = playRound("rock", getComputerChoice()); 
    let end = btnUtil(winner);
    if(end) clearRounds();
  }

  function playPaper() {
    const winner = playRound("paper", getComputerChoice());
    let clear = btnUtil(winner);
    if(clear) clearRounds();
  }

  function playScissors(){
    const winner = playRound("scissors", getComputerChoice());
    let clear = btnUtil(winner);
    if(clear) clearRounds();
  }

  function playAgain(){
    rock.onclick = playRock;
    paper.onclick = playPaper;
    scissors.onclick = playScissors;
    let child = rounds.lastElementChild;
    roundCount = 0;
    currPlayerScore = 0;
    currComputerScore = 0;
    while(child){
      rounds.removeChild(child);
      child = rounds.lastElementChild;
    }
  }

  function btnUtil(winner){
    if(winner[1] == 0){
      currComputerScore += 1;
     }
     if(winner[1] == 1){
      currPlayerScore += 1;
    }
     if(winner[1] == -1){
      currPlayerScore += 1;
      currComputerScore += 1;
     }
     roundCount += 1;
     let paraTag = document.createElement("p");
    let currText = document.createTextNode(`Round ${roundCount}: ${winner[0]}`);
    paraTag.style.margin = "0px";
    rounds.appendChild(paraTag);
    paraTag.appendChild(currText);
    if (roundCount == 5){
      let winParaTag, currWin;
      if(currPlayerScore > currComputerScore){
        winParaTag = document.createElement("p");
        currWin = document.createTextNode(`You Win! with score: ${currPlayerScore}`);
        
      }
      else if(currPlayerScore < currComputerScore){
        winParaTag = document.createElement("p");
        currWin = document.createTextNode(`You Lose! with score: ${currPlayerScore}`);
      }
      else{
        winParaTag = document.createElement("p");
        currWin = document.createTextNode(`It's a Tie! with score: ${currPlayerScore}`);
      }
      winParaTag.style.margin = "0px";
      rounds.appendChild(winParaTag);
      winParaTag.appendChild(currWin);
      return 1;
    }
    return 0;
  }

  rock.onclick = playRock;
  paper.onclick = playPaper;
  scissors.onclick = playScissors;
  play.onclick = playAgain;

  function clearRounds(){
    roundCount = 0, currPlayerScore = 0, currComputerScore = 0;
    rock.onclick = null;
  paper.onclick = null;
  scissors.onclick = null;
  }

  let bodyStyles = {
    display : "flex",
    flexDirection : "column",
    alignItems : "center",
    justifyContent : "center",
  }
  // console.log(document);
  Object.assign(document.body.style, bodyStyles);
}


function main() {
  createButtons();
  // evenHandling(btns[0], btns[1], btns[2]);
}

main();
