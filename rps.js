function getComputerChoice() {
  let options = ["rock", "paper", "scissors"]
  let choice = Math.floor(Math.random()*3)
  return options[choice]
}

function playRound(playerSelection, computerSelection) {
  playerSelection = playerSelection.toLowerCase()
  let win = -1;
  if(playerSelection === "rock"){
    if(computerSelection === "rock"){
      console.log("It's a tie, both pick Rock")
      win = -1
    }
    if(computerSelection === "paper"){
      console.log("You Lose! Paper beats Rock")
      win = 0
    }
    if(computerSelection === "scissors"){
      console.log("You Win! Rock beats Scissors")
      win = 1
    }
  }

  if(playerSelection === "paper"){
    if(computerSelection === "rock"){
      console.log("You Win! Paper beats Rock")
      win = 1
    }
    if(computerSelection === "paper"){
      console.log("It's a tie, both pick Paper")
      win = -1
    }
    if(computerSelection === "scissors"){
      console.log("You Lose! Scissors beats Paper")
      win = 0
    }
  }

 if(playerSelection === "scissors"){
    if(computerSelection === "rock"){
      console.log("You Lose! Rock beats Scissors")
      win = 0
    }
    if(computerSelection === "paper"){
      console.log("You Win! Scissors beats Paper")
      win = 1
    }
    if(computerSelection === "scissors"){
      console.log("It's a tie, both pick Scissors")
      win = -1
    }
  }

  return win
}

function game() {
  let round = 1
  let computer = 0
  let player = 0
  while(round <= 5){
    let playerChoice = prompt("Pick your choice [rock, paper, scissors]")
    let currWinner = playRound(playerChoice, getComputerChoice())
    if(currWinner == 0){
      computer += 1
    }
    if(currWinner == 1){
      player += 1
    }
    if(currWinner == -1){
      player += 1
      computer += 1
    }
    round += 1
  }

  if(player > computer){
    console.log(`You Win! with score: ${player}`)
  }
  else if(player < computer){
    console.log(`You Lose! with score: ${player}`)
  }
  else{
    console.log(`It's a Tie! with score: ${player}`)
  }
}

game()
