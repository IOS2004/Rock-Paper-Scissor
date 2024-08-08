
function getComputerChoice()
{
  let a = Math.random();
  a = a * 100;
  if (a <= 33)
    return "rock";
  else if (a <= 66)
    return "scissor";
  else 
    return "paper";
}

let humanScore = 0;
let computerScore = 0;

let output = document.querySelector('.output');
let info = document.createElement('p');
let res = document.createElement('h3');
let score = document.createElement('h2');
output.appendChild(info);
output.appendChild(res);
output.appendChild(score);

function playRound(humanChoice, computerChoice)
{
  info.textContent = "Human choice: " + humanChoice.toUpperCase() + "  " + "Computer choice: " + computerChoice.toUpperCase();
  if (humanChoice == computerChoice)
  {
    return "Tie! " + humanChoice + " ties to " + computerChoice;
  }
  if (humanChoice == "rock")
  {
    if (computerChoice == "paper")
    {
      computerScore = computerScore + 1;
      return "Paper beats rock, Computer wins! ";
    }
    else{
      humanScore++;
      return "Rock beats Scissor, Human wins! ";
    }
  }
  else if (humanChoice == "paper")
  {
    if (computerChoice == "rock")
    {
      humanScore++;
      return "Paper beats rock, Human wins! ";
    }
    else{
      computerScore++;
      return "Scissor beats paper, Computer wins! ";
    }
  }
  else 
  {
    if (computerChoice == "rock")
    {
      computerScore++;
      return "Rock beats Scissor, Computer wins! ";
    }
    else{
      humanScore++;
      return "Scissor beats paper, human wins!"; 
    }
  }
}
score.textContent= "Human score: " + humanScore + ' ' + "Computer score: " + computerScore;

let btns = document.querySelector('.container');
btns.addEventListener('click', function (event) {
  let clink = event.target;
  res.textContent = playRound(clink.id, getComputerChoice());
  score.textContent= "Human score: " + humanScore + ' ' + "Computer score: " + computerScore;
  if (humanScore == 5 || computerScore == 5)
  {
    if (humanScore == 5)
    {
      score.textContent = "Congratulations! YOU WIN";
    }
    else 
    {
      score.textContent = "You Lose! Better luck next time.";
    }
    humanScore = 0;
    computerScore = 0;
  }
})

