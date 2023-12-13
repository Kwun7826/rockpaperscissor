function computerChoice(){
    let random = Math.floor(Math.random() * 3 )
        if (random === 0){
            return 'rock';
        } else if (random === 1){
            return 'paper';
        } else {
            return 'scissors';
        }
    }        

function playerChoice(){
      let input = prompt('Choose rock, paper or scissors');
      while (input == null){
        input = prompt('Choose rock, paper or scissors');
      }
      input = input.toLowerCase();
      return input;
}


function game(){
  for ( i = 1 ; i <=5 ; i++){
    playRound(i);
  }
  document.querySelector('button').textContent = 'Start new game';
  logWins();
}

function playRound(round){
  const playerSelection = playerChoice();
  const computerSelection = computerChoice();
  const winner = checkWinner(playerSelection, computerSelection);
  winners.push(winner);
  logRound(playerSelection, computerSelection, winner, round)
}

function checkWinner(choiceP, choiceC){
 
  if (choiceP === choiceC){
    return 'tie';
  }else if (
    (choiceP === 'rock' && choiceC === 'scissors')||
    (choiceP === 'paper' && choiceC === 'rock')||
    (choiceP === 'scissors' && choiceC === 'paper')
  ){
    return 'you'
  }else{
    return 'computer';
  }
}

const winners = [];
function logWins(){
  let playerWin = winners.filter((item) => item == 'you').length;
  let computerWin = winners.filter((item) => item == 'computer').length;
  let ties = winners.filter((item) => item == 'tie').length;
  console.log('Result:');
  console.log('Player wins: ',playerWin);
  console.log('Computer wins: ', computerWin);
  console.log('Tie: ',ties);
  
}

function logRound(playerChoice, computerChoice, winner, round){
  console.log('Round: ',round);
  console.log('Player Chose: ',playerChoice);
  console.log('Computer Chose: ',computerChoice);
  console.log(winner,'Won the round');
  console.log('____________');

 }
game();













