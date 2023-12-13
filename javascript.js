function getComputerChoice(){
    let random = Math.floor(Math.number() * 3 );
        if (random = 0){
            return 'ROCK';
        } else if (random = 1){
            return 'PAPER';
        } else {
            return "SCISSORS";
        }
}

function playRound(playerSelection, computerSelection){
  if (playerSelection === "ROCK" && computerSelection === "ROCK"){
    return "You TIE!";
  } else if (playerSelection === "ROCK" && computerSelection === "PAPER"){
    return "You LOSE!";
  } else {
    return "You WON!";
  }
}
const playerSelection = "ROCK";
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));